"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/context";
import { EASE, staggerContainer, staggerItem } from "@/lib/motion";

export function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="scroll-mt-16 border-t border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.about.title}
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-primary" />
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            {t.about.intro}
          </p>
        </motion.div>

        {/* 教育经历：竖向时间线；-ml-6 抵消 pl-6，使文字回到与正文同一左缘，竖线落在左侧留白 */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 -ml-6 max-w-2xl space-y-10 border-l-2 border-border pl-6"
        >
          {t.education.map((edu) => (
            <motion.div key={edu.period + edu.school} variants={staggerItem} className="relative">
              <span className="absolute -left-[1.9rem] top-1 h-4 w-4 rounded-full border-2 border-background bg-primary" />
              <p className="font-mono text-sm text-muted-foreground">{edu.period}</p>
              <p className="mt-1 text-lg font-semibold text-foreground">
                {edu.school}
              </p>
              <p className="text-base text-foreground">{edu.degree}</p>
              {edu.lab && <p className="mt-1 text-sm text-primary">{edu.lab}</p>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
