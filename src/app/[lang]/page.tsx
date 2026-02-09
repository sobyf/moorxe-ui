import { Metadata } from "next";

export const metadata: Metadata = {
  title: "دانلود زیرنویس فارسی فیلم، سریال و انیمه | مرجع رایگان",
  description:
    "دانلود زیرنویس فارسی فیلم، سریال و انیمه با کیفیت بالا، هماهنگ و اختصاصی. دسترسی سریع، آرشیو کامل، لینک مستقیم و جستجوی آنلاین رایگان.",
  robots: "index, follow",
  openGraph: {
    title: "دانلود زیرنویس فارسی | مرجع فیلم، سریال و انیمه",
    description:
      "مرجع دانلود زیرنویس فارسی فیلم، سریال و انیمه با کیفیت بالا، هماهنگ و رایگان. جستجوی سریع و دسترسی آنلاین.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "دانلود زیرنویس فارسی فیلم و سریال | مرجع رایگان",
    description:
      "زیرنویس فارسی با کیفیت، هماهنگ و اختصاصی برای فیلم، سریال و انیمه. آرشیو کامل و دانلود رایگان.",
  },
};

export default async function MainPage() {
  return <div>سلام</div>;
}
