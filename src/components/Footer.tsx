"use client";

import { ArrowUp } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";

const LAST_UPDATED = "2026.06.13";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40 px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm text-foreground">
            © {year} {t.hero.name} · {t.hero.title}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {t.footer.builtWith} · {t.footer.lastUpdated} {LAST_UPDATED}
          </p>
        </div>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowUp className="h-4 w-4" />
          {t.footer.backToTop}
        </button>
      </div>
    </footer>
  );
}
