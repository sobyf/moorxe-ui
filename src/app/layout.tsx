import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Vazirmatn } from "next/font/google";
import "./golobal.css";
import Image from "next/image";
import { FileFind2 } from "@react95/icons";
import Link from "next/link";
const vazirFont = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirFont.variable}`}>
      <body className="antialiased font-vazir frame-main">
        <nav className="px-1 py-1 bg-gray-400 w-full border-b-2 border-white shadow-[0_1px_0_0_var(--color-gray-600)] flex items-center justify-between h-12">
          <div className="flex items-center gap-1">
            <div className="flex items-center h-8 w-72 bg-gray-300 border-2 border-t-gray-800 border-l-gray-800 border-b-gray-100 border-r-gray-100 ">
              <Link
                href="/search"
                className="flex items-center justify-center h-6 w-6 bg-gray-300 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white m-0.5 hover:bg-blue-700"
              >
                <FileFind2 variant="32x32_4" className="w-4 h-4" />
              </Link>
              <input
                dir="ltr"
                placeholder="Search..."
                className="grow  bg-transparent outline-none px-1 text-[12px] placeholder-gray-۶00 h-full "
              />
            </div>
          </div>

          <div className="bg-gray-300 border-2 border-b-white border-r-white border-t-gray-600 border-l-gray-600 p-1 h-10 flex items-center justify-center">
            <Image
              src="/moorxe-2.png"
              width={80}
              height={80}
              className="[image-rendering:pixelated]"
              alt="moorxe-logo"
            />
          </div>
        </nav>

        <main className="">{children}</main>
      </body>
    </html>
  );
}
