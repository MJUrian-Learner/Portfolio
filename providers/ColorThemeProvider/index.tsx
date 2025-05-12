import React, { createContext, ReactNode } from "react";

// Define the type for the theme
export type ColorThemeType =
  | "emerald"
  | "crimson"
  | "sapphire"
  | "amber"
  | "mint";

// Create the context with a default value
export const ColorThemeContext = createContext<ColorThemeType>("emerald");

// Provider component
interface ColorThemeProviderProps {
  value: ColorThemeType;
  children: ReactNode;
}

export const ColorThemeProvider: React.FC<ColorThemeProviderProps> = ({
  value,
  children,
}) => {
  return (
    <ColorThemeContext.Provider value={value}>
      {children}
    </ColorThemeContext.Provider>
  );
};
