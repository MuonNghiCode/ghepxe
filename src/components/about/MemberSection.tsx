"use client";

import Image from "next/image";
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
      facebook: "#",
      instagram: "#",
      twitter: "#",
      google: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Lê Minh Quang",
    position: "Front-end Developer",
    image: "/aboutus/mq.png",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      google: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Huỳnh Vương Khang",
    position: "Backend Developer",
    image: "/aboutus/vk.png",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      google: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Lê Thụy Linh Huyền",
    position: "International Business",
    image: "/aboutus/lh.png",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      google: "#",
      linkedin: "#",
    },
  },
  {
    id: 5,
    name: "Bùi Thị Mỹ Anh",
    position: "Marketing",
    image: "/aboutus/ma1.png",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      google: "#",
      linkedin: "#",
    },
  },
  {
    id: 6,
    name: "Lê Thảo Vy",
    position: "Marketing",
    image: "/aboutus/vl.png",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      google: "#",
      linkedin: "#",
    },
  },
];

export default function MemberSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#00A982] mb-4">Thành Viên</h2>
          <p className="text-xl text-gray-600">
            Đội ngũ đồng sáng và điều hành
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Avatar */}
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info Section */}
              <div className="bg-[#00A982] text-white">
                {/* Name and Position - Same Border */}
                <div className="px-6 py-4 text-center border-b border-white/30">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-white/90">{member.position}</p>
                </div>

                {/* Social Icons */}
                <div className="px-6 py-4 flex justify-center gap-4">
                  {member.socialLinks.facebook && (
                    <a
                      href={member.socialLinks.facebook}
                      className="text-white hover:text-white/70 transition-colors"
                    >
                      <FaFacebookF className="text-xl" />
                    </a>
                  )}
                  {member.socialLinks.instagram && (
                    <a
                      href={member.socialLinks.instagram}
                      className="text-white hover:text-white/70 transition-colors"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      className="text-white hover:text-white/70 transition-colors"
                    >
                      <FaXTwitter className="text-xl" />
                    </a>
                  )}
                  {member.socialLinks.google && (
                    <a
                      href={member.socialLinks.google}
                      className="text-white hover:text-white/70 transition-colors"
                    >
                      <FaGoogle className="text-xl" />
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      className="text-white hover:text-white/70 transition-colors"
                    >
                      <FaLinkedinIn className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}