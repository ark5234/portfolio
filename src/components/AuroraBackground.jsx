import React from "react";

export const AuroraBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none transition-colors duration-300 aurora-layer"
    >
      <div
        className="aurora-blob aurora-blob-one motion-reduce:animate-none absolute -top-[16%] -left-[8%] w-[58vw] h-[58vw] rounded-full bg-fuchsia-300/18 blur-[72px] dark:bg-fuchsia-600/10"
      />

      <div
        className="aurora-blob aurora-blob-two motion-reduce:animate-none absolute -bottom-[16%] -right-[8%] w-[56vw] h-[56vw] rounded-full bg-cyan-300/18 blur-[72px] dark:bg-cyan-600/10"
      />

      <div
        className="aurora-blob aurora-blob-three motion-reduce:animate-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44vw] h-[44vw] rounded-full bg-indigo-300/14 blur-[76px] dark:bg-indigo-600/8 hidden sm:block"
      />
    </div>
  );
};
