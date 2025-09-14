"use client";
import { easeOut, motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Particle from "../ui/Particle";
import Image from "next/image";

export default function DownloadSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  const textVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const titleVariants = {
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: easeOut,
      },
    }),
  };

  const phoneVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: easeOut,
      },
    },
  };

  const features = [
    "Theo dõi đơn hàng",
    "Nhận thông báo thời gian thực",
    "Kết nối đối tác vận tải dễ dàng",
  ];

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen w-full bg-[var(--white)] py-12 sm:py-16 lg:py-20 flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="absolute z-0 top-0 w-full h-full">
        <Image
          src="/home/Vector1.png"
          alt="Vector"
          fill
          className="object-cover"
        />
      </div>

      {/* Particle Effects */}
      <Particle
        particleColor="var(--primary-green)"
        particleCount={3}
        positions={[
          { top: "10%", right: "5%", width: "6rem", height: "6rem" },
          { bottom: "20%", left: "8%", width: "8rem", height: "8rem" },
          { top: "60%", right: "15%", width: "5rem", height: "5rem" },
        ]}
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 w-full max-w-screen-2xl mx-auto px-4">
        {/* Left text */}
        <motion.div
          className="flex flex-col items-center md:items-start justify-center gap-4 md:w-1/2 text-center md:text-left"
          variants={textVariants}
        >
          <motion.h3
            className="text-2xl md:text-5xl lg:text-6xl font-bold text-[var(--gray-text)] mb-2"
            variants={titleVariants}
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            Tải Ngay Ứng Dụng
          </motion.h3>

          <motion.h2
            className="text-[var(--primary-green)] text-4xl md:text-7xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-green)] to-green-600 bg-clip-text italic"
            style={{ fontFamily: "var(--font-roboto-serif)" }}
            variants={titleVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            GhepXe
          </motion.h2>

          <motion.ul
            className="text-[var(--gray-text)] text-base md:text-lg lg:text-xl space-y-4 font-medium"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 group justify-center md:justify-start"
                custom={index}
                variants={listItemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-3 h-3 bg-[var(--primary-green)] rounded-full flex-shrink-0"
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.2 }}
                />
                <span
                  className="group-hover:text-[var(--primary-green)] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Call to action */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          ></motion.div>
        </motion.div>
        {/* Right: Phone Image */}
        <motion.div
          className="flex flex-col items-center md:w-1/2 relative"
          variants={phoneVariants}
        >
          <Link href="/download">
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="/home/phone.png"
                alt="QR và nút tải app"
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating dots animation */}
              <motion.div
                className="absolute top-10 right-10 w-2 h-2 bg-[var(--primary-green)] rounded-full"
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-green-400 rounded-full"
                animate={{
                  y: [10, -10, 10],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
