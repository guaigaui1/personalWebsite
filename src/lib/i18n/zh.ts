import type { Dictionary } from "./types";

export const zh: Dictionary = {
  nav: {
    about: "关于",
    skills: "技能",
    projects: "项目",
    honors: "荣誉",
    contact: "联系",
    downloadResume: "下载简历",
  },
  hero: {
    greeting: "你好，我是",
    name: "张文冠",
    title: "大模型应用开发工程师",
    description:
      "专注 RAG 与 Agent 系统的全栈式工程实现，从文档接入、混合检索到多智能体编排，让大模型真正落地为可用产品。",
    viewProjects: "查看项目",
    downloadResume: "下载简历",
    scrollHint: "向下滚动",
    metrics: [
      { value: 98, suffix: "%", label: "意图识别准确率" },
      { value: 96, suffix: "%", label: "Top5 召回率" },
      { value: 90, suffix: "%+", label: "文档召回完整度" },
    ],
  },
  about: {
    title: "关于我",
    intro:
      "西安电子科技大学信息与通信工程硕士，ISN 国家重点实验室在读。深耕 Java / Spring 生态与大模型工程，擅长用 RAG 与 Agent 架构解决真实业务问题。从向量检索、意图路由到多智能体调度与流式输出，都有完整的端到端落地经验。",
  },
  education: [
    {
      period: "2024.09 - 2027.07",
      school: "西安电子科技大学",
      degree: "硕士 · 信息与通信工程",
      lab: "ISN 国家重点实验室",
    },
    {
      period: "2020.09 - 2024.07",
      school: "华北水利水电大学",
      degree: "本科 · 通信工程",
    },
  ],
  skills: {
    title: "技能栈",
    categories: {
      llm: {
        name: "大模型应用",
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
        name: "后端开发",
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
        name: "存储与检索",
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
        name: "工具与平台",
        items: ["MinerU", "通义千问", "LLaMA-Factory", "PEFT", "Git", "Docker"],
      },
    },
  },
  projects: {
    title: "项目经历",
    items: [
      {
        name: "智能助手小丰",
        period: "2026.02 - 2026.06",
        intro:
          "基于 RAG 架构，实现从文档接入、切片、向量化存储到多源检索、意图路由、流式对话的全链路。",
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
            title: "文档解析与分段",
            description:
              "MinerU 多格式接入；滑动窗口重叠 + 父子分段方案；召回完整度 75% → 90%+。",
          },
          {
            title: "意图识别优化",
            description:
              "6 大意图分类 + 结构化实体提取；CoT、Few-shot 优化后准确率达 98%。",
          },
          {
            title: "查询改写与智能路由",
            description:
              "4 维 Query Rewriting（简洁化 / 抽象化 / 纠错 / 标准化）；查询路由器将请求分发至 Elasticsearch / MySQL / Neo4j，失败自动降级。",
          },
          {
            title: "混合检索与精排序",
            description:
              "Elasticsearch BM25 + 向量语义检索；RRF 融合；ONNX Runtime 加载 BGE-RERANKER 实现零网络延迟精排；Top5 召回率 82% → 96%。",
          },
        ],
      },
      {
        name: "dodo-Agent",
        period: "2025.11 - 2026.01",
        intro:
          "多智能体架构，实现联网搜索问答（ReAct）、文件 RAG 问答（RAG + ReAct）、PPT 智能生成（状态机）、深度自主研究（Plan-Execute-Critique）。",
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
            title: "深度研究引擎",
            description:
              "四阶段自主研究范式，独立角色 Prompt（规划 / 执行 / 评审专家）；按任务依赖分组实现并行 / 串行混合调度。",
          },
          {
            title: "动态上下文工程",
            description:
              "扫描本地目录读取 skill.md 渐进式加载工具；多轮迭代超限时按优先级保留目标、工具结果、批判反馈。",
          },
          {
            title: "多实例任务管理",
            description:
              "Redis 分布式锁保证单会话单实例；Pub/Sub 广播停止；TTL 自动续期保障长任务状态。",
          },
          {
            title: "分阶段流式输出",
            description:
              "Project Reactor（Flux / Mono / Sinks）实现 SSE 实时推送；支持 thinking / text / reference / recommend 四种消息类型。",
          },
        ],
      },
    ],
  },
  honors: {
    title: "荣誉奖项",
    items: [
      { icon: "trophy", name: "第十五届数学竞赛省级一等奖" },
      { icon: "award", name: "2024 级硕士研究生三等新生奖学金" },
      { icon: "badge-check", name: "CET-4 / CET-6 通过" },
    ],
  },
  contact: {
    title: "联系我",
    subtitle: "欢迎沟通大模型应用开发岗位机会，或任何技术交流。",
    email: "3097913487@qq.com",
    phone: "17527659665",
    github: "github.com/guaigaui1",
  },
  footer: {
    builtWith: "基于 Next.js 构建",
    lastUpdated: "最后更新",
    backToTop: "回到顶部",
    rights: "保留所有权利",
  },
};
