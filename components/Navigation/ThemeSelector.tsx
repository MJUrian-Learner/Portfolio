import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Palette } from "lucide-react";
import { Button } from "../ui/button";

type ColorKey = "emerald" | "crimson" | "sapphire" | "amber" | "mint";

const THEMES: Record<ColorKey, { name: string; color: string }> = {
  emerald: { name: "Emerald", color: "bg-primary" },
  crimson: { name: "Crimson", color: "bg-rose-500" },
  sapphire: { name: "Sapphire", color: "bg-blue-500" },
  amber: { name: "Amber", color: "bg-amber-500" },
  mint: { name: "Mint", color: "bg-green-400" },
} as const;

const COLOR_KEYS = Object.keys(THEMES) as ColorKey[];

const ThemeSelector = () => {
  const handleColorKey = (colorKey: ColorKey) => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", colorKey);

    localStorage.setItem("colorKey", colorKey);
  };

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40 rounded-lg"
          >
            <Palette size={18} />
            <span className="sr-only">Change theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-zinc-900 border border-zinc-800 rounded-lg"
        >
          {COLOR_KEYS.map((key) => {
            const { name, color } = THEMES[key];
            return (
              <DropdownMenuItem
                key={key}
                onClick={() => handleColorKey(key)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <span
                  className={`inline-block w-4 h-4 rounded-full ${color}`}
                />
                <span>{name}</span>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeSelector;
