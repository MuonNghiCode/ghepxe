"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import FloatingParticle from "../ui/FloatingParticle";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="relative h-[60vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: easeOut }}
      >
        <Image
          src="/contact/Home Page Image.png"
          alt="Contact Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        {/* Animated Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Floating Particles */}
        <FloatingParticle
          size="medium"
          color="white"
          position={{ top: "5rem", right: "5rem" }}
          delay={0}
          duration={3}
        />

        <FloatingParticle
          size="large"
          color="green"
          position={{ bottom: "8rem", left: "8rem" }}
          delay={1}
          duration={4}
        />

        <FloatingParticle
          size="small"
          color="white"
          position={{ top: "33%", right: "33%" }}
          delay={2}
          duration={2.5}
        />

        <FloatingParticle
          size="medium"
          color="green"
          position={{ top: "60%", right: "20%" }}
          delay={0.5}
          duration={3.5}
        />

        <FloatingParticle
          size="small"
          color="white"
          position={{ bottom: "20%", right: "60%" }}
          delay={1.5}
          duration={3}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-left text-white pt-10 px-6 md:px-8 lg:px-16 max-w-screen-2xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-6 drop-shadow-2xl leading-tight font-bold"
          variants={itemVariants}
        >
          <motion.span
            className="relative inline-block italic"
            style={{
              color: "var(--primary-green)",
              fontFamily: "var(--font-roboto-serif)",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            GhepXe
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-[var(--primary-green)]/50 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.5, duration: 1 }}
            />
            {/* Glowing Effect */}
            <motion.div
              className="absolute inset-0 text-[var(--primary-green)] blur-sm -z-10 italic"
              style={{ fontFamily: "var(--font-roboto-serif)" }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              GhepXe
            </motion.div>
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div className="relative" variants={itemVariants}>
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white drop-shadow-lg leading-tight font-bold mb-8"
            style={{ fontFamily: "var(--font-roboto)" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Luôn Lắng Nghe Bạn
          </motion.p>

          {/* Animated Line */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[var(--primary-green)] to-transparent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-md"
          style={{ fontFamily: "var(--font-roboto)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Mọi ý kiến, góp ý của bạn đều quan trọng với chúng tôi. Hãy chia sẻ để
          GhepXe ngày càng hoàn thiện hơn.
        </motion.p>
      </motion.div>
    </section>
  );
}
