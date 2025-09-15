"use client";

import { easeInOut, motion } from "framer-motion";

interface FloatingParticleProps {
  size?: "small" | "medium" | "large";
  color?: "white" | "green";
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay?: number;
  duration?: number;
}

export default function FloatingParticle({
  size = "medium",
  color = "white",
  position,
  delay = 0,
  duration = 3,
}: FloatingParticleProps) {
  const sizeClasses = {
    small: "w-1 h-1",
    medium: "w-2 h-2",
    large: "w-3 h-3",
  };

  const colorClasses = {
    white: "bg-white/30",
    green: "bg-[var(--primary-green)]/40",
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      x: [0, 5, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: easeInOut,
        delay: delay,
      },
    },
  };

  const positionStyles = {
    ...(position.top && { top: position.top }),
    ...(position.bottom && { bottom: position.bottom }),
    ...(position.left && { left: position.left }),
    ...(position.right && { right: position.right }),
  };

  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} ${colorClasses[color]} rounded-full`}
      style={positionStyles}
      variants={floatingVariants}
      animate="animate"
      initial={{ opacity: 0 }}
    />
  );
}
