import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

// ── Spring presets (matching Linear / Stripe feel) ──
export const spring = {
  gentle: { type: "spring" as const, stiffness: 120, damping: 20, mass: 1 },
  snappy: { type: "spring" as const, stiffness: 300, damping: 30, mass: 0.8 },
  bouncy: { type: "spring" as const, stiffness: 400, damping: 25, mass: 0.6 },
  slow:   { type: "spring" as const, stiffness: 80,  damping: 20, mass: 1.2 },
};

// ── Fade-up reveal (single element) ──
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  threshold?: number;
}

export const Reveal = ({ children, className, delay = 0, y = 24, once = true, threshold = 0.15 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y, filter: "blur(4px)" }}
      transition={{ ...spring.gentle, delay }}
    >
      {children}
    </motion.div>
  );
};

// ── Stagger container + children ──
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: spring.gentle,
  },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export const StaggerContainer = ({ children, className, once = true, threshold = 0.1 }: StaggerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div className={className} variants={staggerItem}>
    {children}
  </motion.div>
);

// ── Hover lift (for cards, rows) ──
export const HoverLift = ({ children, className, y = -2 }: { children: ReactNode; className?: string; y?: number }) => (
  <motion.div
    className={className}
    whileHover={{ y, transition: { ...spring.snappy } }}
    whileTap={{ scale: 0.985, transition: { duration: 0.1 } }}
  >
    {children}
  </motion.div>
);

// ── Magnetic hover (for buttons) ──
export const MagneticButton = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    className={className}
    whileHover={{ scale: 1.03, transition: spring.snappy }}
    whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
  >
    {children}
  </motion.div>
);

// ── Count-up (preserved from original, uses IntersectionObserver internally) ──
export { useCountUp } from "@/hooks/useReveal";

// ── Re-export motion for convenience ──
export { motion, useInView };
