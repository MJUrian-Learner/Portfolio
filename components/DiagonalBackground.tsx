"use client";

import React from "react";

interface DiagonalBackgroundProps {
  /** Which corner the diagonal originates from (default: "left"). */
  side?: "left" | "right";
}

const DiagonalBackground = ({ ...props }: DiagonalBackgroundProps) => {
  const isLeft = props.side === "left";

  const clipPath = isLeft
    ? "polygon(0 0, 100% 0, 70% 100%, 0 100%)"
    : "polygon(50% 0, 100% 0, 100% 100%, 20% 100%)";

  const gradientDirection = isLeft ? "bg-gradient-to-tr" : "bg-gradient-to-bl";
  const horizontal = isLeft ? "left-0 " : "right-0 ";

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 dark:bg-background" />
      <div
        className={`absolute top-0 ${horizontal} bottom-0 w-1/3 ${gradientDirection} from-primary to-primary/70 opacity-5`}
        style={{
          clipPath: clipPath,
        }}
      />
    </div>
  );
};

export default DiagonalBackground;
