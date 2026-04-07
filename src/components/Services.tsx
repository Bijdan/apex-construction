const services = [
  {
    icon: "🏗️",
    title: "General Contracting",
    description:
      "Full-service general contracting for projects of any scale. We manage every aspect from groundbreaking to final walkthrough.",
  },
  {
    icon: "🏠",
    title: "Residential Construction",
    description:
      "Custom home builds and renovations tailored to your lifestyle. From single-family homes to luxury estates.",
  },
  {
    icon: "🏢",
    title: "Commercial Construction",
    description:
      "Office buildings, retail spaces, and industrial facilities built to meet your business needs and local codes.",
  },
  {
    icon: "🔧",
    title: "Renovation & Remodeling",
    description:
      "Transform existing spaces with expert renovation services — kitchens, bathrooms, additions, and full gut rehabs.",
  },
  {
    icon: "🏗",
    title: "Structural Engineering",
    description:
      "In-house structural expertise ensuring every build meets the highest safety and durability standards.",
  },
  {
    icon: "🌿",
    title: "Sustainable Building",
    description:
      "Green construction practices and energy-efficient designs that reduce your environmental footprint and utility costs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#f97316] font-semibold uppercase tracking-widest text-sm mb-3">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a]">
            Our Services
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#f97316] rounded" />
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            From concept to completion, we offer a comprehensive range of
            construction services backed by two decades of industry expertise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group border border-gray-200 rounded-xl p-8 hover:border-[#f97316] hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#f97316] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
