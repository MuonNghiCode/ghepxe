"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import FloatingParticle from "@/components/ui/FloatingParticle";

const texts = {
  vi: {
    title1: "Tải ứng dụng",
    title2: "GhepXe",
    title3: "ngay!",
    googlePlay: "Tải trên Google Play",
    appStore: "Tải trên Apple Store",
    appInterface: "Giao diện ứng dụng GhepXe",
  },
  en: {
    title1: "Download",
    title2: "GhepXe",
    title3: "app now!",
    googlePlay: "Get it on Google Play",
    appStore: "Download on Apple Store",
    appInterface: "GhepXe App Interface",
  },
};

export default function HeroSection() {
  const { language } = useLanguage();
  const t = texts[language as keyof typeof texts];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: easeOut,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.section
      className="bg-gradient-to-br from-teal-50 via-emerald-50 to-white py-12 sm:py-16 md:py-20 px-4 pt-24 sm:pt-32 md:pt-40 overflow-hidden relative min-h-screen flex items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Floating Particles - Reduced for mobile */}
      <div className="hidden sm:block">
        <FloatingParticle
          size="large"
          color="green"
          position={{ top: "20%", left: "10%" }}
          delay={0}
          duration={4}
        />
        <FloatingParticle
          size="medium"
          color="green"
          position={{ top: "15%", right: "15%" }}
          delay={1}
          duration={5}
        />
        <FloatingParticle
          size="large"
          color="green"
          position={{ top: "60%", left: "20%" }}
          delay={1.5}
          duration={4.5}
        />
      </div>

      {/* Mobile particles - smaller and fewer */}
      <div className="block sm:hidden">
        <FloatingParticle
          size="small"
          color="green"
          position={{ top: "15%", right: "10%" }}
          delay={0}
          duration={4}
        />
        <FloatingParticle
          size="small"
          color="white"
          position={{ bottom: "40%", left: "10%" }}
          delay={1}
          duration={5}
        />
      </div>

      <FloatingParticle
        size="small"
        color="white"
        position={{ bottom: "30%", left: "5%" }}
        delay={2}
        duration={3}
      />
      <FloatingParticle
        size="medium"
        color="white"
        position={{ bottom: "40%", right: "20%" }}
        delay={0.5}
        duration={6}
      />
      <FloatingParticle
        size="small"
        color="green"
        position={{ top: "40%", right: "10%" }}
        delay={2.5}
        duration={3.5}
      />

      {/* Enhanced Background Elements - Responsive */}
      <motion.div
        className="absolute top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-[var(--primary-green)]/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-5 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 bg-emerald-300/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-screen-2xl mx-auto relative z-10 w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={containerVariants}
        >
          {/* Left Content */}
          <motion.div
            className="space-y-6 md:space-y-8 lg:pr-8 text-center lg:text-left"
            variants={textVariants}
          >
            <motion.div
              className="space-y-3 md:space-y-4"
              variants={containerVariants}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-roboto)" }}
                variants={titleVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {t.title1}
              </motion.h1>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-roboto)" }}
                variants={titleVariants}
                transition={{ delay: 0.2 }}
              >
                <motion.span
                  className="text-[var(--primary-green)] relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {t.title2}
                  <motion.div
                    className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 bg-[var(--primary-green)]/30 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  />
                </motion.span>{" "}
                <motion.span
                  className="text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {t.title3}
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Download Buttons - Mobile Optimized */}
            <motion.div
              className="flex flex-row gap-3 sm:gap-4 pt-4 items-center justify-center lg:justify-start"
              variants={containerVariants}
            >
              <motion.a
                href="#"
                className="group block"
                variants={buttonVariants}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  whileHover={{
                    boxShadow: "0 8px 16px rgba(0, 169, 130, 0.15)",
                  }}
                >
                  <Image
                    src="/ggplay.png"
                    alt={t.googlePlay}
                    width={140}
                    height={42}
                    className="h-9 sm:h-12 w-auto"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </motion.a>

              <motion.a
                href="#"
                className="group block"
                variants={buttonVariants}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  whileHover={{
                    boxShadow: "0 8px 16px rgba(0, 169, 130, 0.15)",
                  }}
                >
                  <Image
                    src="/apple.png"
                    alt={t.appStore}
                    width={140}
                    height={42}
                    className="h-9 sm:h-12 w-auto"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </motion.a>
            </motion.div>

            {/* Stats - Always Horizontal */}
            <motion.div
              className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 pt-4"
              variants={containerVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <motion.div
                className="flex items-center gap-1.5 sm:gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[var(--primary-green)] rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm text-gray-600 font-medium whitespace-nowrap">
                  {language === "vi" ? "Miễn phí tải về" : "Free download"}
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-1.5 sm:gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm text-gray-600 font-medium whitespace-nowrap">
                  {language === "vi" ? "Cập nhật liên tục" : "Regular updates"}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Mobile Optimized Phone */}
          <motion.div
            className="relative flex justify-center items-center lg:justify-end mt-8 lg:mt-0"
            variants={imageVariants}
          >
            <motion.div className="relative w-full max-w-md lg:max-w-none">
              {/* Background decoration - Responsive */}
              <motion.div
                className="absolute -top-6 sm:-top-10 -right-6 sm:-right-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-[var(--primary-green)]/20 to-transparent rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-tr from-emerald-300/30 to-transparent rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Main Phone Display - Mobile Optimized */}
              <motion.div
                className="relative z-10"
                whileHover={{
                  scale: 1.01,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[var(--primary-green)]/10 to-emerald-400/10 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Image
                  src="/download/download.png"
                  alt={t.appInterface}
                  width={600}
                  height={400}
                  className="w-full h-auto drop-shadow-2xl relative z-10 max-w-sm sm:max-w-md lg:max-w-none mx-auto"
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 600px"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
