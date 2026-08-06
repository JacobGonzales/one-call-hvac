import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type SectionRevealProps = {
  children: ReactNode;
  index: number;
};

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

/** Alternates major page sections in from the right, then the left. */
export function SectionReveal({ children, index }: SectionRevealProps) {
  const reduceMotion = useReducedMotion();
  const startsOnRight = index % 2 === 0;

  return (
    <motion.div
      data-scroll-reveal={startsOnRight ? "right" : "left"}
      initial={reduceMotion ? false : { opacity: 0, x: startsOnRight ? 64 : -64 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.72, ease: REVEAL_EASE }
      }
    >
      {children}
    </motion.div>
  );
}
