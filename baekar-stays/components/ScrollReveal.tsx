"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: Props) {
  const initial = {
    up:    { opacity: 0, y: 48 },
    down:  { opacity: 0, y: -48 },
    left:  { opacity: 0, x: 60 },
    right: { opacity: 0, x: -60 },
    none:  { opacity: 0 },
  }[direction];

  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
