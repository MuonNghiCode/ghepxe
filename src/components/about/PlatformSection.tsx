"use client";

import React from "react";
import Image from "next/image";
import { easeOut, motion } from "framer-motion";

interface Feature {
  id: number;
  icon: React.ReactElement;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="78"
        height="79"
        viewBox="0 0 78 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.261719"
          y="0.841064"
          width="77.476"
          height="77.476"
          rx="38.738"
          fill="#00A982"
        />
        <path
          d="M38.9995 20.21C38.1525 20.21 37.3138 20.3722 36.5312 20.6875C35.7487 21.0027 35.0377 21.4648 34.4388 22.0473C33.8398 22.6299 33.3647 23.3214 33.0406 24.0825C32.7165 24.8436 32.5496 25.6594 32.5496 26.4832C32.5496 27.307 32.7165 28.1227 33.0406 28.8838C33.3647 29.6449 33.8398 30.3365 34.4388 30.919C35.0377 31.5015 35.7487 31.9636 36.5312 32.2789C37.3138 32.5941 38.1525 32.7564 38.9995 32.7564C40.7101 32.7564 42.3507 32.0955 43.5603 30.919C44.7698 29.7426 45.4494 28.1469 45.4494 26.4832C45.4494 24.8194 44.7698 23.2238 43.5603 22.0473C42.3507 20.8709 40.7101 20.21 38.9995 20.21ZM53.5263 23.3434C52.242 23.3434 51.0104 23.8396 50.1023 24.7228C49.1942 25.6061 48.684 26.804 48.684 28.053C48.684 29.3021 49.1942 30.5 50.1023 31.3833C51.0104 32.2665 52.242 32.7627 53.5263 32.7627C54.8105 32.7627 56.0421 32.2665 56.9502 31.3833C57.8583 30.5 58.3685 29.3021 58.3685 28.053C58.3685 26.804 57.8583 25.6061 56.9502 24.7228C56.0421 23.8396 54.8105 23.3434 53.5263 23.3434ZM24.4728 23.3434C23.1885 23.3434 21.9569 23.8396 21.0488 24.7228C20.1407 25.6061 19.6305 26.804 19.6305 28.053C19.6305 29.3021 20.1407 30.5 21.0488 31.3833C21.9569 32.2665 23.1885 32.7627 24.4728 32.7627C25.757 32.7627 26.9886 32.2665 27.8967 31.3833C28.8048 30.5 29.315 29.3021 29.315 28.053C29.315 26.804 28.8048 25.6061 27.8967 24.7228C26.9886 23.8396 25.757 23.3434 24.4728 23.3434ZM29.315 39.0202C29.321 38.1913 29.6637 37.3983 30.2685 36.8142C30.8732 36.2302 31.6909 35.9024 32.5432 35.9024H45.4558C46.312 35.9024 47.1331 36.2332 47.7385 36.822C48.3439 37.4108 48.684 38.2095 48.684 39.0422V48.4614C48.6849 49.4496 48.5258 50.4318 48.2127 51.372C47.4979 53.5029 46.0254 55.3162 44.0597 56.4863C42.094 57.6563 39.7638 58.1065 37.4875 57.7559C35.2113 57.4053 33.1381 56.277 31.6402 54.5735C30.1423 52.87 29.3179 50.7029 29.315 48.4614V39.0202ZM26.0868 39.0422C26.0868 37.8962 26.4 36.8255 26.952 35.9024H19.6305C18.7743 35.9024 17.9533 36.2332 17.3479 36.822C16.7425 37.4108 16.4023 38.2095 16.4023 39.0422V46.8915C16.4019 48.1766 16.7259 49.4422 17.3458 50.5771C17.9658 51.712 18.8628 52.6814 19.958 53.4003C21.0532 54.1193 22.3131 54.5657 23.6272 54.7003C24.9412 54.835 26.2691 54.6538 27.4943 54.1726C26.5672 52.4029 26.0848 50.4445 26.0868 48.4583V39.0422ZM51.9122 39.0422V48.4614C51.9122 50.5179 51.4053 52.4583 50.5047 54.1726C51.7299 54.6538 53.0578 54.835 54.3718 54.7003C55.6859 54.5657 56.9458 54.1193 58.041 53.4003C59.1362 52.6814 60.0332 51.712 60.6532 50.5771C61.2731 49.4422 61.5971 48.1766 61.5967 46.8915V39.0422C61.5967 38.2095 61.2566 37.4108 60.6512 36.822C60.0458 36.2332 59.2247 35.9024 58.3685 35.9024H51.047C51.5958 36.8255 51.9122 37.8962 51.9122 39.0422Z"
          fill="#FCFCFC"
        />
      </svg>
    ),
    title: "Tổ đội chuyên nghiệp",
    description:
      "Chúng tôi làm việc với tinh thần tự chủ động, linh hoạt và sáng tạo",
  },
  {
    id: 2,
    icon: (
      <svg
        width="78"
        height="79"
        viewBox="0 0 78 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.261719"
          y="0.841064"
          width="77.476"
          height="77.476"
          rx="38.738"
          fill="#00A982"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.1373 22.0433C50.8983 20.6522 52.8971 20.6522 53.658 22.0433L55.257 24.9668C55.5885 25.573 56.0869 26.0714 56.6931 26.4029L59.6166 28.0019C61.0077 28.7628 61.0077 30.7616 59.6166 31.5226L56.6931 33.1216C56.0869 33.4531 55.5885 33.9515 55.257 34.5576L53.658 37.4811C52.8971 38.8722 50.8983 38.8722 50.1373 37.4811L48.5383 34.5576C48.2068 33.9515 47.7084 33.4531 47.1023 33.1216L44.1788 31.5226C42.7877 30.7616 42.7877 28.7628 44.1788 28.0019L47.1023 26.4029C47.7084 26.0714 48.2068 25.573 48.5383 24.9668L50.1373 22.0433ZM45.3933 24.5927L43.0237 25.8891C39.9613 27.5636 39.9613 31.9608 43.0237 33.6353L45.9472 35.2343C46.1491 35.3448 46.3151 35.5108 46.4256 35.7127L48.0246 38.6362C48.9317 40.2954 50.6382 41.0556 52.279 40.9159C51.4925 44.1296 49.6553 46.9887 47.0589 49.0394C46.9241 49.5195 46.7834 49.998 46.6367 50.4746C46.2594 51.706 45.2119 52.6492 43.8657 52.7896C42.6994 52.9109 40.7713 53.0409 37.8502 53.0409C34.9291 53.0409 33.001 52.9109 31.8347 52.7896C30.4885 52.6492 29.4418 51.706 29.0637 50.4746C28.917 49.998 28.7763 49.5195 28.6415 49.0394C25.2075 46.3214 23 42.112 23 37.388C23 29.1867 29.6489 22.5378 37.8502 22.5378C40.6035 22.5378 43.1826 23.2875 45.3933 24.5927ZM30.9846 54.6784C31.1933 54.7266 31.4068 54.7622 31.6252 54.7852C32.871 54.9152 34.8697 55.0477 37.8494 55.0477C40.8291 55.0477 42.827 54.9152 44.0736 54.7852C44.3592 54.7555 44.6419 54.7026 44.9189 54.6271L44.8932 54.8679C44.7046 56.6057 43.4588 58.1807 41.5515 58.4319C40.3236 58.5871 39.087 58.6633 37.8494 58.6599C36.268 58.6599 35.0407 58.5459 34.1393 58.4094C32.48 58.1582 31.3876 56.8401 31.1106 55.3615C31.0705 55.148 31.0285 54.9198 30.9846 54.6784Z"
          fill="#EFEFEF"
        />
      </svg>
    ),
    title: "Công nghệ hiệu quả",
    description:
      "Chúng tôi không ngừng nâng cấp hệ thống để đảm bảo trải nghiệm tốt nhất",
  },
  {
    id: 3,
    icon: (
      <svg
        width="78"
        height="79"
        viewBox="0 0 78 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.261719"
          y="0.841064"
          width="77.476"
          height="77.476"
          rx="38.738"
          fill="#00A982"
        />
        <path
          d="M39.7198 22.0793L30.2255 29.769C28.6463 31.0441 28.3423 33.3392 29.5389 34.9772C30.8041 36.723 33.266 37.0663 34.9628 35.7422L44.7024 28.1703C45.389 27.6406 46.3698 27.7583 46.9093 28.4449C47.4487 29.1315 47.3212 30.1123 46.6346 30.6517L44.5847 32.2407L58.2182 44.7952V26.2773H58.1495L57.767 26.0321L50.6462 21.4712C49.1455 20.51 47.3899 20 45.6048 20C43.4666 20 41.3872 20.7356 39.7198 22.0793ZM41.9561 34.2808L36.8853 38.2237C33.7957 40.6365 29.3133 40.0088 26.9986 36.8309C24.8211 33.8394 25.3704 29.6611 28.2442 27.3366L36.4046 20.7356C35.2669 20.255 34.0409 20.0098 32.7952 20.0098C30.9513 20 29.1564 20.5493 27.6165 21.5693L20.5545 26.2773V48.2477H23.3205L32.2852 56.4278C34.2076 58.1835 37.1795 58.0461 38.9352 56.1237C39.4746 55.5254 39.8375 54.829 40.0239 54.1032L41.6913 55.6333C43.6039 57.389 46.5856 57.2615 48.3413 55.3489C48.7826 54.8683 49.1063 54.3092 49.3123 53.7305C51.2151 55.0056 53.8045 54.7408 55.4032 52.9949C57.1589 51.0823 57.0314 48.1006 55.1188 46.3449L41.9561 34.2808ZM9.56932 26.2773C8.70619 26.2773 8 26.9835 8 27.8466V48.2477C8 49.9838 9.40258 51.3864 11.1386 51.3864H14.2773C16.0133 51.3864 17.4159 49.9838 17.4159 48.2477V26.2773H9.56932ZM12.708 45.1091C13.1242 45.1091 13.5233 45.2744 13.8176 45.5687C14.1119 45.863 14.2773 46.2622 14.2773 46.6784C14.2773 47.0946 14.1119 47.4938 13.8176 47.7881C13.5233 48.0824 13.1242 48.2477 12.708 48.2477C12.2917 48.2477 11.8926 48.0824 11.5983 47.7881C11.304 47.4938 11.1386 47.0946 11.1386 46.6784C11.1386 46.2622 11.304 45.863 11.5983 45.5687C11.8926 45.2744 12.2917 45.1091 12.708 45.1091ZM61.3568 26.2773V48.2477C61.3568 49.9838 62.7594 51.3864 64.4954 51.3864H67.6341C69.3701 51.3864 70.7727 49.9838 70.7727 48.2477V27.8466C70.7727 26.9835 70.0665 26.2773 69.2034 26.2773H61.3568ZM64.4954 46.6784C64.4954 46.2622 64.6608 45.863 64.9551 45.5687C65.2494 45.2744 65.6485 45.1091 66.0648 45.1091C66.481 45.1091 66.8801 45.2744 67.1744 45.5687C67.4687 45.863 67.6341 46.2622 67.6341 46.6784C67.6341 47.0946 67.4687 47.4938 67.1744 47.7881C66.8801 48.0824 66.481 48.2477 66.0648 48.2477C65.6485 48.2477 65.2494 48.0824 64.9551 47.7881C64.6608 47.4938 64.4954 47.0946 64.4954 46.6784Z"
          fill="#FCFCFC"
        />
      </svg>
    ),
    title: "Đối tác tin cậy",
    description:
      "Chúng tôi luôn đồng hành và hỗ trợ doanh nghiệp trong mọi hành trình",
  },
];

export default function PlatformSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="py-20 bg-[var(--white)]">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Title Section */}
          <motion.div
            className="lg:col-span-2 mb-12 lg:mb-0"
            variants={itemVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800"
              style={{ fontFamily: "var(--font-roboto)" }}
              variants={itemVariants}
            >
              <span className="whitespace-nowrap">Nền tảng</span>{" "}
              <motion.span
                className="text-[var(--primary-green)]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                GhepXe
              </motion.span>{" "}
              <span className="whitespace-nowrap">tối ưu cho doanh nghiệp</span>
            </motion.h2>
          </motion.div>

          {/* Description Section */}
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: "var(--font-roboto)" }}
                variants={itemVariants}
              >
                GhepXe giúp doanh nghiệp đơn giản hóa quy trình vận chuyển bằng
                cách ứng dụng công nghệ thông minh để ghép đơn, tối ưu lộ trình
                và rút ngắn thời gian giao nhận
              </motion.p>
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: "var(--font-roboto)" }}
                variants={itemVariants}
              >
                Chúng tôi cam kết minh bạch, hiệu quả và đồng hành cùng doanh
                nghiệp trong từng chặng đường phát triển, từ vận chuyển nội
                thành đến liên tỉnh
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-2xl p-8 flex items-start gap-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-[var(--primary-green)]/20 transition-all duration-300"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon Container */}
              <motion.div
                className="w-20 h-20 flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-xl font-bold text-gray-800 mb-3"
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overlapping Images Section */}
        <motion.div
          className="max-w-screen-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Desktop Layout */}
          <motion.div className="hidden lg:block" variants={itemVariants}>
            <div className="relative flex justify-start items-center">
              {/* Base Image - Desktop (Much Larger) */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/aboutus/Rectangle 65.jpg"
                  alt="GhepXe Platform Overview"
                  width={1000}
                  height={700}
                  className="rounded-2xl  h-auto object-cover shadow-lg"
                />
              </motion.div>

              {/* Overlapping Image - Desktop */}
              <motion.div
                className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-200"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/aboutus/Rectangle 66.jpg"
                    alt="GhepXe Demo Video"
                    width={600}
                    height={400}
                    className="rounded-2xl w-full max-w-2xl h-auto object-cover shadow-2xl border-4 border-white"
                  />
                  {/* Play Button Overlay */}
                  <motion.button
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      // Handle video play
                      console.log("Play video");
                    }}
                  >
                    <motion.span
                      className="w-16 h-16 bg-[var(--primary-green)]/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-[var(--primary-green)] transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <polygon points="8,6 20,12 8,18" fill="white" />
                      </svg>
                    </motion.span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile & Tablet Layout */}
          <motion.div className="lg:hidden" variants={itemVariants}>
            <div className="space-y-8">
              {/* Main Image - Mobile/Tablet */}
              <motion.div
                className="w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/aboutus/Rectangle 65.jpg"
                  alt="GhepXe Platform Overview"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover shadow-lg"
                />
              </motion.div>

              {/* Video Image - Mobile/Tablet */}
              <motion.div
                className="relative w-full md:w-4/5 md:mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Image
                  src="/aboutus/Rectangle 66.jpg"
                  alt="GhepXe Demo Video"
                  width={500}
                  height={350}
                  className="rounded-2xl w-full h-auto object-cover shadow-xl border-2 border-white"
                />
                {/* Play Button Overlay - Mobile */}
                <motion.button
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Handle video play
                    console.log("Play video");
                  }}
                >
                  <motion.span
                    className="w-12 h-12 md:w-14 md:h-14 bg-[var(--primary-green)]/90 rounded-full flex items-center justify-center shadow-lg group-active:bg-[var(--primary-green)] transition-colors duration-300"
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="md:w-6 md:h-6"
                    >
                      <polygon points="7,5 17,10 7,15" fill="white" />
                    </svg>
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
