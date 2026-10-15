"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const elements = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  span: motion.span,
  section: motion.section,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof typeof elements;
};

/**
 * Fades and slides its children into view the first time they appear.
 * Motion itself handles the "reduce motion" preference (see MotionProvider).
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionElement = elements[as];

  return (
    <MotionElement
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionElement>
  );
}
