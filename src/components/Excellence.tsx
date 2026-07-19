import {
  TrendingUp,
  DollarSign,
  CheckCircle,
  Search,
  Shield,
  Users,
  Eye,
  BarChart3,
  Zap,
  PiggyBank,
  FileText,
  Lightbulb,
} from "lucide-react"

const excellence = [
  { icon: TrendingUp, label: "Productivity" },
  { icon: DollarSign, label: "OEE" },
  { icon: CheckCircle, label: "Quality" },
  { icon: Search, label: "Traceability" },
  { icon: Shield, label: "Compliance" },
  { icon: Users, label: "Asset Utilization" },
  { icon: Eye, label: "Production Visibility" },
  { icon: BarChart3, label: "Decision Making" },
  { icon: Zap, label: "Operational Efficiency" },
  { icon: PiggyBank, label: "Cost Optimization" },
  { icon: FileText, label: "Paperless Manufacturing" },
  { icon: Lightbulb, label: "AI-Powered Insights" },
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
            Digital Manufacturing Excellence
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
          <p className="text-[var(--color-secondary)] mt-5 leading-relaxed text-sm max-w-lg mx-auto">
            Manufacturing domain expertise combined with modern engineering to deliver measurable improvements across your operations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 reveal">
          {excellence.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="group relative rounded-[var(--radius)] bg-[var(--color-surface)] border border-[var(--color-border)] p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1.5 hover:border-[var(--color-accent)]/20 transition-all duration-400 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-light)]/10 text-[var(--color-accent)] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:from-[var(--color-accent)] group-hover:to-[var(--color-accent-dark)] group-hover:text-white transition-all duration-400 shadow-none group-hover:shadow-lg group-hover:shadow-[var(--color-accent)]/20">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-heading text-sm font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {item.label}
                  </h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
