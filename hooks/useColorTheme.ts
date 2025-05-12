import { ColorThemeContext } from "@/providers/ColorThemeProvider";
import { useContext } from "react";

export function useColorTheme() {
  const ctx = useContext(ColorThemeContext);
  if (!ctx)
    throw new Error("useActiveSection must be inside ActiveSectionProvider");
  return ctx;
}
