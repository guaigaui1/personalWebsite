"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

export function CountUp({
  to,
  suffix = "",
  duration = 1.2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, duration, mv]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
