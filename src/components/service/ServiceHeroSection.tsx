import Image from "next/image";

export default function PartnerHeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-white before:content-[''] before:absolute before:inset-0 before:bg-[url('/aboutus/Vector.svg')] before:bg-cover before:bg-top before:z-0">
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-screen-2xl mx-auto pt-40 md:pt-48">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Dịch vụ của GhepXe
        </h1>
        <p className="text-lg md:text-xl leading-relaxed opacity-90">
          GhepXe cho phép bạn đặt xe trong tích tắc, mọi lúc bạn cần! Tải ứng
          dụng để trải nghiệm các dịch vụ của be
        </p>
      </div>

      {/* Images Section */}
      <div className="relative z-10 px-4 pb-8 mb-14">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Image 1 - Square */}
          <div className="aspect-square">
            <Image
              src="/aboutus/about1.png"
              alt="Partner 1"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Image 2 - Rectangle */}
          <div className="aspect-[4/3] mt-10">
            <Image
              src="/aboutus/about2.png"
              alt="Partner 2"
              width={400}
              height={300}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Image 3 - Square */}
          <div className="aspect-square">
            <Image
              src="/aboutus/about3.png"
              alt="Partner 3"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Image 4 - Rectangle */}
          <div className="aspect-[4/3] mt-10">
            <Image
              src="/aboutus/about4.png"
              alt="Partner 4"
              width={400}
              height={300}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
