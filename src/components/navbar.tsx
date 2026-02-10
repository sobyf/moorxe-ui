"use client";

import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const params = useParams<{ lang: string }>();
  const pathname = usePathname();

  const lang = params.lang ?? "en";
  const nextLang = lang === "en" ? "fa" : "en";

  // منطق جایگزینی زبان در مسیر فعلی
  const targetPath = pathname.replace(`/${lang}`, `/${nextLang}`);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10" />;
  }

  const isDark = theme === "dark";

  return (
    <nav className="container-xs fixed inset-x-0 top-0 z-999 mx-auto h-10 flex items-center justify-between bg-neutral-900 border-b border-foreground/20 select-none">
      {/* Logo */}
      <Link
        href={`/${lang}`}
        className={`flex items-center px-1 py-0.5 active:shadow-inner gap-1`}
      >
        <Image
          src="/moorxe-logo-white.png"
          width={30}
          height={30}
          alt="Moorxe Logo"
          loading="eager"
          className=""
        />
        <span className="font-extrabold mt-0.5">
          {lang === "fa" ? "مورچه" : "Moorxe"}
        </span>
      </Link>

      {/* Controls */}
      <div className="flex items-center gap-1.5">
        {/* Language Switcher - حالا قابل کلیک است */}
        <Link
          href={targetPath}
          scroll={false}
          className="
            flex items-center gap-1
            p-0.5
            border
            border-neutral-400
            text-xs
            active:shadow-inner
            rounded-md
          "
        >
          <Image
            src={nextLang === "en" ? "/uk-flag.png" : "/ir-flag.png"}
            width={32}
            height={16}
            alt={nextLang === "en" ? "English" : "Persian"}
            loading="eager"
            className="w-8 h-4 rounded-sm"
          />
        </Link>

        {/* Theme switch */}
        <Switch
          dir="ltr"
          checked={isDark}
          onChange={(val) => setTheme(val ? "dark" : "light")}
          className="bg-neutral-300 relative inline-flex h-5.5 w-11 items-center rounded-full transition-colors focus:outline-none"
        >
          {/* آیکون‌ها در پس‌زمینه */}
          <div className="absolute flex w-full justify-between px-1 pointer-events-none">
            <SunIcon className={`size-3.5 text-neutral-900`} />
            <MoonIcon className={`size-3.5 text-neutral-900`} />
          </div>

          {/* دکمه متحرک */}
          <span
            className={`${
              isDark ? "translate-x-6" : "translate-x-1"
            } inline-block size-4 transform rounded-full bg-neutral-900 transition-transform duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </nav>
  );
}
