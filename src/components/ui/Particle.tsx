"use client";
import { motion } from "framer-motion";

interface ParticleProps {
  className?: string;
  particleColor?: string;
  particleCount?: number;
  positions?: Array<{
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    width?: string;
    height?: string;
  }>;
}

export default function Particle({
  className = "",
  particleColor = "var(--primary-green)",
  particleCount = 2,
  positions = [],
}: ParticleProps) {
  const particles = Array.from({ length: particleCount }, (_, i) => i);

  // Default positions nếu không có positions được truyền vào
  const defaultPositions = [
    {
      top: "-5rem",
      right: "-5rem",
      width: "10rem",
      height: "10rem",
    },
    {
      bottom: "-5rem",
      left: "-5rem",
      width: "15rem",
      height: "15rem",
    },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((particle, index) => {
        const position =
          positions[index] || defaultPositions[index] || defaultPositions[0];

        return (
          <motion.div
            key={particle}
            className="absolute rounded-full opacity-5"
            style={{
              backgroundColor: particleColor,
              width: position.width || "10rem",
              height: position.height || "10rem",
              top: position.top || "auto",
              bottom: position.bottom || "auto",
              left: position.left || "auto",
              right: position.right || "auto",
            }}
            animate={{
              scale: index === 0 ? [1, 1.2, 1] : [1.2, 1, 1.2],
              rotate: index === 0 ? [0, 180, 360] : [360, 180, 0],
            }}
            transition={{
              duration: index === 0 ? 20 : 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}
