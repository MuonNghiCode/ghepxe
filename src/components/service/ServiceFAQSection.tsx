"use client";

import { motion, AnimatePresence, easeOut } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const faqsData = {
  vi: [
    {
      id: 1,
      question: "Làm thế nào để tạo tài khoản GhépXe?",
      answer:
        "Bạn cần có địa chỉ email và số điện thoại hợp lệ để tạo tài khoản GhepXe. Sau khi nhập số điện thoại, hệ thống sẽ gửi đến bạn một mã OTP thông qua tin nhắn SMS với số điện thoại mà bạn vừa nhập.",
    },
    {
      id: 2,
      question: "Tôi có thể theo dõi đơn hàng không?",
      answer:
        "Hoàn toàn có! Bạn sẽ được cập nhật thời gian thực – từ lúc xe bắt đầu đến khi hàng được giao tận nơi.",
    },
    {
      id: 3,
      question: "Ghép đơn có an toàn không?",
      answer:
        "Rất an toàn. Mỗi đơn đều có hợp đồng điện tử, tài xế đã xác minh danh tính, và bạn có thể đánh giá sau khi giao.",
    },
  ],
  en: [
    {
      id: 1,
      question: "How to create a Ghepxe account?",
      answer:
        "You need a valid email address and phone number to create a Ghepxe account. After entering your phone number, the system will send you an OTP code via SMS to the number you provided.",
    },
    {
      id: 2,
      question: "Can I track my orders?",
      answer:
        "Absolutely! You will receive real-time updates – from when the vehicle starts to when your goods are delivered.",
    },
    {
      id: 3,
      question: "Is order matching safe?",
      answer:
        "Very safe. Each order has an e-contract, drivers are verified, and you can rate after delivery.",
    },
  ],
};

const texts = {
  vi: {
    title1: "Câu hỏi",
    title2: "thường gặp",
    desc: "Những câu hỏi phổ biến nhất từ khách hàng GhepXe",
    btn: "Xem thêm",
  },
  en: {
    title1: "Frequently",
    title2: "Asked Questions",
    desc: "Most common questions from Ghepxe customers",
    btn: "See more",
  },
};

export default function ServiceFAQSection() {
  const { language } = useLanguage();
  const faqs = faqsData[language as keyof typeof faqsData];
  const t = texts[language as keyof typeof texts];

  const [expandedId, setExpandedId] = useState<number | null>(1);

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

  const faqVariants = {
    hidden: { opacity: 0, x: 20 },
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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-2xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left Title */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-8"
              style={{ fontFamily: "var(--font-roboto)" }}
              variants={itemVariants}
            >
              <span className="text-gray-800">{t.title1}</span>
              <br />
              <motion.span
                className="text-[var(--primary-green)] relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {t.title2}
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-[var(--primary-green)]/30 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-roboto)" }}
              variants={itemVariants}
            >
              {t.desc}
            </motion.p>

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
                <span className="text-lg font-semibold">{t.btn}</span>
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

          {/* Right FAQs */}
          <motion.div className="space-y-6" variants={containerVariants}>
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-100 hover:border-[var(--primary-green)]/20 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
                variants={faqVariants}
                whileHover={{ y: -2 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.button
                  className="w-full p-6 text-left flex items-center justify-between group"
                  onClick={() =>
                    setExpandedId(expandedId === faq.id ? null : faq.id)
                  }
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.h3
                    className="text-xl font-semibold text-gray-800 pr-4 group-hover:text-[var(--primary-green)] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-roboto)" }}
                  >
                    {faq.question}
                  </motion.h3>
                  <motion.div
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary-green)]/10 transition-colors duration-200"
                    animate={{
                      rotate: expandedId === faq.id ? 45 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-gray-600 group-hover:text-[var(--primary-green)] transition-colors duration-200"
                    >
                      <path
                        d="M12 5V19M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      className="px-6 pb-6"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <motion.p
                        className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
                        style={{ fontFamily: "var(--font-roboto)" }}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
