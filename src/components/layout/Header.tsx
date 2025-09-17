"use client";
import { Globe } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  easeIn,
} from "framer-motion";
import CountryFlag from "react-country-flag";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [mobileLanguageDropdownOpen, setMobileLanguageDropdownOpen] =
    useState(false);
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const mobileLanguageDropdownRef = useRef<HTMLDivElement>(null);

  const languageOptions = [
    { code: "vi", label: "Tiếng Việt", country: "VN" },
    { code: "en", label: "English", country: "GB" },
  ];

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const liVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const menuVariants = {
    hidden: {
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    visible: {
      x: "0%",
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: easeIn,
      },
    },
  };

  const mobileDropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: easeIn,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
  };

  useEffect(() => {
    if (pathname !== "/") {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setLanguageDropdownOpen(false);
      }
      if (
        mobileLanguageDropdownRef.current &&
        !mobileLanguageDropdownRef.current.contains(event.target as Node)
      ) {
        setMobileLanguageDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu when clicking outside or on links
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode);
    setLanguageDropdownOpen(false);
  };

  const handleMobileLanguageSelect = (langCode: string) => {
    setLanguage(langCode);
    setMobileLanguageDropdownOpen(false);
  };

  return (
    <>
      <header className="flex justify-center fixed z-50 w-full pointer-events-none md:top-10">
        <div
          className={`max-w-screen-2xl w-full flex items-center justify-between py-4 px-8 mx-auto pointer-events-auto md:rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[var(--primary-green)] shadow-xl shadow-[#fcfcfc]/20"
              : "bg-transparent shadow-none"
          }`}
          style={{ fontFamily: "var(--font-roboto)" }}
        >
          {/* Logo & menu icon */}
          <div className="flex items-center gap-2 min-w-[180px]">
            {/* Menu trigger chỉ hiện trên mobile */}
            <button
              className="mr-2 focus:outline-none md:hidden p-2 rounded-md bg-transparent hover:bg-white/10 transition-colors duration-200"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <motion.div
                animate={open ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-full h-0.5 bg-white rounded-full origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-2.5 left-0 w-full h-0.5 bg-white rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full origin-center"
                />
              </motion.div>
            </button>

            <Link
              href="/"
              className="font-semibold italic text-xl md:text-2xl text-white tracking-wide"
              style={{ fontFamily: "var(--font-roboto-serif)" }}
            >
              GhepXe
            </Link>
          </div>

          {/* Desktop Navigation + Language button */}
          <div className="hidden md:flex items-center gap-6 min-w-[300px] justify-end">
            <nav>
              <ul className="flex gap-6 text-base font-semibold text-white">
                <li>
                  <Link href="about-us" className="relative group">
                    <span>
                      {language === "vi" ? "Về GhepXe" : "About GhepXe"}
                    </span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link href="service" className="relative group">
                    <span>
                      {language === "vi"
                        ? "Khách Hàng Cá Nhân"
                        : "Individual Customer"}
                    </span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link href="partner" className="relative group">
                    <span>
                      {language === "vi"
                        ? "Trở Thành Đối Tác"
                        : "Join as Partner"}
                    </span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Desktop Language Dropdown */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#fcfcfc]/20 border border-white text-white text-base font-semibold hover:bg-white/30 transition cursor-pointer"
                aria-expanded={languageDropdownOpen}
                aria-haspopup="true"
              >
                {languageOptions.find((l) => l.code === language)?.label ||
                  "Chọn ngôn ngữ"}
                <motion.div
                  animate={{ rotate: languageDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Globe size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {languageDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 top-full mt-2 min-w-[180px] bg-[var(--primary-green)] border border-white/20 rounded-md shadow-lg overflow-hidden z-10"
                  >
                    {languageOptions.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang.code)}
                        className={`w-full flex items-center justify-between gap-2 px-4 py-3 text-left hover:bg-white/10 transition-colors ${
                          language === lang.code
                            ? "bg-white/20 text-white"
                            : "text-white/90 hover:text-white"
                        }`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <span className="font-medium">{lang.label}</span>
                        <CountryFlag
                          countryCode={lang.country}
                          svg
                          style={{
                            width: "1.5em",
                            height: "1.5em",
                          }}
                          aria-label={lang.label}
                        />
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-[var(--primary-green)] z-50 md:hidden shadow-xl flex flex-col"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/20 flex-shrink-0">
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={handleLinkClick}
                >
                  <span
                    className="font-semibold italic text-xl text-white tracking-wide"
                    style={{ fontFamily: "var(--font-roboto-serif)" }}
                  >
                    GhepXe
                  </span>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-md hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu Content - Scrollable */}
              <div className="flex-1 overflow-y-auto">
                <motion.nav
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  className="px-6 py-6"
                >
                  <ul className="flex flex-col gap-6 text-base font-semibold">
                    <motion.li variants={liVariants}>
                      <Link
                        href="about-us"
                        className="relative group block py-2"
                        onClick={handleLinkClick}
                      >
                        <span className="text-white">
                          {language === "vi" ? "Về GhepXe" : "About GhepXe"}
                        </span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </motion.li>
                    <motion.li variants={liVariants}>
                      <Link
                        href="service"
                        className="relative group block py-2"
                        onClick={handleLinkClick}
                      >
                        <span className="text-white">
                          {language === "vi"
                            ? "Khách Hàng Cá Nhân"
                            : "Individual Customer"}
                        </span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </motion.li>
                    <motion.li variants={liVariants}>
                      <Link
                        href="partner"
                        className="relative group block py-2"
                        onClick={handleLinkClick}
                      >
                        <span className="text-white">
                          {language === "vi"
                            ? "Trở Thành Đối Tác"
                            : "Join as Partner"}
                        </span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </motion.li>

                    {/* Mobile Language Dropdown */}
                    <motion.li variants={liVariants} className="mt-4">
                      <div
                        className="space-y-3"
                        ref={mobileLanguageDropdownRef}
                      >
                        <button
                          onClick={() =>
                            setMobileLanguageDropdownOpen(
                              !mobileLanguageDropdownOpen
                            )
                          }
                          className="w-full flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/15 transition-colors text-white"
                          aria-expanded={mobileLanguageDropdownOpen}
                          aria-haspopup="true"
                        >
                          <div className="flex items-center gap-3">
                            <Globe size={18} />
                            <span className="font-medium">
                              {languageOptions.find((l) => l.code === language)
                                ?.label || "Chọn ngôn ngữ"}
                            </span>
                          </div>
                          <motion.div
                            animate={{
                              rotate: mobileLanguageDropdownOpen ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-white"
                            >
                              <path
                                d="M6 9l6 6 6-6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {mobileLanguageDropdownOpen && (
                            <motion.div
                              variants={mobileDropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              className="overflow-hidden"
                            >
                              <div className="space-y-1 pl-4">
                                {languageOptions.map((lang, index) => (
                                  <motion.button
                                    key={lang.code}
                                    onClick={() =>
                                      handleMobileLanguageSelect(lang.code)
                                    }
                                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                                      language === lang.code
                                        ? "bg-white/20 text-white"
                                        : "bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                                    }`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                  >
                                    <span className="font-medium">
                                      {lang.label}
                                    </span>
                                    <CountryFlag
                                      countryCode={lang.country}
                                      svg
                                      style={{
                                        width: "1.5em",
                                        height: "1.5em",
                                      }}
                                      aria-label={lang.label}
                                    />
                                  </motion.button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.li>
                  </ul>
                </motion.nav>
              </div>

              {/* Menu Footer - Always visible */}
              <div className="px-6 pb-6 border-t border-white/20 pt-4 flex-shrink-0">
                <Link
                  href="contact"
                  className="block text-sm font-semibold text-white hover:text-white/80 transition-colors py-2"
                  onClick={handleLinkClick}
                >
                  {language === "vi" ? "Hỗ trợ & Liên hệ" : "Support & Contact"}
                </Link>
                <p className="text-xs text-white/60 mt-2">© 2025 GhepXe</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
