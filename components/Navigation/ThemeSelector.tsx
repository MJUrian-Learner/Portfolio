import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Palette } from "lucide-react";
import { Button } from "../ui/button";
import { COLOR_THEMES } from "@/constants";

const ThemeSelector = () => {
  const handleColorKey = (colorKey: string) => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", colorKey);
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
          {Object.entries(COLOR_THEMES).map(([key, value]) => (
            <DropdownMenuItem
              key={key}
              onClick={() => handleColorKey(key as keyof typeof COLOR_THEMES)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className={`w-4 h-4 rounded-full ${value.highlight}`} />
              <span>{value.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeSelector;
