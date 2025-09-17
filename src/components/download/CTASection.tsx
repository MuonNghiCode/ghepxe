"use client";

import Image from "next/image";
import { motion, easeOut, easeInOut } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import FloatingParticle from "@/components/ui/FloatingParticle";

const texts = {
  vi: {
    title: "Bắt đầu hành trình tiết kiệm ngay hôm nay!",
    subtitle:
      "Tham gia cộng đồng hàng triệu người dùng đang sử dụng GhepXe để di chuyển thông minh và tiết kiệm",
    googlePlay: "Tải trên Google Play",
    appStore: "Tải trên Apple Store",
    stats: {
      downloads: { value: "1M+", label: "Lượt tải" },
      rating: { value: "4.8★", label: "Đánh giá" },
      users: { value: "500K+", label: "Người dùng" },
    },
  },
  en: {
    title: "Start your saving journey today!",
    subtitle:
      "Join millions of users who are using GhepXe for smart and economical transportation",
    googlePlay: "Get it on Google Play",
    appStore: "Download on Apple Store",
    stats: {
      downloads: { value: "1M+", label: "Downloads" },
      rating: { value: "4.8★", label: "Rating" },
      users: { value: "500K+", label: "Users" },
    },
  },
};

export default function CTASection() {
  const { language } = useLanguage();
  const t = texts[language as keyof typeof texts];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const statsVariants = {
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

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <motion.section
      className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-[var(--primary-green)] via-emerald-600 to-teal-700 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Floating Particles - Reduced on mobile */}
      <div className="hidden sm:block">
        <FloatingParticle
          size="small"
          color="white"
          position={{ top: "20%", left: "10%" }}
          delay={0}
          duration={4}
        />
        <FloatingParticle
          size="medium"
          color="white"
          position={{ top: "30%", right: "15%" }}
          delay={1}
          duration={5}
        />
        <FloatingParticle
          size="small"
          color="white"
          position={{ bottom: "25%", left: "20%" }}
          delay={2}
          duration={6}
        />
        <FloatingParticle
          size="medium"
          color="white"
          position={{ bottom: "35%", right: "10%" }}
          delay={0.5}
          duration={4.5}
        />
      </div>

      {/* Mobile only particles */}
      <div className="block sm:hidden">
        <FloatingParticle
          size="small"
          color="white"
          position={{ top: "15%", right: "10%" }}
          delay={0}
          duration={4}
        />
        <FloatingParticle
          size="small"
          color="white"
          position={{ bottom: "20%", left: "10%" }}
          delay={1}
          duration={5}
        />
      </div>

      {/* Animated Background Elements - Responsive */}
      <motion.div
        className="absolute top-6 sm:top-10 left-6 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-white/10 rounded-full blur-xl sm:blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-12 sm:bottom-20 right-6 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 bg-white/15 rounded-full blur-lg sm:blur-xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-screen-2xl mx-auto text-center relative z-10">
        {/* Title - Mobile optimized */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2"
          style={{ fontFamily: "var(--font-roboto)" }}
          variants={itemVariants}
        >
          {t.title}
        </motion.h2>

        {/* Subtitle - Mobile optimized */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-100 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-2"
          style={{ fontFamily: "var(--font-roboto)" }}
          variants={itemVariants}
        >
          {t.subtitle}
        </motion.p>

        {/* Download Buttons - Always horizontal */}
        <motion.div
          className="flex flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-8 sm:mb-12 md:mb-16 px-2"
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
              className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg group-hover:shadow-xl sm:group-hover:shadow-2xl transition-all duration-300"
              whileHover={{
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Image
                src="/ggplay.png"
                alt={t.googlePlay}
                width={120}
                height={36}
                className="h-8 sm:h-10 md:h-12 w-auto"
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
              className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg group-hover:shadow-xl sm:group-hover:shadow-2xl transition-all duration-300"
              whileHover={{
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Image
                src="/apple.png"
                alt={t.appStore}
                width={120}
                height={36}
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Stats - Always horizontal, mobile optimized */}
        <motion.div
          className="flex flex-row justify-center items-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 text-emerald-100 px-2"
          variants={containerVariants}
        >
          <motion.div
            className="text-center group cursor-pointer"
            variants={statsVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1 group-hover:text-emerald-200 transition-colors duration-200"
              style={{ fontFamily: "var(--font-roboto)" }}
              variants={pulseVariants}
              animate="animate"
            >
              {t.stats.downloads.value}
            </motion.div>
            <div
              className="text-xs sm:text-sm lg:text-base opacity-90 whitespace-nowrap"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              {t.stats.downloads.label}
            </div>
          </motion.div>

          {/* Divider - Mobile responsive */}
          <motion.div
            className="w-px h-8 sm:h-10 md:h-12 bg-emerald-300/30"
            initial={{ height: 0 }}
            animate={{ height: "2rem" }}
            transition={{ delay: 1.5, duration: 0.6 }}
          />

          <motion.div
            className="text-center group cursor-pointer"
            variants={statsVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <motion.div
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1 group-hover:text-emerald-200 transition-colors duration-200"
              style={{ fontFamily: "var(--font-roboto)" }}
              variants={pulseVariants}
              animate="animate"
              transition={{ delay: 0.5 }}
            >
              {t.stats.rating.value}
            </motion.div>
            <div
              className="text-xs sm:text-sm lg:text-base opacity-90 whitespace-nowrap"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              {t.stats.rating.label}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-px bg-emerald-300/30 h-8 sm:h-10 md:h-12"
            initial={{ height: 0 }}
            animate={{ height: "2rem" }}
            transition={{ delay: 1.7, duration: 0.6 }}
          />

          <motion.div
            className="text-center group cursor-pointer"
            variants={statsVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <motion.div
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1 group-hover:text-emerald-200 transition-colors duration-200"
              style={{ fontFamily: "var(--font-roboto)" }}
              variants={pulseVariants}
              animate="animate"
              transition={{ delay: 1 }}
            >
              {t.stats.users.value}
            </motion.div>
            <div
              className="text-xs sm:text-sm lg:text-base opacity-90 whitespace-nowrap"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              {t.stats.users.label}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom decorative element - Mobile responsive */}
        <motion.div
          className="mt-6 sm:mt-8 flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="w-12 sm:w-16 h-0.5 sm:h-1 bg-white/30 rounded-full"
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
