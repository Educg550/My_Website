"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Language = { name: string; count: number };
type Props = { languages: Language[] };

const CX = 160;
const CY = 160;
const R = 130;
const ACCENTS = ["#66d9ef", "#a6e22e", "#e6db74", "#ae81ff", "#fd971f"];
const GRID_FRACTIONS = [0.25, 0.5, 0.75, 1.0];

function toXY(cx: number, cy: number, r: number, angle: number): [number, number] {
  return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
}

function polyStr(pts: [number, number][]): string {
  return pts.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(" ");
}

export function LanguageRadar({ languages }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(reduce ? 1 : 0);

  useEffect(() => {
    if (reduce || !inView) return;
    const ctrl = animate(0, 1, {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
      onUpdate: setProgress,
    });
    return () => ctrl.stop();
  }, [inView, reduce]);

  const n = languages.length;
  if (n === 0) return null;

  const max = Math.max(...languages.map((l) => l.count), 1);
  const angles = Array.from({ length: n }, (_, i) => -Math.PI / 2 + (2 * Math.PI * i) / n);

  const outerPts = angles.map((a) => toXY(CX, CY, R, a));
  const labelPts = angles.map((a) => toXY(CX, CY, R * 1.25, a));
  const dataPts = languages.map((l, i) => toXY(CX, CY, R * (l.count / max) * progress, angles[i]));

  return (
    <div className="w-full">
      <svg
        ref={ref}
        viewBox="-120 -20 560 355"
        width="100%"
        role="img"
        aria-label="Radar chart: top programming languages"
      >
        <title>Top programming languages radar chart</title>
        <desc>{languages.map((l) => `${l.name}: ${l.count}`).join(", ")}</desc>

        {GRID_FRACTIONS.map((f) => (
          <polygon
            key={f}
            points={polyStr(angles.map((a) => toXY(CX, CY, R * f, a)))}
            fill="none"
            stroke="#3e3d32"
            strokeWidth="1"
          />
        ))}

        {outerPts.map(([x, y], i) => (
          <line
            key={languages[i].name}
            x1={CX}
            y1={CY}
            x2={x}
            y2={y}
            stroke="#3e3d32"
            strokeWidth="1"
          />
        ))}

        <polygon
          points={polyStr(dataPts)}
          fill="#66d9ef"
          fillOpacity={0.15}
          stroke="#66d9ef"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {dataPts.map(([x, y], i) => (
          <circle key={languages[i].name} cx={x} cy={y} r={3} fill={ACCENTS[i % ACCENTS.length]} />
        ))}

        {labelPts.map(([x, y], i) => {
          const cos = Math.cos(angles[i]);
          const sin = Math.sin(angles[i]);
          const anchor = Math.abs(cos) < 0.15 ? "middle" : cos > 0 ? "start" : "end";
          const dy = sin < -0.4 ? "-0.4em" : sin > 0.4 ? "1em" : "0.35em";
          return (
            <text
              key={languages[i].name}
              x={x}
              y={y}
              dy={dy}
              textAnchor={anchor}
              fontSize="12"
              className="font-mono"
              fill={i === 0 ? "#f8f8f2" : "#75715e"}
            >
              {languages[i].name}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
