import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, TrendingUp, Shield, Zap } from "lucide-react"

const stats = [
  { value: "50+", label: "Manufacturing Clients" },
  { value: "200+", label: "Projects Delivered" },
  { value: "15+", label: "Years Combined Exp." },
]

const floatingIcons = [
  { Icon: TrendingUp, x: 15, y: 20, delay: 0 },
  { Icon: Shield, x: 80, y: 15, delay: 0.3 },
  { Icon: Zap, x: 85, y: 70, delay: 0.6 },
  { Icon: TrendingUp, x: 10, y: 75, delay: 0.9 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#1E293B]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(5,150,105,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(2,132,199,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(5,150,105,0.06)_0%,transparent_40%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:24px_24px]" />

      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <div
          key={i}
          className="absolute hidden lg:block text-white/5"
          style={{ left: `${x}%`, top: `${y}%`, animation: `float 6s ease-in-out ${delay}s infinite` }}
        >
          <Icon size={48} />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="reveal">
              <Badge
                variant="accent"
                className="px-4 py-1.5 text-xs font-semibold border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 backdrop-blur-sm"
              >
                Industry 4.0 &middot; Digital Manufacturing
              </Badge>
            </div>

            <div className="reveal">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
                <span className="text-white">Transforming Manufacturing with </span>
                <span className="bg-gradient-to-r from-[var(--color-accent-light)] via-[var(--color-accent)] to-[var(--color-accent-2-light)] bg-clip-text text-transparent">
                  Industry 4.0
                </span>
              </h1>
            </div>

            <div className="reveal">
              <p className="text-lg text-white/50 leading-relaxed max-w-xl">
                We empower manufacturers to accelerate digital transformation through innovative MES,
                Industrial IoT, and custom software development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 reveal">
              <a href="#contact">
                <Button size="xl" className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] hover:from-[var(--color-accent-dark)] hover:to-[var(--color-accent)] text-white font-bold gap-2 rounded-xl shadow-xl shadow-[var(--color-accent)]/25 hover:shadow-[var(--color-accent)]/40 hover:-translate-y-0.5 transition-all duration-300">
                  Start Your Journey <ArrowRight size={18} />
                </Button>
              </a>
              <a href="#expertise">
                <Button size="xl" variant="outline" className="border-white/15 text-white/80 hover:bg-white/5 hover:text-white hover:border-white/30 rounded-xl">
                  <Play size={18} /> Explore Expertise
                </Button>
              </a>
            </div>
          </div>

          <div className="reveal">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent)]/10 via-[var(--color-accent-2)]/5 to-transparent rounded-[var(--radius-2xl)] blur-2xl" />
              <div className="relative grid grid-cols-3 gap-4 p-8 rounded-[var(--radius-2xl)] bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-heading text-3xl sm:text-4xl font-extrabold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1.5 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  )
}
