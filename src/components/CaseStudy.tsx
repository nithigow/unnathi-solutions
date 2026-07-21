import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, ArrowRight, Wrench, QrCode, Eye, FileText, Target, Layers, BarChart3, Cpu, Radio, Cable, Code, Monitor } from "lucide-react"

const deliverables = [
  {
    icon: FileText,
    title: "Recipe Management",
    items: [
      "Centralized recipe creation and version control",
      "Automatic recipe validation before production",
      "Controlled deployment of production recipes to the shop floor",
      "Revision history and audit trail",
    ],
  },
  {
    icon: Cable,
    title: "OT Integration",
    items: [
      "Integrated production equipment with MES using industrial communication protocols",
      "Real-time data acquisition from shop-floor devices",
      "Automated process validation and machine status monitoring",
      "Secure communication between Operational Technology (OT) and Information Technology (IT)",
    ],
  },
  {
    icon: QrCode,
    title: "Complete Product Traceability",
    items: [
      "End-to-end genealogy tracking for every assembled product",
      "Component-level traceability across all sub-assembly stations",
      "Production history linked with serial numbers and process data",
      "Complete audit trail for quality and compliance",
    ],
  },
  {
    icon: Wrench,
    title: "Torque Tool Integration",
    items: [
      "Connected intelligent torque controllers with the MES platform",
      "Automatic capture of torque values and tightening results",
      "Real-time validation against engineering specifications",
      "Prevention of process deviations through automated pass/fail verification",
    ],
  },
  {
    icon: Eye,
    title: "Pick-to-Light Integration",
    items: [
      "Integrated Pick-to-Light systems to guide operators during component selection",
      "Eliminated incorrect part picking",
      "Reduced assembly errors",
      "Improved production efficiency and operator productivity",
    ],
  },
  {
    icon: Monitor,
    title: "Electronic Work Instructions (EWI)",
    items: [
      "Delivered digital work instructions at every assembly station",
      "Step-by-step operator guidance with visual instructions",
      "Dynamic work instructions based on product variant and recipe",
      "Improved process standardization and reduced training time",
    ],
  },
]

const outcomes = [
  "Digitized the complete sub-assembly process",
  "Achieved 100% production traceability across the manufacturing line",
  "Reduced manual errors through guided assembly workflows",
  "Improved first-pass yield and product quality",
  "Increased operator productivity and process compliance",
  "Enabled real-time production monitoring and reporting",
  "Strengthened quality assurance through automated process validation",
  "Established a scalable Industry 4.0 foundation for future smart factory initiatives",
]

const technologies = [
  { icon: Monitor, label: "Manufacturing Execution System (MES)" },
  { icon: Radio, label: "Industry 4.0 Integration" },
  { icon: Cpu, label: "Industrial IoT (IIoT)" },
  { icon: Layers, label: "Recipe Management" },
  { icon: Cable, label: "OT–IT Integration" },
  { icon: FileText, label: "Electronic Work Instructions (EWI)" },
  { icon: Wrench, label: "Torque Controller Integration" },
  { icon: Eye, label: "Pick-to-Light Systems" },
  { icon: QrCode, label: "Product Genealogy & Traceability" },
  { icon: BarChart3, label: "Real-Time Shop Floor Monitoring" },
  { icon: Code, label: "Production Analytics" },
]

export default function CaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#1E293B] py-20 lg:py-28 pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(5,150,105,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(2,132,199,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:24px_24px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 text-sm mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Home
            </Link>

            <div className="reveal visible">
              <Badge variant="accent" className="px-4 py-1.5 text-xs font-semibold border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 backdrop-blur-sm mb-6">
                Case Study
              </Badge>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl">
                Success Story:{" "}
                <span className="bg-gradient-to-r from-[var(--color-accent-light)] via-[var(--color-accent)] to-[var(--color-accent-2-light)] bg-clip-text text-transparent">
                  Digital Transformation of a Sub-Assembly Manufacturing Line
                </span>
              </h1>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 section-grid-bg" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 mb-24">
              <div className="reveal visible">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-light)]/10 text-[var(--color-accent)] flex items-center justify-center">
                    <Target size={20} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    Customer Challenge
                  </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[var(--color-foreground)] mb-5 tracking-tight">
                  The Challenge
                </h2>
                <p className="text-sm text-[var(--color-secondary)] leading-relaxed">
                  A leading manufacturing organization required a comprehensive digital solution to improve
                  production control, eliminate manual processes, ensure process compliance, and achieve
                  complete traceability across its sub-assembly lines. The customer also needed seamless
                  integration between shop-floor equipment and enterprise systems to support Industry 4.0
                  initiatives.
                </p>
              </div>

              <div className="reveal visible">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent-2)]/10 to-[var(--color-accent-2-light)]/10 text-[var(--color-accent-2)] flex items-center justify-center">
                    <Cpu size={20} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-2)]">
                    Our Solution
                  </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[var(--color-foreground)] mb-5 tracking-tight">
                  The Solution
                </h2>
                <p className="text-sm text-[var(--color-secondary)] leading-relaxed">
                  Unnathi Solutions designed and implemented an end-to-end Manufacturing Execution Solution
                  that digitized the entire sub-assembly process, integrating shop-floor equipment with
                  enterprise systems to enable real-time visibility, control, and traceability.
                </p>
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto mb-16 reveal visible">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Key Deliverables
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] mt-4 tracking-tight">
                What We Delivered
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
              <p className="text-[var(--color-secondary)] mt-5 leading-relaxed text-sm max-w-lg mx-auto">
                End-to-end solutions covering recipe management, OT integration, traceability, and more.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 reveal visible">
              {deliverables.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group relative rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[var(--color-accent)]/20 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-bl from-[var(--color-accent)]/[0.03] to-transparent rounded-bl-full group-hover:scale-[3] transition-transform duration-700" />
                    <div className="relative">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-light)]/10 text-[var(--color-accent)] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-[var(--color-accent)] group-hover:to-[var(--color-accent-dark)] group-hover:text-white transition-all duration-500 shadow-none group-hover:shadow-lg group-hover:shadow-[var(--color-accent)]/20">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-heading font-bold text-[var(--color-foreground)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <ul className="space-y-2">
                        {item.items.map((subItem) => (
                          <li
                            key={subItem}
                            className="text-[11px] text-[var(--color-secondary)]/70 pl-5 relative before:absolute before:left-0 before:top-[3px] before:text-[var(--color-accent)] before:font-bold before:text-xs before:content-['→'] group-hover:before:translate-x-0.5 before:transition-transform duration-300"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mb-24 reveal visible">
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Results
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] mt-4 tracking-tight">
                  Business Outcomes
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
                <p className="text-[var(--color-secondary)] mt-5 leading-relaxed text-sm max-w-lg mx-auto">
                  Measurable improvements delivered across the manufacturing line.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="group relative rounded-[var(--radius)] bg-[var(--color-surface)] border border-[var(--color-border)] p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-accent)]/20 transition-all duration-400 overflow-hidden"
                  >
                    <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-bl from-[var(--color-accent)]/[0.03] to-transparent rounded-bl-full group-hover:scale-[4] transition-transform duration-700" />
                    <div className="relative flex items-start gap-3">
                      <div className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                        <CheckCircle size={14} className="text-[var(--color-accent)] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-sm text-[var(--color-secondary)] leading-relaxed group-hover:text-[var(--color-foreground)] transition-colors duration-300">
                        {outcome}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal visible">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Tech Stack
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] mt-4 tracking-tight">
                  Technologies &amp; Capabilities
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
                <p className="text-[var(--color-secondary)] mt-5 leading-relaxed text-sm max-w-lg mx-auto">
                  A comprehensive suite of technologies powering the digital transformation.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-accent)]/20 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-light)]/10 text-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 group-hover:from-[var(--color-accent)] group-hover:to-[var(--color-accent-dark)] group-hover:text-white transition-all duration-400">
                      <Icon size={16} />
                    </div>
                    <span className="text-sm font-medium text-[var(--color-secondary)] group-hover:text-[var(--color-foreground)] transition-colors duration-300">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#1E293B] py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(5,150,105,0.1)_0%,transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:16px_16px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <div className="reveal visible">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.1]">
                Ready to Transform Your{" "}
                <span className="text-[var(--color-accent-light)]">Manufacturing Line</span>?
              </h2>
              <p className="text-white/50 mt-6 leading-relaxed max-w-xl mx-auto text-sm">
                Let's discuss how Unnathi Solutions can help you digitize your assembly processes,
                achieve complete traceability, and build your Industry 4.0 foundation.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a href="mailto:contact@unnathisolutions.com">
                  <Button
                    size="xl"
                    className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] hover:from-[var(--color-accent-dark)] hover:to-[var(--color-accent)] text-white font-bold text-base gap-2 px-10 rounded-xl shadow-xl shadow-[var(--color-accent)]/25 hover:shadow-[var(--color-accent)]/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Get in Touch
                    <ArrowRight size={18} />
                  </Button>
                </a>
                <Link to="/">
                  <Button
                    size="xl"
                    variant="outline"
                    className="border-white/15 text-white/80 hover:bg-white/5 hover:text-white hover:border-white/30 rounded-xl"
                  >
                    <ArrowLeft size={18} />
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
