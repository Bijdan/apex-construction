import type { LocaleTranslations } from "@/lib/i18n";

type Props = { t: LocaleTranslations["projects"] };

export default function Projects({ t }: Props) {
  return (
    <section id="projects" className="py-24 bg-[#f5f5f5]">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              {/* Placeholder image */}
              <div
                className={`relative h-52 bg-gradient-to-br ${project.bg} flex items-end p-5`}
              >
                <span className="bg-[#f97316] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#f97316] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
