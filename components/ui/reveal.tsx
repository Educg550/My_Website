"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeUp, sectionReveal } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      transition={{ ...sectionReveal, delay }}
    >
      {children}
    </motion.div>
  );
}
