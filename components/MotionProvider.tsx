"use client";

import { MotionConfig } from "motion/react";

/**
 * Makes every Motion animation on the site respect the visitor's
 * "reduce motion" system setting automatically.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
