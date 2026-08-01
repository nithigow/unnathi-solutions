import { Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] text-white shadow-lg shadow-[var(--color-accent)]/20",
        className
      )}
    >
      <Zap size={20} strokeWidth={2.4} fill="currentColor" aria-hidden="true" />
    </span>
  )
}
