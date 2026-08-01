const steps = [
  {
    num: "01",
    title: "Production Order Released",
    desc: "MES sends the work order to AssemblyGuard™.",
  },
  {
    num: "02",
    title: "Recipe Loaded Automatically",
    desc: "System identifies the product variant and retrieves the approved manufacturing recipe.",
  },
  {
    num: "03",
    title: "Process Enforcement Begins",
    desc: "Only the correct operation is enabled for the operator.",
  },
  {
    num: "04",
    title: "Tool Validation",
    desc: "Torque tools, testers, scanners, and connected devices are automatically configured.",
  },
  {
    num: "05",
    title: "Real-Time Verification",
    desc: "Each step is validated against engineering requirements as it is executed.",
  },
  {
    num: "06",
    title: "Complete Traceability",
    desc: "Every action is captured and linked to the serial number.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] to-[#1E293B]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(5,150,105,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:20px_20px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
            How It Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            From MES Order to Enforced Execution
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
          <p className="text-white/50 mt-5 leading-relaxed text-sm max-w-lg mx-auto">
            AssemblyGuard™ works in six automated steps between your MES and the shop floor.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-9 left-24 right-24 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group relative rounded-[var(--radius-lg)] bg-white/[0.04] border border-white/[0.06] p-7 backdrop-blur-sm hover:bg-white/[0.06] hover:border-[var(--color-accent)]/30 hover:shadow-xl hover:shadow-[var(--color-accent)]/5 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-bl from-[var(--color-accent)]/[0.08] to-transparent rounded-bl-full group-hover:scale-[3] transition-transform duration-700" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="font-heading text-4xl font-extrabold bg-gradient-to-b from-[var(--color-accent-light)] to-[var(--color-accent)] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                      {step.num}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-500">
                      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                        <path d="M3 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-heading font-bold text-white mb-2 group-hover:text-[var(--color-accent-light)] transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
