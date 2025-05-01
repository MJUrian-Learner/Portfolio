"use client";

import { ReactNode } from "react";

const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-foreground inline-block relative">
        {children}
        <span
          className={`absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-primary/70 rounded-full`}
        />
      </h2>
    </div>
  );
};

export default SectionHeading;
