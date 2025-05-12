import { Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { HTMLAttributes, useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type ColorKey = "emerald" | "crimson" | "sapphire" | "amber" | "mint";

interface ThemeSelectorProps extends HTMLAttributes<HTMLDivElement> {
  theme: ColorKey;
  onThemeChange: (theme: ColorKey) => void;
}

const THEMES: Record<ColorKey, { name: string; color: string }> = {
  emerald: { name: "Emerald", color: "bg-emerald-500" },
  crimson: { name: "Crimson", color: "bg-rose-500" },
  sapphire: { name: "Sapphire", color: "bg-blue-500" },
  amber: { name: "Amber", color: "bg-amber-500" },
  mint: { name: "Mint", color: "bg-green-400" },
} as const;

const COLOR_KEYS = Object.keys(THEMES) as ColorKey[];

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  theme,
  onThemeChange,
  className = "",
  ...props
}) => {
  const { theme: currentTheme, setTheme } = useTheme();
  const [themeMenuOpen, setThemeMenuOpen] = useState<boolean>(false);
  const [colorMenuOpen, setColorMenuOpen] = useState<boolean>(false);

  const handleThemeMenuOpen = () => {
    setThemeMenuOpen(!themeMenuOpen);
    setColorMenuOpen(false);
  };

  const handleColorMenuOpen = () => {
    setColorMenuOpen(!colorMenuOpen);
    setThemeMenuOpen(false);
  };

  const handleColorKey = (colorKey: ColorKey) => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", colorKey);
    onThemeChange(colorKey);
  };

  return (
    <div className={`flex items-center ${className}`} {...props}>
      <DropdownMenu open={themeMenuOpen} onOpenChange={handleThemeMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="dark:text-foreground dark:hover:text-foreground hover:bg-foreground/10 rounded-lg"
          >
            <Sun
              size={18}
              className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 "
            />
            <Moon
              size={18}
              className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            className={currentTheme === "light" ? "font-bold text-primary" : ""}
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            className={currentTheme === "dark" ? "font-bold text-primary" : ""}
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("system")}
            className={
              currentTheme === "system" ? "font-bold text-primary" : ""
            }
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu open={colorMenuOpen} onOpenChange={handleColorMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="dark:text-foreground dark:hover:text-foreground hover:bg-foreground/10 rounded-lg"
          >
            <Palette size={18} />
            <span className="sr-only">Change theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {COLOR_KEYS.map((key) => {
            const { name, color } = THEMES[key];
            return (
              <DropdownMenuItem
                key={key}
                onClick={() => handleColorKey(key)}
                className={`flex items-center gap-2 cursor-pointer ${
                  theme === key ? "font-bold text-primary" : ""
                }`}
              >
                <span
                  className={`inline-block w-4 h-4 rounded-full ${color}`}
                />
                <span>{name}</span>
                {theme === key && <span className="ml-2">✓</span>}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeSelector;
