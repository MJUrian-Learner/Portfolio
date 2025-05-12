import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Palette } from "lucide-react";
import { Button } from "../ui/button";
import { DarkModeToggle } from "../DarkModeToggle";
import { HTMLAttributes } from "react";

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
  const handleColorKey = (colorKey: ColorKey) => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", colorKey);
    onThemeChange(colorKey);
  };

  return (
    <div className={`flex items-center ${className}`} {...props}>
      <DarkModeToggle />
      <DropdownMenu modal={false}>
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
