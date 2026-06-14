"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/context";
import { EASE, staggerContainer, staggerItem, cardHover } from "@/lib/motion";

export function Skills() {
  const { t } = useLocale();
  const categories = Object.values(t.skills.categories);

  return (
    <section id="skills" className="scroll-mt-16 bg-muted/60 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.skills.title}
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-primary" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid items-stretch gap-6 sm:grid-cols-2"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={staggerItem}
              whileHover={cardHover.whileHover}
              transition={cardHover.transition}
              className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:border-primary/40 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                {cat.name}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-muted px-3 py-1 font-mono text-sm font-medium text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
