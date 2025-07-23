"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { FaFacebookF, FaInstagram, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function MainContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="rounded-2xl p-8 shadow-sm" style={{ backgroundColor: 'var(--card-bg)' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--primary-green)' }}>
                Liên hệ với GHEPXE
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">(84) xxx xxx xxxx</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">GHEPXE@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Address, Address, Address</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--gray-text)' }}>
                  Kết nối cùng GhepXe
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="hover:opacity-70 transition-colors" style={{ color: 'var(--gray-text)' }}>
                    <FaFacebookF className="text-xl" />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-colors" style={{ color: 'var(--gray-text)' }}>
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-colors" style={{ color: 'var(--gray-text)' }}>
                    <FaXTwitter className="text-xl" />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-colors" style={{ color: 'var(--gray-text)' }}>
                    <FaGoogle className="text-xl" />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-colors" style={{ color: 'var(--gray-text)' }}>
                    <FaLinkedinIn className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl p-4 shadow-sm" style={{ backgroundColor: 'var(--card-bg)' }}>
              <div className="aspect-square rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6100105370175!2d106.80730807570756!3d10.841127589311143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2sFPT%20University%20HCMC!5e0!3m2!1sen!2s!4v1735045162885!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FPT University - Vị trí GhepXe"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-2xl p-8 shadow-sm h-fit" style={{ backgroundColor: 'var(--card-bg)' }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--primary-green)' }}>
              Gửi lời nhắn cho GHEPXE
            </h2>
            <p className="text-gray-600 mb-8">
              Mọi ý kiến của bạn đều giúp GHEPXE tốt hơn mỗi ngày
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Tên của bạn"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input w-full px-4 py-4 bg-gray-100 border-0 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email của bạn"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input w-full px-4 py-4 bg-gray-100 border-0 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 transition-all"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại của bạn"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contact-input w-full px-4 py-4 bg-gray-100 border-0 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Lời nhắn của bạn"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="contact-input w-full px-4 py-4 bg-gray-100 border-0 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 text-white font-semibold rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2"
                style={{ backgroundColor: 'var(--primary-green)' }}
              >
                <Send className="w-5 h-5" />
                Gửi tin nhắn
              </button>

              {/* Privacy Notice */}
              <p className="text-sm text-gray-400 text-center mt-4">
                GHEPXE cam kết bảo mật thông tin của bạn
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 