import type { LocaleTranslations } from "@/lib/i18n";

type Props = { t: LocaleTranslations["footer"] };

export default function Footer({ t }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111] text-gray-500 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-[#f97316] rounded flex items-center justify-center font-bold text-white text-sm">
                L
              </span>
              <span className="text-white font-bold text-lg tracking-wide">
                LBL <span className="text-[#f97316]">RenoBuilt</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">{t.description}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t.quick_links}
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {t.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#f97316] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t.contact_title}
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="tel:+15125550198" className="hover:text-[#f97316] transition-colors">
                  (512) 555-0198
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@lblrenobuilt.com"
                  className="hover:text-[#f97316] transition-colors"
                >
                  hello@lblrenobuilt.com
                </a>
              </li>
              <li>1200 Congress Ave, Suite 400</li>
              <li>Austin, TX 78701</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>
            &copy; {year} LBL RenoBuilt. {t.rights}
          </p>
          <p>{t.license}</p>
        </div>
      </div>
    </footer>
  );
}
