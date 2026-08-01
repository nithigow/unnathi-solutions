const C = {
  emerald: "#059669",
  emeraldLight: "#34D399",
  emeraldDark: "#047857",
  sky: "#0284C7",
  skyLight: "#38BDF8",
  slate: "#1E293B",
  slateLight: "#475569",
  border: "#E2E8F0",
  surface: "#FFFFFF",
}

export function AssemblyLine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 420" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="al-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.emerald} stopOpacity="0.08" />
          <stop offset="1" stopColor={C.sky} stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="558" height="418" rx="28" fill="url(#al-bg)" stroke={C.border} />
      <g stroke={C.border} strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={70 + i * 60} y1="40" x2={70 + i * 60} y2="380" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="40" y1={80 + i * 60} x2="520" y2={80 + i * 60} />
        ))}
      </g>

      <rect x="46" y="60" width="468" height="24" rx="8" fill={C.surface} stroke={C.emerald} strokeOpacity="0.3" />
      <circle cx="64" cy="72" r="5" fill={C.emerald} />
      <rect x="80" y="66" width="180" height="12" rx="6" fill={C.slate} opacity="0.25" />
      <circle cx="452" cy="72" r="5" fill={C.sky} />
      <rect x="424" y="66" width="60" height="12" rx="6" fill={C.sky} opacity="0.5" />

      <rect x="120" y="120" width="130" height="96" rx="14" fill={C.surface} stroke={C.slateLight} opacity="0.9" />
      <rect x="136" y="138" width="40" height="22" rx="6" fill={C.emerald} opacity="0.15" />
      <rect x="136" y="168" width="98" height="8" rx="4" fill={C.slate} opacity="0.2" />
      <rect x="136" y="182" width="76" height="8" rx="4" fill={C.slate} opacity="0.12" />

      <g>
        <circle cx="330" cy="168" r="30" fill={C.emerald} opacity="0.1" />
        <circle cx="330" cy="168" r="18" fill={C.surface} stroke={C.emerald} strokeWidth="3" />
        <path d="M322 168l6 6 12-12" stroke={C.emerald} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <rect x="84" y="252" width="96" height="70" rx="12" fill={C.surface} stroke={C.slateLight} opacity="0.9" />
      <path d="M96 322l-8 26h160l-12-26z" fill={C.emerald} opacity="0.12" />
      <rect x="92" y="266" width="18" height="34" rx="4" fill={C.slate} opacity="0.3" />
      <rect x="150" y="266" width="18" height="34" rx="4" fill={C.slate} opacity="0.15" />

      <rect x="280" y="260" width="140" height="12" rx="6" fill={C.slate} opacity="0.18" />
      <rect x="280" y="284" width="108" height="12" rx="6" fill={C.slate} opacity="0.12" />
      <rect x="280" y="308" width="128" height="12" rx="6" fill={C.slate} opacity="0.18" />
      <rect x="280" y="332" width="90" height="12" rx="6" fill={C.slate} opacity="0.1" />

      <g>
        <rect x="438" y="120" width="84" height="30" rx="15" fill={C.emerald} />
        <rect x="438" y="120" width="84" height="30" rx="15" fill="white" opacity="0.08" />
        <text x="480" y="139" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">OEE 96%</text>
      </g>
      <g>
        <rect x="404" y="180" width="118" height="30" rx="15" fill={C.sky} />
        <rect x="404" y="180" width="118" height="30" rx="15" fill="white" opacity="0.08" />
        <text x="463" y="199" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">FPY 99.2%</text>
      </g>

      <rect x="180" y="360" width="56" height="34" rx="10" fill={C.surface} stroke={C.emerald} strokeWidth="2" />
      <circle cx="196" cy="377" r="4" fill={C.emerald} />
      <rect x="208" y="374" width="16" height="6" rx="3" fill={C.emerald} />
      <circle cx="222" cy="373" r="2.5" fill={C.emeraldLight} />
      <path d="M236 377l-20-12 6-4 16 11z" fill={C.emerald} opacity="0.85" />
    </svg>
  )
}

export function ProcessLayers({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 420" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="pl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.emerald} stopOpacity="0.08" />
          <stop offset="1" stopColor={C.sky} stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="558" height="418" rx="28" fill="url(#pl-bg)" stroke={C.border} />

      <rect x="90" y="44" width="380" height="60" rx="14" fill={C.surface} stroke={C.slateLight} />
      <circle cx="116" cy="74" r="10" fill={C.sky} opacity="0.15" />
      <rect x="112" y="70" width="8" height="8" rx="2" fill={C.sky} />
      <text x="140" y="72" fill={C.slate} fontSize="15" fontWeight="700" fontFamily="Inter, sans-serif">MES</text>
      <text x="140" y="90" fill={C.slateLight} fontSize="11" fontFamily="Inter, sans-serif">Production Orders · BOM · Routing</text>

      <path d="M180 104l-8 14M300 104l8 14M420 104l-8 14" stroke={C.border} strokeWidth="2" strokeDasharray="4 4" />

      <rect x="110" y="130" width="340" height="66" rx="16" fill="url(#pl-bg)" stroke={C.emerald} strokeWidth="2.5" />
      <rect x="130" y="146" width="12" height="12" rx="3" fill={C.emerald} />
      <text x="154" y="156" fill={C.emeraldDark} fontSize="16" fontWeight="800" fontFamily="Inter, sans-serif">AssemblyGuard™</text>
      <text x="130" y="178" fill={C.slateLight} fontSize="11" fontFamily="Inter, sans-serif">Execution Layer — enforces every step</text>

      <path d="M180 196l-8 14M300 196l8 14M420 196l-8 14" stroke={C.emerald} strokeWidth="2" />

      <rect x="60" y="222" width="200" height="58" rx="12" fill={C.surface} stroke={C.sky} />
      <rect x="76" y="240" width="10" height="10" rx="2.5" fill={C.sky} />
      <text x="98" y="250" fill={C.slate} fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">Torque Tools</text>
      <text x="76" y="268" fill={C.slateLight} fontSize="10.5" fontFamily="Inter, sans-serif">auto-configured</text>

      <rect x="300" y="222" width="200" height="58" rx="12" fill={C.surface} stroke={C.emerald} />
      <rect x="316" y="240" width="10" height="10" rx="2.5" fill={C.emerald} />
      <text x="338" y="250" fill={C.slate} fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">Scanners & PLCs</text>
      <text x="316" y="268" fill={C.slateLight} fontSize="10.5" fontFamily="Inter, sans-serif">real-time validation</text>

      <path d="M160 280l-10 16M400 280l10 16" stroke={C.border} strokeWidth="2" strokeDasharray="4 4" />

      <rect x="110" y="308" width="340" height="72" rx="14" fill={C.surface} stroke={C.slateLight} />
      <text x="140" y="336" fill={C.slate} fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">Complete Digital Traceability</text>
      <rect x="140" y="348" width="180" height="8" rx="4" fill={C.slate} opacity="0.12" />
      <rect x="140" y="362" width="140" height="8" rx="4" fill={C.slate} opacity="0.08" />
      <g>
        <circle cx="398" cy="340" r="14" fill={C.emerald} opacity="0.12" />
        <circle cx="398" cy="340" r="9" fill={C.surface} stroke={C.emerald} strokeWidth="2.5" />
        <path d="M393 340l3.5 3.5 7-7" stroke={C.emerald} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export function TraceGraph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 420" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tg-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.emerald} stopOpacity="0.08" />
          <stop offset="1" stopColor={C.sky} stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="558" height="418" rx="28" fill="url(#tg-bg)" stroke={C.border} />

      <g stroke={C.border} strokeWidth="1">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`v${i}`} x1={70 + i * 60} y1="50" x2={70 + i * 60} y2="370" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`h${i}`} x1="40" y1={90 + i * 70} x2="520" y2={90 + i * 70} />
        ))}
      </g>

      <rect x="220" y="150" width="120" height="120" rx="22" fill={C.surface} stroke={C.emerald} strokeWidth="2.5" />
      <rect x="248" y="182" width="20" height="12" rx="3" fill={C.emerald} opacity="0.2" />
      <text x="248" y="212" fill={C.slate} fontSize="15" fontWeight="800" fontFamily="Inter, sans-serif">SN-001234</text>
      <text x="248" y="232" fill={C.slateLight} fontSize="11" fontFamily="Inter, sans-serif">Final Assembly</text>
      <rect x="248" y="244" width="64" height="8" rx="4" fill={C.emerald} opacity="0.25" />

      <rect x="60" y="70" width="96" height="60" rx="12" fill={C.surface} stroke={C.slateLight} />
      <text x="76" y="94" fill={C.slate} fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">Part A</text>
      <rect x="76" y="102" width="52" height="6" rx="3" fill={C.slate} opacity="0.15" />
      <path d="M156 100l42 62" stroke={C.slateLight} strokeWidth="1.5" />

      <rect x="404" y="70" width="96" height="60" rx="12" fill={C.surface} stroke={C.slateLight} />
      <text x="420" y="94" fill={C.slate} fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">Part B</text>
      <rect x="420" y="102" width="52" height="6" rx="3" fill={C.slate} opacity="0.15" />
      <path d="M404 100l-62 62" stroke={C.slateLight} strokeWidth="1.5" />

      <rect x="60" y="290" width="96" height="60" rx="12" fill={C.surface} stroke={C.slateLight} />
      <text x="76" y="314" fill={C.slate} fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">Torque 12.5 Nm</text>
      <rect x="76" y="322" width="40" height="6" rx="3" fill={C.slate} opacity="0.15" />
      <path d="M156 320l42-62" stroke={C.slateLight} strokeWidth="1.5" />

      <rect x="404" y="290" width="96" height="60" rx="12" fill={C.surface} stroke={C.slateLight} />
      <text x="420" y="314" fill={C.slate} fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">Operator #07</text>
      <rect x="420" y="322" width="40" height="6" rx="3" fill={C.slate} opacity="0.15" />
      <path d="M404 320l-62-62" stroke={C.slateLight} strokeWidth="1.5" />

      <g>
        <rect x="230" y="52" width="100" height="30" rx="15" fill={C.emerald} />
        <text x="280" y="71" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">100% Traceable</text>
      </g>
    </svg>
  )
}

export function TorqueTool({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 420" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tt-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.emerald} stopOpacity="0.08" />
          <stop offset="1" stopColor={C.sky} stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="558" height="418" rx="28" fill="url(#tt-bg)" stroke={C.border} />

      <rect x="80" y="60" width="400" height="28" rx="8" fill={C.surface} stroke={C.border} />
      <rect x="96" y="70" width="140" height="8" rx="4" fill={C.slate} opacity="0.15" />
      <circle cx="424" cy="74" r="5" fill={C.emerald} />
      <text x="406" y="78" textAnchor="end" fill={C.slate} fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Torque: 12.5 ± 0.2 Nm</text>

      <rect x="120" y="150" width="320" height="180" rx="20" fill={C.surface} stroke={C.emerald} strokeWidth="2" />
      <text x="148" y="182" fill={C.slate} fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">Station 04 · Sequence 06</text>

      <rect x="148" y="200" width="70" height="16" rx="8" fill={C.emerald} opacity="0.15" />
      <text x="156" y="212" fill={C.emeraldDark} fontSize="10.5" fontWeight="700" fontFamily="Inter, sans-serif">ACTIVE</text>
      <rect x="148" y="230" width="180" height="9" rx="4.5" fill={C.slate} opacity="0.08" />
      <rect x="148" y="230" width="180" height="9" rx="4.5" fill={C.emerald} opacity="0.9" />
      <circle cx="328" cy="234.5" r="7" fill={C.surface} stroke={C.emerald} strokeWidth="2.5" />
      <text x="148" y="264" fill={C.slateLight} fontSize="11" fontFamily="Inter, sans-serif">Apply tightening to main bracket bolts</text>

      <g>
        <rect x="148" y="284" width="120" height="26" rx="13" fill={C.emerald} />
        <text x="208" y="301" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">VALIDATED</text>
      </g>

      <g>
        <path d="M120 384h320l-24 22H144z" fill={C.slate} opacity="0.1" />
        <rect x="152" y="374" width="256" height="10" rx="5" fill={C.slate} opacity="0.2" />
        <circle cx="176" cy="392" r="6" fill={C.sky} opacity="0.4" />
        <circle cx="280" cy="392" r="6" fill={C.emerald} opacity="0.5" />
        <circle cx="384" cy="392" r="6" fill={C.sky} opacity="0.4" />
      </g>

      <g>
        <circle cx="470" cy="210" r="24" fill={C.emerald} opacity="0.12" />
        <circle cx="470" cy="210" r="16" fill={C.surface} stroke={C.emerald} strokeWidth="2.5" />
        <path d="M463 210l5 5 10-10" stroke={C.emerald} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export function ControlShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 420" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cs-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.emerald} stopOpacity="0.08" />
          <stop offset="1" stopColor={C.sky} stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="558" height="418" rx="28" fill="url(#cs-bg)" stroke={C.border} />

      <g stroke={C.border} strokeWidth="1">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`v${i}`} x1={70 + i * 60} y1="50" x2={70 + i * 60} y2="370" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`h${i}`} x1="40" y1={90 + i * 70} x2="520" y2={90 + i * 70} />
        ))}
      </g>

      <path d="M280 66l120 40v74c0 66-44 120-120 146-76-26-120-80-120-146v-74z" fill={C.surface} stroke={C.emerald} strokeWidth="2.5" />
      <path d="M280 66l120 40v74c0 66-44 120-120 146-76-26-120-80-120-146v-74z" fill={C.emerald} opacity="0.05" />

      <g>
        <circle cx="280" cy="210" r="42" fill={C.emerald} opacity="0.12" />
        <circle cx="280" cy="210" r="42" stroke={C.emerald} strokeWidth="2" opacity="0.3" />
        <path d="M258 210l16 16 34-34" stroke={C.emerald} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <text x="280" y="312" textAnchor="middle" fill={C.slate} fontSize="16" fontWeight="800" fontFamily="Inter, sans-serif">Process Deviation Blocked</text>
      <rect x="205" y="326" width="150" height="22" rx="11" fill={C.sky} />
      <rect x="205" y="326" width="150" height="22" rx="11" fill="white" opacity="0.1" />
      <text x="280" y="341" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">WRONG TORQUE PREVENTED</text>

      <g>
        <rect x="120" y="356" width="18" height="18" rx="4" fill={C.slate} opacity="0.15" />
        <rect x="164" y="356" width="18" height="18" rx="4" fill={C.slate} opacity="0.08" />
        <rect x="208" y="356" width="18" height="18" rx="4" fill={C.slate} opacity="0.15" />
        <rect x="252" y="356" width="18" height="18" rx="4" fill={C.slate} opacity="0.08" />
        <rect x="296" y="356" width="18" height="18" rx="4" fill={C.slate} opacity="0.15" />
        <rect x="340" y="356" width="18" height="18" rx="4" fill={C.slate} opacity="0.08" />
        <rect x="384" y="356" width="18" height="18" rx="4" fill={C.slate} opacity="0.15" />
      </g>
    </svg>
  )
}

export function MetricsBars({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 420" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="mb-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.emerald} stopOpacity="0.08" />
          <stop offset="1" stopColor={C.sky} stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="mb-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.emeraldLight} />
          <stop offset="1" stopColor={C.emerald} />
        </linearGradient>
        <linearGradient id="mb-bar2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.skyLight} />
          <stop offset="1" stopColor={C.sky} />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="558" height="418" rx="28" fill="url(#mb-bg)" stroke={C.border} />

      <g stroke={C.border}>
        <line x1="80" y1="90" x2="80" y2="330" />
        <line x1="80" y1="330" x2="490" y2="330" />
        {[120, 180, 240, 300].map((y) => (
          <line key={y} x1="80" y1={y} x2="490" y2={y} strokeOpacity="0.6" />
        ))}
      </g>

      <rect x="110" y="262" width="44" height="68" rx="8" fill="url(#mb-bar2)" opacity="0.85" />
      <rect x="176" y="226" width="44" height="104" rx="8" fill="url(#mb-bar2)" opacity="0.85" />
      <rect x="242" y="186" width="44" height="144" rx="8" fill="url(#mb-bar)" />
      <rect x="308" y="150" width="44" height="180" rx="8" fill="url(#mb-bar)" />
      <rect x="374" y="112" width="44" height="218" rx="8" fill="url(#mb-bar)" />

      <g>
        <rect x="376" y="74" width="84" height="26" rx="13" fill={C.surface} stroke={C.emerald} strokeWidth="1.5" />
        <text x="418" y="91" textAnchor="middle" fill={C.emeraldDark} fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">+38% FPY</text>
      </g>

      {[
        { x: 132, l: "Rework" },
        { x: 198, l: "Scrap" },
        { x: 264, l: "Errors" },
        { x: 330, l: "FPY" },
        { x: 396, l: "Throughput" },
      ].map((t) => (
        <text key={t.x} x={t.x} y="350" textAnchor="middle" fill={C.slateLight} fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
          {t.l}
        </text>
      ))}

      <g>
        <path d="M80 330c60-6 90-70 160-78 70-8 90 6 160-4 40-6 60-26 90-30" stroke={C.emerald} strokeWidth="3" strokeLinecap="round" strokeDasharray="1 0" fill="none" />
        <circle cx="490" cy="218" r="6" fill={C.emerald} />
      </g>
    </svg>
  )
}
