import {
  Monitor,
  Radio,
  Cable,
  Code,
  FolderKanban,
  Award,
} from "lucide-react"

const expertise = [
  {
    icon: Monitor,
    title: "Manufacturing Execution Systems",
    description:
      "Scalable MES solutions for complete production control, real-time visibility, and operational intelligence on the shop floor.",
    items: [
      "Production Planning & Scheduling",
      "Work Order & Production Tracking",
      "Digital Quality Management & SPC",
      "OEE Monitoring & Downtime Analysis",
      "Genealogy, Traceability & Serialization",
      "Andon Management & EWI",
      "Inventory & Material Tracking",
      "Barcode & QR Code Integration",
    ],
  },
  {
    icon: Radio,
    title: "Industry 4.0 Solutions",
    description:
      "Intelligent, connected systems for modern manufacturing from smart factories to AI-powered insights.",
    items: [
      "Smart Factory & IIoT Platforms",
      "Real-Time Machine Monitoring",
      "Predictive Maintenance",
      "Production Analytics & Dashboards",
      "Energy Monitoring",
      "Paperless Manufacturing",
      "AI-Powered Manufacturing Insights",
      "Digital Workflows & Automation",
    ],
  },
  {
    icon: Cable,
    title: "Machine Connectivity & Integration",
    description:
      "Connecting manufacturing equipment with enterprise applications for seamless data flow across operations.",
    items: [
      "CNC, PLC, SCADA & OPC UA",
      "MTConnect, Fanuc FOCAS",
      "Industrial Sensors & RFID",
      "Vision Inspection & AOI Machines",
      "SMT Production Lines",
      "SAP, Oracle, MS Dynamics",
      "Custom ERP & WMS Integration",
      "REST APIs & SQL Databases",
    ],
  },
  {
    icon: Code,
    title: "Custom Manufacturing Software",
    description:
      "Tailored applications built around your unique factory processes, legacy systems, and business goals.",
    items: [
      "Production Management Systems",
      "Machine Monitoring Platforms",
      "Industrial Dashboards & BI",
      "Traceability & Quality Solutions",
      "Maintenance & Warehouse Automation",
      "Digital Checklists & Approvals",
      "Mobile & Cloud Platforms",
      "Vendor & Compliance Management",
    ],
  },
  {
    icon: FolderKanban,
    title: "Product Engineering",
    description:
      "Transforming innovative ideas into enterprise-grade software products with full-stack engineering excellence.",
    items: [
      "Product Consulting & Strategy",
      "System Architecture & Design",
      "UI/UX Design",
      "Full Stack Development",
      "Cloud-Native Applications",
      "API Development & DB Design",
      "Performance Optimization",
      "Modernization & Long-Term Support",
    ],
  },
  {
    icon: Award,
    title: "Digital Manufacturing Excellence",
    description:
      "Combining manufacturing domain expertise with modern software engineering to drive measurable operational outcomes.",
    items: [
      "Productivity & OEE Improvement",
      "Quality & Traceability",
      "Regulatory Compliance",
      "Asset Utilization",
      "Production Visibility",
      "Data-Driven Decision Making",
      "Operational Efficiency",
      "Cost Optimization",
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
            What We Do
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] mt-4 tracking-tight">
            Our Expertise
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
          <p className="text-[var(--color-secondary)] mt-5 leading-relaxed text-sm max-w-lg mx-auto">
            End-to-end capabilities spanning MES, Industry 4.0, machine integration, custom software, and product engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {expertise.map((exp) => {
            const Icon = exp.icon
            return (
              <div
                key={exp.title}
                className="group relative rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[var(--color-accent)]/20 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-bl from-[var(--color-accent)]/[0.03] to-transparent rounded-bl-full group-hover:scale-[3] transition-transform duration-700" />
                <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-gradient-to-tr from-[var(--color-accent-2)]/[0.02] to-transparent rounded-tr-full group-hover:scale-[3] transition-transform duration-700" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-light)]/10 text-[var(--color-accent)] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-[var(--color-accent)] group-hover:to-[var(--color-accent-dark)] group-hover:text-white transition-all duration-500 shadow-none group-hover:shadow-lg group-hover:shadow-[var(--color-accent)]/20">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[var(--color-secondary)]/80 leading-relaxed mb-5">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.items.map((item) => (
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
