"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { EASE, staggerContainer, staggerItem, cardHover } from "@/lib/motion";

export function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className="text-4xl font-bold text-foreground">{t.about.title}</h2>
          <p className="mt-6 text-base leading-8 text-foreground/80">
            {t.about.intro}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 space-y-6"
        >
          {t.education.map((edu) => (
            <motion.div
              key={edu.period + edu.school}
              variants={staggerItem}
              whileHover={cardHover.whileHover}
              transition={cardHover.transition}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:border-primary/40 hover:shadow-lg"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  {edu.school}
                </p>
                <p className="text-base text-foreground">{edu.degree}</p>
                {edu.lab && (
                  <p className="mt-1 text-sm text-primary">{edu.lab}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
