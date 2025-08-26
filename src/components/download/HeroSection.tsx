import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-teal-50 via-emerald-50 to-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tải ứng dụng
              </h1>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-[var(--primary-green)]">GhepXe</span> <span className="text-gray-900">ngay!</span>
              </h1>
            </div>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#"
                className="hover:scale-105 transition-all duration-300"
              >
                <Image
                  src="/ggplay.png"
                  alt="Tải trên Google Play"
                  width={200}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
              
              <a
                href="#"
                className="hover:scale-105 transition-all duration-300"
              >
                <Image
                  src="/apple.png"
                  alt="Tải trên Apple Store"
                  width={200}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative flex justify-center items-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-[var(--primary-green)]/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-emerald-300/30 to-transparent rounded-full blur-2xl"></div>
              
              {/* Main Phone Display */}
              <div className="relative z-10">
                <Image
                  src="/download/download.png"
                  alt="GhepXe App Interface"
                  width={700}
                  height={500}
                  className="max-w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
