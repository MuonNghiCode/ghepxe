import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[var(--primary-green)] to-emerald-600">
      <div className="max-w-screen-2xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Bắt đầu hành trình tiết kiệm ngay hôm nay!
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-screen-2xl mx-auto">
          Tham gia cộng đồng hàng triệu người dùng đang sử dụng GhepXe để di
          chuyển thông minh và tiết kiệm
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="hover:scale-105 transition-all duration-300">
            <Image
              src="/ggplay.png"
              alt="Tải trên Google Play"
              width={200}
              height={60}
              className="h-14 w-auto"
            />
          </a>

          <a href="#" className="hover:scale-105 transition-all duration-300">
            <Image
              src="/apple.png"
              alt="Tải trên Apple Store"
              width={200}
              height={60}
              className="h-14 w-auto"
            />
          </a>
        </div>

        <div className="mt-12 flex justify-center items-center space-x-8 text-emerald-100">
          <div className="text-center">
            <div className="text-2xl font-bold">1M+</div>
            <div className="text-sm">Lượt tải</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">4.8★</div>
            <div className="text-sm">Đánh giá</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">500K+</div>
            <div className="text-sm">Người dùng</div>
          </div>
        </div>
      </div>
    </section>
  );
}
