import { useEffect, useRef } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import MissionVision from "@/components/MissionVision"
import Expertise from "@/components/Expertise"
import Excellence from "@/components/Excellence"
import Industries from "@/components/Industries"
import WhyUs from "@/components/WhyUs"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import { ChevronUp } from "lucide-react"

function ScrollToTop() {
  const visible = useRef(false)

  useEffect(() => {
    const btn = document.getElementById("scroll-top")
    if (!btn) return
    const onScroll = () => {
      const shouldShow = window.scrollY > 600
      if (shouldShow !== visible.current) {
        visible.current = shouldShow
        btn.classList.toggle("opacity-0", !shouldShow)
        btn.classList.toggle("pointer-events-none", !shouldShow)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      id="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] text-white shadow-xl shadow-[var(--color-accent)]/20 flex items-center justify-center hover:shadow-[var(--color-accent)]/30 hover:-translate-y-0.5 transition-all duration-300 opacity-0 pointer-events-none cursor-pointer"
      aria-label="Scroll to top"
    >
      <ChevronUp size={22} />
    </button>
  )
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => { document.documentElement.style.scrollBehavior = "" }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MissionVision />
        <Expertise />
        <Excellence />
        <Industries />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
