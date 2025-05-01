"use client";

import { Button } from "@/components/ui/button";
import { NAVIGATION_MENU } from "@/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { SectionId } from "@/providers/ActiveSectionProvider";
import { motion } from "motion/react";
import Link from "next/link";
import ThemeSelector from "./ThemeSelector";

const Navigation = () => {
  const { activeSection, setActiveSection } = useActiveSection();

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
            <div className="flex items-center justify-between h-16 px-6">
              <Link
                href="#hero"
                className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary `}
              >
                MJ<span className="text-foreground">Portfolio</span>
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
              <ThemeSelector />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
