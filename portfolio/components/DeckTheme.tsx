'use client';

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

type DeckThemeValue = {
  /** true = dark palette, false = light palette (matches .deck.theme-dark) */
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

const DeckThemeContext = createContext<DeckThemeValue | null>(null);

/**
 * Holds the deck's light/dark theme so both the in-deck toggle (SlideDeck)
 * and the global floating Dock can share it. Lives above both in the layout.
 */
export function DeckThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  return (
    <DeckThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </DeckThemeContext.Provider>
  );
}

export function useDeckTheme() {
  const ctx = useContext(DeckThemeContext);
  if (!ctx) {
    throw new Error('useDeckTheme must be used within a DeckThemeProvider');
  }
  return ctx;
}
