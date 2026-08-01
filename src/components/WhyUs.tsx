import { Eye, Lock, ArrowRight, Plus, ScanEye, BrainCircuit, Radar } from "lucide-react"
import { ControlShield } from "@/components/illustrations"

const aiFeatures = [
  {
    icon: ScanEye,
    title: "AI Vision Inspection",
    desc: "Camera-based AI verifies every assembly in real time — catching missing parts, wrong orientation, and surface defects before they leave the station.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Controlled Systems",
    desc: "Self-learning control loops monitor process parameters and auto-correct tools and stations the moment a deviation begins.",
  },
  {
    icon: Radar,
    title: "Predictive Process Control",
    desc: "Models trained on every build predict drift before it becomes a defect — moving quality from reactive inspection to proactive prevention.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)] via-[var(--color-muted)]/50 to-[var(--color-surface)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Why We Are Different
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] mt-4 tracking-tight">
            Most systems tell operators what to build.
            <br />
            <span className="text-[var(--color-accent)]">We ensure they build it correctly.</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center reveal">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group relative rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-bl from-[var(--color-accent-2)]/[0.05] to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-accent-2)]/10 to-[var(--color-accent-2-light)]/10 text-[var(--color-accent-2)] flex items-center justify-center mb-4">
                    <Eye size={22} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-accent-2)]">MES</span>
                  <h4 className="font-heading text-xl font-bold text-[var(--color-foreground)] mt-1 mb-2">= Visibility</h4>
                  <p className="text-xs text-[var(--color-secondary)] leading-relaxed">
                    Manages orders and traceability. It shows what should happen — but cannot enforce how each step is executed.
                  </p>
                </div>
              </div>

              <div className="group relative rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-accent)]/25 shadow-lg shadow-[var(--color-accent)]/5 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-bl from-[var(--color-accent)]/[0.06] to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] text-white flex items-center justify-center mb-4 shadow-lg shadow-[var(--color-accent)]/20">
                    <Lock size={22} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">AssemblyGuard™</span>
                  <h4 className="font-heading text-xl font-bold text-[var(--color-foreground)] mt-1 mb-2">= Control</h4>
                  <p className="text-xs text-[var(--color-secondary)] leading-relaxed">
                    Enforces each operation against the engineering recipe — blocking wrong torque, skipped steps, and incorrect assembly.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 flex flex-wrap items-center justify-center gap-3 border border-white/5">
              <span className="text-sm font-semibold text-white">MES</span>
              <Plus size={16} className="text-white/40" />
              <span className="text-sm font-semibold text-[var(--color-accent-light)]">AssemblyGuard™</span>
              <ArrowRight size={16} className="text-white/40" />
              <span className="text-sm font-semibold text-white">Manufacturing Excellence</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent)]/10 via-[var(--color-accent-2)]/5 to-transparent rounded-[var(--radius-2xl)] blur-2xl" />
            <ControlShield className="relative w-full h-auto rounded-[var(--radius-2xl)]" />
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              AI-Powered Manufacturing
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] mt-4 tracking-tight">
              Enforcement You Can <span className="text-[var(--color-accent)]">See</span>, Systems That{" "}
              <span className="text-[var(--color-accent)]">Think</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6 reveal">
            {aiFeatures.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-accent)]/20 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-bl from-[var(--color-accent)]/[0.06] to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] text-white flex items-center justify-center mb-4 shadow-lg shadow-[var(--color-accent)]/20 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={22} />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {title}
                  </h4>
                  <p className="text-xs text-[var(--color-secondary)] leading-relaxed">
                    {desc}
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
