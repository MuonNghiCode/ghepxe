"use client";
import { easeInOut, easeOut, motion, useInView } from "framer-motion";
import { useRef } from "react";
import Particle from "../ui/Particle";

export default function PartnerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };

  const titleLineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative min-h-[500px] flex items-center justify-center w-full bg-[#efefef] py-16 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Particles */}
      <Particle
        particleColor="var(--primary-green)"
        particleCount={2}
        positions={[
          { top: "-9%", right: "-3%", width: "10rem", height: "10rem" },
          { bottom: "15%", left: "8%", width: "12rem", height: "12rem" },
        ]}
      />

      <div className="flex flex-col w-full max-w-screen-2xl mx-auto px-4 relative z-10">
        {/* Container cho ảnh và nội dung */}
        <div className="flex flex-col md:px-30 lg:flex-row items-center gap-12 lg:gap-20 mb-12 ">
          {/* Ảnh bên trái */}
          <motion.div
            className="flex-shrink-0 w-full lg:w-auto"
            variants={imageVariants}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/home/hand.png"
                alt="hand"
                className="w-full lg:w-full h-auto object-cover "
              />
            </motion.div>
          </motion.div>

          {/* Nội dung bên phải */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={textVariants}
          >
            <motion.h2
              className="text-[var(--primary-green)] text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-roboto-serif)" }}
              variants={textVariants}
            >
              <motion.span
                className="block mb-2 bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] bg-clip-text text-transparent"
                variants={titleLineVariants}
              >
                Đồng hành thật
              </motion.span>
              <motion.span
                className="block mb-2 bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] bg-clip-text text-transparent"
                variants={titleLineVariants}
              >
                Đơn hàng thật
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] bg-clip-text text-transparent"
                variants={titleLineVariants}
              >
                Niềm tin thật
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-[var(--gray-text)] text-lg md:text-2xl mb-8 lg:max-w-xl leading-relaxed"
              variants={itemVariants}
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              <span className="font-bold text-[var(--primary-green)]">
                Ghepxe
              </span>{" "}
              mang đến nền tảng vận tải thông minh giúp bạn nhận đơn hàng ổn
              định mỗi ngày một cách minh bạch, thuận tiện và đáng tin cậy.
            </motion.p>
          </motion.div>
        </div>

        {/* Button section với thiết kế cải tiến */}
        <motion.div className="flex justify-center" variants={buttonVariants}>
          <motion.div
            className="bg-[var(--primary-green)] w-full rounded-3xl flex flex-col sm:flex-row justify-between items-center p-8 shadow-2xl relative overflow-hidden"
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              y: -2,
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            <motion.div
              className="text-white mb-4 sm:mb-0 text-center sm:text-left z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="font-bold text-2xl md:text-3xl mb-2">
                Bạn có xe?
              </h3>
              <p className="text-xl md:text-2xl font-medium opacity-90">
                Muốn có đơn đều?
              </p>
            </motion.div>

            <motion.button
              className="bg-white text-[var(--primary-green)] font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg relative overflow-hidden group z-10"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="relative z-10">Trở Thành Đối Tác</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
