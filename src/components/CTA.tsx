import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export default function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#1E293B]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(5,150,105,0.1)_0%,transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:16px_16px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
            Let's Talk
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-6 tracking-tight leading-[1.1]">
            Let's Build the <span className="text-[var(--color-accent-light)]">Factory of Tomorrow</span>
          </h2>
          <p className="text-white/50 mt-6 leading-relaxed max-w-xl mx-auto text-sm">
            Whether you are beginning your Industry 4.0 journey or modernizing your existing manufacturing
            systems, Unnathi Solutions is ready to help you transform operations through technology,
            innovation, and engineering excellence.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@unnathisolutions.com">
              <Button
                size="xl"
                className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] hover:from-[var(--color-accent-dark)] hover:to-[var(--color-accent)] text-white font-bold text-base gap-2 px-10 rounded-xl shadow-xl shadow-[var(--color-accent)]/25 hover:shadow-[var(--color-accent)]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail size={18} />
                Get in Touch
                <ArrowRight size={18} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
