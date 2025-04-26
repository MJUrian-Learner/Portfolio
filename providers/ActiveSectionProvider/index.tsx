"use client";

import React, { createContext, useState, ReactNode } from "react";

type SectionId =
  | "hero"
  | "about"
  | "creds"
  | "skills"
  | "projects"
  | "blog"
  | "contact";

interface ActiveSectionContextValue {
  active: SectionId;
  setActive: (id: SectionId) => void;
}

export const ActiveSectionContext = createContext<
  ActiveSectionContextValue | undefined
>(undefined);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<SectionId>("hero");

  const value: ActiveSectionContextValue = { active, setActive };

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
