"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { buttonTap } from "@/lib/motion";
import { LocaleSwitcher } from "./LocaleSwitcher";

const sections = ["about", "skills", "projects", "honors", "contact"] as const;

export function Navbar() {
  const { locale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const resumeHref = locale === "zh" ? "/resume-zh.pdf" : "/resume-en.pdf";
  const navLinks = sections.map((id) => ({ id, label: t.nav[id] }));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        scrolled
          ? "bg-background/95 border-b border-primary/20 shadow-sm"
          : "bg-background/80"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2" aria-label="WG">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            WG
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <motion.a
            href={resumeHref}
            download
            {...buttonTap}
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground md:inline-flex"
          >
            <Download className="h-4 w-4" />
            {t.nav.downloadResume}
          </motion.a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-primary/20 bg-background/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-2 py-2 text-base font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-between gap-4 px-2 pt-3">
                <LocaleSwitcher />
                <a
                  href={resumeHref}
                  download
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                >
                  <Download className="h-4 w-4" />
                  {t.nav.downloadResume}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
