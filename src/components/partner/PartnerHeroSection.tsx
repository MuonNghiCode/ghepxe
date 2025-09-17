"use client";

import Image from "next/image";
import { easeInOut, easeOut, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface HeroImage {
  id: number;
  src: string;
  alt: string;
  aspectRatio: "square" | "rectangle";
  marginTop?: boolean;
}

const heroImages: HeroImage[] = [
  {
    id: 1,
    src: "/aboutus/about1.png",
    alt: "GhepXe Service 1",
    aspectRatio: "square",
  },
  {
    id: 2,
    src: "/aboutus/about2.png",
    alt: "GhepXe Service 2",
    aspectRatio: "rectangle",
    marginTop: true,
  },
  {
    id: 3,
    src: "/aboutus/about3.png",
    alt: "GhepXe Service 3",
    aspectRatio: "square",
  },
  {
    id: 4,
    src: "/aboutus/about4.png",
    alt: "GhepXe Service 4",
    aspectRatio: "rectangle",
    marginTop: true,
  },
];

const texts = {
  vi: {
    title1: "Cộng Đồng Vận Tải",
    title2: "GhepXe",
    desc: "Làm nên thành công của chúng tôi không thể thiếu những đóng góp của bạn",
  },
  en: {
    title1: "Transport Community",
    title2: "GhepXe",
    desc: "Our success cannot be achieved without your valuable contributions",
  },
};

export default function PartnerHeroSection() {
  const { language } = useLanguage();
  const t = texts[language as keyof typeof texts];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-white before:content-[''] before:absolute before:inset-0 before:bg-[url('/aboutus/Vector.svg')] before:bg-cover before:bg-top before:z-0 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: easeInOut,
        }}
      />
      <motion.div
        className="absolute bottom-40 right-16 w-32 h-32 bg-white/5 rounded-full blur-2xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: easeInOut,
        }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-screen-2xl mx-auto pt-40 md:pt-48"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight relative text-center"
          style={{ fontFamily: "var(--font-roboto)" }}
          variants={textVariants}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.title1}
          </motion.span>{" "}
          <motion.span
            className="inline-block text-[var(--white)]"
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.title2}
          </motion.span>
          {/* Underline cho toàn bộ title */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-white/30 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 max-w-4xl mx-auto"
          style={{ fontFamily: "var(--font-roboto)" }}
          variants={textVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t.desc}
        </motion.p>
      </motion.div>

      {/* Images Section */}
      <motion.div
        className="relative z-10 px-6 pb-8 mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
          variants={containerVariants}
        >
          {heroImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`
                ${
                  image.aspectRatio === "square"
                    ? "aspect-square"
                    : "aspect-[4/3]"
                }
                ${image.marginTop ? "mt-8 md:mt-10" : ""}
              `}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />
    </section>
  );
}
