import type { LocaleTranslations } from "@/lib/i18n";

type Props = { t: LocaleTranslations["services"] };

export default function Services({ t }: Props) {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#f97316] font-semibold uppercase tracking-widest text-sm mb-3">
            {t.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a]">
            {t.title}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#f97316] rounded" />
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">{t.description}</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((service) => (
            <div
              key={service.title}
              className="group border border-gray-200 rounded-xl p-8 hover:border-[#f97316] hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#f97316] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
