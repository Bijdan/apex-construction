const projects = [
  {
    title: "Riverside Corporate Plaza",
    category: "Commercial",
    location: "Austin, TX",
    year: "2024",
    description:
      "A 12-story mixed-use office and retail complex with LEED Gold certification.",
    bg: "from-slate-700 to-slate-900",
  },
  {
    title: "The Hartwell Residence",
    category: "Residential",
    location: "Denver, CO",
    year: "2024",
    description:
      "Custom 6,200 sq ft luxury home featuring sustainable materials and smart-home integration.",
    bg: "from-stone-600 to-stone-900",
  },
  {
    title: "Meridian Industrial Hub",
    category: "Industrial",
    location: "Houston, TX",
    year: "2023",
    description:
      "500,000 sq ft distribution and warehousing facility built in under 14 months.",
    bg: "from-zinc-600 to-zinc-900",
  },
  {
    title: "Oakwood Community Center",
    category: "Public",
    location: "Nashville, TN",
    year: "2023",
    description:
      "Award-winning community recreation center with aquatic center and fitness facilities.",
    bg: "from-neutral-600 to-neutral-900",
  },
  {
    title: "Skyline Condominiums",
    category: "Residential",
    location: "Miami, FL",
    year: "2022",
    description:
      "48-unit luxury condominium tower with rooftop pool and panoramic ocean views.",
    bg: "from-gray-600 to-gray-900",
  },
  {
    title: "Metro Health Clinic",
    category: "Healthcare",
    location: "Phoenix, AZ",
    year: "2022",
    description:
      "State-of-the-art outpatient medical facility with specialized clean-room construction.",
    bg: "from-slate-500 to-slate-800",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#f97316] font-semibold uppercase tracking-widest text-sm mb-3">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a]">
            Featured Projects
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#f97316] rounded" />
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            A selection of projects that showcase our craftsmanship, innovation,
            and commitment to excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
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
                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
