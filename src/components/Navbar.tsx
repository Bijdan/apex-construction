"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { LocaleTranslations, Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  t: LocaleTranslations["nav"];
};

export default function Navbar({ locale, t }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.services, href: "#services" },
    { label: t.projects, href: "#projects" },
    { label: t.about, href: "#about" },
    { label: t.contact, href: "#contact" },
  ];

  const otherLocale: Locale = locale === "en" ? "fr" : "en";

  function switchLocale() {
    router.push(`/${otherLocale}`);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a1a1a] shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2 group">
          <span className="w-8 h-8 bg-[#f97316] rounded flex items-center justify-center font-bold text-white text-sm">
            L
          </span>
          <span className="text-white font-bold text-lg tracking-wide">
            LBL <span className="text-[#f97316]">RenoBuilt</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-[#f97316] transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-[#f97316] hover:bg-[#ea6a0a] text-white px-5 py-2 rounded text-sm font-semibold transition-colors"
            >
              {t.quote}
            </a>
          </li>
          {/* Language switcher */}
          <li>
            <button
              onClick={switchLocale}
              className="text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-colors"
              aria-label={`Switch to ${otherLocale === "fr" ? "French" : "English"}`}
            >
              {otherLocale.toUpperCase()}
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={switchLocale}
            className="text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            {otherLocale.toUpperCase()}
          </button>
          <button
            className="text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-gray-800 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-[#f97316] transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-block bg-[#f97316] hover:bg-[#ea6a0a] text-white px-5 py-2 rounded text-sm font-semibold transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t.quote}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
