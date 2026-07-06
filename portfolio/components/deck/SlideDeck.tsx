'use client';

import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { useDeckTheme } from '@/components/DeckTheme';
import '@/styles/deck.css';

type SlideDeckProps = {
  /** each slide's inner content; the wrapping <section> is added here */
  slides: ReactNode[];
  /** accessible labels per slide (optional, falls back to index) */
  labels?: string[];
  /** extra class on the slide <section> per slide (e.g. "cover", "closing") */
  variants?: string[];
};

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Client-side slide viewer ported from PPT/portfolio-slides.html.
 * Owns the current index, keyboard navigation, and an independent
 * light/dark theme toggle scoped to the deck (via .theme-dark).
 */
export default function SlideDeck({ slides, labels, variants }: SlideDeckProps) {
  const [i, setI] = useState(0);
  const { dark, setDark } = useDeckTheme();
  const total = slides.length;

  const go = useCallback(
    (n: number) => setI((prev) => Math.max(0, Math.min(total - 1, n))),
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowRight', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        setI((prev) => Math.min(total - 1, prev + 1));
      } else if (['ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        setI((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'Home') {
        setI(0);
      } else if (e.key === 'End') {
        setI(total - 1);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [total]);

  const progress = total > 1 ? (i / (total - 1)) * 100 : 100;

  return (
    <div className={`deck${dark ? ' theme-dark' : ''}`}>
      <nav className="chrome" aria-label="슬라이드 이동">
        <button
          className="themebtn"
          title="테마 전환"
          onClick={() => setDark((d) => !d)}
        >
          ◐ Theme
        </button>
        <button
          className="navbtn"
          aria-label="이전 슬라이드"
          onClick={() => go(i - 1)}
          disabled={i === 0}
        >
          ‹
        </button>
        <div className="progress">
          <span style={{ width: `${progress}%` }} />
        </div>
        <span className="counter">
          {pad(i + 1)} / {pad(total)}
        </span>
        <div className="dots">
          {slides.map((_, k) => (
            <button
              key={k}
              className={`dot${k === i ? ' on' : ''}`}
              aria-label={`${k + 1}번 슬라이드`}
              onClick={() => go(k)}
            />
          ))}
        </div>
        <button
          className="navbtn"
          aria-label="다음 슬라이드"
          onClick={() => go(i + 1)}
          disabled={i === total - 1}
        >
          ›
        </button>
        <span className="hint">← → 이동</span>
      </nav>

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
