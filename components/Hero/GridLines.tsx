import React from "react";

const GridLines = () => {
  return (
    <div className="absolute inset-0 z-0 bg-opacity-95">
      <div className="absolute inset-0 opacity-5">
        <div className="h-px w-full bg-zinc-800 dark:bg-zinc-400 absolute top-1/4" />
        <div className="h-px w-full bg-zinc-800 dark:bg-zinc-400 absolute top-2/4" />
        <div className="h-px w-full bg-zinc-800 dark:bg-zinc-400 absolute top-3/4" />
        <div className="w-px h-full bg-zinc-800 dark:bg-zinc-400 absolute left-1/4" />
        <div className="w-px h-full bg-zinc-800 dark:bg-zinc-400 absolute left-2/4" />
        <div className="w-px h-full bg-zinc-800 dark:bg-zinc-400 absolute left-3/4" />
      </div>
    </div>
  );
};

export default GridLines;
