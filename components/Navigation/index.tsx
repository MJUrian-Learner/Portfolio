"use client";

import React from "react";
import { motion } from "motion/react";
import { COLOR_THEMES, NAVIGATION_MENU } from "@/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Palette } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { SectionId } from "@/providers/ActiveSectionProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navigation = () => {
  const { activeSection, setActiveSection } = useActiveSection();

  const handleColorKey = (colorKey: string) => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", colorKey);
  };

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
                className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary `}
              >
                MJ<span className="text-white">Portfolio</span>
              </Link>
              <nav className="hidden sm:flex items-center space-x-1 pb-1 max-w-[500px] md:max-w-none">
                {NAVIGATION_MENU.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    className="transition-all"
                  >
                    <Link href={`#${item.id as SectionId}`}>
                      <Button
                        className={`px-4 py-2 rounded-lg text-sm font-medium  ${
                          activeSection === item.id
                            ? `bg-zinc-800/80 text-primary`
                            : "text-zinc-300"
                        }`}
                        variant="ghost"
                        onClick={() =>
                          setActiveSection(`${item.id as SectionId}`)
                        }
                      >
                        {item.label}
                      </Button>
                    </Link>
                  </motion.div>
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
                          handleColorKey(key as keyof typeof COLOR_THEMES)
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
