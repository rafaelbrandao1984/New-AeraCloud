import { motion } from "motion/react";
import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({ children, className = "", glowColor = "rgba(16, 185, 129, 0.3)" }: GlowCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      style={{
        boxShadow: `0 0 40px ${glowColor}`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
}
