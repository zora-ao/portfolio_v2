import type { Variants } from "framer-motion";

/**
 * Shared motion language for the whole portfolio.
 *
 * One easing curve everywhere (matches the timeline), so tab
 * switches, scroll reveals, and micro-interactions all feel
 * like the same site. Transform/opacity only — never animate
 * layout properties.
 */

export const EASE_EXPO: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

/** Section switcher (AnimatePresence): fade + short rise. */
export const sectionTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25, ease: EASE_EXPO },
} as const;

/** Scroll-reveal container: staggers tagged children. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Scroll-reveal child: rise + fade. */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_EXPO },
  },
};

/** One-off reveal with per-index delay (for mapped lists). */
export function revealDelay(index: number, step = 0.08) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10% 0px" },
    transition: {
      duration: 0.55,
      delay: index * step,
      ease: EASE_EXPO,
    },
  } as const;
}
