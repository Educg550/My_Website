"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export type CodeToken = { text: string; className?: string };

type Props = { tokens: CodeToken[]; speedMs?: number };

export function TypedCode({ tokens, speedMs = 15 }: Props) {
  const reduce = useReducedMotion();
  const total = tokens.reduce((sum, t) => sum + t.text.length, 0);
  const [shown, setShown] = useState(reduce ? total : 0);

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= total) clearInterval(id);
    }, speedMs);
    return () => clearInterval(id);
  }, [total, speedMs, reduce]);

  let remaining = shown;
  return (
    <>
      {tokens.map((token, idx) => {
        const len = Math.min(token.text.length, remaining);
        remaining -= len;
        if (len === 0) return null;
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: tokens are static and never reorder
          <span key={idx} className={token.className}>
            {token.text.slice(0, len)}
          </span>
        );
      })}
      {!reduce && shown < total && (
        <span aria-hidden className="inline-block w-2 h-4 align-middle bg-mk-green animate-pulse" />
      )}
    </>
  );
}
