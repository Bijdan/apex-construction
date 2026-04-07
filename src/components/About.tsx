const team = [
  {
    name: "Ahmed Balit",
    role: "Founder & CEO",
    bio: "25+ years in commercial and residential construction. Ahmed founded Apex with a vision to raise the bar on quality and accountability.",
    initials: "AB",
  },
  {
    name: "Sofia Chen",
    role: "Chief Engineer",
    bio: "Licensed structural engineer with expertise in sustainable building systems and large-scale commercial projects.",
    initials: "SC",
  },
  {
    name: "James Okafor",
    role: "Project Director",
    bio: "Oversees all active projects, ensuring timelines, budgets, and quality standards are met without compromise.",
    initials: "JO",
  },
  {
    name: "Laura Vásquez",
    role: "Design Lead",
    bio: "Bridges architecture and construction, translating client visions into buildable, beautiful realities.",
    initials: "LV",
  },
];

const values = [
  {
    title: "Quality First",
    description:
      "We never cut corners. Every project is built to last generations.",
  },
  {
    title: "Transparent",
    description:
      "Clear communication and honest pricing from day one to final handover.",
  },
  {
    title: "On Schedule",
    description:
      "We respect your time. 97% of our projects are delivered on or ahead of schedule.",
  },
  {
    title: "Safety Always",
    description:
      "Zero-incident culture. Our job sites are safe for workers and communities.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#f97316] font-semibold uppercase tracking-widest text-sm mb-3">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a]">
            About Apex
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#f97316] rounded" />
        </div>

        {/* Story + values */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
              Building Since 2005
            </h3>
            <p className="text-gray-500 leading-relaxed mb-5">
              Apex Construction Group was founded on a single principle: build
              what you promised, when you promised it, at the price you quoted.
              Over two decades and 500+ projects later, that principle still
              drives everything we do.
            </p>
            <p className="text-gray-500 leading-relaxed">
              From custom homes in residential neighborhoods to multi-million
              dollar commercial developments, we bring the same level of care,
              precision, and professionalism to every project — no matter the
              size.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-[#f5f5f5] rounded-xl p-6">
                <div className="w-3 h-3 bg-[#f97316] rounded-full mb-3" />
                <h4 className="font-bold text-[#1a1a1a] mb-1">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-[#1a1a1a] text-center mb-10">
            Leadership Team
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center group"
              >
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-full bg-[#1a1a1a] mx-auto mb-4 flex items-center justify-center group-hover:bg-[#f97316] transition-colors">
                  <span className="text-white font-bold text-xl">
                    {member.initials}
                  </span>
                </div>
                <h4 className="font-bold text-[#1a1a1a]">{member.name}</h4>
                <p className="text-[#f97316] text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
