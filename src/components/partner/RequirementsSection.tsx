import Image from "next/image";

export default function RequirementsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--gray-text)] mb-8">
              Bạn cần chuẩn bị
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--ghepxe-green)] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[var(--gray-text)]">
                  CCCD (mặt trước & sau)
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--ghepxe-green)] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[var(--gray-text)]">
                  Cà vẹt xe (Giấy đăng ký phương tiện)
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--ghepxe-green)] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[var(--gray-text)]">
                  Giấy phép lái xe phù hợp với loại xe đăng ký
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--ghepxe-green)] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[var(--gray-text)]">Ảnh xe 4 góc bên cạnh</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--ghepxe-green)] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[var(--gray-text)]">
                  Tuyến đường thường chạy
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--ghepxe-green)] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[var(--gray-text)]">
                  Số điện thoại để nhận mã OTP đăng ký
                </p>
              </div>
            </div>

            <button className="bg-[var(--ghepxe-green)] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2">
              TẢI APP NGAY
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#00A982"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-screen-2xl">
              <Image
                src="/partner/partner.png"
                alt="Bạn cần chuẩn bị"
                width={400}
                height={500}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
