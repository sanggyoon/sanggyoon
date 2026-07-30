'use client';

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from 'react';

type DeckNavValue = {
  /** current slide index (0-based) */
  index: number;
  /** number of slides in the active deck (0 when no deck is mounted) */
  total: number;
  /** jump to an absolute slide index (clamped) */
  go: (n: number) => void;
  /** move by a relative delta (clamped) */
  step: (delta: number) => void;
  /** register the active deck's slide count; resets the index to 0 */
  setTotal: (n: number) => void;
};

const DeckNavContext = createContext<DeckNavValue | null>(null);

/**
 * Holds the active deck's slide position so the in-page SlideDeck and the
 * global floating Dock can drive the same slides. Lives above both in the
 * layout, alongside DeckThemeProvider.
 */
export function DeckNavProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);
  const [total, setTotalState] = useState(0);
  const totalRef = useRef(0);

  const go = useCallback((n: number) => {
    setIndex(Math.max(0, Math.min(totalRef.current - 1, n)));
  }, []);

  const step = useCallback((delta: number) => {
    setIndex((prev) => Math.max(0, Math.min(totalRef.current - 1, prev + delta)));
  }, []);

  const setTotal = useCallback((n: number) => {
    totalRef.current = n;
    setTotalState(n);
    setIndex(0);
  }, []);

  return (
    <DeckNavContext.Provider value={{ index, total, go, step, setTotal }}>
      {children}
    </DeckNavContext.Provider>
  );
}

export function useDeckNav() {
  const ctx = useContext(DeckNavContext);
  if (!ctx) {
    throw new Error('useDeckNav must be used within a DeckNavProvider');
  }
  return ctx;
}
