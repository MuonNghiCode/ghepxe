"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface Member {
  id: number;
  name: string;
  position: string;
  image: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    google?: string;
    linkedin?: string;
  };
}

const members: Member[] = [
  {
    id: 1,
    name: "Phạm Minh Quân",
    position: "Front-end Developer",
    image: "/aboutus/pmq.png",
    socialLinks: {
      facebook: "https://facebook.com/phaminhquan",
      instagram: "https://instagram.com/phaminhquan",
      twitter: "https://twitter.com/phaminhquan",
      google: "mailto:phaminhquan@gmail.com",
      linkedin: "https://linkedin.com/in/phaminhquan",
    },
  },
  {
    id: 2,
    name: "Lê Minh Quang",
    position: "Front-end Developer",
    image: "/aboutus/mq.png",
    socialLinks: {
      facebook: "https://facebook.com/leminhquang",
      instagram: "https://instagram.com/leminhquang",
      twitter: "https://twitter.com/leminhquang",
      google: "mailto:leminhquang@gmail.com",
      linkedin: "https://linkedin.com/in/leminhquang",
    },
  },
  {
    id: 3,
    name: "Huỳnh Vương Khang",
    position: "Backend Developer",
    image: "/aboutus/vk.png",
    socialLinks: {
      facebook: "https://facebook.com/huynhvuongkhang",
      instagram: "https://instagram.com/huynhvuongkhang",
      twitter: "https://twitter.com/huynhvuongkhang",
      google: "mailto:huynhvuongkhang@gmail.com",
      linkedin: "https://linkedin.com/in/huynhvuongkhang",
    },
  },
  {
    id: 4,
    name: "Lê Thụy Linh Huyền",
    position: "International Business",
    image: "/aboutus/lh.png",
    socialLinks: {
      facebook: "https://facebook.com/lethuylinhuyen",
      instagram: "https://instagram.com/lethuylinhuyen",
      twitter: "https://twitter.com/lethuylinhuyen",
      google: "mailto:lethuylinhuyen@gmail.com",
      linkedin: "https://linkedin.com/in/lethuylinhuyen",
    },
  },
  {
    id: 5,
    name: "Bùi Thị Mỹ Anh",
    position: "Marketing",
    image: "/aboutus/ma1.png",
    socialLinks: {
      facebook: "https://facebook.com/buithimyanh",
      instagram: "https://instagram.com/buithimyanh",
      twitter: "https://twitter.com/buithimyanh",
      google: "mailto:buithimyanh@gmail.com",
      linkedin: "https://linkedin.com/in/buithimyanh",
    },
  },
  {
    id: 6,
    name: "Lê Thảo Vy",
    position: "Marketing",
    image: "/aboutus/vl.png",
    socialLinks: {
      facebook: "https://facebook.com/lethaovy",
      instagram: "https://instagram.com/lethaovy",
      twitter: "https://twitter.com/lethaovy",
      google: "mailto:lethaovy@gmail.com",
      linkedin: "https://linkedin.com/in/lethaovy",
    },
  },
];

export default function MemberSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return FaFacebookF;
      case "instagram":
        return FaInstagram;
      case "twitter":
        return FaXTwitter;
      case "google":
        return FaGoogle;
      case "linkedin":
        return FaLinkedinIn;
      default:
        return FaFacebookF;
    }
  };

  const getSocialColor = (platform: string) => {
    switch (platform) {
      case "facebook":
        return "#1877F2";
      case "instagram":
        return "#E4405F";
      case "twitter":
        return "#1DA1F2";
      case "google":
        return "#EA4335";
      case "linkedin":
        return "#0A66C2";
      default:
        return "#ffffff";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[var(--primary-green)] mb-4"
            variants={itemVariants}
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            Thành Viên
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Đội ngũ đồng sáng và điều hành
          </motion.p>
        </motion.div>

        {/* Members Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main Image */}
              <div className="aspect-square relative bg-gray-100 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Right Overlay - Social Links */}
                <div className="absolute right-0 top-0 h-full w-16 bg-[#00a982]/30 backdrop-blur-md flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out shadow-lg z-20 pointer-events-none group-hover:pointer-events-auto">
                  {Object.entries(member.socialLinks).map(
                    ([platform, url], socialIndex) => {
                      if (!url) return null;
                      const IconComponent = getSocialIcon(platform);
                      const brandColor = getSocialColor(platform);

                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 hover:bg-white rounded-full flex items-center justify-center text-white hover:text-gray-800 transition-all duration-300 shadow-md border border-white/30 hover:border-white hover:shadow-lg hover:scale-110 hover:-translate-y-1 relative z-30"
                          style={
                            {
                              "--brand-color": brandColor,
                            } as React.CSSProperties
                          }
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = brandColor;
                            e.currentTarget.style.color = "white";
                            e.currentTarget.style.borderColor = brandColor;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "";
                            e.currentTarget.style.color = "";
                            e.currentTarget.style.borderColor = "";
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(url, "_blank");
                          }}
                        >
                          <IconComponent className="text-lg transition-all duration-300" />
                        </a>
                      );
                    }
                  )}
                </div>

                {/* Bottom Overlay - Member Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out z-10">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-roboto)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-gray-200 text-sm mb-3">
                    {member.position}
                  </p>

                  {/* Decorative Line */}
                  <div className="h-0.5 bg-gradient-to-r from-[var(--primary-green)] to-green-400 rounded-full w-12 group-hover:w-24 transition-all duration-500 delay-200" />
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-green)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Hover Indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-5">
                <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full animate-pulse" />
              </div>

              {/* Interactive Ripple Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
