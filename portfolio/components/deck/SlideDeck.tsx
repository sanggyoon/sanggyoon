'use client';

import { useEffect, type ReactNode } from 'react';
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

/**
 * Client-side slide viewer ported from PPT/portfolio-slides.html.
 * The current index, slide count and navigation live in the shared
 * DeckNav context so the global floating Dock can drive the slides;
 * the deck keeps its own light/dark theme (via .theme-dark).
 */
export default function SlideDeck({ slides, labels, variants, fit }: SlideDeckProps) {
  const { dark } = useDeckTheme();
  const { index: i, go, step, setTotal } = useDeckNav();
  const count = slides.length;

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

  return (
    <div className={`deck${dark ? ' theme-dark' : ''}${fit ? ' deck-fit' : ''}`}>
      <main className="stage" key={i}>
        {slides.map((content, k) => (
          <section
            key={k}
            className={`slide${k === i ? ' active' : ''}${variants?.[k] ? ` ${variants[k]}` : ''}`}
            aria-label={labels?.[k] ?? `슬라이드 ${k + 1}`}
            aria-hidden={k === i ? undefined : true}
          >
            {content}
          </section>
        ))}
      </main>
    </div>
  );
}
