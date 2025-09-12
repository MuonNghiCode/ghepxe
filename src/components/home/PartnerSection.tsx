"use client";
import { motion } from "framer-motion";

export default function PartnerSection() {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center w-full bg-gray-100 py-12">
      <div className="flex flex-col w-full max-w-screen-2xl mx-auto px-4">
        {/* Container cho ảnh và nội dung */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div>
            <img
              src="/home/hand.png"
              alt="hand"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Nội dung bên phải */}
          <div className="flex-1 ml-20">
            <h2 className="text-[var(--primary-green)] text-2xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="text-[var(--primary-green)] block mb-2">
                Đồng hành thật
              </span>
              <span className="text-[var(--primary-green)] block mb-2">
                Đơn hàng thật
              </span>
              <span className="text-[var(--primary-green)] block">
                Niềm tin thật
              </span>
            </h2>
            <p className="text-gray-700 text-base md:text-xl mb-6 md:max-w-lg ">
              Ghepxe mang đến nền tảng vận tải thông minh giúp bạn nhận đơn hàng
              ổn định mỗi ngày minh bạch, thuận tiện.
            </p>
          </div>
        </div>

        {/* Button nằm dưới */}
        <div className="flex justify-center">
          <div className="bg-[var(--primary-green)] w-full rounded-3xl flex justify-between items-center px-6 py-6 min-w-[180px]">
            <h2 className="text-white font-semibold mb-2 text-left">
              Bạn có xe?
              <br />
              Muốn có đơn đều?
            </h2>
            <button className="bg-[var(--white)] text-[var(--primary-green)] font-bold px-5 py-2 rounded-full shadow hover:bg-gray-100 transition">
              Trở Thành Đối Tác
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
