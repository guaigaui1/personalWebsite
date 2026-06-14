"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/context";
import { EASE } from "@/lib/motion";

export function Projects() {
  const { t } = useLocale();

  return (
    <section id="projects" className="scroll-mt-16 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.projects.title}
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-primary" />
        </motion.div>

        <div className="mt-10 space-y-10">
          {t.projects.items.map((project) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: EASE }}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:border-primary/40 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                {project.name}
              </h3>
              <p className="mt-1 font-mono text-sm text-muted-foreground">
                {project.period}
              </p>

              <p className="mt-3 text-base leading-7 text-foreground/80">
                {project.intro}
              </p>

              {/* 技术栈标签：始终保持英文原样，不随语言切换 */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-muted px-3 py-1 font-mono text-sm font-medium text-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 space-y-4">
                {project.highlights.map((h) => (
                  <li key={h.title} className="border-l-2 border-primary/40 pl-4">
                    <p className="text-lg font-semibold tracking-tight text-foreground">
                      {h.title}
                    </p>
                    <p className="mt-1 text-base leading-7 text-foreground/80">
                      {h.description}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
