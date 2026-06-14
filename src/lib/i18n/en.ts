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
        name: "智能客服小丰 (Xiaofeng — Intelligent Assistant)",
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
              "Integrated MinerU for unified ingestion of PDF/Markdown/DOC/Excel and other formats; added sliding-window overlap + parent-child chunking to fix retrieval loss caused by fixed-size splits cutting across semantics, lifting recall completeness from ~75% to over 90%.",
          },
          {
            title: "Intent Recognition",
            description:
              "Built 6-class intent classification and structured entity extraction on an LLM; with CoT and Few-shot optimizations, intent recognition accuracy reached 98%.",
          },
          {
            title: "Query Rewriting & Routing",
            description:
              "Implemented 4-dimensional Query Rewriting (concise / abstract / correction / normalization); the query router dispatches each Query to Elasticsearch / MySQL / Neo4j with automatic fallback on failure.",
          },
          {
            title: "Hybrid Retrieval & Reranking",
            description:
              "Built hybrid retrieval with Elasticsearch BM25 + vector semantic search, fusing multi-source rankings via the RRF algorithm; loaded BGE-RERANKER on ONNX Runtime to rerank results with zero network latency. Top5 recall rose from 82% to 96%.",
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
              "Implemented a four-stage autonomous research paradigm; each stage uses a role-specific Prompt (Planner / Executor / Critic) for clear responsibilities; within the Plan-Execute-Critique loop, tasks are grouped by dependency for mixed parallel / serial scheduling.",
          },
          {
            title: "Dynamic Context Engineering",
            description:
              "Scans the local file directory to read skill.md, wrapping each skill as a tool for progressive loading; a smart compression strategy keeps user goals, tool results, and critic feedback by priority when iterations exceed the limit, discarding redundant dialogue.",
          },
          {
            title: "Multi-instance Task Management",
            description:
              "Uses Redis distributed locks to keep a single instance per session task, Pub/Sub broadcast to stop all instances, and TTL auto-renewal so long-running tasks never lose state.",
          },
          {
            title: "Staged Streaming Output",
            description:
              "Built on Project Reactor (Flux / Mono / Sinks) for real-time SSE push, streaming four message types — thinking / text / reference / recommend — to the frontend stage by stage.",
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
      // 不间断连字符（U+2011）避免 CET‑6 在换行处被拆成 "CET-" / "6"
      { icon: "badge-check", name: "Passed CET‑4 and CET‑6" },
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
