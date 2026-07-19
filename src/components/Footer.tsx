const footerSections = [
  {
    title: "Expertise",
    links: ["MES Solutions", "Industry 4.0", "Machine Integration", "Custom Software", "Product Engineering"],
  },
  {
    title: "Industries",
    links: ["Automotive", "Aerospace", "Electronics", "Medical Devices", "Pharmaceutical"],
  },
  {
    title: "Company",
    links: ["About Us", "Case Studies", "Careers", "Blog", "Contact"],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0F172A] to-[#020617] pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:16px_16px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5 group">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] flex items-center justify-center text-white font-heading font-extrabold text-lg shadow-lg shadow-[var(--color-accent)]/20 group-hover:scale-105 transition-transform duration-300">
                U
              </span>
              <span className="font-heading font-extrabold text-lg text-white tracking-tight">
                Unnathi Solutions
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm">
              Empowering manufacturers with Industry 4.0 solutions, MES, Industrial IoT, and custom software
              to build smart factories of the future.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-bold text-sm text-white/80 mb-5">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/35 hover:text-[var(--color-accent-light)] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Unnathi Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/25 hover:text-[var(--color-accent-light)] transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/25 hover:text-[var(--color-accent-light)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
