export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const translations = {
  en: {
    meta: {
      title: "LBL RenoBuilt | Building Excellence",
      description:
        "LBL RenoBuilt delivers premium residential and commercial construction services. Quality craftsmanship, on time, every time.",
    },
    nav: {
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      quote: "Get a Quote",
    },
    hero: {
      tagline: "Building Excellence Since 2005",
      h1: ["We Build", "Your Vision", "Into Reality"],
      description:
        "LBL RenoBuilt delivers premium residential and commercial construction services — on time, on budget, and built to last.",
      cta_quote: "Get a Free Quote",
      cta_work: "View Our Work",
      stats: [
        { value: "500+", label: "Projects Completed" },
        { value: "20+", label: "Years Experience" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "150+", label: "Expert Team Members" },
      ],
      scroll: "Scroll Down",
    },
    services: {
      label: "What We Do",
      title: "Our Services",
      description:
        "From concept to completion, we offer a comprehensive range of construction services backed by two decades of industry expertise.",
      items: [
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
      ],
    },
    projects: {
      label: "Our Work",
      title: "Featured Projects",
      description:
        "A selection of projects that showcase our craftsmanship, innovation, and commitment to excellence.",
      items: [
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
      ],
    },
    about: {
      label: "Who We Are",
      title: "About LBL RenoBuilt",
      story_title: "Building Since 2005",
      story_p1:
        "LBL RenoBuilt was founded on a single principle: build what you promised, when you promised it, at the price you quoted. Over two decades and 500+ projects later, that principle still drives everything we do.",
      story_p2:
        "From custom homes in residential neighborhoods to multi-million dollar commercial developments, we bring the same level of care, precision, and professionalism to every project — no matter the size.",
      values: [
        {
          title: "Quality First",
          description: "We never cut corners. Every project is built to last generations.",
        },
        {
          title: "Transparent",
          description: "Clear communication and honest pricing from day one to final handover.",
        },
        {
          title: "On Schedule",
          description:
            "We respect your time. 97% of our projects are delivered on or ahead of schedule.",
        },
        {
          title: "Safety Always",
          description: "Zero-incident culture. Our job sites are safe for workers and communities.",
        },
      ],
      team_title: "Leadership Team",
      team: [
        {
          name: "Ahmed Balit",
          role: "Founder & CEO",
          bio: "25+ years in commercial and residential construction. Ahmed founded LBL RenoBuilt with a vision to raise the bar on quality and accountability.",
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
      ],
    },
    contact: {
      label: "Get In Touch",
      title: "Start Your Project",
      description:
        "Ready to build? Tell us about your project and we'll get back to you within one business day.",
      info_title: "Contact Information",
      details: [
        { label: "Phone", value: "(512) 555-0198", href: "tel:+15125550198" },
        {
          label: "Email",
          value: "hello@lblrenobuilt.com",
          href: "mailto:hello@lblrenobuilt.com",
        },
        {
          label: "Office",
          value: "1200 Congress Ave, Suite 400\nAustin, TX 78701",
          href: null,
        },
        { label: "Hours", value: "Mon–Fri: 7am – 6pm\nSat: 8am – 2pm", href: null },
      ],
      form: {
        name: "Full Name",
        name_placeholder: "John Smith",
        email: "Email",
        email_placeholder: "john@example.com",
        phone: "Phone",
        phone_placeholder: "(512) 555-0100",
        service: "Service",
        service_placeholder: "Select a service",
        service_options: [
          "General Contracting",
          "Residential Construction",
          "Commercial Construction",
          "Renovation & Remodeling",
          "Other",
        ],
        message: "Project Details",
        message_placeholder:
          "Tell us about your project — location, scope, timeline, budget range...",
        submit: "Send Message",
      },
      submitted_title: "Message Sent!",
      submitted_desc:
        "Thanks for reaching out. We'll be in touch within one business day.",
    },
    footer: {
      description:
        "Building excellence across Texas and beyond. Residential, commercial, and industrial construction since 2005.",
      quick_links: "Quick Links",
      links: [
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#projects" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
      contact_title: "Contact",
      rights: "All rights reserved.",
      license: "Licensed & Insured — TX Contractor License #TX-2005-8841",
    },
  },

  fr: {
    meta: {
      title: "LBL RenoBuilt | L'Excellence en Construction",
      description:
        "LBL RenoBuilt offre des services de construction résidentielle et commerciale de premier plan. Qualité, ponctualité et professionnalisme.",
    },
    nav: {
      services: "Services",
      projects: "Projets",
      about: "À propos",
      contact: "Contact",
      quote: "Obtenir un devis",
    },
    hero: {
      tagline: "L'Excellence en Construction depuis 2005",
      h1: ["Nous bâtissons", "Votre Vision", "en Réalité"],
      description:
        "LBL RenoBuilt offre des services de construction résidentielle et commerciale de premier plan — dans les délais, dans le budget, et pour durer.",
      cta_quote: "Obtenir un devis gratuit",
      cta_work: "Voir nos réalisations",
      stats: [
        { value: "500+", label: "Projets réalisés" },
        { value: "20+", label: "Années d'expérience" },
        { value: "98%", label: "Satisfaction client" },
        { value: "150+", label: "Experts dans notre équipe" },
      ],
      scroll: "Défiler vers le bas",
    },
    services: {
      label: "Ce que nous faisons",
      title: "Nos Services",
      description:
        "Du concept à la réalisation, nous offrons une gamme complète de services de construction, appuyés par deux décennies d'expertise.",
      items: [
        {
          icon: "🏗️",
          title: "Maîtrise d'œuvre générale",
          description:
            "Service complet de maîtrise d'œuvre pour des projets de toute envergure. Nous gérons chaque aspect, du premier coup de pelle à la livraison finale.",
        },
        {
          icon: "🏠",
          title: "Construction résidentielle",
          description:
            "Constructions sur mesure et rénovations adaptées à votre style de vie. Des maisons individuelles aux propriétés de luxe.",
        },
        {
          icon: "🏢",
          title: "Construction commerciale",
          description:
            "Immeubles de bureaux, espaces commerciaux et installations industrielles conçus pour répondre à vos besoins et aux réglementations locales.",
        },
        {
          icon: "🔧",
          title: "Rénovation et aménagement",
          description:
            "Transformez vos espaces existants grâce à nos services de rénovation — cuisines, salles de bain, extensions et réhabilitations complètes.",
        },
        {
          icon: "🏗",
          title: "Ingénierie structurelle",
          description:
            "Une expertise structurelle interne garantissant que chaque construction respecte les normes de sécurité et de durabilité les plus élevées.",
        },
        {
          icon: "🌿",
          title: "Construction durable",
          description:
            "Pratiques de construction écologique et conceptions économes en énergie qui réduisent votre empreinte environnementale et vos coûts.",
        },
      ],
    },
    projects: {
      label: "Nos Réalisations",
      title: "Projets Phares",
      description:
        "Une sélection de projets illustrant notre savoir-faire, notre innovation et notre engagement pour l'excellence.",
      items: [
        {
          title: "Riverside Corporate Plaza",
          category: "Commercial",
          location: "Austin, TX",
          year: "2024",
          description:
            "Un complexe mixte de 12 étages (bureaux et commerces) avec certification LEED Or.",
          bg: "from-slate-700 to-slate-900",
        },
        {
          title: "La Résidence Hartwell",
          category: "Résidentiel",
          location: "Denver, CO",
          year: "2024",
          description:
            "Maison de luxe sur mesure de 575 m² avec matériaux durables et domotique intégrée.",
          bg: "from-stone-600 to-stone-900",
        },
        {
          title: "Meridian Industrial Hub",
          category: "Industriel",
          location: "Houston, TX",
          year: "2023",
          description:
            "Entrepôt de distribution de 46 500 m² livré en moins de 14 mois.",
          bg: "from-zinc-600 to-zinc-900",
        },
        {
          title: "Centre Communautaire Oakwood",
          category: "Public",
          location: "Nashville, TN",
          year: "2023",
          description:
            "Centre de loisirs primé avec complexe aquatique et installations sportives.",
          bg: "from-neutral-600 to-neutral-900",
        },
        {
          title: "Skyline Condominiums",
          category: "Résidentiel",
          location: "Miami, FL",
          year: "2022",
          description:
            "Tour de 48 appartements de luxe avec piscine sur le toit et vues panoramiques sur l'océan.",
          bg: "from-gray-600 to-gray-900",
        },
        {
          title: "Clinique Metro Health",
          category: "Santé",
          location: "Phoenix, AZ",
          year: "2022",
          description:
            "Établissement médical ambulatoire ultramoderne avec construction en salle propre spécialisée.",
          bg: "from-slate-500 to-slate-800",
        },
      ],
    },
    about: {
      label: "Qui sommes-nous",
      title: "À propos de LBL RenoBuilt",
      story_title: "Bâtir depuis 2005",
      story_p1:
        "LBL RenoBuilt a été fondé sur un principe unique : construire ce qui a été promis, quand cela a été promis, au prix convenu. Deux décennies et plus de 500 projets plus tard, ce principe guide encore tout ce que nous faisons.",
      story_p2:
        "Des maisons sur mesure dans des quartiers résidentiels aux grands projets commerciaux, nous apportons le même niveau de soin, de précision et de professionnalisme à chaque chantier — quelle qu'en soit l'envergure.",
      values: [
        {
          title: "La qualité avant tout",
          description: "Nous ne faisons jamais de compromis. Chaque projet est construit pour durer des générations.",
        },
        {
          title: "Transparence",
          description: "Communication claire et tarification honnête, du premier jour jusqu'à la livraison finale.",
        },
        {
          title: "Respect des délais",
          description:
            "Nous respectons votre temps. 97 % de nos projets sont livrés dans les délais ou en avance.",
        },
        {
          title: "Sécurité absolue",
          description: "Culture zéro accident. Nos chantiers sont sûrs pour les travailleurs et les riverains.",
        },
      ],
      team_title: "Équipe dirigeante",
      team: [
        {
          name: "Ahmed Balit",
          role: "Fondateur & PDG",
          bio: "Plus de 25 ans dans la construction commerciale et résidentielle. Ahmed a fondé LBL RenoBuilt avec la vision d'élever les standards de qualité et de responsabilité.",
          initials: "AB",
        },
        {
          name: "Sofia Chen",
          role: "Ingénieure en chef",
          bio: "Ingénieure structurelle agréée, experte en systèmes de construction durables et en grands projets commerciaux.",
          initials: "SC",
        },
        {
          name: "James Okafor",
          role: "Directeur de projet",
          bio: "Supervise tous les projets en cours, veillant au respect des délais, des budgets et des exigences de qualité.",
          initials: "JO",
        },
        {
          name: "Laura Vásquez",
          role: "Responsable design",
          bio: "Fait le lien entre architecture et construction, transformant les visions des clients en réalisations belles et constructibles.",
          initials: "LV",
        },
      ],
    },
    contact: {
      label: "Nous contacter",
      title: "Démarrez votre projet",
      description:
        "Prêt à construire ? Parlez-nous de votre projet et nous vous répondrons dans un délai d'un jour ouvrable.",
      info_title: "Informations de contact",
      details: [
        { label: "Téléphone", value: "(512) 555-0198", href: "tel:+15125550198" },
        {
          label: "E-mail",
          value: "hello@lblrenobuilt.com",
          href: "mailto:hello@lblrenobuilt.com",
        },
        {
          label: "Bureau",
          value: "1200 Congress Ave, Suite 400\nAustin, TX 78701",
          href: null,
        },
        { label: "Horaires", value: "Lun–Ven : 7h – 18h\nSam : 8h – 14h", href: null },
      ],
      form: {
        name: "Nom complet",
        name_placeholder: "Jean Dupont",
        email: "E-mail",
        email_placeholder: "jean@exemple.com",
        phone: "Téléphone",
        phone_placeholder: "(512) 555-0100",
        service: "Service",
        service_placeholder: "Choisissez un service",
        service_options: [
          "Maîtrise d'œuvre générale",
          "Construction résidentielle",
          "Construction commerciale",
          "Rénovation et aménagement",
          "Autre",
        ],
        message: "Détails du projet",
        message_placeholder:
          "Parlez-nous de votre projet — lieu, portée, calendrier, budget estimé...",
        submit: "Envoyer le message",
      },
      submitted_title: "Message envoyé !",
      submitted_desc:
        "Merci de nous avoir contactés. Nous vous répondrons dans un délai d'un jour ouvrable.",
    },
    footer: {
      description:
        "L'excellence en construction au Texas et au-delà. Construction résidentielle, commerciale et industrielle depuis 2005.",
      quick_links: "Liens rapides",
      links: [
        { label: "Services", href: "#services" },
        { label: "Projets", href: "#projects" },
        { label: "À propos", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
      contact_title: "Contact",
      rights: "Tous droits réservés.",
      license: "Agréé & Assuré — Licence TX Entrepreneur #TX-2005-8841",
    },
  },
} as const;

export type LocaleTranslations = (typeof translations)[Locale];

export function getTranslations(locale: Locale): LocaleTranslations {
  return translations[locale] ?? translations.en;
}
