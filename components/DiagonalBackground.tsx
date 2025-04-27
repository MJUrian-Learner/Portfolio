"use client";

import { useTheme } from "@/hooks/useTheme";
import React from "react";

const DiagonalBackground = ({ clip }: { clip: string }) => {
  const { theme } = useTheme();
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-zinc-900/30" />
      <div
        className={`absolute top-0 left-0 bottom-0 w-1/3 bg-gradient-to-tr ${theme.primary} opacity-5`}
        style={{
          clipPath: clip,
        }}
      />
    </div>
  );
};

export default DiagonalBackground;
