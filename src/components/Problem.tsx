import { XCircle, AlertTriangle, TrendingDown } from "lucide-react"

const problems = [
  "Wrong torque values applied",
  "Sequence of operations skipped",
  "Incorrect component assembly",
  "Reliance on operator experience",
  "Quality issues detected too late",
  "Limited evidence of actual process compliance",
]

export default function Problem() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 section-grid-bg" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="reveal">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                The Hidden Problem
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] mt-4 tracking-tight">
                Most manufacturers have MES.
                <br />
                <span className="text-[var(--color-accent)]">Yet production defects still occur.</span>
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mt-4" />
            </div>

            <div className="reveal">
              <p className="text-[var(--color-secondary)] leading-relaxed text-sm max-w-lg">
                Because MES manages production orders and traceability, but often{" "}
                <span className="font-semibold text-[var(--color-foreground)]">cannot enforce</span> how operators
                execute each manufacturing step.
              </p>
            </div>

            <div className="reveal">
              <div className="rounded-[var(--radius-lg)] bg-gradient-to-br from-[#DC2626]/5 to-transparent border border-[#DC2626]/20 p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center shrink-0">
                  <TrendingDown size={22} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[var(--color-foreground)] mb-1">The cost?</h4>
                  <p className="text-sm text-[var(--color-secondary)] leading-relaxed">
                    Rework. Scrap. Warranty claims. Audit challenges. Lost productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="group relative rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#DC2626]/25 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-bl from-[#DC2626]/[0.04] to-transparent rounded-bl-full group-hover:scale-[3] transition-transform duration-700" />
                  <div className="relative flex items-start gap-3">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <XCircle size={17} />
                    </div>
                    <p className="text-sm text-[var(--color-secondary)] leading-relaxed group-hover:text-[var(--color-foreground)] transition-colors duration-300">
                      {problem}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-[var(--radius)] bg-[#DC2626]/[0.04] border border-[#DC2626]/10 px-5 py-3">
              <AlertTriangle size={16} className="text-[#DC2626] shrink-0" />
              <p className="text-xs text-[var(--color-secondary)]">
                Defects are often invisible to the MES until they surface as rework, scrap, or a warranty claim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
