"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export function Mesh() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1500], [0, -200]);

  return (
    <motion.div
      aria-hidden
      style={reduce ? undefined : { y }}
      className="pointer-events-none fixed inset-0 -z-10 opacity-60"
    >
      <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_20%_10%,rgba(249,38,114,0.10),transparent_60%),radial-gradient(35%_30%_at_80%_25%,rgba(166,226,46,0.08),transparent_60%),radial-gradient(40%_30%_at_50%_70%,rgba(102,217,239,0.08),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(60%_50%_at_50%_40%,#000,transparent_75%)]" />
    </motion.div>
  );
}
