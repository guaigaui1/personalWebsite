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
    <section id="honors" className="scroll-mt-16 bg-muted/60 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.honors.title}
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-primary" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          {t.honors.items.map((item) => {
            const Icon = iconMap[item.icon] ?? Award;
            return (
              <motion.div
                key={item.name}
                variants={staggerItem}
                whileHover={cardHover.whileHover}
                transition={cardHover.transition}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:border-primary/40 hover:shadow-lg"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="min-w-0 text-base font-medium leading-snug text-balance text-foreground">
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
