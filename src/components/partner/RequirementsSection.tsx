"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";

interface Requirement {
  id: number;
  text: string;
}

const requirements: Requirement[] = [
  {
    id: 1,
    text: "CCCD (mặt trước & sau)",
  },
  {
    id: 2,
    text: "Cà vẹt xe (Giấy đăng ký phương tiện)",
  },
  {
    id: 3,
    text: "Giấy phép lái xe phù hợp với loại xe đăng ký",
  },
  {
    id: 4,
    text: "Ảnh xe 4 góc bên cạnh",
  },
  {
    id: 5,
    text: "Tuyến đường thường chạy",
  },
  {
    id: 6,
    text: "Số điện thoại để nhận mã OTP đăng ký",
  },
];

export default function RequirementsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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

  const listItemVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="py-20 bg-[var(--white)]">
      <div className="max-w-screen-2xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-10 leading-tight flex items-center gap-3"
              style={{ fontFamily: "var(--font-roboto)" }}
              variants={itemVariants}
            >
              <span className="text-gray-800">Bạn cần</span>
              <motion.span
                className="text-[var(--primary-green)] relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                chuẩn bị
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-[var(--primary-green)]/30 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </motion.span>
            </motion.h2>

            <motion.div
              className="space-y-6 mb-10"
              variants={containerVariants}
            >
              {requirements.map((requirement, index) => (
                <motion.div
                  key={requirement.id}
                  className="flex items-start gap-4 group"
                  variants={listItemVariants}
                  whileHover={{
                    x: 8,
                    transition: { duration: 0.2 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-3 h-3 bg-[var(--primary-green)] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  />
                  <motion.p
                    className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-200"
                    style={{ fontFamily: "var(--font-roboto)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {requirement.text}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.button
                className="bg-[var(--primary-green)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--primary-green)]/90 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl group"
                style={{ fontFamily: "var(--font-roboto)" }}
                whileHover={{
                  boxShadow: "0 10px 30px rgba(0, 169, 130, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-lg font-semibold">TẢI APP NGAY</span>
                <motion.div
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="var(--primary-green)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div className="flex justify-center" variants={imageVariants}>
            <motion.div
              className="relative w-full max-w-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-[var(--primary-green)]/10 to-[var(--primary-green)]/5 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Image
                  src="/partner/partner.png"
                  alt="Bạn cần chuẩn bị"
                  width={900}
                  height={900}
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                />

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6 bg-[var(--primary-green)]/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-4 h-4 bg-white/30 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
