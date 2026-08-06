'use client';

import { useEffect, useRef, useState, type ReactNode, type TouchEvent } from 'react';
import { useDeckTheme } from '@/components/DeckTheme';
import { useDeckNav } from '@/components/DeckNav';
import '@/styles/deck.css';

type SlideDeckProps = {
  /** each slide's inner content; the wrapping <section> is added here */
  slides: ReactNode[];
  /** accessible labels per slide (optional, falls back to index) */
  labels?: string[];
  /** extra class on the slide <section> per slide (e.g. "cover", "closing") */
  variants?: string[];
  /** constrain each slide to one screen on desktop (no scroll); mobile still scrolls */
  fit?: boolean;
};

/** horizontal travel (px) that commits a slide change */
const SWIPE_COMMIT = 56;
/** how far the slide is allowed to follow the finger */
const DRAG_MAX = 110;
/** movement (px) before the gesture locks to one axis */
const AXIS_LOCK = 10;
/** spring-back when a swipe is released without committing */
const SETTLE = 'translate .28s cubic-bezier(.22,.61,.36,1)';

type Gesture = {
  x: number;
  y: number;
  axis: 'undecided' | 'x' | 'y';
  /** the touch started inside something that scrolls sideways on its own */
  ignored: boolean;
};

/**
 * True when the touch started inside a descendant that can still scroll
 * horizontally (e.g. a wide `.diagram`) — that element owns the gesture,
 * so the deck must not steal it.
 */
function startedInSideScroller(target: EventTarget | null, root: HTMLElement | null) {
  let el = target instanceof Element ? target : null;
  while (el && el !== root) {
    if (el.scrollWidth - el.clientWidth > 2) {
      const overflowX = getComputedStyle(el).overflowX;
      if (overflowX === 'auto' || overflowX === 'scroll') return true;
    }
    el = el.parentElement;
  }
  return false;
}

/**
 * Client-side slide viewer ported from PPT/portfolio-slides.html.
 * The current index, slide count and navigation live in the shared
 * DeckNav context so the global floating Dock can drive the slides;
 * the deck keeps its own light/dark theme (via .theme-dark).
 *
 * Desktop drives slides with the keyboard and the Dock arrows; touch
 * devices swipe the stage sideways instead (the Dock hides its arrows
 * below the `sm` breakpoint). The finger offset is written straight to
 * the DOM rather than through state — a slide can hold a lot of markup
 * and re-rendering it on every touchmove drops frames.
 */
export default function SlideDeck({ slides, labels, variants, fit }: SlideDeckProps) {
  const { dark } = useDeckTheme();
  const { index: i, go, step, setTotal } = useDeckNav();
  const count = slides.length;

  const stageRef = useRef<HTMLElement>(null);
  const activeRef = useRef<HTMLElement>(null);
  const gesture = useRef<Gesture | null>(null);
  /** the swipe hint retires for good once the user swipes */
  const [hintDone, setHintDone] = useState(false);

  // Publish this deck's slide count to the shared nav (and reset the index);
  // clear it on unmount so the Dock hides its slide controls off-deck.
  useEffect(() => {
    setTotal(count);
    return () => setTotal(0);
  }, [count, setTotal]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowRight', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        step(1);
      } else if (['ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        step(-1);
      } else if (e.key === 'Home') {
        go(0);
      } else if (e.key === 'End') {
        go(count - 1);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [step, go, count]);

  /**
   * `translate` (not `transform`) so the deckfade keyframes — which run with
   * `fill: both` and would otherwise pin transform back to none — can't
   * clobber the finger offset. The two properties compose.
   */
  const setOffset = (px: number, settle: boolean) => {
    const el = activeRef.current;
    if (!el) return;
    el.style.transition = settle ? SETTLE : 'none';
    el.style.translate = `${px}px`;
  };

  const onTouchStart = (e: TouchEvent<HTMLElement>) => {
    // more than one finger is a pinch/zoom, not a swipe
    if (count < 2 || e.touches.length !== 1) {
      gesture.current = null;
      return;
    }
    const t = e.touches[0];
    gesture.current = {
      x: t.clientX,
      y: t.clientY,
      axis: 'undecided',
      ignored: startedInSideScroller(e.target, stageRef.current),
    };
  };

  const onTouchMove = (e: TouchEvent<HTMLElement>) => {
    const g = gesture.current;
    if (!g || g.ignored || e.touches.length !== 1) return;

    const dx = e.touches[0].clientX - g.x;
    const dy = e.touches[0].clientY - g.y;

    if (g.axis === 'undecided') {
      if (Math.abs(dx) < AXIS_LOCK && Math.abs(dy) < AXIS_LOCK) return;
      // vertical wins ties so scrolling a long slide always stays possible
      g.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
    }
    if (g.axis !== 'x') return;

    // rubber-band at the two ends so the deck feels bounded, not broken
    const atEdge = (dx > 0 && i === 0) || (dx < 0 && i === count - 1);
    const pulled = atEdge ? dx * 0.25 : dx;
    setOffset(Math.max(-DRAG_MAX, Math.min(DRAG_MAX, pulled)), false);
  };

  const onTouchEnd = (e: TouchEvent<HTMLElement>) => {
    const g = gesture.current;
    gesture.current = null;
    if (!g || g.ignored || g.axis !== 'x') return;

    const dx = e.changedTouches[0].clientX - g.x;
    const to = i + (dx < 0 ? 1 : -1);
    // a swipe off either end has nowhere to go: it must spring back, since
    // only a real index change remounts the stage and clears the offset
    if (Math.abs(dx) >= SWIPE_COMMIT && to >= 0 && to < count) {
      setHintDone(true);
      go(to);
    } else {
      setOffset(0, true);
    }
  };

  const onTouchCancel = () => {
    if (gesture.current?.axis === 'x') setOffset(0, true);
    gesture.current = null;
  };

  return (
    <div className={`deck${dark ? ' theme-dark' : ''}${fit ? ' deck-fit' : ''}`}>
      <main
        className="stage"
        key={i}
        ref={stageRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchCancel}
      >
        {slides.map((content, k) => (
          <section
            key={k}
            ref={k === i ? activeRef : undefined}
            className={`slide${k === i ? ' active' : ''}${variants?.[k] ? ` ${variants[k]}` : ''}`}
            aria-label={labels?.[k] ?? `슬라이드 ${k + 1}`}
            aria-hidden={k === i ? undefined : true}
          >
            {content}
          </section>
        ))}
      </main>

      {count > 1 && !hintDone && i === 0 && (
        <p className="swipe-hint" aria-hidden="true">
          좌우로 밀어서 넘기기
        </p>
      )}
    </div>
  );
}
