"use client";

import { motion } from "framer-motion";
import { Mail, Phone, GitBranch, type LucideIcon } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { EASE, staggerContainer, staggerItem, cardHover } from "@/lib/motion";

export function Contact() {
  const { t, locale } = useLocale();

  const items: { icon: LucideIcon; label: string; value: string; href: string }[] = [
    {
      icon: Mail,
      label: locale === "zh" ? "邮箱" : "Email",
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
    },
    {
      icon: Phone,
      label: locale === "zh" ? "电话" : "Phone",
      value: t.contact.phone,
      href: `tel:${t.contact.phone}`,
    },
    {
      icon: GitBranch,
      label: "GitHub",
      value: t.contact.github,
      href: `https://${t.contact.github}`,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className="text-4xl font-bold text-foreground">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {items.map(({ icon: Icon, label, value, href }) => (
            <motion.a
              key={label}
              href={href}
              target={label === "GitHub" ? "_blank" : undefined}
              rel={label === "GitHub" ? "noopener noreferrer" : undefined}
              variants={staggerItem}
              whileHover={cardHover.whileHover}
              transition={cardHover.transition}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:border-primary/40 hover:shadow-lg"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className="font-mono text-base font-medium text-foreground break-all">
                {value}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
