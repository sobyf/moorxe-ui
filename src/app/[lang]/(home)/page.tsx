import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (lang === "fa") {
    return {
      title: "دانلود زیرنویس فارسی فیلم، سریال و انیمه | مورچه",
      description:
        "مرجع دانلود زیرنویس فارسی فیلم، سریال و انیمه در مورچه. دسترسی رایگان به آرشیو کامل، زیرنویس‌های هماهنگ و لینک مستقیم بدون تبلیغات.",
      alternates: {
        canonical: "https://moorxe.com",
      },
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
  }

  // Default English metadata
  return {
    title: "Download Persian Subtitles for Movies & Series | Moorxe",
    description:
      "Moorxe: Your ultimate source for high-quality Persian subtitles. Fast access to perfectly synced subtitles for movies, TV series, and anime for free.",
    alternates: {
      canonical: "https://moorxe.com",
    },
    robots: "index, follow",
    openGraph: {
      title: "Download Persian Subtitles | Movies, Series & Anime",
      description:
        "The ultimate source for Persian subtitles for movies, TV series, and anime. High quality, perfectly synced, fast search, and free access.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Download Persian Subtitles | Movies & TV Series",
      description:
        "High-quality Persian subtitles for movies, series, and anime. Perfect sync, exclusive translations, full archive, and free downloads.",
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name:
      lang === "fa"
        ? "مورچه | مرجع زیرنویس فارسی"
        : "Moorxe | Persian Subtitles",
    url: "https://moorxe.com",
    logo: "https://moorxe.com/moorxe-logo-black.png",
    image: "https://moorxe.com/home.jpg",
    description:
      lang === "fa"
        ? "مورچه یک مرجع کامل برای دانلود زیرنویس فارسی فیلم، سریال و انیمه است. آرشیو رایگان، هماهنگ، با کیفیت و قابل دسترسی سریع برای همه کاربران."
        : "Moorxe is a complete source for downloading Persian subtitles for movies, TV series, and anime. Free, synced, high-quality, and easily accessible for everyone.",
    brand: {
      "@type": "Brand",
      name: "Moorxe",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/home.jpg"
            alt="Moorxe Home Page"
            fill
            priority
            className="object-cover "
          />
          <div className="absolute inset-0 bg-background/80 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px]" />
        </div>
        <div className="relative z-20 w-full h-full items-center flex justify-center text-foreground max-w-7xl flex-col text-center mx-auto px-4">
          {lang === "fa" ? (
            <>
              <h1 className="md:text-4xl text-2xl font-extrabold">
                دانلود زیرنویس فارسی فیلم، سریال و انیمه
              </h1>
              <p className="text-base md:text-xl font-light mt-2 max-w-5xl">
                زیرنویس فارسی با کیفیت بالا به همراه همگام‌سازی کامل و ترجمه‌های
                اختصاصی. با جستجوی سریع و دانلود مستقیم و رایگان، آرشیو کاملی از
                فیلم‌ها، سریال‌های تلویزیونی و انیمه‌ها را کاوش کنید.
              </p>
            </>
          ) : (
            <>
              <h1 className="md:text-4xl text-2xl font-extrabold">
                Download Persian Subtitles for Movies, Series & Anime
              </h1>
              <p className="text-base md:text-xl font-medium mt-2">
                High-quality Persian subtitles with perfect sync and exclusive
                translations. Explore a full archive of movies, TV series, and
                anime with fast search and free direct downloads.
              </p>
            </>
          )}
        </div>
      </div>
      <>
        {/* 1 */}
        <div className="max-w-7xl mx-auto px-4 my-10">
          {lang === "fa" ? (
            <>
              <h2 className="font-bold md:text-2xl text-xl ">
                زیرنویس فارسی | دانلود زیرنویس فارسی فیلم و سریال خارجی
              </h2>
              <p className="text-sm md:text-base font-light mt-1 leading-7">
                تماشای فیلم و سریال خارجی بدون زیرنویس فارسی، لذت واقعی دیدن
                آن‌ها را از بین می‌برد. در این صفحه می‌توانید زیرنویس فارسی
                فیلم، سریال و انیمه خارجی را به‌صورت رایگان دانلود کنید و بدون
                دردسر، با دیالوگ‌ها و داستان ارتباط کامل بگیرید. تمام زیرنویس‌ها
                با نسخه‌های مختلف هماهنگ هستند و از طریق لینک مستقیم، بدون نیاز
                به ثبت‌نام در اختیار شما قرار می‌گیرند.
              </p>
            </>
          ) : (
            <>
              <h2 className="font-bold md:text-2xl text-xl ">
                Download Persian Subtitles | Movies, TV Shows & Anime
              </h2>
              <p className="text-sm md:text-base font-light mt-1 leading-7 ">
                Watching foreign cinema loses its spark without a perfect
                translation. Whether you are looking for Persian subtitles for
                movies, trending TV series, or the latest anime, we provide a
                seamless way to download Persian subtitles for free. Our goal is
                to bridge the language gap, letting you connect deeply with
                every dialogue and plot twist without the hassle of broken files
                or mistranslations. Every subtitle is optimized for multiple
                releases, accessible via direct links with no registration
                required.
              </p>
            </>
          )}
        </div>
        {/* 2 */}
        <div className="max-w-7xl mx-auto px-4 my-10">
          {lang === "fa" ? (
            <>
              <h2 className="font-bold md:text-2xl text-xl ">
                سایت زیرنویس فارسی | مرجع قابل اعتماد با آرشیو کامل
              </h2>
              <p className="text-sm md:text-base font-light mt-1 leading-7">
                این وب‌سایت به‌عنوان یک مرجع زیرنویس فارسی، مجموعه‌ای کامل از
                زیرنویس فیلم‌ها و سریال‌های خارجی را گردآوری کرده است. آرشیو
                سایت به‌صورت روزانه به‌روزرسانی می‌شود تا همیشه به جدیدترین
                زیرنویس‌ها دسترسی داشته باشید. اگر به دنبال بهترین سایت زیرنویس
                فارسی با محتوای دقیق، اصلاح‌شده و قابل اعتماد هستید، اینجا
                انتخاب مطمئنی برای شماست.
              </p>
            </>
          ) : (
            <>
              <h2 className="font-bold md:text-2xl text-xl ">
                Your Trusted Source for the Most Complete Persian Subtitle
                Archive
              </h2>
              <p className="text-sm md:text-base font-light mt-1 leading-7 ">
                As a leading Persian subtitle site, we’ve built a comprehensive
                library covering everything from cult classics to global
                blockbusters. Our database is updated daily, ensuring you have
                instant access to the newest releases the moment they drop. If
                you’ve been searching for a reliable Persian subtitle source
                with accurate, curated, and verified content, you’ve landed in
                the right place. We pride ourselves on quality control and a
                community-driven approach to archiving
              </p>
            </>
          )}
        </div>
        {/* 3 */}
        <div className="max-w-7xl mx-auto px-4 my-10">
          {lang === "fa" ? (
            <>
              <h2 className="font-bold md:text-2xl text-xl ">
                جستجوی سریع زیرنویس فارسی | ساده، سریع و بدون ثبت‌ نام
              </h2>
              <p className="text-sm md:text-base font-light mt-1 leading-7">
                پیدا کردن زیرنویس مناسب نباید زمان‌بر باشد. با جستجوی سریع
                زیرنویس فارسی می‌توانید تنها با چند کلیک، فایل موردنظر خود را
                پیدا کنید. امکان جستجوی پیشرفته بر اساس نام فیلم یا سریال، فصل،
                کیفیت و نسخه انتشار فراهم شده است؛ همه‌چیز آنلاین، سریع و بدون
                نیاز به ثبت‌ نام.
              </p>
            </>
          ) : (
            <>
              <h2 className="font-bold md:text-2xl text-xl ">
                Fast Persian Subtitle Search: Find Your File in Seconds
              </h2>
              <p className="text-sm md:text-base font-light mt-1 leading-7 ">
                Hunting for the right file shouldn't be harder than watching the
                movie itself. With our Fast Persian Subtitle Search, you can
                locate your specific version in just a few clicks. Our advanced
                filtering system allows you to search by title, season,
                resolution, or release group. Everything is available online and
                lightning-fast—no sign-up, no hidden fees, just the subtitles
                you need when you need them.
              </p>
            </>
          )}
        </div>
        {/* 4 */}
        <div className="max-w-7xl mx-auto px-4 my-10">
          {lang === "fa" ? (
            <>
              <h2 className="font-bold md:text-2xl text-xl ">
                زیرنویس فارسی با کیفیت | هماهنگ، دقیق و بدون اشتباه
              </h2>
              <p className="text-sm md:text-base font-light mt-1 leading-7">
                کیفیت زیرنویس مستقیماً روی تجربه تماشا تأثیر می‌گذارد. به همین
                دلیل، تمام فایل‌ها به‌صورت سینک‌شده و هماهنگ با نسخه اصلی ارائه
                می‌شوند. زیرنویس‌ها پیش از انتشار بررسی و اصلاح شده‌اند تا بدون
                غلط املایی، با ترجمه روان و قابل فهم، تماشای فیلم یا سریال را
                برای شما لذت‌بخش‌تر کنند.
              </p>
            </>
          ) : (
            <>
              <h2 className="font-bold md:text-2xl text-xl ">
                High-Quality Persian Subtitles | Perfectly Synced & Error-Free
              </h2>
              <p className="text-sm md:text-base font-light mt-1 leading-7 ">
                A bad sync ruins the experience. That’s why we focus on
                providing synced Persian subtitles that align perfectly with the
                original audio. Each file undergoes a review process to ensure
                smooth, natural translations that are free of typos or awkward
                phrasing. We offer professional subtitle translations that
                prioritize readability and context, making your viewing
                experience truly immersive and enjoyable.
              </p>
            </>
          )}
        </div>
        {/* 5 */}
        <div className="max-w-7xl mx-auto px-4 my-10">
          {lang === "fa" ? (
            <>
              <h2 className="font-bold md:text-2xl text-xl ">
                فرمت‌های زیرنویس فارسی | SRT، ASS و سازگار با همه نسخه‌ها
              </h2>
              <p className="text-sm md:text-base font-light mt-1 leading-7">
                در این آرشیو می‌توانید زیرنویس فارسی با فرمت SRT و ASS را برای
                نسخه‌های مختلف مانند BluRay، WEB-DL، HDRip، 1080p و 4K دانلود
                کنید. تمام فایل‌ها به‌صورت زیرنویس جداگانه ارائه می‌شوند و با
                اکثر پلیرها و دستگاه‌ها کاملاً سازگار هستند.
              </p>
            </>
          ) : (
            <>
              <h2 className="font-bold md:text-2xl text-xl ">
                SRT & ASS Formats | Compatible with BluRay, WEB-DL, and 4K
              </h2>
              <p className="text-sm md:text-base font-light mt-1 leading-7 ">
                Versatility matters. Our archive supports both SRT and ASS
                Persian subtitles, ensuring full compatibility with your
                favorite media players and devices. Whether you are watching a
                1080p BluRay rip or a high-end 4K WEB-DL release, we provide
                standalone files that work across mobile, desktop, and smart
                TVs. We cover all major release versions to ensure you never
                face a "format not supported" error again.
              </p>
            </>
          )}
        </div>
        {/* 6 */}
        <div className="max-w-7xl mx-auto px-4 my-10">
          {lang === "fa" ? (
            <>
              <h2 className="font-bold md:text-2xl text-xl ">
                ساخت و ویرایش زیرنویس فارسی | ابزار هوشمند و هماهنگ‌سازی دقیق
              </h2>
              <p className="text-sm md:text-base font-light mt-1 leading-7">
                علاوه بر دانلود زیرنویس، امکان ساخت، ویرایش و هماهنگ‌سازی
                زیرنویس فارسی نیز فراهم شده است. با استفاده از ابزارهای هوشمند و
                زیرنویس فارسی خودکار مبتنی بر هوش مصنوعی می‌توانید فایل SRT
                تولید کنید، زمان‌بندی زیرنویس را تنظیم کنید یا حتی ترجمه آنی
                دیالوگ‌ها را انجام دهید.
              </p>
            </>
          ) : (
            <>
              <h2 className="font-bold md:text-2xl text-xl ">
                Create, Edit, and Sync: Smart AI Tools for Persian Subtitles
              </h2>
              <p className="text-sm md:text-base font-light mt-1 leading-7 ">
                We go beyond just downloads. Take control of your media with our
                suite of smart tools designed for building and editing Persian
                subtitles. From AI-powered auto-subtitling to advanced Subtitle
                Sync features, you can generate SRT files, adjust timing
                offsets, or even experiment with real-time translation. It’s a
                modern approach to subtitle management, powered by the latest
                technology to give you total control over your library.
              </p>
            </>
          )}
        </div>
      </>
    </>
  );
}
