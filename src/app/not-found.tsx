"use client";
import Image from "next/image";
import Link from "next/link";
import { easeOut, motion } from "framer-motion";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
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
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden flex items-center justify-center px-4 py-8">
      {/* Background Pattern */}
      <div className="absolute z-0 w-full h-full">
        <Image
          src="/error/Vector2.png"
          alt="Vector"
          fill
          className="object-cover"
        />
      </div>

      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-[var(--primary-green)]/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-32 h-32 bg-green-400/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-screen-2xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* 404 Image - Bigger and Static */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <Image
              src="/error/404.png"
              alt="404 Error"
              width={700}
              height={600}
              className="w-full max-w-md md:max-w-lg lg:max-w-3xl h-auto object-contain"
              priority
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8"
            variants={itemVariants}
          >
            {/* Error Code */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-600 text-sm font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Error 404
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
              variants={itemVariants}
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              <span className="text-red-500">Rất tiếc!</span>
              <br />
              <span className="text-gray-700">Trang không tồn tại</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg"
              variants={itemVariants}
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              Trang bạn đang tìm kiếm không còn tồn tại hoặc đã được di chuyển.
              <br className="hidden lg:block" />
              Hãy quay lại trang chủ để tiếp tục hành trình cùng{" "}
              <span className="text-[var(--primary-green)] font-semibold italic">
                GhepXe
              </span>
              !
            </motion.p>

            {/* Action Button - Only Home */}
            <motion.div
              className="flex justify-center lg:justify-start w-full"
              variants={itemVariants}
            >
              <Link href="/">
                <motion.button
                  className="bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] text-white px-10 py-5 rounded-full font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-4 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaHome className="text-2xl group-hover:scale-110 transition-transform duration-200" />
                  Về trang chủ
                </motion.button>
              </Link>
            </motion.div>

            {/* Back Button */}
            <motion.button
              className="text-gray-500 hover:text-[var(--primary-green)] flex items-center gap-2 text-base transition-colors duration-200 group mt-8"
              onClick={() => window.history.back()}
              variants={itemVariants}
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <FaArrowLeft className="text-sm group-hover:scale-110 transition-transform duration-200" />
              Quay lại trang trước
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
