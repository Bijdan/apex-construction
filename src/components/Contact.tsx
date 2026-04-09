"use client";

import { useState } from "react";
import type { LocaleTranslations } from "@/lib/i18n";

type Props = { t: LocaleTranslations["contact"] };

export default function Contact({ t }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your form submission logic (e.g., API route, Formspree, etc.)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#f97316] font-semibold uppercase tracking-widest text-sm mb-3">
            {t.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">{t.title}</h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#f97316] rounded" />
          <p className="mt-6 text-gray-400 max-w-xl mx-auto text-lg">{t.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact details */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-6">{t.info_title}</h3>
              <div className="flex flex-col gap-5">
                {t.details.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-2 bg-[#f97316] rounded-full flex-shrink-0 self-stretch" />
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-[#f97316] transition-colors font-medium whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#2d2d2d] rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-16 h-16 bg-[#f97316] rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">{t.submitted_title}</h3>
                <p className="text-gray-400">{t.submitted_desc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                      {t.form.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t.form.name_placeholder}
                      className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-[#f97316] text-white placeholder-gray-600 rounded-lg px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t.form.email_placeholder}
                      className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-[#f97316] text-white placeholder-gray-600 rounded-lg px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t.form.phone_placeholder}
                      className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-[#f97316] text-white placeholder-gray-600 rounded-lg px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                      {t.form.service}
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-[#f97316] text-white rounded-lg px-4 py-3 outline-none transition-colors"
                    >
                      <option value="">{t.form.service_placeholder}</option>
                      {t.form.service_options.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                    {t.form.message} *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={t.form.message_placeholder}
                    className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-[#f97316] text-white placeholder-gray-600 rounded-lg px-4 py-3 outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#f97316] hover:bg-[#ea6a0a] text-white font-bold py-4 rounded-lg transition-colors text-base w-full"
                >
                  {t.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
