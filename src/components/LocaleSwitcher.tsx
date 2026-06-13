"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";

const halves: { locale: Locale; label: string }[] = [
  { locale: "zh", label: "中" },
  { locale: "en", label: "EN" },
];

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="relative flex h-8 w-16 items-center rounded-full border border-primary/50 p-0.5"
      role="group"
      aria-label="Language switch"
    >
      {halves.map(({ locale: value, label }) => {
        const active = locale === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setLocale(value)}
            aria-pressed={active}
            className="relative z-10 flex h-full flex-1 items-center justify-center rounded-full text-sm font-medium transition-colors"
          >
            {active && (
              <motion.span
                layoutId="locale-switch-indicator"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span
              className={`relative z-10 ${
                active ? "text-primary-foreground" : "text-foreground"
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}
