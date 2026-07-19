const reasons = [
  { num: "01", title: "Manufacturing Domain Expertise", desc: "Deep understanding of shop floor operations, production processes, and manufacturing workflows." },
  { num: "02", title: "Industry 4.0 Specialists", desc: "Focused expertise in smart factory, IIoT, MES, and digital transformation technologies." },
  { num: "03", title: "End-to-End MES Development", desc: "Full lifecycle MES delivery from requirements gathering through deployment and support." },
  { num: "04", title: "Custom Software Solutions", desc: "Tailored applications built around your unique manufacturing processes and legacy systems." },
  { num: "05", title: "OT & IT Integration", desc: "Seamless connectivity between shop floor equipment and enterprise business systems." },
  { num: "06", title: "Scalable Architecture", desc: "Future-ready platforms built to grow with your business across plants and geographies." },
  { num: "07", title: "Cloud & On-Premise", desc: "Flexible deployment options to match your infrastructure strategy and compliance needs." },
  { num: "08", title: "Customer-Centric Approach", desc: "Long-term partnership focused on your success with agile delivery and dedicated support." },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)] via-[var(--color-muted)]/50 to-[var(--color-surface)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Why Unnathi
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] mt-4 tracking-tight">
            Why Choose Unnathi Solutions?
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
          <p className="text-[var(--color-secondary)] mt-5 leading-relaxed text-sm max-w-lg mx-auto">
            We combine deep manufacturing expertise with modern software engineering to deliver results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
          {reasons.map((reason) => (
            <div
              key={reason.num}
              className="group relative rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] p-7 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[var(--color-accent)]/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-bl from-[var(--color-accent)]/[0.03] to-transparent rounded-bl-full group-hover:scale-[4] transition-transform duration-700" />
              <div className="relative">
                <div className="font-heading text-4xl font-extrabold bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500 inline-block">
                  {reason.num}
                </div>
                <h4 className="font-heading font-bold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {reason.title}
                </h4>
                <p className="text-xs text-[var(--color-secondary)]/70 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
