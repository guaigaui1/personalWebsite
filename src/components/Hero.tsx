"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { EASE, buttonTap } from "@/lib/motion";
import { CountUp } from "./CountUp";

export function Hero() {
  const { t, locale } = useLocale();
  const resumeHref = locale === "zh" ? "/resume-zh.pdf" : "/resume-en.pdf";
  const chars = Array.from(t.hero.name);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center"
    >
      <div className="flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-lg text-muted-foreground"
        >
          {t.hero.greeting}
        </motion.p>

        {/* 姓名逐字揭起 */}
        <h1 className="mt-2 text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
          <span className="sr-only">{t.hero.name}</span>
          <span aria-hidden className="flex flex-wrap justify-center">
            {chars.map((ch, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.15 + i * 0.04 }}
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.35 }}
          className="mt-4 text-2xl font-medium text-primary"
        >
          {t.hero.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.45 }}
          className="mt-6 max-w-xl text-base leading-7 text-foreground/80"
        >
          {t.hero.description}
        </motion.p>

        {/* 首屏硬指标：数字滚动计数 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-stretch justify-center gap-4"
        >
          {t.hero.metrics.map((m) => (
            <div
              key={m.label}
              className="min-w-[8rem] rounded-2xl border border-border bg-card px-6 py-4 shadow-sm"
            >
              <p className="font-mono text-3xl font-bold text-accent">
                <CountUp to={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.65 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <motion.a
            href="#projects"
            {...buttonTap}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground"
          >
            {t.hero.viewProjects}
          </motion.a>
          <motion.a
            href={resumeHref}
            download
            {...buttonTap}
            className="inline-flex items-center justify-center rounded-full border border-primary/40 px-6 py-3 text-base font-medium text-foreground"
          >
            {t.hero.downloadResume}
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label={t.hero.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-sm text-muted-foreground"
      >
        {t.hero.scrollHint}
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
