export default function HomeHeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-start bg-no-repeat  bg-[length:110%_150%]"
      style={{
        backgroundImage: "url('/home/hero-bg.png')",
        backgroundPosition: "left 75% ",
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80  to-black/20" />
      <div className="relative  z-10 p-10 rounded-xl max-w-screen-xl mx-auto w-full">
        <h1 className="text-7xl font-bold mb-4 text-white italic">Ghepxe</h1>
        <h2 className="text-white">
          Ghép đơn linh hoạt,
          <br />
          tiết kiệm chi phí,
          <br />
          giảm khí thải.
        </h2>
        <button className="px-6 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
          Bắt đầu
        </button>
      </div>
    </section>
  );
}
