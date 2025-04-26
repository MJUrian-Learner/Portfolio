"use client";

import React from "react";
import { motion } from "motion/react";
import { COLOR_THEMES, NAVIGATION_MENU } from "@/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Palette } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useActiveSection } from "@/hooks/useActiveSection";

const Navigation = () => {
  const { theme, setColorKey } = useTheme();
  const { active } = useActiveSection();

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="container px-4 mx-auto">
        <div className="relative">
          <motion.div
            className="absolute top-6 left-0 right-0 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-xl shadow-xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between h-16 px-6">
              <Link
                href="#hero"
                className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${theme.primary}`}
              >
                MJ<span className="text-zinc-200">Portfolio</span>
              </Link>
              <nav className="hidden sm:flex items-center space-x-1 pb-1 max-w-[500px] md:max-w-none">
                {NAVIGATION_MENU.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    className="transition-all"
                  >
                    <Button
                      className={`px-4 py-2 rounded-lg text-sm font-medium  ${
                        active === item.id
                          ? `bg-zinc-800/80 ${theme.accent}`
                          : "text-zinc-400"
                      }`}
                      variant="ghost"
                    >
                      {item.label}
                    </Button>
                  </motion.button>
                ))}
              </nav>
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
                        onClick={() =>
                          setColorKey(key as keyof typeof COLOR_THEMES)
                        }
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <div
                          className={`w-4 h-4 rounded-full ${value.highlight}`}
                        />
                        <span>{value.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
