'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import Toc, { type TocEntry } from './Toc';

/** 가로 이동이 이 값(px)을 넘고 세로보다 크면 스와이프로 본다 */
const SWIPE = 50;

type Props = {
  slides: ReactNode[];
  /** 장마다 속한 섹션 이름 (하단 바와 목차 묶음에 쓴다) */
  labels: string[];
  /** 장마다 목차에 보일 제목 */
  titles: string[];
};

/**
 * 슬라이드 넘기기만 담당한다: 키보드(←/→, PageUp/Down, Space, Home/End),
 * 하단 버튼, 모바일 스와이프. 현재 위치는 URL 해시(#3)에 남겨
 * 새로고침·링크 공유 시에도 같은 장으로 열린다.
 * 하단 바의 "번호 · 섹션"을 누르면 전체 목차가 올라와 원하는 장으로 바로 갈 수 있다.
 */
export default function Deck({ slides, labels, titles }: Props) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const tocButton = useRef<HTMLButtonElement>(null);
  const entries: TocEntry[] = slides.map((_, i) => ({ index: i, section: labels[i], title: titles[i] }));

  const closeToc = useCallback(() => {
    setTocOpen(false);
    tocButton.current?.focus();
  }, []);

  const go = useCallback(
    (to: number) => {
      const next = Math.max(0, Math.min(count - 1, to));
      setIndex(next);
      history.replaceState(null, '', `#${next + 1}`);
    },
    [count],
  );

  // 해시에서 위치 복원 — 첫 진입과 주소창에서 #번호를 바꿨을 때
  useEffect(() => {
    const fromHash = () => {
      const n = parseInt(location.hash.slice(1), 10);
      if (n >= 1 && n <= count) setIndex(n - 1);
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (tocOpen || e.metaKey || e.ctrlKey || e.altKey) return;
      // 버튼·링크 위의 Space/Enter는 그 요소의 동작으로 둔다
      if ((e.key === ' ' || e.key === 'Enter') && (e.target as Element).closest?.('button, a')) return;
      if (['ArrowRight', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        go(index + 1);
      } else if (['ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === 'Home') {
        go(0);
      } else if (e.key === 'End') {
        go(count - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, count, go, tocOpen]);

  return (
    <div
      className="deck"
      onTouchStart={(e) => {
        if (tocOpen) return;
        const t = e.touches[0];
        touch.current = e.touches.length === 1 ? { x: t.clientX, y: t.clientY } : null;
      }}
      onTouchEnd={(e) => {
        const start = touch.current;
        touch.current = null;
        if (!start) return;
        const dx = e.changedTouches[0].clientX - start.x;
        const dy = e.changedTouches[0].clientY - start.y;
        if (Math.abs(dx) > SWIPE && Math.abs(dx) > Math.abs(dy)) go(index + (dx < 0 ? 1 : -1));
      }}
    >
      {slides.map((content, i) => (
        <section
          key={i}
          className="slide"
          hidden={i !== index}
          aria-label={`${i + 1} / ${count} · ${labels[i]}`}
        >
          {content}
        </section>
      ))}

      <nav className="bar" aria-label="슬라이드 이동">
        <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label="이전">
          ←
        </button>
        <button
          type="button"
          ref={tocButton}
          className="bar-label"
          aria-expanded={tocOpen}
          aria-controls="toc"
          aria-label={`${index + 1} / ${count} · ${labels[index]} — 전체 목차 열기`}
          onClick={() => (tocOpen ? closeToc() : setTocOpen(true))}
        >
          <span className="bar-count">
            {index + 1} / {count}
          </span>
          <span className="bar-section">{labels[index]}</span>
          <span className="bar-caret" aria-hidden="true">
            {tocOpen ? '▾' : '▴'}
          </span>
        </button>
        <button type="button" onClick={() => go(index + 1)} disabled={index === count - 1} aria-label="다음">
          →
        </button>
        <span className="bar-progress" style={{ width: `${((index + 1) / count) * 100}%` }} />
      </nav>

      {tocOpen && (
        <Toc
          id="toc"
          entries={entries}
          current={index}
          onSelect={(i) => {
            go(i);
            closeToc();
          }}
          onClose={closeToc}
        />
      )}
    </div>
  );
}
