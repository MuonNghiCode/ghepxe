"use client";
import { motion } from "framer-motion";
export default function Statcard() {
  return (
    <section className="absolute w-full">
      {/* Stat Cards - Outside section */}
      <motion.div
        className="relative -mt-50 pb-20 md:-mt-13 md:pb-0 z-30 flex justify-center px-4 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <div className="bg-[var(--primary-green)] text-white rounded-full  flex shadow-xl backdrop-blur-sm w-full max-w-screen-xl">
          <div className="px-4 py-3 md:px-6 md:py-4 text-center border-r border-white/20 flex-1">
            <div className="text-xl md:text-4xl font-bold">100+</div>
            <div className="text-xs md:text-2xl font-medium opacity-90">
              Đơn đặt hàng
            </div>
          </div>

          <div className="px-4 py-3 md:px-6 md:py-4 text-center border-r border-white/20 flex-1">
            <div className="text-xl md:text-4xl font-bold">100%</div>
            <div className="text-xs md:text-2xl font-medium opacity-90">
              Đúng tiến độ
            </div>
          </div>

          <div className="px-4 py-3 md:px-6 md:py-4 text-center flex-1">
            <div className="text-xl md:text-4xl font-bold">100%</div>
            <div className="text-xs md:text-2xl font-medium opacity-90">
              Tiết kiệm chi phí
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
