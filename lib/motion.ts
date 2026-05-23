import type { Transition, Variants } from "motion/react";

export const EASE_OUT_QUART: Transition["ease"] = [0.25, 1, 0.5, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const stagger = (delay = 0.06): Transition => ({
  staggerChildren: delay,
});

export const sectionReveal: Transition = {
  duration: 0.6,
  ease: EASE_OUT_QUART,
};
