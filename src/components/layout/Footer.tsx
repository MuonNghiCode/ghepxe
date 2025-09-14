"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { language } = useLanguage();

  // Texts for EN and VI
  const texts = {
    vi: {
      connect: "Kết nối với chúng tôi",
      cta: "Trở thành đối tác của GhepXe để có thêm nguồn thu nhập ổn định",
      contactBtn: "Liên hệ với GhepXe",
      company: "Công Ty",
      companyLinks: ["Về chúng tôi", "Chính sách", "Hợp tác", "Tuyển dụng"],
      services: "Dịch Vụ",
      serviceLinks: [
        "Ghép đơn cá nhân",
        "Ghép đơn doanh nghiệp",
        "Ghép đơn tiết kiệm",
        "Vận chuyển nhanh",
      ],
      contact: "Liên Hệ",
      phone: "Hotline",
      email: "Email",
      address: "Địa chỉ",
      addressText: "123 Đường ABC, Quận XYZ, TP.HCM",
      newsletter: "Nhận thông báo mới nhất",
      newsletterPlaceholder: "Nhập email của bạn...",
      copyright: "© 2025 GHEPXE. All rights reserved.",
      policy: ["Chính sách bảo mật", "Điều khoản sử dụng", "Bản đồ"],
    },
    en: {
      connect: "Connect with us",
      cta: "Become a GhepXe partner for stable extra income",
      contactBtn: "Contact GhepXe",
      company: "Company",
      companyLinks: ["About us", "Policy", "Partnership", "Careers"],
      services: "Services",
      serviceLinks: [
        "Personal ride share",
        "Business ride share",
        "Economy ride share",
        "Express delivery",
      ],
      contact: "Contact",
      phone: "Hotline",
      email: "Email",
      address: "Address",
      addressText: "123 ABC Street, XYZ District, HCMC",
      newsletter: "Get the latest updates",
      newsletterPlaceholder: "Enter your email...",
      copyright: "© 2025 GHEPXE. All rights reserved.",
      policy: ["Privacy Policy", "Terms of Use", "Sitemap"],
    },
  };

  const t = texts[language as keyof typeof texts];

  // Newsletter submit handler
  function handleSubmit(e?: React.MouseEvent<HTMLButtonElement>) {
    if (e) e.preventDefault();
    // You can add your newsletter logic here, e.g., API call or validation
    if (!email) {
      alert(
        language === "vi" ? "Vui lòng nhập email!" : "Please enter your email!"
      );
      return;
    }
    alert(
      language === "vi"
        ? `Đã đăng ký nhận thông báo với email: ${email}`
        : `Subscribed with email: ${email}`
    );
    setEmail("");
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <footer className="w-full bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300a982' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Top Section with CTA */}
      <motion.div
        className="relative z-10 pt-20 pb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-screen-2xl mx-auto px-6">
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-center gap-8"
            variants={itemVariants}
          >
            <div className="text-center lg:text-left">
              <motion.h3
                className="text-3xl md:text-5xl font-bold mb-4 text-gray-800"
                variants={itemVariants}
              >
                {language === "vi" ? (
                  <span className="text-[var(--primary-green)]">Kết nối</span>
                ) : (
                  <>
                    <span className="text-[var(--primary-green)]">
                      {t.connect.split(" ")[0]}
                    </span>
                    {" " + t.connect.split(" ").slice(1).join(" ")}
                  </>
                )}
                {language === "vi" && " với chúng tôi"}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-lg md:text-xl max-w-2xl"
                variants={itemVariants}
              >
                {t.cta}
              </motion.p>
            </div>

            <motion.button
              className="bg-gradient-to-r from-[var(--primary-green)] to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.contactBtn}
              <motion.span
                className="group-hover:translate-x-1 transition-transform duration-200"
                initial={false}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <motion.div
        className="relative z-10 border-t border-gray-300/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-screen-2xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-[var(--primary-green)] italic mb-6"
                style={{ fontFamily: "var(--font-roboto-serif)" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                GhepXe
              </motion.h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Nền tảng ghép xe thông minh giúp vận chuyển nhanh hơn, tiết kiệm
                hơn và minh bạch hơn.
              </p>

              {/* Social Media */}
              <div className="flex gap-4">
                {[
                  { icon: FaFacebookF, label: "Facebook" },
                  { icon: FaInstagram, label: "Instagram" },
                  { icon: FaTwitter, label: "Twitter" },
                  { icon: FaGoogle, label: "Google" },
                  { icon: FaLinkedinIn, label: "LinkedIn" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--primary-green)] hover:bg-[var(--primary-green)] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-gray-800 mb-6 relative">
                {t.company}
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[var(--primary-green)] rounded-full" />
              </h4>
              <ul className="space-y-4">
                {t.companyLinks.map((item: string, index: number) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[var(--primary-green)] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[var(--primary-green)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-gray-800 mb-6 relative">
                {t.services}
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[var(--primary-green)] rounded-full" />
              </h4>
              <ul className="space-y-4">
                {t.serviceLinks.map((item: string, index: number) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[var(--primary-green)] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[var(--primary-green)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Newsletter */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-gray-800 mb-6 relative">
                {t.contact}
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[var(--primary-green)] rounded-full" />
              </h4>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <motion.div
                  className="flex items-center gap-3 text-gray-600 group hover:text-[var(--primary-green)] transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaPhone className="text-[var(--primary-green)] group-hover:scale-110 transition-transform duration-200" />
                  <span>{t.phone}: (84) xxx xxx xxxx</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 text-gray-600 group hover:text-[var(--primary-green)] transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaEnvelope className="text-[var(--primary-green)] group-hover:scale-110 transition-transform duration-200" />
                  <span>{t.email}: support@ghepxe.com</span>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 text-gray-600 group hover:text-[var(--primary-green)] transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaMapMarkerAlt className="text-[var(--primary-green)] mt-1 group-hover:scale-110 transition-transform duration-200" />
                  <span>
                    {t.address}: {t.addressText}
                  </span>
                </motion.div>
              </div>

              {/* Newsletter */}
              <div>
                <p className="text-gray-600 mb-4">{t.newsletter}</p>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.newsletterPlaceholder}
                    className="w-full h-12 pl-4 pr-14 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent text-gray-800 placeholder-gray-500 transition-all duration-200 shadow-md"
                  />
                  <motion.button
                    onClick={handleSubmit}
                    className="absolute right-1 top-1 bg-gradient-to-r from-[var(--primary-green)] to-green-600 hover:from-green-600 hover:to-[var(--primary-green)] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IoSend className="text-white text-sm" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        className="relative z-10 border-t border-gray-300/50 py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-screen-2xl mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            variants={itemVariants}
          >
            <div className="text-gray-600 text-center md:text-left">
              {t.copyright}
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              {t.policy.map((item: string, index: number) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-[var(--primary-green)] transition-colors duration-200 text-sm"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
