'use client';

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import type { LanguageCode } from "@/lib/translations";

const gradientPalette = [
  "linear-gradient(135deg, rgba(10,15,81,0.82) 0%, rgba(40,54,153,0.55) 100%)",
  "linear-gradient(135deg, rgba(200,170,110,0.55) 0%, rgba(94,117,198,0.4) 100%)",
  "linear-gradient(135deg, rgba(12,16,60,0.85) 0%, rgba(105,74,196,0.45) 100%)",
  "linear-gradient(135deg, rgba(27,33,80,0.8) 0%, rgba(168,129,67,0.5) 100%)",
  "linear-gradient(135deg, rgba(20,27,88,0.85) 0%, rgba(44,97,153,0.45) 100%)",
  "linear-gradient(135deg, rgba(169,137,88,0.6) 0%, rgba(57,74,187,0.45) 100%)",
];

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const { hero, menu, general, placeholders } = t;
  const menuCategories = menu.categories;

  const handleLanguageSwitch = (code: LanguageCode) => () => {
    setLanguage(code);
  };

  return (
    <div className="relative isolate min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-20%] top-[-10%] h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl animate-orb" />
        <div className="absolute right-[-15%] top-[30%] h-[420px] w-[420px] rounded-full bg-[#c8aa6e]/20 blur-[140px] animate-orb-delay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-[440px] animate-aurora bg-[radial-gradient(circle_at_top,rgba(200,170,110,0.18),transparent_60%)] opacity-80" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-20 pt-16 sm:px-10 md:gap-28 md:pt-24">
        <section className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden text-center md:min-h-[80vh]">
          <div className="absolute left-4 top-4 flex items-center sm:left-8 sm:top-8">
            <Image
              src="/images/logo.jpg"
              alt="Connect Prime logo"
              width={160}
              height={48}
              priority
              className="h-10 w-auto drop-shadow-lg sm:h-12"
            />
          </div>
          <nav
            aria-label="Language selector"
            className="absolute right-4 top-4 flex items-center gap-2 sm:right-8 sm:top-8"
          >
            {[
              { code: "sq" as LanguageCode, flag: "🇦🇱", label: "Shqip" },
              { code: "mk" as LanguageCode, flag: "🇲🇰", label: "Македонски" },
              { code: "en" as LanguageCode, flag: "🇺🇸", label: "English" },
            ].map(({ code, flag, label }) => {
              const isActive = language === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={handleLanguageSwitch(code)}
                  aria-pressed={isActive}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-lg transition duration-300 ${
                    isActive
                      ? "border-white/90 bg-white/15 shadow-[0_0_18px_rgba(255,255,255,0.35)]"
                      : "border-white/15 bg-white/5 opacity-70 hover:border-white/40 hover:opacity-100"
                  }`}
                  title={label}
                >
                  <span aria-hidden>{flag}</span>
                  <span className="sr-only">{label}</span>
                </button>
              );
            })}
          </nav>
          <div className="absolute -left-16 top-14 hidden h-40 w-40 rounded-full border border-white/10 bg-white/10 blur-2xl sm:block animate-orb" />
          <div className="absolute -right-10 bottom-12 hidden h-56 w-56 rounded-full border border-[#c8aa6e]/20 bg-[#c8aa6e]/15 blur-2xl sm:block animate-orb-delay" />
          <div className="flex flex-col items-center gap-8">
            <span className="animate-fade-up [animation-delay:0.05s] rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
              {hero.badge}
            </span>
            <h1 className="animate-fade-up [animation-delay:0.15s] max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              {hero.title}
            </h1>
            <p className="animate-fade-up [animation-delay:0.25s] max-w-2xl text-base text-white/70 sm:text-lg">
              {hero.description}
            </p>
            <div className="animate-fade-up [animation-delay:0.35s] flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#menu"
                className="animate-shimmer inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0a0f51] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/90"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href={`tel:${general.phoneNumber.replace(/\\s+/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/15"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        <section id="menu" className="space-y-12">
          <header className="flex flex-col items-center gap-4 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">
              {menu.label}
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {menu.heading}
            </h2>
            <p className="max-w-2xl text-sm text-white/70 sm:text-base">
              {menu.description}
            </p>
          </header>

          <div className="grid gap-6 sm:gap-8">
            {menuCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="animate-fade-up animate-hover-lift rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(5,8,38,0.45)] backdrop-blur-2xl transition duration-500 hover:border-white/20 hover:bg-white/[0.07] sm:p-8"
                style={{ animationDelay: `${0.12 * categoryIndex}s` }}
              >
                <div className="flex items-center gap-3 text-white">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {category.title}
                  </h3>
                </div>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition duration-500 hover:border-white/25 hover:bg-white/[0.08] sm:p-5"
                    >
                      <div
                        className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.08] animate-aurora"
                        style={{
                          backgroundImage:
                            gradientPalette[
                              (categoryIndex * 7 + itemIndex) %
                                gradientPalette.length
                            ],
                        }}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/35 text-[0.6rem] uppercase tracking-[0.35em] text-white/75 transition-opacity duration-500 group-hover:bg-black/20">
                          <span>{placeholders.imageTitle}</span>
                          <span className="text-[0.5rem] tracking-[0.3em] text-white/50">
                            {placeholders.imageSubtitle}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-base font-medium text-white sm:text-lg">
                          {item.name}
                        </p>
                        <span className="whitespace-nowrap text-sm font-semibold text-[#c8aa6e] sm:text-base">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
