export const theme = {
  primary: "#2563EB", // 技术蓝 - 主要按钮、强调
  secondary: "#1E293B", // 深石板 - 次级、深色块
  accent: "#F97316", // 暖橙 - 点睛（关键指标、数字）
  background: "#FAFAFA", // 中性近白 - 全局背景
  foreground: "#0F1115", // 墨黑 - 正文文字（不用纯黑）
  muted: "#F1F5F9", // 冷灰 - 次要背景
  mutedForeground: "#64748B", // 石板灰 - 次要文字
} as const;

export type ThemeToken = keyof typeof theme;
