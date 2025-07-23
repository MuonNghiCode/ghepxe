import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact/Home Page Image.png"
          alt="Contact Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left text-white px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 drop-shadow-2xl leading-tight font-bold italic">
          <span style={{ color: 'var(--primary-green)' }}>GhepXe</span>
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white drop-shadow-lg leading-tight font-bold">
          Luôn Lắng Nghe Bạn
        </p>
      </div>
    </section>
  );
} 