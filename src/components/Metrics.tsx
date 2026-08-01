import { CheckCircle2 } from "lucide-react"
import { MetricsBars } from "@/components/illustrations"

const metrics = [
  "Lower rework rates",
  "Improved process compliance",
  "Reduced assembly errors",
  "Increased throughput",
  "Better audit readiness",
  "Higher product quality",
]

export default function Metrics() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)] via-[var(--color-muted)]/50 to-[var(--color-surface)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent)]/10 via-[var(--color-accent-2)]/5 to-transparent rounded-[var(--radius-2xl)] blur-2xl" />
              <MetricsBars className="relative w-full h-auto rounded-[var(--radius-2xl)]" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="reveal">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Customer Success Metrics
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] mt-4 tracking-tight">
                The Numbers Organizations <span className="text-[var(--color-accent)]">Target</span>
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mt-4" />
              <p className="text-[var(--color-secondary)] mt-5 leading-relaxed text-sm max-w-lg">
                Organizations deploying AssemblyGuard&trade; typically target measurable gains across quality,
                throughput, and compliance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 reveal">
              {metrics.map((metric) => (
                <div
                  key={metric}
                  className="group relative rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-accent)]/20 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-bl from-[var(--color-accent)]/[0.04] to-transparent rounded-bl-full group-hover:scale-[3] transition-transform duration-700" />
                  <div className="relative flex items-start gap-3">
                    <div className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                      <CheckCircle2 size={14} className="text-[var(--color-accent)] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-sm text-[var(--color-secondary)] leading-relaxed group-hover:text-[var(--color-foreground)] transition-colors duration-300">
                      {metric}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
