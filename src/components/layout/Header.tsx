"use client";
import { Globe } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountryFlag from "react-country-flag";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const languageOptions = [
    { code: "vi", label: "Tiếng Việt", country: "VN" },
    { code: "en", label: "English", country: "GB" },
  ];

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const liVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { stiffness: 0, damping: 200 },
    },
  };

  useEffect(() => {
    if (pathname !== "/") {
      setScrolled(true);
      return;
    }
    const handleScoll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScoll);
    return () => window.removeEventListener("scroll", handleScoll);
  }, [pathname]);

  return (
    <header className="flex justify-center fixed z-99 w-full pointer-events-none md:top-10 ">
      <div
        className={`max-w-screen-2xl w-full flex items-center justify-between py-4 px-8 mx-auto pointer-events-auto md:rounded-full ${
          scrolled
            ? "bg-[var(--primary-green)] shadow-xl shadow-[#fcfcfc]/20"
            : "bg-transparent shadow-none"
        }`}
        style={{ fontFamily: "var(--font-roboto)" }}
      >
        {/* Logo & menu icon */}
        <div className="flex items-center gap-2 min-w-[180px]">
          {/* Drawer trigger chỉ hiện trên mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="mr-2 focus:outline-none md:hidden p-1 rounded-md bg-transparent hover:bg-white/10 transition"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <rect y="5" x="3" width="24" height="2" rx="1" fill="#fff" />
                  <rect y="11" x="0" width="24" height="2" rx="1" fill="#fff" />
                  <rect y="17" x="3" width="24" height="2" rx="1" fill="#fff" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-[var(--primary-green)] text-white max-w-screen-2xl-xs w-full fixed left-0 top-0 h-full shadow-lg z-[100] overflow-auto"
              style={{ transform: "none" }}
            >
              <VisuallyHidden>
                <DialogTitle>Hidden title for accessibility</DialogTitle>
              </VisuallyHidden>

              {/* Sheet header: logo ở trên cùng + close button */}
              <motion.div
                initial={{ x: -80, opacity: 0 }}
                animate={open ? { x: 0, opacity: 1 } : { x: -80, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 40 }}
                className="flex items-center justify-between px-5 py-4 border-b border-white/30"
              >
                <Link href="/" className="flex items-center gap-3">
                  <span className="font-semibold italic text-xl text-white tracking-wide">
                    GhepXe
                  </span>
                </Link>
              </motion.div>

              <motion.nav
                variants={navVariants}
                initial="hidden"
                animate={open ? "visible" : "hidden"}
                className=""
              >
                <ul className="flex flex-col gap-4 p-6 text-base font-semibold">
                  <motion.li variants={liVariants}>
                    <Link href="about-us" className="relative group">
                      <span>
                        {language === "vi" ? "Về GhepXe" : "About GhepXe"}
                      </span>
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.li>
                  <motion.li variants={liVariants}>
                    <Link href="#" className="relative group">
                      <span>
                        {language === "vi"
                          ? "Khách Hàng Cá Nhân"
                          : "Individual Customer"}
                      </span>
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.li>
                  <motion.li variants={liVariants}>
                    <Link href="#" className="relative group">
                      <span>
                        {language === "vi"
                          ? "Trở Thành Đối Tác"
                          : "Join as Partner"}
                      </span>
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.li>
                  <motion.li variants={liVariants}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#fcfcfc]/20 border border-white text-white text-base font-semibold hover:bg-white/30 transition cursor-pointer w-full justify-center">
                          {languageOptions.find((l) => l.code === language)
                            ?.label || "Chọn ngôn ngữ"}
                          <Globe size={20} />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        forceMount
                        className="min-w-[272px] bg-[var(--primary-green)] border border-white/20 z-[101]"
                      >
                        <DropdownMenuRadioGroup
                          value={language}
                          onValueChange={setLanguage}
                        >
                          {languageOptions.map((lang) => (
                            <DropdownMenuRadioItem
                              key={lang.code}
                              value={lang.code}
                              className="text-white flex items-center justify-between gap-2"
                            >
                              <span>{lang.label}</span>
                              <CountryFlag
                                countryCode={lang.country}
                                svg
                                style={{
                                  width: "1.5em",
                                  height: "1.5em",
                                }}
                                aria-label={lang.label}
                              />
                            </DropdownMenuRadioItem>
                          ))}
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </motion.li>
                </ul>
              </motion.nav>
              {/* Footer area trong sheet: CTA hoặc thông tin liên hệ */}
              <div className="mt-auto px-6 pb-6">
                <div className="border-t border-white/10 pt-4">
                  <Link
                    href="#"
                    className="block text-sm font-semibold text-white hover:underline"
                  >
                    <span>
                      {language === "vi"
                        ? "Hỗ trợ & Liên hệ"
                        : "Support & Contact"}
                    </span>
                  </Link>
                  <p className="text-xs text-white/80 mt-2">© 2025 GhepXe</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link
            href="/"
            className="font-semibold italic text-xl md:text-2xl text-white tracking-wide"
          >
            GhepXe
          </Link>
        </div>
        {/* Navigation + Language button */}
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
                <Link href="#" className="relative group">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#fcfcfc]/20 border border-white text-white text-base font-semibold hover:bg-white/30 transition cursor-pointer">
                {languageOptions.find((l) => l.code === language)?.label ||
                  "Chọn ngôn ngữ"}
                <Globe size={20} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="min-w-[180px] bg-[var(--primary-green)] border border-white/20"
            >
              <DropdownMenuRadioGroup
                value={language}
                onValueChange={setLanguage}
              >
                {languageOptions.map((lang) => (
                  <DropdownMenuRadioItem
                    key={lang.code}
                    value={lang.code}
                    className="text-white flex items-center justify-between gap-2"
                  >
                    <span>{lang.label}</span>
                    <CountryFlag
                      countryCode={lang.country}
                      svg
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                      }}
                      aria-label={lang.label}
                    />
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
