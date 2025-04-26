"use client";

import Navigation from "@/components/Navigation";
import { ActiveSectionProvider } from "@/providers/ActiveSectionProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ThemeProvider>
        <ActiveSectionProvider>
          <Navigation />
          {children}
        </ActiveSectionProvider>
      </ThemeProvider>
    </>
  );
};

export default RootLayout;
