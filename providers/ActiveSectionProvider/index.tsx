"use client";

import React, { createContext, useState, ReactNode } from "react";

export type SectionId =
  | "hero"
  | "about"
  | "creds"
  | "skills"
  | "projects"
  | "blog"
  | "contact";

interface ActiveSectionContextValue {
  activeSection: SectionId;
  setActiveSection: (id: SectionId) => void;
}

export const ActiveSectionContext = createContext<
  ActiveSectionContextValue | undefined
>(undefined);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  const value: ActiveSectionContextValue = { activeSection, setActiveSection };

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
