"use client";
import { easeOut, motion } from "framer-motion";

export default function Statcard() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 1.8,
        ease: easeOut,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 2.0 + index * 0.2,
        ease: easeOut,
      },
    }),
  };

  const stats = [
    { number: "100+", label: "Đơn đặt hàng" },
    { number: "100%", label: "Đúng tiến độ" },
    { number: "100%", label: "Tiết kiệm chi phí" },
  ];

  return (
    <section className="absolute w-full">
      {/* Stat Cards - Outside section */}
      <motion.div
        className="relative -mt-50 pb-20 md:-mt-13 md:pb-0 z-30 flex justify-center px-4"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-[var(--primary-green)] text-white rounded-full flex shadow-xl w-full max-w-screen-xl relative overflow-hidden"
          whileHover={{
            scale: 1.01,
            boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Simple background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`px-8 py-4 md:px-12 md:py-6 lg:px-16 lg:py-6 text-center flex-1 relative ${
                index < stats.length - 1 ? "border-r border-white/20" : ""
              }`}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-white">
                {stat.number}
              </div>

              <div className="text-xs md:text-sm lg:text-base font-medium opacity-90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
