"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Dictionary, Locale } from "./types";
import { zh } from "./zh";
import { en } from "./en";

const dictionaries: Record<Locale, Dictionary> = { zh, en };

const STORAGE_KEY = "portfolio-locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function resolveInitialLocale(): Locale {
  if (typeof window === "undefined") return "zh";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "zh" || stored === "en") return stored;

  // 首次访问：按浏览器语言决定，非 zh-* 默认英文
  return window.navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("zh");

  // 首挂载时根据 localStorage / 浏览器语言确定初始语言（避免 SSR 与客户端 lang 不一致的 hydration 警告）
  useEffect(() => {
    const initial = resolveInitialLocale();
    setLocaleState(initial);
    document.documentElement.lang = initial === "zh" ? "zh-CN" : "en";
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale 必须在 LocaleProvider 内部使用");
  }
  return ctx;
}
