"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Honors } from "@/components/Honors";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const pageMeta: Record<Locale, { title: string; description: string }> = {
  zh: {
    title: "张文冠 | 大模型应用开发工程师",
    description:
      "张文冠的个人作品集 —— 大模型应用开发工程师，专注 RAG 与 Agent 系统工程。西安电子科技大学硕士 · ISN 国家重点实验室。",
  },
  en: {
    title: "Wenguan Zhang | LLM Application Developer",
    description:
      "Portfolio of Wenguan Zhang — LLM Application Developer focused on RAG and Agent systems. M.S. at Xidian University · ISN State Key Laboratory.",
  },
};

export default function Home() {
  const { locale } = useLocale();

  // 纯客户端 i18n：服务端 metadata 拿不到 locale，挂载后按当前语言更新标题/描述
  useEffect(() => {
    const meta = pageMeta[locale];
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);
  }, [locale]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={locale}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Honors />
        <Contact />
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}
