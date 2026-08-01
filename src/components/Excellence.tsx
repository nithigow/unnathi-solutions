import {
  TrendingUp,
  CheckCircle,
  Users,
  GraduationCap,
  ShieldCheck,
  PiggyBank,
} from "lucide-react"
import { TorqueTool, TraceGraph } from "@/components/illustrations"

const outcomes = [
  {
    icon: TrendingUp,
    title: "Increase First Pass Yield",
    desc: "Reduce defects caused by manual execution errors.",
  },
  {
    icon: CheckCircle,
    title: "Improve Product Quality",
    desc: "Ensure every product follows the approved manufacturing process.",
  },
  {
    icon: Users,
    title: "Reduce Operator Dependency",
    desc: "Embed best practices directly into production workflows.",
  },
  {
    icon: GraduationCap,
    title: "Accelerate Training",
    desc: "New operators become productive faster with guided execution.",
  },
  {
    icon: ShieldCheck,
    title: "Strengthen Compliance",
    desc: "Maintain auditable proof of manufacturing process adherence.",
  },
  {
    icon: PiggyBank,
    title: "Reduce Cost of Poor Quality",
    desc: "Minimize rework, scrap, recalls, and warranty claims.",
  },
]

export default function Excellence() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] via-white to-[var(--color-background)]" />
      <div className="absolute inset-0 section-grid-bg" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Outcomes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] mt-4 tracking-tight">
            Business Outcomes
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
          <p className="text-[var(--color-secondary)] mt-5 leading-relaxed text-sm max-w-lg mx-auto">
            Measurable results your factory achieves when every step is executed exactly as designed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16 reveal">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent)]/10 via-[var(--color-accent-2)]/5 to-transparent rounded-[var(--radius-2xl)] blur-2xl" />
            <TorqueTool className="relative w-full h-auto rounded-[var(--radius-2xl)]" />
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent)]/10 via-[var(--color-accent-2)]/5 to-transparent rounded-[var(--radius-2xl)] blur-2xl" />
            <TraceGraph className="relative w-full h-auto rounded-[var(--radius-2xl)]" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {outcomes.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group relative rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[var(--color-accent)]/20 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-bl from-[var(--color-accent)]/[0.04] to-transparent rounded-bl-full group-hover:scale-[3] transition-transform duration-700" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-light)]/10 text-[var(--color-accent)] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-[var(--color-accent)] group-hover:to-[var(--color-accent-dark)] group-hover:text-white transition-all duration-500 shadow-none group-hover:shadow-lg group-hover:shadow-[var(--color-accent)]/20">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-secondary)]/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
