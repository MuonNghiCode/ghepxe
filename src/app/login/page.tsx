"use client";
import LoginForm from "@/components/auth/LoginForm";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-white">
      {/* Slow-moving fog/mist overlay layers with brand green colors */}

      {/* First fog layer - primary green */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#00a982]/20 via-[#00d4aa]/10 to-transparent rounded-full blur-3xl"></div>
      </motion.div>

      {/* Second fog layer - secondary green */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [0, -120, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#00d4aa]/18 via-[#00c49c]/12 to-transparent rounded-full blur-3xl"></div>
      </motion.div>

      {/* Third fog layer - center floating with mixed greens */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#00b894]/15 via-[#00a982]/10 to-[#00d4aa]/8 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Fourth fog layer - teal accent */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [30, -30, 30],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#00c49c]/15 via-transparent to-[#00d4aa]/10 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Fifth fog layer - lighter green ambient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [-40, 40, -40],
          y: [15, -15, 15],
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-gradient-to-bl from-[#00e6b8]/12 via-[#00d4aa]/15 to-transparent rounded-full blur-3xl"></div>
      </motion.div>

      {/* Login Form with entrance animation */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="relative z-10"
      >
        <LoginForm />
      </motion.div>
    </div>
  );
}
