"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const valueCardsData = {
  vi: [
    {
      icon: "/aboutus/icon/toiuu.svg",
      title: "Tối Ưu",
      description:
        "Tối ưu xe chiều về rỗng, ghép đơn dễ dàng, giảm lãng phí nhiên liệu.",
      alt: "Tối Ưu",
    },
    {
      icon: "/aboutus/icon/tincay.svg",
      title: "Tin Cậy",
      description:
        "Đơn hàng minh bạch, có hợp đồng điện tử – dễ kiểm soát, hạn chế rủi ro.",
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
        "Tự tạo chuyến – tự chọn đơn – chủ động hành trình và thu nhập.",
      alt: "Linh Hoạt",
    },
  ],
  en: [
    {
      icon: "/aboutus/icon/toiuu.svg",
      title: "Optimization",
      description:
        "Optimize empty return trips, easy order matching, reduce fuel waste.",
      alt: "Optimization",
    },
    {
      icon: "/aboutus/icon/tincay.svg",
      title: "Reliability",
      description:
        "Transparent orders, e-contracts – easy control, minimize risks.",
      alt: "Reliability",
    },
    {
      icon: "/aboutus/icon/benvung.svg",
      title: "Sustainability",
      description:
        "Optimize empty vehicles, reduce CO₂ emissions for a greener planet.",
      alt: "Sustainability",
    },
    {
      icon: "/aboutus/icon/linhhoat.svg",
      title: "Flexibility",
      description:
        "Create trips – choose orders – control your journey and income.",
      alt: "Flexibility",
    },
  ],
};

const benefitsData = {
  vi: [
    {
      title: "Tăng thu nhập từ mỗi chuyến",
      description:
        "Không chỉ dựa vào đơn chính - bạn có thể ghép thêm hàng chiều về để tối ưu doanh thu.",
    },
    {
      title: "Chủ động chọn tuyến phù hợp",
      description:
        "Dễ dàng chọn đơn theo tuyến, thời gian, tải trọng phù hợp với hành trình của bạn.",
    },
    {
      title: "Có hợp đồng rõ ràng",
      description:
        "Hệ thống tự tạo biên nhận và hợp đồng điện tử cho từng đơn hàng - minh bạch trách nhiệm.",
    },
    {
      title: "Tiết kiệm nhiên liệu, giảm CO₂",
      description:
        'Ứng dụng tự động tính toán khí thải CO₂, bạn tiết kiệm được sau mỗi chuyến xe. Bạn có thể theo dõi và chia sẻ đóng góp "xanh" của mình.',
    },
  ],
  en: [
    {
      title: "Increase income per trip",
      description:
        "Not only from main orders – you can add return cargo to optimize revenue.",
    },
    {
      title: "Choose suitable routes proactively",
      description:
        "Easily select orders by route, time, and load to fit your journey.",
    },
    {
      title: "Clear contracts",
      description:
        "System automatically generates receipts and e-contracts for each order – transparent responsibility.",
    },
    {
      title: "Save fuel, reduce CO₂",
      description:
        'The app automatically calculates CO₂ savings after each trip. You can track and share your "green" contribution.',
    },
  ],
};

const titles = {
  vi: {
    values: (
      <>
        <span className="whitespace-nowrap">Gia nhập</span>
        <br />
        <span className="whitespace-nowrap">Cộng Đồng</span>
        <br />
        <span className="whitespace-nowrap">Vận Tải</span>
        <br />
        <span className="whitespace-nowrap text-[var(--primary-green)]">
          GhepXe
        </span>
      </>
    ),
    why: (
      <>
        <span className="text-gray-800">Tại sao nên</span>
        <br />
        <span className="text-gray-800">tham gia</span>
        <br />
        <span className="text-[var(--primary-green)]">GhepXe</span>
        <span className="text-gray-800">?</span>
      </>
    ),
    whyDesc:
      "Khám phá những lợi ích tuyệt vời khi trở thành đối tác của GhepXe",
  },
  en: {
    values: (
      <>
        <span className="whitespace-nowrap">Join</span>
        <br />
        <span className="whitespace-nowrap">Transport</span>
        <br />
        <span className="whitespace-nowrap">Community</span>
        <br />
        <span className="whitespace-nowrap text-[var(--primary-green)]">
          GhepXe
        </span>
      </>
    ),
    why: (
      <>
        <span className="text-gray-800">Why join</span>
        <br />
        <span className="text-gray-800">GhepXe</span>
        <span className="text-gray-800">?</span>
      </>
    ),
    whyDesc: "Discover great benefits when becoming a GhepXe partner",
  },
};

export default function PartnerValues() {
  const { language } = useLanguage();
  const valueCards = valueCardsData[language as keyof typeof valueCardsData];
  const benefits = benefitsData[language as keyof typeof benefitsData];
  const t = titles[language as keyof typeof titles];

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
    <section className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Values Section */}
        <motion.div
          className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-20"
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800"
              style={{ fontFamily: "var(--font-roboto)" }}
              variants={itemVariants}
            >
              {t.values}
            </motion.h2>
          </motion.div>

          {/* Values Cards */}
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {valueCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-lg border border-gray-100 hover:border-[var(--primary-green)]/20 transition-all duration-300"
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-[var(--primary-green)]/10 rounded-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={card.icon}
                      alt={card.alt}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold text-gray-800 mb-2"
                      style={{ fontFamily: "var(--font-roboto)" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-sm text-gray-600 leading-relaxed"
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

        {/* Why Join Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Benefits List */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0"
                variants={itemVariants}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  className="text-xl font-semibold text-gray-800 mb-4"
                  style={{ fontFamily: "var(--font-roboto)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {benefit.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: "var(--font-roboto)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  {benefit.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Title Section */}
          <motion.div
            className="flex items-center justify-center lg:justify-start"
            variants={itemVariants}
          >
            <div className="text-left">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-roboto)" }}
                variants={itemVariants}
              >
                {t.why}
              </motion.h2>

              <motion.p
                className="mt-6 text-lg text-gray-600 leading-relaxed max-w-md"
                style={{ fontFamily: "var(--font-roboto)" }}
                variants={itemVariants}
              >
                {t.whyDesc}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
