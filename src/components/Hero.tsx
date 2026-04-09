import type { LocaleTranslations } from "@/lib/i18n";

type Props = { t: LocaleTranslations["hero"] };

export default function Hero({ t }: Props) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #f97316 0px,
            #f97316 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      {/* Orange accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f97316]" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-[#f97316] font-semibold uppercase tracking-widest text-sm mb-4">
            {t.tagline}
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            {t.h1[0]} <br />
            <span className="text-[#f97316]">{t.h1[1]}</span>
            <br /> {t.h1[2]}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
            {t.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-[#f97316] hover:bg-[#ea6a0a] text-white font-semibold px-8 py-4 rounded transition-colors text-base"
            >
              {t.cta_quote}
            </a>
            <a
              href="#projects"
              className="border border-gray-600 hover:border-[#f97316] text-gray-300 hover:text-[#f97316] font-semibold px-8 py-4 rounded transition-colors text-base"
            >
              {t.cta_work}
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {t.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#2d2d2d] border border-gray-700 rounded-lg p-6 text-center"
            >
              <p className="text-4xl font-extrabold text-[#f97316]">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs">
        <span>{t.scroll}</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
