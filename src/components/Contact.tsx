"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Start Your Project
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#f97316] rounded" />
          <p className="mt-6 text-gray-400 max-w-xl mx-auto text-lg">
            Ready to build? Tell us about your project and we&apos;ll get back
            to you within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact details */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  {
                    label: "Phone",
                    value: "(512) 555-0198",
                    href: "tel:+15125550198",
                  },
                  {
                    label: "Email",
                    value: "hello@apexconstruction.com",
                    href: "mailto:hello@apexconstruction.com",
                  },
                  {
                    label: "Office",
                    value: "1200 Congress Ave, Suite 400\nAustin, TX 78701",
                    href: null,
                  },
                  {
                    label: "Hours",
                    value: "Mon–Fri: 7am – 6pm\nSat: 8am – 2pm",
                    href: null,
                  },
                ].map((item) => (
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
                        <p className="text-white font-medium whitespace-pre-line">
                          {item.value}
                        </p>
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
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">
                  Thanks for reaching out. We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-[#f97316] text-white placeholder-gray-600 rounded-lg px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-[#f97316] text-white placeholder-gray-600 rounded-lg px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(512) 555-0100"
                      className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-[#f97316] text-white placeholder-gray-600 rounded-lg px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                      Service
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-[#f97316] text-white rounded-lg px-4 py-3 outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option>General Contracting</option>
                      <option>Residential Construction</option>
                      <option>Commercial Construction</option>
                      <option>Renovation & Remodeling</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project — location, scope, timeline, budget range..."
                    className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-[#f97316] text-white placeholder-gray-600 rounded-lg px-4 py-3 outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#f97316] hover:bg-[#ea6a0a] text-white font-bold py-4 rounded-lg transition-colors text-base w-full"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
