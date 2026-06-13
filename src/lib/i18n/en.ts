import type { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    honors: "Honors",
    contact: "Contact",
    downloadResume: "Resume",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Wenguan Zhang",
    title: "LLM Application Developer",
    description:
      "Full-stack engineering of RAG and Agent systems — from document ingestion and hybrid retrieval to multi-agent orchestration — turning LLMs into shippable products.",
    viewProjects: "View Projects",
    downloadResume: "Download Resume",
    scrollHint: "Scroll down",
    metrics: [
      { value: 98, suffix: "%", label: "Intent Accuracy" },
      { value: 96, suffix: "%", label: "Top5 Recall" },
      { value: 90, suffix: "%+", label: "Doc Recall" },
    ],
  },
  about: {
    title: "About Me",
    intro:
      "M.S. in Information and Communication Engineering at Xidian University, working in the ISN State Key Laboratory. I focus on the Java / Spring ecosystem and LLM engineering, solving real business problems with RAG and Agent architectures — with end-to-end experience across vector retrieval, intent routing, multi-agent scheduling, and streaming output.",
  },
  education: [
    {
      period: "2024.09 - 2027.07",
      school: "Xidian University",
      degree: "M.S. · Information and Communication Engineering",
      lab: "ISN State Key Laboratory",
    },
    {
      period: "2020.09 - 2024.07",
      school: "North China University of Water Resources and Electric Power",
      degree: "B.S. · Communication Engineering",
    },
  ],
  skills: {
    title: "Tech Stack",
    categories: {
      llm: {
        name: "LLM Application",
        items: [
          "Spring AI",
          "LangChain4j",
          "RAG",
          "Agent",
          "ReAct",
          "Plan-Execute",
          "CoT",
          "Few-shot",
          "MCP",
          "BGE-RERANKER",
          "ONNX Runtime",
        ],
      },
      backend: {
        name: "Backend",
        items: [
          "Java",
          "Spring Boot",
          "Project Reactor",
          "SSE",
          "JVM",
          "JMM",
          "CAS",
        ],
      },
      storage: {
        name: "Storage & Retrieval",
        items: [
          "MySQL",
          "Redis",
          "Elasticsearch",
          "Neo4j",
          "MinIO",
          "BM25",
          "RRF",
          "Rerank",
        ],
      },
      tools: {
        name: "Tools & Platforms",
        items: ["MinerU", "通义千问", "LLaMA-Factory", "PEFT", "Git", "Docker"],
      },
    },
  },
  projects: {
    title: "Projects",
    items: [
      {
        name: "智能助手小丰 (Xiaofeng — Intelligent Assistant)",
        period: "2026.02 - 2026.06",
        intro:
          "End-to-end RAG system covering document ingestion, chunking, vector storage, multi-source retrieval, intent routing, and streaming dialogue.",
        techStack: [
          "Spring Boot",
          "LangChain4j",
          "Elasticsearch",
          "Neo4j",
          "Redis",
          "MySQL",
          "MinIO",
          "MinerU",
        ],
        highlights: [
          {
            title: "Document Parsing & Chunking",
            description:
              "Multi-format ingestion via MinerU; sliding window overlap + parent-child chunking lifted recall completeness from 75% to 90%+.",
          },
          {
            title: "Intent Recognition",
            description:
              "6-class intent classification + structured entity extraction; accuracy reached 98% with CoT and Few-shot.",
          },
          {
            title: "Query Rewriting & Routing",
            description:
              "4-dimensional Query Rewriting (concise / abstract / correction / normalization); the query router dispatches requests to Elasticsearch / MySQL / Neo4j with automatic fallback.",
          },
          {
            title: "Hybrid Retrieval & Reranking",
            description:
              "Elasticsearch BM25 + vector semantic search; RRF fusion; BGE-RERANKER on ONNX Runtime for zero-latency reranking; Top5 recall from 82% to 96%.",
          },
        ],
      },
      {
        name: "dodo-Agent",
        period: "2025.11 - 2026.01",
        intro:
          "Multi-agent architecture supporting web search QA (ReAct), file RAG QA (RAG + ReAct), PPT generation (state machine), and autonomous research (Plan-Execute-Critique).",
        techStack: [
          "Spring AI",
          "Project Reactor",
          "MCP",
          "Elasticsearch",
          "MySQL",
          "Redis",
          "MinIO",
          "通义千问",
        ],
        highlights: [
          {
            title: "Deep Research Engine",
            description:
              "Four-stage autonomous research paradigm with role-specific prompts (Planner / Executor / Critic); dependency-based parallel / serial hybrid scheduling.",
          },
          {
            title: "Dynamic Context Engineering",
            description:
              "Progressive tool loading by scanning local directories for skill.md; priority-based context compression retains goals, tool outputs, and critic feedback when iterations exceed limits.",
          },
          {
            title: "Multi-instance Task Management",
            description:
              "Redis distributed locks enforce single-instance-per-session; Pub/Sub broadcast for graceful stop; TTL auto-renewal keeps long-task state alive.",
          },
          {
            title: "Staged Streaming Output",
            description:
              "SSE real-time push via Project Reactor (Flux / Mono / Sinks); supports four message types — thinking / text / reference / recommend.",
          },
        ],
      },
    ],
  },
  honors: {
    title: "Honors & Awards",
    items: [
      { icon: "trophy", name: "1st Prize, 15th Provincial Mathematics Competition" },
      { icon: "award", name: "Graduate Freshman Scholarship (3rd Class), 2024" },
      { icon: "badge-check", name: "Passed CET-4 and CET-6" },
    ],
  },
  contact: {
    title: "Get in Touch",
    subtitle:
      "Open to LLM application developer roles and any technical conversation.",
    email: "3097913487@qq.com",
    phone: "17527659665",
    github: "github.com/guaigaui1",
  },
  footer: {
    builtWith: "Built with Next.js",
    lastUpdated: "Last updated",
    backToTop: "Back to top",
    rights: "All rights reserved",
  },
};
