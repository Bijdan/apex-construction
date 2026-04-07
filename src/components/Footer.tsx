export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111] text-gray-500 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-[#f97316] rounded flex items-center justify-center font-bold text-white text-sm">
                A
              </span>
              <span className="text-white font-bold text-lg tracking-wide">
                Apex <span className="text-[#f97316]">Construction</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Building excellence across Texas and beyond. Residential,
              commercial, and industrial construction since 2005.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {["Services", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#f97316] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="tel:+15125550198" className="hover:text-[#f97316] transition-colors">
                  (512) 555-0198
                </a>
              </li>
              <li>
                <a href="mailto:hello@apexconstruction.com" className="hover:text-[#f97316] transition-colors">
                  hello@apexconstruction.com
                </a>
              </li>
              <li>1200 Congress Ave, Suite 400</li>
              <li>Austin, TX 78701</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {year} Apex Construction Group. All rights reserved.</p>
          <p>
            Licensed &amp; Insured &mdash; TX Contractor License #TX-2005-8841
          </p>
        </div>
      </div>
    </footer>
  );
}
