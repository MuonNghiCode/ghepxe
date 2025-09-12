"use client";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock } from "lucide-react";
import Link from "next/link";

export default function HomeHeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-no-repeat bg-cover md:bg-[length:100%_130%] overflow-hidden "
      style={{
        backgroundImage: "url('/home/hero-bg2.png')",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 md:bg-gradient-to-r md:from-black/80 md:to-black/20" />
      <motion.img
        src="/home/hero-bg1.png"
        alt="Hero"
        className="absolute z-10 pointer-events-none hidden md:block"
        style={{
          bottom: "-10%",
          right: "-5%",
          width: "100%",
          height: "130%",
          objectFit: "cover",
          position: "absolute",
          backgroundPosition: "left 75%",
        }}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative z-20 flex justify-center w-full">
        <div className="max-w-screen-2xl w-full px-4 py-8 md:px-10 md:py-16">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 md:mb-8 text-[var(--primary-green)] italic leading-none text-center md:text-left"
            style={{ fontFamily: "var(--font-roboto-serif)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ghepxe
          </motion.h1>

          <div className="max-w-4xl flex flex-col gap-6 md:gap-10">
            <motion.h2
              className="text-white text-lg md:text-4xl lg:text-5xl font-light leading-tight text-center md:text-left"
              style={{ fontFamily: "var(--font-roboto)" }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.span
                className="block mb-1 md:mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Ghép đơn{" "}
                <span className="text-[var(--primary-green)] font-medium">
                  linh hoạt
                </span>
              </motion.span>
              <motion.span
                className="block mb-1 md:mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                tiết kiệm{" "}
                <span className="text-[var(--primary-green)] font-medium">
                  chi phí
                </span>
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                giảm{" "}
                <span className="text-[var(--primary-green)] font-medium">
                  khí thải
                </span>
              </motion.span>
            </motion.h2>

            <motion.div
              className="flex flex-row gap-3 md:gap-4 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Link
                href="download"
                className="flex items-center justify-center group px-5 py-4 md:px-8 rounded-xl bg-[var(--primary-green)] text-white font-semibold hover:bg-[var(--primary-green)]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg flex-1 md:flex-none md:min-w-[200px] h-[56px]"
              >
                <span className="flex items-center justify-center gap-2 text-sm md:text-base">
                  <span className="hidden sm:inline">Ghép xe ngay</span>
                  <span className="sm:hidden">Ghép xe</span>
                  <div className="flex items-center justify-center">
                    <div className="bg-white rounded-full p-1 shadow">
                      <ArrowRight
                        size={14}
                        className="md:w-4 md:h-4"
                        color="var(--primary-green)"
                      />
                    </div>
                  </div>
                </span>
              </Link>

              <Link
                href="about-us"
                className="flex items-center justify-center px-5 md:px-8 rounded-xl border-2 border-white/30 text-white font-semibold hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex-1 md:flex-none md:min-w-[200px] h-[58px] text-sm md:text-base"
              >
                <span className="hidden sm:inline">Tìm hiểu thêm</span>
                <span className="sm:hidden">Tìm hiểu</span>
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-row items-center gap-3 md:gap-8 text-white/80 text-xs md:text-sm mt-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="flex items-center gap-1 md:gap-2">
                <Shield
                  size={14}
                  className="text-[var(--primary-green)] md:w-4 md:h-4"
                />
                <span className="whitespace-nowrap">Miễn phí đăng ký</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Shield
                  size={14}
                  className="text-[var(--primary-green)] md:w-4 md:h-4"
                />
                <span className="whitespace-nowrap">An toàn bảo mật</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Clock
                  size={14}
                  className="text-[var(--primary-green)] md:w-4 md:h-4"
                />
                <span className="whitespace-nowrap">Hỗ trợ 24/7</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
