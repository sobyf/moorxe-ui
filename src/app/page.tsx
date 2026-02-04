import { Metadata } from "next";
import { FileText, Folder, Save } from "@react95/icons";
import Link from "next/link";
export const metadata: Metadata = {
  title: "دانلود زیرنویس فارسی - زیرزمین زیرنویس فارسی فیلم و سریال",
  description:
    "جستجو، دسترسی و دریافت سریع زیرنویس فارسی فیلم و سریال در زیرزمین مورچه.",
};

export default async function MainPage() {
  const subtitles = [
    { name: "Inception.2010.BDRip.Persian.srt", url: "/download/1" },
    { name: "The.Dark.Knight.BRRip.Farsi.srt", url: "/download/2" },
    { name: "Interstellar.2014.WEB-DL.srt", url: "/download/3" },
    { name: "Pulp.Fiction.1994.Special.Ed.srt", url: "/download/4" },
  ];

  return (
<div className="px-2 py-4">
  <h1 className="flex items-center gap-2 text-lg font-bold mb-4 text-black">
    <Folder variant="32x32_4" className="w-8 h-8" />
    <span>زیرزمین دانلود زیرنویس فارسی فیلم و سریال مورچه</span>
  </h1>
  
  <div
    dir="ltr"
    className="border-2 border-t-gray-800 border-l-gray-800 border-b-gray-100 border-r-gray-100 w-full shadow-sm bg-white"
  >
    {/* Header - استفاده از آبی استاندارد ویندوز ۹۸ */}
    <div className="flex bg-blue-800 border-b border-gray-400 text-sm font-bold px-1">
      <h2 className="px-2 py-1 text-white">عنوان</h2>
    </div>

    {/* List Body */}
    <div className="p-1">
      {subtitles.map((item, index) => (
        <Link
          href="#"
          key={index}
          className="group flex items-center px-2 py-1 cursor-pointer hover:bg-blue-700 hover:text-white select-none transition-none"
        >
          {/* File Name Section */}
          <div className="flex items-center gap-2 grow">
            <FileText
              variant="16x16_4"
              className="w-4 h-4 group-hover:brightness-200"
            />
            <span className="text-[12px] leading-none pt-1">
              {item.name}
            </span>
          </div>
          
          {/* بخش Save (دانلود) */}
          <div className="flex items-center">
            <Save
              variant="16x16_4"
              className="w-4 h-4 group-hover:brightness-200"
            />
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>
  );
}
