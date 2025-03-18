"use client";

import { cn } from "@/lib/utils";

export function Button({ className, children, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
