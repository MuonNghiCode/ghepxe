"use client";
import { motion } from "framer-motion";

export default function HomeHeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-start bg-no-repeat  md:bg-[length:110%_150%] overflow-hidden"
      style={{
        backgroundImage: "url('/home/hero-bg2.png')",
        backgroundPosition: "left 75% ",
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80  to-black/20" />
      <motion.img
        src="/home/hero-bg1.png"
        alt="Hero"
        className="absolute z-10 pointer-events-none overflow-hidden"
        style={{
          bottom: "-10%",
          right: "-5%",
          width: "110%",
          height: "150%",
          objectFit: "cover",
          position: "absolute",
          backgroundPosition: "left 75%",
        }}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="relative z-10 p-10 rounded-xl max-w-screen-xl mx-auto w-full h-full top-0">
        <h1 className="text-8xl font-bold mb-4 text-white italic">Ghepxe</h1>
        <h2 className="text-white">
          Ghép đơn linh hoạt,
          <br />
          tiết kiệm chi phí,
          <br />
          giảm khí thải.
        </h2>
        <button className="px-6 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
          Bắt đầu
        </button>
      </div>
    </section>
  );
}
