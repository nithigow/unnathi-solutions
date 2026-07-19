import { Card, CardContent } from "@/components/ui/card"
import { Eye, Target } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 section-grid-bg" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Our Foundation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] mt-4 tracking-tight">
            Mission &amp; Vision
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto mt-4" />
          <p className="text-[var(--color-secondary)] mt-5 leading-relaxed text-sm max-w-lg mx-auto">
            Scaling manufacturing into digital-run factories through intelligent, connected, and scalable technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 reveal">
          <Card className="group border-0 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-muted)] shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-accent)]/5 to-transparent rounded-bl-full" />
            <CardContent className="p-8 sm:p-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] text-white flex items-center justify-center mb-6 shadow-lg shadow-[var(--color-accent)]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Eye size={26} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[var(--color-foreground)] mb-4">
                Our Vision
              </h3>
              <p className="text-sm text-[var(--color-secondary)] leading-relaxed">
                To become a global leader in digital manufacturing by empowering industries with intelligent,
                connected, and scalable technology solutions that transform traditional factories into autonomous,
                data-driven Smart Factories. We envision a future where every manufacturing enterprise, regardless
                of size, can leverage Industry 4.0 technologies to achieve operational excellence, sustainable
                growth, and continuous innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-muted)] shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-accent-2)]/5 to-transparent rounded-bl-full" />
            <CardContent className="p-8 sm:p-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent-2)] to-[#0369A1] text-white flex items-center justify-center mb-6 shadow-lg shadow-[var(--color-accent-2)]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Target size={26} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[var(--color-foreground)] mb-4">
                Our Mission
              </h3>
              <p className="text-sm text-[var(--color-secondary)] leading-relaxed">
                To accelerate the digital transformation of manufacturing by delivering innovative MES, Industrial
                IoT, AI-driven analytics, and custom software solutions that seamlessly connect machines, people,
                and enterprise systems. We help manufacturers digitize shop floors, enable real-time visibility,
                improve OEE, integrate OT &amp; IT, and build future-ready manufacturing platforms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
