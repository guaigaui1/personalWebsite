"use client";

import { motion } from "framer-motion";
import { Trophy, Award, BadgeCheck, type LucideIcon } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { EASE, staggerContainer, staggerItem, cardHover } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  award: Award,
  "badge-check": BadgeCheck,
};

export function Honors() {
  const { t } = useLocale();

  return (
    <section id="honors" className="scroll-mt-16 bg-muted/60 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-4xl font-bold text-foreground"
        >
          {t.honors.title}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-3"
        >
          {t.honors.items.map((item) => {
            const Icon = iconMap[item.icon] ?? Award;
            return (
              <motion.div
                key={item.name}
                variants={staggerItem}
                whileHover={cardHover.whileHover}
                transition={cardHover.transition}
                className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:border-primary/40 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="text-base font-medium text-foreground">
                  {item.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
