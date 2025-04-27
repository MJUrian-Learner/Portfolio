"use client";

import { useTheme } from "@/hooks/useTheme";
import React from "react";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="relative py-8 border-t border-zinc-800">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${theme.highlight} animate-pulse`}
          />
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} MJ Portfolio
          </p>
        </div>

        <p className="text-xs text-zinc-500 text-center md:text-right">
          Designed & Built with <span className={theme.accent}>♥</span> by MJ
          <br />
          <span className="text-zinc-600">
            Using React, Next.js, Tailwind CSS & Framer Motion
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
