"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type Props = { text: string; speedMs?: number; className?: string };

export function TypedLine({ text, speedMs = 28, className }: Props) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? text : "");

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speedMs);
    return () => clearInterval(id);
  }, [text, speedMs, reduce]);

  return (
    <span className={className}>
      {shown}
      {!reduce && shown.length < text.length ? (
        <span
          aria-hidden
          className="ml-0.5 inline-block w-2 h-4 align-middle bg-mk-green animate-pulse"
        />
      ) : null}
    </span>
  );
}
