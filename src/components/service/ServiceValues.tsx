"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface ValueCard {
  icon: string;
  title: string;
  description: string;
  alt: string;
}

const valueCardsData = {
  vi: [
    {
      icon: "/aboutus/icon/toiuu.svg",
      title: "Chu Đáo",
      description:
        "Hỗ trợ nhanh chóng – tận tâm từ lúc tạo đơn đến khi hàng được giao.",
      alt: "Chu Đáo",
    },
    {
      icon: "/aboutus/icon/tincay.svg",
      title: "Tin Cậy",
      description:
        "Đảm bảo an toàn, minh bạch, rõ hành trình, luôn có hợp đồng điện tử.",
      alt: "Tin Cậy",
    },
    {
      icon: "/aboutus/icon/benvung.svg",
      title: "Bền Vững",
      description:
        "Tối ưu xe trống chiều về, giảm thiểu khí thải CO₂ cho hành tinh xanh hơn.",
      alt: "Bền Vững",
    },
    {
      icon: "/aboutus/icon/linhhoat.svg",
      title: "Linh Hoạt",
      description:
        "Ghép đơn tiện tuyến, đa dạng loại hàng từ nông sản đến nhu yếu phẩm.",
      alt: "Linh Hoạt",
    },
  ],
  en: [
    {
      icon: "/aboutus/icon/toiuu.svg",
      title: "Thoughtful",
      description:
        "Quick and dedicated support from order creation to delivery.",
      alt: "Thoughtful",
    },
    {
      icon: "/aboutus/icon/tincay.svg",
      title: "Reliable",
      description:
        "Ensured safety, transparency, clear routes, always with e-contracts.",
      alt: "Reliable",
    },
    {
      icon: "/aboutus/icon/benvung.svg",
      title: "Sustainable",
      description:
        "Optimize empty vehicles, reduce CO₂ emissions for a greener planet.",
      alt: "Sustainable",
    },
    {
      icon: "/aboutus/icon/linhhoat.svg",
      title: "Flexible",
      description:
        "Flexible order matching, diverse goods from agricultural to essentials.",
      alt: "Flexible",
    },
  ],
};

const texts = {
  vi: {
    title: (
      <>
        Vì một hành trình{" "}
        <span className="text-[var(--primary-green)]">tiết kiệm</span> và{" "}
        <span className="text-[var(--primary-green)]">bền vững</span>
      </>
    ),
    desc: "Những giá trị cốt lõi tạo nên sự khác biệt của GhepXe",
  },
  en: {
    title: (
      <>
        For a <span className="text-[var(--primary-green)]">saving</span> and{" "}
        <span className="text-[var(--primary-green)]">sustainable</span> journey
      </>
    ),
    desc: "Core values that make Ghepxe different",
  },
};

export default function ServiceValues() {
  const { language } = useLanguage();
  const valueCards = valueCardsData[language as keyof typeof valueCardsData];
  const t = texts[language as keyof typeof texts];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="py-20 bg-[var(--white)]">
      <div className="max-w-screen-2xl mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Title Section */}
          <motion.div
            className="lg:col-span-2 mb-12 lg:mb-0"
            variants={itemVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 max-w-sm"
              style={{ fontFamily: "var(--font-roboto)" }}
              variants={itemVariants}
            >
              {t.title}
            </motion.h2>

            <motion.p
              className="mt-6 text-lg text-gray-600 leading-relaxed"
              style={{ fontFamily: "var(--font-roboto)" }}
              variants={itemVariants}
            >
              {t.desc}
            </motion.p>
          </motion.div>

          {/* Values Cards Section */}
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {valueCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className="bg-white rounded-2xl p-8 flex items-start gap-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-[var(--primary-green)]/20 transition-all duration-300"
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Icon Container */}
                  <div className="w-16 h-16 flex-shrink-0 bg-[var(--primary-green)]/10 rounded-2xl flex items-center justify-center">
                    <Image
                      src={card.icon}
                      alt={card.alt}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-xl font-bold text-gray-800 mb-3"
                      style={{ fontFamily: "var(--font-roboto)" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-gray-600 leading-relaxed text-base"
                      style={{ fontFamily: "var(--font-roboto)" }}
                    >
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
