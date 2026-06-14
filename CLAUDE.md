# CLAUDE.md

> 张文冠的个人网站项目约束文件。Claude Code 在本项目内的所有改动必须遵守本文件规定。

---

## 1. 项目概述

这是一个**面向大模型应用开发岗位求职**的个人作品集网站，核心目标是用最直观的方式展示求职者在 RAG 与 Agent 系统方向的工程能力。

**网站定位**
- 主要受众：国内大厂招聘方、AI 创业公司技术负责人
- 次要受众：海外公司、英文面试官（通过英文切换访问）
- 期望效果：访问者在 30 秒内能感知到候选人的技术深度

**核心卖点（按优先级）**
1. 两个完整的大模型应用项目（智能客服小丰、dodo-Agent）
2. 西安电子科技大学硕士 · ISN 国家重点实验室背景
3. 全栈式后端能力（Java/Spring 生态 + 中间件 + 大模型工程）

---

## 2. 个人信息（事实数据，直接使用）

```ts
// 用于 src/lib/data.ts 和 src/lib/i18n/*.ts
{
  name: { zh: "张文冠", en: "Wenguan Zhang" },
  title: { zh: "大模型应用开发工程师", en: "LLM Application Developer" },
  contact: {
    email: "3097913487@qq.com",
    phone: "17527659665",
  },
  education: [
    {
      period: "2024.09 - 2027.07",
      school: { zh: "西安电子科技大学", en: "Xidian University" },
      college: { zh: "通信工程学院", en: "School of Telecommunications Engineering" },
      degree: { zh: "硕士 · 信息与通信工程", en: "M.S. · Information and Communication Engineering" },
      lab: "ISN 国家重点实验室",
    },
    {
      period: "2020.09 - 2024.07",
      school: { zh: "华北水利水电大学", en: "North China University of Water Resources and Electric Power" },
      college: { zh: "电子工程学院", en: "School of Electronic Engineering" },
      degree: { zh: "本科 · 通信工程", en: "B.S. · Communication Engineering" },
    },
  ],
  honors: [
    { zh: "第十五届数学竞赛省级一等奖", en: "1st Prize, 15th Provincial Mathematics Competition" },
    { zh: "2024 级硕士研究生三等新生奖学金", en: "Graduate Freshman Scholarship (3rd Class), 2024" },
    { zh: "CET-4 / CET-6 通过", en: "Passed CET-4 and CET-6" },
  ],
}
```

**项目数据**（关键信息保真，描述可微调）

```ts
projects: [
  {
    id: "xiaofeng",
    name: "智能客服小丰",  // 英文版保持中文名 + 拼音注解
    nameEn: "Xiaofeng — Intelligent Assistant",
    period: "2026.02 - 2026.06",
    intro: {
      zh: "基于 RAG 架构，实现从文档接入、切片、向量化存储到多源检索、意图路由、流式对话的全链路。",
      en: "End-to-end RAG system covering document ingestion, chunking, vector storage, multi-source retrieval, intent routing, and streaming dialogue.",
    },
    techStack: ["Spring Boot", "LangChain4j", "Elasticsearch", "Neo4j", "Redis", "MySQL", "MinIO", "MinerU"],
    highlights: [
      // 描述用简历原句，不得二次总结
      {
        zh: "文档解析与分段：引入 MinerU，支持 PDF/Markdown/DOC/Excel 等多格式统一接入；引入滑动窗口重叠 + 父子分段方案，解决固定分片截断语义导致检索丢失的问题，召回完整度从约 75% 提升至 90% 以上",
        en: "Document Parsing & Chunking: integrated MinerU for unified ingestion of PDF/Markdown/DOC/Excel and other formats; added sliding-window overlap + parent-child chunking to fix retrieval loss caused by fixed-size splits cutting across semantics, lifting recall completeness from ~75% to over 90%",
      },
      {
        zh: "意图识别优化：基于 LLM 实现 6 大意图分类识别及结构化实体提取，通过 CoT、Few-shot 等优化手段，意图识别准确率提升到 98%",
        en: "Intent Recognition: built 6-class intent classification and structured entity extraction on an LLM; with CoT and Few-shot optimizations, intent recognition accuracy reached 98%",
      },
      {
        zh: "查询改写与智能路由：实现 4 维 Query Rewriting（简洁化/抽象化/纠错/标准化）；查询路由器将 Query 分发至 ES 检索 / MySQL / Neo4j，失败自动降级",
        en: "Query Rewriting & Routing: implemented 4-dimensional Query Rewriting (concise/abstract/correction/normalization); the query router dispatches each Query to Elasticsearch / MySQL / Neo4j with automatic fallback on failure",
      },
      {
        zh: "混合检索与精排序：ES BM25 + 向量语义检索构建混合检索，RRF 算法融合多源排序；基于 ONNX Runtime 加载 BGE-RERANKER 模型，零网络延迟完成检索结果精排。Top5 召回率从 82% 提升至 96%",
        en: "Hybrid Retrieval & Reranking: built hybrid retrieval with Elasticsearch BM25 + vector semantic search, fusing multi-source rankings via the RRF algorithm; loaded BGE-RERANKER on ONNX Runtime to rerank results with zero network latency. Top5 recall rose from 82% to 96%",
      },
    ],
  },
  {
    id: "dodo-agent",
    name: "dodo-Agent",
    nameEn: "dodo-Agent",  // 不翻译
    period: "2025.11 - 2026.01",
    intro: {
      zh: "多智能体架构，实现联网搜索问答（ReAct）、文件 RAG 问答（RAG + ReAct）、PPT 智能生成（状态机）、深度自主研究（Plan-Execute-Critique）。",
      en: "Multi-agent architecture supporting web search QA (ReAct), file RAG QA (RAG + ReAct), PPT generation (state machine), and autonomous research (Plan-Execute-Critique).",
    },
    techStack: ["Spring AI", "Project Reactor", "MCP", "Elasticsearch", "MySQL", "Redis", "MinIO", "通义千问"],
    highlights: [
      {
        zh: "深度研究引擎：实现四阶段自主研究范式，每阶段使用独立角色 Prompt（规划/执行/评审专家）确保职责清晰；计划-执行-批判循环中按任务依赖分组实现并行/串行混合调度",
        en: "Deep Research Engine: implemented a four-stage autonomous research paradigm; each stage uses a role-specific Prompt (Planner/Executor/Critic) for clear responsibilities; within the Plan-Execute-Critique loop, tasks are grouped by dependency for mixed parallel/serial scheduling",
      },
      {
        zh: "动态上下文工程：扫描本地文件目录读取 skill.md，封装 skill 为工具，渐进式加载；设计智能压缩策略，多轮迭代超限时按优先级保留用户目标、工具执行结果、批判反馈，丢弃冗余对话过程",
        en: "Dynamic Context Engineering: scans the local file directory to read skill.md, wrapping each skill as a tool for progressive loading; a smart compression strategy keeps user goals, tool results, and critic feedback by priority when iterations exceed the limit, discarding redundant dialogue",
      },
      {
        zh: "多实例任务管理：通过 Redis 分布式锁实现同一会话任务只有一个实例，Pub/Sub 广播实现停止所有实例，TTL 自动续期实现长任务不丢失任务状态",
        en: "Multi-instance Task Management: uses Redis distributed locks to keep a single instance per session task, Pub/Sub broadcast to stop all instances, and TTL auto-renewal so long-running tasks never lose state",
      },
      {
        zh: "分阶段流式输出：基于 Project Reactor (Flux/Mono/Sinks) 实现 SSE 实时推送，支持 thinking/text/reference/recommend 四种消息类型逐阶段推送给前端",
        en: "Staged Streaming Output: built on Project Reactor (Flux/Mono/Sinks) for real-time SSE push, streaming four message types — thinking/text/reference/recommend — to the frontend stage by stage",
      },
    ],
  },
]
```

---

## 3. 技术栈（固定，不要替换）

| 类别 | 选型 | 原因 |
|---|---|---|
| 框架 | Next.js 14 (App Router) | SSR 友好，Vercel 部署零配置 |
| 语言 | TypeScript (strict) | 类型安全，字典补全友好 |
| 样式 | Tailwind CSS | 与设计 token 配合好 |
| 组件库 | shadcn/ui | 可深度定制 |
| 交互动画 | Framer Motion | 滚动、悬停、淡入 |
| 视频动画 | Remotion + @remotion/player | Hero 背景 + 项目架构演示 |
| 图标 | lucide-react | 风格统一 |
| 部署 | Vercel | 免费 + 自带 Analytics |

**禁止引入**：Redux、MobX、styled-components、emotion、Material UI、Ant Design。本项目规模不需要这些。

---

## 4. 设计系统（严格遵守）

### 4.1 色彩 Token

定义在 `src/lib/theme.ts`，同步到 `src/app/globals.css` 的 `@theme` / `:root`（Tailwind v4 无 `tailwind.config.ts`）。**禁止在组件里使用未定义的颜色字面量**。

```ts
export const theme = {
  primary: "#2563EB",      // 技术蓝 - 主要按钮、强调
  secondary: "#1E293B",    // 深石板 - 次级、深色块
  accent: "#F97316",       // 暖橙 - 点睛（关键指标、数字）
  background: "#FAFAFA",   // 中性近白 - 全局背景
  foreground: "#0F1115",   // 墨黑 - 正文文字（不用纯黑！）
  muted: "#F1F5F9",        // 冷灰 - 次要背景
  mutedForeground: "#64748B", // 石板灰 - 次要文字
};
```

**使用规则**
- 正文文字一律 `foreground`（次要正文可 `foreground/80`），禁用 `#000`、`black`、`gray-900`
- 仅 period、标签等真·次要信息用 `mutedForeground`
- 背景永远 `background` 或 `white`，禁用 `gray-50`
- `primary` 只用于按钮与极少数关键强调，**不要做 section 小标题色**（小标题用 `foreground`）
- `accent` 暖橙仅做点睛（关键数字/指标），不要大面积铺
- 一个组件内最多用 3 种主题色，避免视觉混乱

### 4.2 字体

```css
/* 中文：苹方 + 微软雅黑 fallback */
/* 英文：Inter */
font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;
```

字号阶梯（在 Tailwind 里用语义命名）：
- 大标题（Hero 主标题）：`text-6xl` 或 `text-7xl`
- 章节标题：`text-4xl`
- 子标题：`text-2xl`
- 正文：`text-base`（16px）
- 次要：`text-sm`（14px）

**正文一律小四 `text-base`（16px）**：项目描述、关于我等承载阅读内容的正文禁止用 `text-sm`(14px)，`text-sm` 只用于 period、标签、meta 等真·次要信息。

**禁止**字号小于 `text-xs`（12px）。

中文文本块若易在窄容器掉单字孤行（如指标卡标签、荣誉名），用 `text-balance` 让其按字数均分换行。

### 4.3 间距与圆角

- 章节之间垂直间距：`py-20` 或 `py-24`
- 卡片内边距：`p-6` 或 `p-8`
- 圆角：小元素 `rounded-lg`、卡片 `rounded-2xl`、按钮 `rounded-full`（胶囊感更热情）
- 边框：统一 `border` 即 `0.5px` 等效，颜色用 `border-primary/30`

### 4.4 动画原则

- 滚动进入视口的元素：`opacity 0→1 + y 20→0`，时长 `0.5s`，缓动 `ease-out`
- 悬停效果：`scale-105` + 阴影，过渡 `0.2s`
- 切换语言：整页 `AnimatePresence` 淡出淡入 `0.2s`
- **禁止**过度炫技：不用粒子效果、不用 3D 旋转、不用视差滚动（除非用户明确要求）
- 文字揭起类 `overflow-hidden` 包裹动画必须为字形下伸部（`g`/`y`/`p` 等）留出 `pb`（如 `pb-[0.18em]`，外层用等量 `-mb` 抵消），否则英文字母下缘会被裁切

---

## 5. 国际化规则 ⚠️ 重点

### 5.1 默认语言

默认中文。首次访问检测 `navigator.language`，非 `zh-*` 默认英文。用户手动切换后写入 `localStorage`，下次访问尊重用户选择。

### 5.2 文件结构

```
src/lib/i18n/
├── types.ts        # Locale 类型 + Dictionary 接口
├── zh.ts           # 中文字典
├── en.ts           # 英文字典
└── context.tsx     # LocaleProvider + useLocale hook
```

### 5.3 不翻译的术语清单（⚠️ 中英文版本均保持原样）

**编程语言与运行时**
Java、JVM、TypeScript、JavaScript、Python

**框架与库**
Spring Boot、Spring AI、LangChain4j、Project Reactor、Next.js、React、Tailwind、Remotion、Framer Motion

**数据库与中间件**
MySQL、Redis、Elasticsearch、Neo4j、MinIO、MinerU

**大模型相关概念**
RAG、Agent、ReAct、Plan-Execute、Plan-Execute-Critique、Workflow、CoT、Chain-of-Thought、Few-shot、LLM、Prompt、MCP、SSE

**算法与模型**
BM25、RRF、Rerank、ONNX Runtime、BGE-RERANKER、Embedding、Vector

**Java 并发概念**
JMM、CAS、synchronized、volatile

**模型产品名**
通义千问、LLaMA-Factory、PEFT、GPT、Claude

**Reactor 流式 API**
Flux、Mono、Sinks、Pub/Sub、TTL

**资质证书**
CET-4、CET-6、ISN

### 5.4 字典编写规范

**正确示例**（中文版描述里嵌入英文术语）
```ts
zh: "实现 4 维 Query Rewriting（简洁化/抽象化/纠错/标准化）；查询路由器将 Query 分发至 Elasticsearch / MySQL / Neo4j，失败自动降级。"
```

**错误示例**（不要翻译技术名词）
```ts
zh: "实现 4 维查询重写（简洁化/抽象化/纠错/标准化）；查询路由器将查询分发至弹性搜索 / 关系数据库 / 图数据库..."  // ❌
```

**英文版示例**
```ts
en: "4-dimensional Query Rewriting (concise/abstract/correction/normalization); router dispatches queries to Elasticsearch / MySQL / Neo4j with automatic fallback."
```

### 5.5 学校名处理

中文版用中文校名，英文版用官方英文译名：
- 西安电子科技大学 → Xidian University
- 华北水利水电大学 → North China University of Water Resources and Electric Power

ISN 国家重点实验室在两个版本里都保留 "ISN" 缩写，全称分别为：
- 中文版："ISN 国家重点实验室"
- 英文版："State Key Laboratory of ISN"

---

## 6. 文件组织

```
src/
├── app/
│   ├── layout.tsx          # 全局 layout，包 LocaleProvider
│   ├── page.tsx            # 单页应用，组合所有 Section
│   ├── globals.css
│   └── sitemap.ts
├── components/
│   ├── Navbar.tsx
│   ├── LocaleSwitcher.tsx
│   ├── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Honors.tsx
│   │   └── Contact.tsx
│   └── ui/                 # shadcn 生成的组件
├── remotion/
│   ├── Root.tsx            # 注册所有 Composition
│   ├── HeroAnimation.tsx
│   ├── RAGFlowAnimation.tsx
│   └── AgentLoopAnimation.tsx
└── lib/
    ├── theme.ts
    ├── data.ts             # 结构化简历数据
    ├── utils.ts
    └── i18n/
        ├── types.ts
        ├── zh.ts
        ├── en.ts
        └── context.tsx
```

**规则**
- Section 组件只负责布局和动画，数据从 `useLocale().t` 取
- Remotion 动画文件不放在 `components/` 下
- `lib/` 不放 React 组件

---

## 7. 代码规范

### 7.1 TypeScript

- `tsconfig.json` 开启 `strict: true`
- 禁用 `any`，必须用 `unknown` 或具体类型
- 所有组件 props 显式声明 interface，命名为 `ComponentNameProps`

### 7.2 组件规范

- 一律函数组件 + Hooks
- 默认 `'use client'`，只有纯展示无交互的组件才用 Server Component
- 组件文件名 PascalCase，对应导出同名组件
- 一个文件一个主组件

### 7.3 样式规范

- 优先 Tailwind 工具类，避免写 CSS 文件
- 复用样式抽取为变量或 `cn()` 拼接，不用 `@apply`
- 响应式：移动优先，断点用 `md:` (768px) 和 `lg:` (1024px)

### 7.4 注释

- 复杂逻辑必须有中文注释（用户是中文使用者，便于维护）
- TypeScript 类型不写 JSDoc
- 不写无意义注释（"// 设置状态" 这种）

---

## 8. Remotion 使用规范

### 8.1 使用范围

**只在两处使用 Remotion**
1. Hero 区域背景的关键词飘字动画
2. Projects 区域的两段架构演示动画（RAG 流程、Agent 循环）

**禁止滥用**：其他动画一律用 Framer Motion 实现。Remotion 体积大，加载慢，过度使用会拖慢首屏。

### 8.2 性能要求

- 所有 `<Player>` 设置 `loop autoPlay controls={false}`
- 用 `Suspense` 包裹，加 loading fallback
- Projects 区域的动画用 `Intersection Observer` 控制，进入视口才挂载
- Composition 时长不超过 10 秒，避免内存占用

### 8.3 双语支持

每个 Composition 通过 `inputProps` 接收 `locale` 参数。`<Player>` 传 `key={locale}` 强制重渲染。

### 8.4 配色

Remotion 动画里的所有颜色必须从 `src/lib/theme.ts` 导入，禁止硬编码。这样后续调整主题色时动画自动同步。

---

## 9. 性能与 SEO

### 9.1 性能

- Lighthouse 分数目标：Performance > 90，Accessibility > 95
- 图片用 `next/image`，强制 `width` 和 `height`
- 首屏不加载 Remotion（动态 import）
- 字体用 `next/font` 自动优化

### 9.2 SEO Metadata

```ts
// 中文版
title: "张文冠 | 大模型应用开发工程师"
description: "西安电子科技大学硕士，专注 RAG 与 Agent 系统开发。代表作：智能客服小丰、dodo-Agent。"
keywords: ["张文冠", "大模型应用开发", "RAG", "Agent", "LangChain4j", "Spring AI", "西电"]

// 英文版
title: "Wenguan Zhang | LLM Application Developer"
description: "M.S. at Xidian University, focused on RAG and Agent systems. Projects: Xiaofeng Assistant, dodo-Agent."
```

### 9.3 OpenGraph

每个语言版本一张 OG 图，分别命名为 `og-zh.png` 和 `og-en.png`，放在 `public/`。

---

## 10. 内容写作风格

### 10.1 中文

- 用书面语，避免"咱们"、"哈喽"、"小伙伴"等口语化表达
- 数字用阿拉伯数字（"4 维"、"98%"）
- 中英文之间加空格（"基于 LLM 实现"，不是"基于LLM实现"）
- 项目描述强调"做了什么 + 效果数据"，避免空话
- **项目 highlight 描述必须使用简历原句，不得二次总结/精简**；英文版改写为忠于原句的完整翻译（术语大小写按官方写法）

### 10.2 英文

- 用 active voice，避免 passive
- 简洁，每句话不超过 25 个词
- 技术名词大小写遵循官方写法（"Elasticsearch" 不是 "ElasticSearch"，"Spring Boot" 不是 "SpringBoot"）

### 10.3 避免的表达

- ❌ "本人"、"我们" → 直接用动词主导句
- ❌ "本项目"、"该项目" → 用项目名指代
- ❌ "非常"、"特别"、"极其" → 用数据说话
- ❌ Emoji 滥用 → 仅在 Honors 区域装饰使用

---

## 11. 提交前检查清单

每次完成一个 Section 或重大改动后，自检以下项：

- [ ] `npm run build` 通过，没有 TypeScript 错误
- [ ] `npm run lint` 通过
- [ ] 中英文双语切换正常
- [ ] 不翻译的技术术语保持原样
- [ ] 移动端 (375px)、平板 (768px)、桌面 (1280px) 三种宽度下布局正常
- [ ] 所有颜色来自 `theme.ts`，无硬编码颜色
- [ ] Remotion 动画在两个语言版本下都正确渲染
- [ ] Lighthouse 性能跑分（Hero 加载完毕后）符合目标
- [ ] 简历下载链接根据当前语言加载对应 PDF

---

## 12. 沟通规则

Claude Code 在执行修改时：

1. **先解释方案，再动手**：复杂改动前用 1-2 句话说明思路，得到默认确认后再改文件
2. **保持上下文**：每次改动只动相关文件，不顺便重构其他无关代码
3. **拒绝过度设计**：本项目是个人作品集，不需要状态管理库、不需要单元测试、不需要 CI/CD 配置
4. **中文回复**：默认用中文与用户沟通，代码注释也用中文
5. **保留用户决策**：用户已经选定的技术栈（见第 3 节）不要主动建议替换

---

*本文件最后更新：项目初始化阶段。后续如有重大设计变更，需同步更新本文件。*
