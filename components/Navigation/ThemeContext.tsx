import React, { createContext, ReactNode } from "react";

// Define the type for the theme
export type ThemeType = "emerald" | "crimson" | "sapphire" | "amber" | "mint";

// Create the context with a default value
export const ThemeContext = createContext<ThemeType>("emerald");

// Provider component
interface ThemeProviderProps {
  value: ThemeType;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  value,
  children,
}) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
