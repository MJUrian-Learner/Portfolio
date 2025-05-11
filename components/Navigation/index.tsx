"use client";

import { Button } from "@/components/ui/button";
import { NAVIGATION_MENU } from "@/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { SectionId } from "@/providers/ActiveSectionProvider";
import { motion } from "motion/react";
import Link from "next/link";
import ThemeSelector from "./ThemeSelector";
import PortfolioLogo from "./PortfolioLogo";
import { ThemeProvider, ThemeType } from "./ThemeContext";
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const { activeSection, setActiveSection } = useActiveSection();
  const [theme, setTheme] = useState<ThemeType>("emerald");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("colorKey");
    if (
      stored &&
      ["emerald", "crimson", "sapphire", "amber", "mint"].includes(stored)
    )
      setTheme(stored as ThemeType);
  }, []);

  const handleThemeChange = (newTheme: ThemeType) => {
    setTheme(newTheme);
    localStorage.setItem("colorKey", newTheme);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="container px-4 mx-auto">
        <div className="relative">
          <motion.div
            className="absolute top-6 left-0 right-0 dark:bg-zinc-900/40 backdrop-blur-xl border dark:border-zinc-800/50 rounded-xl shadow-xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between h-16 px-6 text-xl font-bold">
              <Link href="#hero" className="flex items-center">
                <span>
                  <ThemeProvider value={theme}>
                    <PortfolioLogo className="w-12 h-12" />
                  </ThemeProvider>
                </span>
                <span className="-ml-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Portfolio
                </span>
              </Link>
              {/* Desktop Menu */}
              <nav className="hidden lg:flex items-center space-x-1 pb-1 max-w-[500px] md:max-w-none">
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
                            ? `bg-primary/10 dark:bg-zinc-800/80 text-primary`
                            : "text-foreground"
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
              <ThemeSelector
                className="hidden lg:block gap-2"
                theme={theme}
                onThemeChange={handleThemeChange}
              />
              {/* Mobile Menu */}
              <Drawer
                modal={false}
                direction="right"
                open={isOpen}
                onOpenChange={setIsOpen}
              >
                <DrawerTrigger
                  aria-label="Open menu"
                  onClick={() => setIsOpen(true)}
                  className="lg:hidden"
                >
                  <Menu />
                </DrawerTrigger>
                <DrawerContent className="lg:hidden flex flex-col p-0">
                  <DrawerHeader className="flex items-end justify-between p-4">
                    <DrawerTitle hidden>Menu</DrawerTitle>
                    <DrawerClose asChild>
                      <Button variant="ghost" size="icon">
                        <X />
                      </Button>
                    </DrawerClose>
                  </DrawerHeader>
                  <nav className="flex flex-col space-y-2 px-4 pb-4">
                    {NAVIGATION_MENU.map((item) => (
                      <Link
                        key={item.id}
                        href={`#${item.id as SectionId}`}
                        onClick={() => {
                          setActiveSection(`${item.id as SectionId}`);
                          setIsOpen(false);
                        }}
                      >
                        <Button
                          className={`w-full justify-start px-4 py-3 rounded-lg text-base font-medium ${
                            activeSection === item.id
                              ? `bg-primary/10 dark:bg-zinc-800/80 text-primary`
                              : "text-foreground"
                          }`}
                          variant="ghost"
                          asChild
                        >
                          <span>{item.label}</span>
                        </Button>
                      </Link>
                    ))}
                  </nav>
                  <div className="px-8 pb-4">
                    <h3>Theme Selector</h3>
                    <ThemeSelector
                      className="flex justify-start gap-0"
                      theme={theme}
                      onThemeChange={handleThemeChange}
                    />
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
