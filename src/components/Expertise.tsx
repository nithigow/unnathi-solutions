import {
  BookOpen,
  Wrench,
  ListOrdered,
  Cable,
  Fingerprint,
  ShieldCheck,
} from "lucide-react"

const capabilities = [
  {
    icon: BookOpen,
    title: "Recipe Management",
    description:
      "Digitize and manage manufacturing recipes for every product variant.",
    items: [
      "Centralized recipe library per variant",
      "Version-controlled approved recipes",
      "Automatic recipe validation",
      "Controlled deployment to shop floor",
    ],
  },
  {
    icon: Wrench,
    title: "Torque Management",
    description:
      "Ensure correct torque values, tightening strategy, and sequence execution.",
    items: [
      "Exact torque values per joint",
      "Tightening strategy enforcement",
      "Sequence-driven tightening",
      "Pass/fail verification in real time",
    ],
  },
  {
    icon: ListOrdered,
    title: "Sequence Control",
    description:
      "Prevent operators from skipping or reordering critical manufacturing steps.",
    items: [
      "Step-by-step guided execution",
      "Blocked out-of-sequence operations",
      "Mandatory step completion gates",
      "Variant-specific operation flow",
    ],
  },
  {
    icon: Cable,
    title: "Tool Connectivity",
    description:
      "Connect torque tools, PLCs, scanners, test systems, and smart devices.",
    items: [
      "Torque controllers & wrenches",
      "PLCs and smart sensors",
      "Barcode & QR scanners",
      "Test and measurement systems",
    ],
  },
  {
    icon: Fingerprint,
    title: "Digital Traceability",
    description:
      "Capture every operation, result, and parameter for future analysis.",
    items: [
      "Serial-number-linked audit trail",
      "Full genealogy & component history",
      "Parameter & result capture",
      "Instant recall for audits",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Error Proofing",
    description:
      "Built-in poka-yoke logic prevents process violations before they occur.",
    items: [
      "Automated process validation",
      "Real-time deviation alerts",
      "Mistake-proof operator flows",
      "Root-cause prevention by design",
    ],
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)] via-[var(--color-muted)]/50 to-[var(--color-surface)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Key Capabilities
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] mt-4 tracking-tight">
            What AssemblyGuard&trade; Enforces
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
          <p className="text-[var(--color-secondary)] mt-5 leading-relaxed text-sm max-w-lg mx-auto">
            Six core capabilities that turn your engineering intent into guaranteed shop floor execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {capabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <div
                key={cap.title}
                className="group relative rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[var(--color-accent)]/20 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-bl from-[var(--color-accent)]/[0.03] to-transparent rounded-bl-full group-hover:scale-[3] transition-transform duration-700" />
                <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-gradient-to-tr from-[var(--color-accent-2)]/[0.02] to-transparent rounded-tr-full group-hover:scale-[3] transition-transform duration-700" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-light)]/10 text-[var(--color-accent)] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-[var(--color-accent)] group-hover:to-[var(--color-accent-dark)] group-hover:text-white transition-all duration-500 shadow-none group-hover:shadow-lg group-hover:shadow-[var(--color-accent)]/20">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-[var(--color-secondary)]/80 leading-relaxed mb-5">
                    {cap.description}
                  </p>
                  <ul className="space-y-2">
                    {cap.items.map((item) => (
                      <li
                        key={item}
                        className="text-[11px] text-[var(--color-secondary)]/70 pl-5 relative before:absolute before:left-0 before:top-[3px] before:text-[var(--color-accent)] before:font-bold before:text-xs before:content-['→'] group-hover:before:translate-x-0.5 before:transition-transform duration-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
