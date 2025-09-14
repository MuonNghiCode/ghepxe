"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Mỗi khi đổi route thì scroll lên đầu
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
