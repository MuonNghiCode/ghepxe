// components/NoScrollGapFix.tsx
"use client";
import { useEffect } from "react";

export default function NoScrollGapFix() {
  useEffect(() => {
    const applyFix = () => {
      document.body.style.paddingRight = "0px";
    };

    const observer = new MutationObserver(applyFix);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: [
        "style",
        "data-scroll-locked",
        "data-radix-scroll-lock",
      ],
    });

    applyFix(); // chạy 1 lần khi mount

    return () => observer.disconnect();
  }, []);

  return null;
}
