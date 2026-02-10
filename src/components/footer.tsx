// components/Footer.tsx
"use client";

import { useParams } from "next/navigation";

export default function Footer() {
  const params = useParams();
  const lang = params?.lang;

  const isFa = lang === "fa";

  return (
    <footer className="w-full py-6 border-t border-border bg-background text-muted-foreground">
      <div 
        className={`max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 ${
          isFa ? "font-vazir flex-row-reverse" : "font-geist"
        }`}
        dir={isFa ? "rtl" : "ltr"}
      >
        {/* Brand Name */}
        <div className="font-bold text-foreground text-lg tracking-wider">
          {isFa ? "مورچه" : "MOORXE"}
        </div>

        {/* Copyright Text */}
        <p className="text-sm opacity-80">
          {isFa 
            ? `© ${new Date().getFullYear()} تمامی حقوق برای مورکس محفوظ است.`
            : `© ${new Date().getFullYear()} Moorxe. All rights reserved.`
          }
        </p>
      </div>
    </footer>
  );
}