import { Factory, Microscope, Cpu, Pill, Cog, Wrench, Package, Syringe, Telescope, ShieldCheck, Truck } from "lucide-react"

const industries = [
  { name: "Automotive", icon: Truck },
  { name: "Aerospace", icon: Telescope },
  { name: "Electronics & EMS", icon: Microscope },
  { name: "Medical Devices", icon: Syringe },
  { name: "Semiconductor", icon: Cpu },
  { name: "Industrial Equipment", icon: Cog },
  { name: "Precision Engineering", icon: Wrench },
  { name: "Food & Beverage", icon: Package },
  { name: "Packaging", icon: Package },
  { name: "Pharmaceutical", icon: Pill },
  { name: "Heavy Engineering", icon: Factory },
  { name: "Defense & Aerospace", icon: ShieldCheck },
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
            Who We Serve
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Industries We Serve
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
          <p className="text-white/50 mt-5 leading-relaxed text-sm max-w-lg mx-auto">
            Deep domain expertise across discrete and process manufacturing industries.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 reveal">
          {industries.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex items-center gap-3 px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-[var(--color-accent)]/30 hover:shadow-lg hover:shadow-[var(--color-accent)]/5 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Icon size={16} />
              </div>
              <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
