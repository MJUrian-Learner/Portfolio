"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ActiveSectionProvider } from "@/providers/ActiveSectionProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

import { ReactNode, useEffect } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    if (typeof window === undefined) return;

    const root = window.document.documentElement;
    const colorKey = localStorage.getItem("colorKey") || "emerald";

    root.setAttribute("data-theme", colorKey);
    localStorage.setItem("colorKey", colorKey);
  }, []);

  return (
    <>
      <ThemeProvider>
        <ActiveSectionProvider>
          <Navigation />
          {children}
          <Footer />
        </ActiveSectionProvider>
      </ThemeProvider>
    </>
  );
};

export default RootLayout;
