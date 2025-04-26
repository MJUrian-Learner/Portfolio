"use client";

import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ThemeProvider>
        <Navigation />
        {children}
      </ThemeProvider>
    </>
  );
};

export default RootLayout;
