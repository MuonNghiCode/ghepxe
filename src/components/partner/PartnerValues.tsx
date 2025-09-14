import Image from "next/image";

export default function PartnerValues() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 items-start mb-16">
          <div className="md:col-span-2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="whitespace-nowrap text-[var(--gray-text)]">
                Gia nhập
              </span>
              <br />
              <span className="whitespace-nowrap text-[var(--gray-text)]">
                Cộng Đồng
              </span>
              <br />
              <span className="whitespace-nowrap text-[var(--gray-text)]">
                Vận Tải
              </span>
              <br />
              <span className="whitespace-nowrap text-[var(--ghepxe-green)]">
                GhepXe
              </span>
            </h2>
          </div>
          <div className="md:col-span-3">
            {/* Partner Values Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[var(--card-bg)] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/aboutus/icon/toiuu.svg"
                    alt="Tối Ưu"
                    width={56}
                    height={56}
                    className="w-14 h-14"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--gray-text)] mb-2">
                    Tối Ưu
                  </h3>
                  <p className="text-sm text-[var(--gray-text)] leading-relaxed">
                    Tối ưu xe chiều về rỗng, ghép đơn dễ dàng, giảm lãng phí
                    nhiên liệu.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--card-bg)] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/aboutus/icon/tincay.svg"
                    alt="Tin Cậy"
                    width={56}
                    height={56}
                    className="w-14 h-14"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--gray-text)] mb-2">
                    Tin Cậy
                  </h3>
                  <p className="text-sm text-[var(--gray-text)] leading-relaxed">
                    Đơn hàng minh bạch, có hợp đồng điện tử – dễ kiểm soát, hạn
                    chế rủi ro.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--card-bg)] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/aboutus/icon/benvung.svg"
                    alt="Bền Vững"
                    width={56}
                    height={56}
                    className="w-14 h-14"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--gray-text)] mb-2">
                    Bền Vững
                  </h3>
                  <p className="text-sm text-[var(--gray-text)] leading-relaxed">
                    Tối ưu xe trống chiều về, giảm thiểu khí thải CO₂ cho hành
                    tinh xanh hơn.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--card-bg)] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/aboutus/icon/linhhoat.svg"
                    alt="Linh Hoạt"
                    width={56}
                    height={56}
                    className="w-14 h-14"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--gray-text)] mb-2">
                    Linh Hoạt
                  </h3>
                  <p className="text-sm text-[var(--gray-text)] leading-relaxed">
                    Tự tạo chuyến – tự chọn đơn – chủ động hành trình và thu
                    nhập.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Join GhepXe Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start mt-40">
          <div className="space-y-8">
            <div className="pb-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-[var(--gray-text)] mb-4">
                Tăng thu nhập từ mỗi chuyến
              </h3>
              <p className="text-[var(--gray-text)] leading-relaxed">
                Không chỉ dựa vào đơn chính - bạn có thể ghép thêm hàng chiều về
                để tối ưu doanh thu.
              </p>
            </div>

            <div className="pb-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-[var(--gray-text)] mb-4">
                Chủ động chọn tuyến phù hợp
              </h3>
              <p className="text-[var(--gray-text)] leading-relaxed">
                Dễ dàng chọn đơn theo tuyến, thời gian, tải trọng phù hợp với
                hành trình của bạn.
              </p>
            </div>

            <div className="pb-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-[var(--gray-text)] mb-4">
                Có hợp đồng rõ ràng
              </h3>
              <p className="text-[var(--gray-text)] leading-relaxed">
                Hệ thống tự tạo biên nhận và hợp đồng điện tử cho từng đơn hàng
                - minh bạch trách nhiệm.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--gray-text)] mb-4">
                Tiết kiệm nhiên liệu, giảm CO₂
              </h3>
              <p className="text-[var(--gray-text)] leading-relaxed">
                Ứng dụng tự động tính toán khí thải CO₂, bạn tiết kiệm được sau
                mỗi chuyến xe. Bạn có thể theo dõi và chia sẻ đóng góp
                &quot;xanh&quot; của mình.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                <span className="text-[var(--gray-text)]">Tại sao nên</span>
                <br />
                <span className="text-[var(--gray-text)]">tham gia</span>
                <br />
                <span className="text-[var(--ghepxe-green)]">GhepXe</span>
                <span className="text-[var(--gray-text)]">?</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
