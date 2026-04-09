import type { LocaleTranslations } from "@/lib/i18n";

type Props = { t: LocaleTranslations["about"] };

export default function About({ t }: Props) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#f97316] font-semibold uppercase tracking-widest text-sm mb-3">
            {t.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a]">{t.title}</h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#f97316] rounded" />
        </div>

        {/* Story + values */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">{t.story_title}</h3>
            <p className="text-gray-500 leading-relaxed mb-5">{t.story_p1}</p>
            <p className="text-gray-500 leading-relaxed">{t.story_p2}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {t.values.map((v) => (
              <div key={v.title} className="bg-[#f5f5f5] rounded-xl p-6">
                <div className="w-3 h-3 bg-[#f97316] rounded-full mb-3" />
                <h4 className="font-bold text-[#1a1a1a] mb-1">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-[#1a1a1a] text-center mb-10">
            {t.team_title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-24 h-24 rounded-full bg-[#1a1a1a] mx-auto mb-4 flex items-center justify-center group-hover:bg-[#f97316] transition-colors">
                  <span className="text-white font-bold text-xl">{member.initials}</span>
                </div>
                <h4 className="font-bold text-[#1a1a1a]">{member.name}</h4>
                <p className="text-[#f97316] text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
