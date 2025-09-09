import { Globe } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center fixed top-10 z-20 w-full pointer-events-none">
      <div className="max-w-screen-xl w-full flex items-center justify-between py-4 px-8 bg-[var(--primary-green)] shadow rounded-full mx-auto pointer-events-auto">
        {/* Logo & menu icon */}
        <div className="flex items-center gap-2 min-w-[180px]">
          <button className="mr-2 focus:outline-none">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect y="5" x="3" width="24" height="2" rx="1" fill="#fff" />
              <rect y="11" x="0" width="24" height="2" rx="1" fill="#fff" />
              <rect y="17" x="3" width="24" height="2" rx="1" fill="#fff" />
            </svg>
          </button>
          <Link
            href="/"
            className="font-semibold italic text-2xl text-white tracking-wide"
          >
            GhepXe
          </Link>
        </div>
        {/* Navigation + Language button */}
        <div className="flex items-center gap-6 min-w-[300px] justify-end">
          <nav>
            <ul className="flex gap-6 text-base font-semibold text-white">
              <li>
                <Link href="about-us" className="hover:underline">
                  Về GhepXe
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Khách Hàng Cá Nhân
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Trở Thành Đối Tác
                </Link>
              </li>
            </ul>
          </nav>
          <button className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#fcfcfc]/20 border border-white text-white text-base font-semibold hover:bg-white/30 transition cursor-pointer">
            Tiếng Việt
            <Globe size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
