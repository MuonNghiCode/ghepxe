"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Send email:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-[#EFEFEF] pt-16 pb-8">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-4xl font-bold text-[#6B6B6B] mb-2">
              <span className="text-[#00A982]">Kết nối</span> với chúng tôi ở
              đây
            </h3>
          </div>
          <button className="bg-[#00A982] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors flex items-center gap-2">
            Liên hệ với GhepXe
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          {/* Logo and Links Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div>
              <div className="mb-4">
                <h2 className="text-5xl font-bold text-[#00A982] italic">
                  GhepXe
                </h2>
              </div>
              <p className="text-[#6B6B6B] text-2xl leading-[2.2rem] font-medium mb-6">
                Nền tảng ghép xe giúp vận chuyển nhanh hơn – tiết kiệm hơn –
                minh bạch hơn
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-[#00A982] hover:text-[#006e5f] transition-colors text-2xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-[#00A982] hover:text-[#006e5f] transition-colors text-2xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-[#00A982] hover:text-[#006e5f] transition-colors text-2xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-[#00A982] hover:text-[#006e5f] transition-colors text-2xl"
                >
                  <FaGoogle />
                </a>
                <a
                  href="#"
                  className="text-[#00A982] hover:text-[#006e5f] transition-colors text-2xl"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* 2x2 Grid Layout for Links */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* First Row - 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Company Links */}
                  <div>
                    <h4 className="text-[#00A982] text-xl font-semibold mb-4">
                      Công Ty
                    </h4>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-[#6B6B6B] text-lg hover:text-[#00A982] transition-colors"
                        >
                          Về chúng tôi
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#6B6B6B] text-lg hover:text-[#00A982] transition-colors"
                        >
                          Chính sách
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#6B6B6B] text-lg hover:text-[#00A982] transition-colors"
                        >
                          Hợp tác
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Services Links */}
                  <div>
                    <h4 className="text-[#00A982] text-xl font-semibold mb-4">
                      Dịch Vụ
                    </h4>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-[#6B6B6B] text-lg hover:text-[#00A982] transition-colors"
                        >
                          Ghép đơn cá nhân
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#6B6B6B] text-lg hover:text-[#00A982] transition-colors"
                        >
                          Ghép đơn doanh nghiệp
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#6B6B6B] text-lg hover:text-[#00A982] transition-colors"
                        >
                          Ghép đơn tiết kiệm
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Newsletter Subscription */}
                  <div>
                    <h4 className="text-[#00A982] text-xl font-semibold mb-4">
                      Nhận thông báo mới nhất
                    </h4>
                    <div className="relative">
                      <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />{" "}
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập email ..."
                        className="w-full h-12 pl-12 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00A982] focus:border-transparent text-lg placeholder-gray-400"
                        style={{ background: "white" }}
                      />
                      <button
                        onClick={handleSubmit}
                        className="absolute right-0 top-0 bg-[#00A982] hover:bg-[#006e5f] w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                      >
                        <IoSend className="text-white text-lg" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Second Row - 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Support Links */}
                  <div>
                    <h4 className="text-[#00A982] text-xl font-semibold mb-4">
                      Hỗ Trợ
                    </h4>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-[#6B6B6B] text-lg hover:text-[#00A982] transition-colors"
                        >
                          Trung tâm hỗ trợ
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#6B6B6B] text-lg hover:text-[#00A982] transition-colors"
                        >
                          Đánh giá
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#6B6B6B] text-lg hover:text-[#00A982] transition-colors"
                        >
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h4 className="text-[#00A982] text-xl font-semibold mb-4">
                      Liên Hệ
                    </h4>
                    <div className="space-y-3">
                      <p className="text-[#6B6B6B] text-lg flex items-center gap-2">
                        <FaPhone className="text-[#00A982]" /> (84) xxx xxx xxxx
                      </p>
                      <p className="text-[#6B6B6B] text-lg flex items-center gap-2">
                        <FaEnvelope className="text-[#00A982]" />{" "}
                        support@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Empty column for alignment */}
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-lg text-[#6B6B6B]">
            <div className="mb-4 md:mb-0">
              © Copyright by GHEPXE. All rights reserved
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#00A982] transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="hover:text-[#00A982] transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="hover:text-[#00A982] transition-colors">
                Bản đồ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
