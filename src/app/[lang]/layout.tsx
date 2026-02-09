// app/[lang]/layout.tsx

import type { ReactNode } from "react";
import { use } from "react";
import { Vazirmatn, Geist_Mono } from "next/font/google";
import "../golobal.css";
import { ThemeProvider } from "../../components/theme-provider";
import Navbar from "@/components/navbar";

const vazirFont = Vazirmatn({
  variable: "--font-vazir",
  display: "swap"
});

const geistFont = Geist_Mono({
  variable: "--font-geist",
  display: "swap"
});

type RootLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{
    lang: string
  }>;
}>;

export default function RootLayout({ children, params }: RootLayoutProps) {
  const { lang } = use(params);
  const dir = lang === "en" ? "ltr" : "rtl";
  const activeFont = lang === "en" ? "font-geist" : "font-vazir"

  return (
    <html lang={lang} dir={dir} className={`${geistFont.variable} ${vazirFont.variable} antialiased`} suppressHydrationWarning>
      <body className={`${activeFont} min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navbar */}
          <Navbar />
          {/* Main */}
          <main>{children}</main>
          {/* Footer */}
          <footer>{/* Footer Content */}</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
