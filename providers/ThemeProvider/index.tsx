"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";
import { COLOR_THEMES } from "@/constants";

type ColorKey = keyof typeof COLOR_THEMES;

interface ThemeContextValue {
  colorKey: ColorKey;
  setColorKey: (k: ColorKey) => void;
  theme: (typeof COLOR_THEMES)[ColorKey];
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Try to restore the previous choice from localStorage
  const [colorKey, setColorKey] = useState<ColorKey>("emerald");

  useEffect(() => {
    if (typeof window === undefined) return;
    const stored = localStorage.getItem("colorKey");

    setColorKey(stored ? (stored as ColorKey) : "emerald");
  }, []);

  // Persist every change
  useEffect(() => localStorage.setItem("colorKey", colorKey), [colorKey]);

  const value: ThemeContextValue = {
    colorKey,
    setColorKey,
    theme: COLOR_THEMES[colorKey],
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
