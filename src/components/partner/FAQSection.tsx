export default function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--gray-text)] leading-tight">
              Câu hỏi
              <br />
              thường gặp
            </h2>
            
            <button className="mt-8 bg-[var(--ghepxe-green)] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2">
              Xem thêm
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#00A982" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
          
          {/* Right FAQs */}
          <div className="space-y-8">
            <div className="pb-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-[var(--gray-text)] mb-3">
                Tôi có thể từ chối đơn không phù hợp?
              </h3>
              <p className="text-[var(--gray-text)] leading-relaxed">
                Được, bạn luôn có quyền từ chối đơn hàng không phù hợp lịp trình, tuyến hoặc loại hàng.
              </p>
            </div>
            
            <div className="pb-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-[var(--gray-text)] mb-3">
                Tôi có được đánh giá khách hàng không?
              </h3>
              <p className="text-[var(--gray-text)] leading-relaxed">
                Có, bạn một chuyến xong, bạn có thể để đánh giá khách hàng giri – giúp nâng cao chất lượng hệ thống.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[var(--gray-text)] mb-3">
                App có hỗ trợ tối ưu đơn xây ra có?
              </h3>
              <p className="text-[var(--gray-text)] leading-relaxed">
                Có, bạn có thể gộp hiện một, chai hỗ trợ hoạc ghép lông các đơn để tăng ưu thận.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
