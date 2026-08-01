import { CheckCircle2 } from "lucide-react"
import { ProcessLayers } from "@/components/illustrations"

const features = [
  "Reads production orders from MES",
  "Extracts product-specific BOM and routing",
  "Loads the correct manufacturing recipe",
  "Configures tools automatically",
  "Guides operators step-by-step",
  "Validates process parameters in real time",
  "Prevents incorrect execution",
  "Creates complete digital traceability",
]

export default function Solution() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)] via-[var(--color-muted)]/50 to-[var(--color-surface)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            The Solution
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] mt-4 tracking-tight">
            Introducing <span className="text-[var(--color-accent)]">AssemblyGuard&trade;</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
          <p className="text-[var(--color-secondary)] mt-5 leading-relaxed text-sm max-w-lg mx-auto">
            Our platform acts as the execution layer between MES and the shop floor. It automatically:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid sm:grid-cols-2 gap-4 reveal">
            {features.map((feature) => (
              <div
                key={feature}
                className="group relative rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-accent)]/20 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-bl from-[var(--color-accent)]/[0.04] to-transparent rounded-bl-full group-hover:scale-[3] transition-transform duration-700" />
                <div className="relative flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={14} className="text-[var(--color-accent)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-sm text-[var(--color-secondary)] leading-relaxed group-hover:text-[var(--color-foreground)] transition-colors duration-300">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent)]/10 via-[var(--color-accent-2)]/5 to-transparent rounded-[var(--radius-2xl)] blur-2xl" />
              <ProcessLayers className="relative w-full h-auto rounded-[var(--radius-2xl)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
