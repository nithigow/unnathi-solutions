import { Truck, Cog, Cpu, Rocket, Check } from "lucide-react"

const applications = [
  {
    name: "Automotive",
    icon: Truck,
    items: ["Engine Assembly", "EV Battery Assembly", "Chassis Assembly", "Powertrain Manufacturing"],
  },
  {
    name: "Industrial Equipment",
    icon: Cog,
    items: ["Drives", "Switchgear", "Pumps", "Compressors"],
  },
  {
    name: "Electronics",
    icon: Cpu,
    items: ["Assembly and Testing", "Product Configuration"],
  },
  {
    name: "Aerospace & Rail",
    icon: Rocket,
    items: ["Safety Critical Assembly", "High Compliance Operations"],
  },
]

export default function Industries() {
  return (
    <section id="industries" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] to-[#1E293B]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(5,150,105,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:20px_20px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
            Ideal Applications
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Built for Safety-Critical Assembly
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
          <p className="text-white/50 mt-5 leading-relaxed text-sm max-w-lg mx-auto">
            Wherever a missed step or wrong torque has serious consequences, AssemblyGuard™ belongs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {applications.map(({ name, icon: Icon, items }) => (
            <div
              key={name}
              className="group relative rounded-[var(--radius-lg)] bg-white/[0.04] border border-white/[0.06] p-7 backdrop-blur-sm hover:bg-white/[0.06] hover:border-[var(--color-accent)]/30 hover:shadow-xl hover:shadow-[var(--color-accent)]/5 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-bl from-[var(--color-accent)]/[0.08] to-transparent rounded-bl-full group-hover:scale-[3] transition-transform duration-700" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-500">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading font-bold text-white mb-4 group-hover:text-[var(--color-accent-light)] transition-colors duration-300">
                  {name}
                </h3>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/55 group-hover:text-white/80 transition-colors duration-300">
                      <span className="w-4 h-4 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-light)] flex items-center justify-center shrink-0">
                        <Check size={11} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
