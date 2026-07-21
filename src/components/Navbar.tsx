import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/#expertise", label: "Expertise" },
  { href: "/#industries", label: "Industries" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/case-study", label: "Case Study" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const showScrolled = scrolled || !isHome

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[var(--color-border)] shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] flex items-center justify-center text-white font-heading font-extrabold text-base shadow-lg shadow-[var(--color-accent)]/20 group-hover:shadow-[var(--color-accent)]/30 group-hover:scale-105 transition-all duration-300">
            U
          </span>
          <span className="font-heading font-extrabold text-lg tracking-tight">
            <span className={showScrolled ? "text-[var(--color-foreground)]" : "text-white"}>Unnathi </span>
            <span className={showScrolled ? "text-[var(--color-accent)]" : "text-[var(--color-accent-light)]"}>Solutions</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isHash = link.href.includes("#")
            const isActive = isHash
              ? false
              : location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:rounded-full after:bg-[var(--color-accent)] after:transition-all after:duration-300 ${
                  isActive ? "after:w-full" : "after:w-0"
                } hover:after:w-full ${
                  showScrolled ? "text-[var(--color-secondary)] hover:text-[var(--color-accent)]" : "text-white/70 hover:text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
          <a href="/#contact">
            <Button
              size="lg"
              className={`font-semibold rounded-xl shadow-lg transition-all duration-300 ${
                showScrolled
                  ? "shadow-[var(--color-accent)]/20 hover:shadow-[var(--color-accent)]/30"
                  : "bg-white text-[var(--color-accent)] hover:bg-white/90 shadow-white/20"
              }`}
            >
              Contact Us
            </Button>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 transition-colors cursor-pointer ${showScrolled ? "text-[var(--color-foreground)]" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[var(--color-border)] shadow-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <a href="/#contact" onClick={() => setOpen(false)}>
              <Button className="w-full font-semibold rounded-xl">Contact Us</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
