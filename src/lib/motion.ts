import type { Variants } from "framer-motion";

// 统一的“高级”缓动（expo-out 风），位移小、时长适中
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// 单个元素淡入上移
export const fadeUp: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// 容器：子项错落入场
export const staggerContainer: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// 卡片悬停：轻抬 + 弹性
export const cardHover = {
  whileHover: { y: -4 },
  transition: { type: "spring" as const, stiffness: 300, damping: 20 },
};

// 按钮：磁吸微弹
export const buttonTap = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring" as const, stiffness: 400, damping: 17 },
};
