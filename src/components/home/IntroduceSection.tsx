"use client";
import { easeInOut, motion, useInView } from "framer-motion";
import { useRef } from "react";
import Particle from "../ui/Particle";

export default function IntroduceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.3, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: easeInOut,
        delay: 0.5,
      },
    },
  };

  const benefitsData = [
    {
      title: "Ghép xe linh hoạt",
      desc: "Tự động kết nối đơn hàng theo tuyến và thời gian, giúp tận dụng xe rỗng hiệu quả",
    },
    {
      title: "Tiết kiệm chi phí",
      desc: "Giảm đến 30% chi phí logistics nhờ tối ưu tải trọng và không phí trung gian",
    },
    {
      title: "Đa dạng hàng hóa",
      desc: "Hỗ trợ từ hàng nhỏ lẻ, dễ vỡ đến hàng nặng, hàng cần điều kiện đặc biệt",
    },
    {
      title: "Theo dõi thời gian thực",
      desc: "Cập nhật trạng thái vận chuyển liên tục – rõ ràng, minh bạch từng bước",
    },
    {
      title: "An toàn & minh bạch",
      desc: "Tất cả thông tin đơn hàng và tài xế đều được lưu vết và kiểm soát tập trung",
    },
    {
      title: "Giảm thiểu khí thải",
      desc: "Tận dụng những chuyến xe rỗng giúp giảm thiểu 90% lượng CO2 thải ra môi trường",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full bg-white min-h-screen py-12 sm:py-16 lg:py-20 flex items-center justify-center "
    >
      <img
        src="home/Vector.png"
        alt="Vector"
        className="absolute z-0 w-full h-full object-cover "
      />
      <Particle
        particleColor="var(--primary-green)"
        particleCount={2}
        positions={[
          { bottom: "-8%", right: "-3%", width: "10rem", height: "10rem" },
          { top: "15%", left: "8%", width: "12rem", height: "12rem" },
        ]}
      />

      <motion.div
        className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center">
          {/* Left benefits */}
          <motion.div
            className="flex flex-col gap-16 xl:gap-20 flex-1 text-right pr-8 "
            variants={containerVariants}
          >
            {benefitsData.slice(0, 3).map((item, index) => (
              <motion.div key={index} variants={leftItemVariants}>
                <h3
                  className="text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-3 text-[var(--primary-green)]"
                  style={{ fontFamily: "var(--font-roboto-serif)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[var(--gray-text)] text-base xl:text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Truck image */}
          <div className="relative flex-shrink-0 flex items-center justify-center ">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[500px] md:h-[600px] rounded-full bg-green-500/20 blur-3xl z-0" />
            <motion.img
              src="/home/3d-truck.png"
              alt="3d-truck"
              className="relative z-10 hidden md:block md:w-[650px] h-auto"
              variants={imageVariants}
            />
          </div>

          {/* Right benefits */}
          <motion.div
            className="flex flex-col gap-16 xl:gap-20 flex-1 text-left pl-8 "
            variants={containerVariants}
          >
            {benefitsData.slice(3, 6).map((item, index) => (
              <motion.div key={index} variants={rightItemVariants}>
                <h3
                  className="text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-3 text-[var(--primary-green)]"
                  style={{ fontFamily: "var(--font-roboto-serif)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[var(--gray-text)] text-base xl:text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile & Tablet Layout - No Image */}
        <div className="lg:hidden">
          {/* Mobile Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12"
            variants={containerVariants}
          >
            {benefitsData.map((item, index) => (
              <motion.div
                key={index}
                className="text-center sm:text-left bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                variants={mobileItemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[var(--primary-green)]"
                  style={{ fontFamily: "var(--font-roboto-serif)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[var(--gray-text)] text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
