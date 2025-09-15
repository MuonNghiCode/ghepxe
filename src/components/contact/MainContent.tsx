"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, User } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import Particle from "../ui/Particle";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactElement;
  text: string;
  type: "phone" | "email" | "address";
}

interface SocialLink {
  icon: React.ReactElement;
  href: string;
  name: string;
  color: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Phone className="w-5 h-5" />,
    text: "(84) xxx xxx xxxx",
    type: "phone",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    text: "GHEPXE@gmail.com",
    type: "email",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    text: "Address, Address, Address",
    type: "address",
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: <FaFacebookF className="text-xl" />,
    href: "#",
    name: "Facebook",
    color: "#1877F2",
  },
  {
    icon: <FaInstagram className="text-xl" />,
    href: "#",
    name: "Instagram",
    color: "#E4405F",
  },
  {
    icon: <FaXTwitter className="text-xl" />,
    href: "#",
    name: "Twitter",
    color: "#000000",
  },
  {
    icon: <FaGoogle className="text-xl" />,
    href: "#",
    name: "Google",
    color: "#EA4335",
  },
  {
    icon: <FaLinkedinIn className="text-xl" />,
    href: "#",
    name: "LinkedIn",
    color: "#0A66C2",
  },
];

export default function MainContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left Column - Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Contact Information */}
            <motion.div
              className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[var(--primary-green)]/20 relative overflow-hidden"
              style={{ backgroundColor: "var(--card-bg)" }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <Particle />

              {/* Header Section */}
              <div className="relative z-10 mb-8">
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-[var(--primary-green)]/10 rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Phone className="w-6 h-6 text-[var(--primary-green)]" />
                  </motion.div>
                  <motion.h2
                    className="text-3xl font-bold"
                    style={{
                      color: "var(--primary-green)",
                      fontFamily: "var(--font-roboto)",
                    }}
                  >
                    Liên hệ với GhepXe
                  </motion.h2>
                </motion.div>

                <motion.p
                  className="text-gray-600 text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-roboto)" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Kết nối với chúng tôi qua nhiều kênh liên lạc. GhepXe luôn sẵn
                  sàng hỗ trợ bạn.
                </motion.p>

                {/* Contact Stats */}
                <motion.div
                  className="grid grid-cols-3 gap-4 mt-6 p-4 bg-gray-50 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="text-center">
                    <div
                      className="text-2xl font-bold text-[var(--primary-green)]"
                      style={{ fontFamily: "var(--font-roboto)" }}
                    >
                      5+
                    </div>
                    <div
                      className="text-xs text-gray-600"
                      style={{ fontFamily: "var(--font-roboto)" }}
                    >
                      Kênh liên lạc
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="text-2xl font-bold text-[var(--primary-green)]"
                      style={{ fontFamily: "var(--font-roboto)" }}
                    >
                      24/7
                    </div>
                    <div
                      className="text-xs text-gray-600"
                      style={{ fontFamily: "var(--font-roboto)" }}
                    >
                      Hoạt động
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="text-2xl font-bold text-[var(--primary-green)]"
                      style={{ fontFamily: "var(--font-roboto)" }}
                    >
                      1h
                    </div>
                    <div
                      className="text-xs text-gray-600"
                      style={{ fontFamily: "var(--font-roboto)" }}
                    >
                      Phản hồi
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Contact Information */}
              <motion.div
                className="space-y-4 mb-8 relative z-10"
                variants={containerVariants}
              >
                <h3
                  className="text-lg font-semibold text-gray-800 mb-4"
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  Thông tin liên hệ
                </h3>

                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.type}
                    className="group"
                    variants={itemVariants}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group-hover:border-[var(--primary-green)]/20 border border-transparent">
                      <motion.div
                        className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-500 group-hover:text-[var(--primary-green)] group-hover:bg-[var(--primary-green)]/10 transition-all duration-200 shadow-sm"
                        whileHover={{ scale: 1.1 }}
                      >
                        {info.icon}
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">
                          {info.type === "phone"
                            ? "Điện thoại"
                            : info.type === "email"
                            ? "Email"
                            : "Địa chỉ"}
                        </div>
                        <span
                          className="text-gray-700 group-hover:text-gray-800 transition-colors duration-200 font-medium"
                          style={{ fontFamily: "var(--font-roboto)" }}
                        >
                          {info.text}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Media */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.h3
                  className="text-lg font-semibold text-gray-800 mb-4"
                  style={{
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  Kết nối với GhepXe
                </motion.h3>

                <motion.div
                  className="flex gap-3 flex-wrap"
                  variants={containerVariants}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="group relative"
                      variants={itemVariants}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg relative overflow-hidden"
                        style={{ color: "var(--gray-text)" }}
                        whileHover={{
                          backgroundColor: social.color,
                          color: "white",
                        }}
                      >
                        <motion.div className="absolute rounded-full inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-[var(--white)]" />
                        <span className="relative z-10">{social.icon}</span>
                      </motion.div>

                      {/* Tooltip */}
                      <motion.div
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
                        style={{ fontFamily: "var(--font-roboto)" }}
                      >
                        {social.name}
                      </motion.div>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Map */}
            <motion.div
              className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
              style={{ backgroundColor: "var(--card-bg)" }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <Particle />

              {/* Map Header */}
              <div className="relative z-10 mb-4">
                <motion.div
                  className="flex items-center gap-3 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <motion.div
                    className="w-10 h-10 bg-[var(--primary-green)]/10 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin className="w-5 h-5 text-[var(--primary-green)]" />
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold text-gray-800"
                    style={{ fontFamily: "var(--font-roboto)" }}
                  >
                    Vị trí văn phòng
                  </motion.h3>
                </motion.div>

                <motion.p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-roboto)" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Ghé thăm văn phòng GhepXe để được tư vấn trực tiếp
                </motion.p>
              </div>

              <motion.div
                className="aspect-[4/3] rounded-xl overflow-hidden relative z-10 border-2 border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6100105370175!2d106.80730807570756!3d10.841127589311143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2sFPT%20University%20HCMC!5e0!3m2!1sen!2s!4v1735045162885!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FPT University - Vị trí GhepXe"
                  className="transition-all duration-500 hover:contrast-110"
                />
              </motion.div>

              {/* Map Footer */}
              <motion.div
                className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[var(--primary-green)] rounded-full animate-pulse"></div>
                  <span
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "var(--font-roboto)" }}
                  >
                    Đang mở cửa
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "var(--font-roboto)" }}
                  >
                    Chỉ đường
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[var(--primary-green)]/20 flex flex-col relative overflow-hidden"
            style={{ backgroundColor: "var(--card-bg)" }}
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            <Particle />

            {/* Header Section */}
            <div className="relative z-10 mb-8">
              <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="w-12 h-12 bg-[var(--primary-green)]/10 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Send className="w-6 h-6 text-[var(--primary-green)]" />
                </motion.div>
                <motion.h2
                  className="text-3xl font-bold"
                  style={{
                    color: "var(--primary-green)",
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  Gửi lời nhắn cho GhepXe
                </motion.h2>
              </motion.div>

              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-roboto)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Mọi ý kiến của bạn đều giúp GhepXe tốt hơn mỗi ngày. Chúng tôi
                sẽ phản hồi trong vòng 24 giờ.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4 mt-6 p-4 bg-gray-50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="text-center">
                  <div
                    className="text-2xl font-bold text-[var(--primary-green)]"
                    style={{ fontFamily: "var(--font-roboto)" }}
                  >
                    24h
                  </div>
                  <div
                    className="text-xs text-gray-600"
                    style={{ fontFamily: "var(--font-roboto)" }}
                  >
                    Phản hồi
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-2xl font-bold text-[var(--primary-green)]"
                    style={{ fontFamily: "var(--font-roboto)" }}
                  >
                    100%
                  </div>
                  <div
                    className="text-xs text-gray-600"
                    style={{ fontFamily: "var(--font-roboto)" }}
                  >
                    Bảo mật
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-2xl font-bold text-[var(--primary-green)]"
                    style={{ fontFamily: "var(--font-roboto)" }}
                  >
                    24/7
                  </div>
                  <div
                    className="text-xs text-gray-600"
                    style={{ fontFamily: "var(--font-roboto)" }}
                  >
                    Hỗ trợ
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-[var(--primary-green)] rounded-full flex items-center justify-center mx-auto mb-6 relative"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-[var(--primary-green)]/20 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-white relative z-10"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                    <h3
                      className="text-3xl font-bold text-[var(--primary-green)] mb-3"
                      style={{ fontFamily: "var(--font-roboto)" }}
                    >
                      Cảm ơn bạn!
                    </h3>
                    <p
                      className="text-gray-600 text-lg"
                      style={{ fontFamily: "var(--font-roboto)" }}
                    >
                      Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm
                      nhất.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        <label
                          className="block text-sm font-medium text-gray-700 mb-2"
                          style={{ fontFamily: "var(--font-roboto)" }}
                        >
                          Họ tên <span className="text-red-600">*</span>
                        </label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-200 group-focus-within:text-[var(--primary-green)]" />
                          <motion.input
                            type="text"
                            name="name"
                            placeholder="Nhập họ tên của bạn"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[var(--primary-green)] transition-all duration-300"
                            style={{ fontFamily: "var(--font-roboto)" }}
                            whileFocus={{ scale: 1.02 }}
                            required
                          />
                        </div>
                      </motion.div>

                      {/* Email */}
                      <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        <label
                          className="block text-sm font-medium text-gray-700 mb-2"
                          style={{ fontFamily: "var(--font-roboto)" }}
                        >
                          Email <span className="text-red-600">*</span>
                        </label>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-200 group-focus-within:text-[var(--primary-green)]" />
                          <motion.input
                            type="email"
                            name="email"
                            placeholder="example@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[var(--primary-green)] transition-all duration-300"
                            style={{ fontFamily: "var(--font-roboto)" }}
                            whileFocus={{ scale: 1.02 }}
                            required
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Phone */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "var(--font-roboto)" }}
                      >
                        Số điện thoại
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-200 group-focus-within:text-[var(--primary-green)]" />
                        <motion.input
                          type="tel"
                          name="phone"
                          placeholder="0xxx xxx xxx"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[var(--primary-green)] transition-all duration-300"
                          style={{ fontFamily: "var(--font-roboto)" }}
                          whileFocus={{ scale: 1.02 }}
                        />
                      </div>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "var(--font-roboto)" }}
                      >
                        Lời nhắn <span className="text-red-600">*</span>
                      </label>
                      <div className="relative group">
                        <svg
                          className="absolute left-4 top-4 w-5 h-5 text-gray-400 transition-colors duration-200 group-focus-within:text-[var(--primary-green)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <motion.textarea
                          name="message"
                          placeholder="Chia sẻ ý kiến, góp ý hoặc thắc mắc của bạn..."
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[var(--primary-green)] transition-all duration-300 resize-none"
                          style={{ fontFamily: "var(--font-roboto)" }}
                          whileFocus={{ scale: 1.02 }}
                          required
                        />
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden text-lg"
                        style={{
                          backgroundColor: "var(--primary-green)",
                          fontFamily: "var(--font-roboto)",
                        }}
                        whileHover={{
                          scale: isSubmitting ? 1 : 1.02,
                          boxShadow: "0 10px 30px rgba(0, 169, 130, 0.3)",
                        }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/10"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              className="flex items-center gap-3 relative z-10"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <motion.div
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                              <span>Đang gửi tin nhắn...</span>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="send"
                              className="flex items-center gap-3 relative z-10"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <Send className="w-5 h-5" />
                              <span>Gửi tin nhắn ngay</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </motion.div>

                    {/* Footer Info */}
                    <motion.div
                      className="flex items-center justify-between pt-4 border-t border-gray-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.6 }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span
                          className="text-sm text-gray-600"
                          style={{ fontFamily: "var(--font-roboto)" }}
                        >
                          Đang trực tuyến
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span
                          className="text-sm text-gray-600"
                          style={{ fontFamily: "var(--font-roboto)" }}
                        >
                          Bảo mật SSL
                        </span>
                      </div>
                    </motion.div>

                    <motion.p
                      className="text-sm text-red-500 text-center"
                      style={{ fontFamily: "var(--font-roboto)" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.6 }}
                    >
                      GhepXe cam kết bảo mật thông tin của bạn
                    </motion.p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
