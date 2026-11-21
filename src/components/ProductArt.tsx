import type { Kind } from '@/lib/data'

const D = '#1e293b'
const L = '#e2e8f0'

/** Flat vector illustration per product kind (no external photos, no licensing issues). */
const shapes: Record<Kind, (c: string) => React.ReactNode> = {
  phone: (c) => (
    <>
      <rect x="68" y="22" width="64" height="156" rx="12" fill={D} />
      <rect x="73" y="30" width="54" height="138" rx="7" fill={c} />
      <circle cx="100" cy="38" r="2.5" fill={D} />
      <rect x="82" y="120" width="36" height="6" rx="3" fill="#fff" opacity=".5" />
    </>
  ),
  laptop: (c) => (
    <>
      <rect x="40" y="48" width="120" height="82" rx="6" fill={D} />
      <rect x="46" y="54" width="108" height="70" rx="3" fill={c} />
      <path d="M26 130h148l-10 14H36z" fill={L} stroke={D} strokeWidth="3" strokeLinejoin="round" />
    </>
  ),
  tv: (c) => (
    <>
      <rect x="22" y="40" width="156" height="98" rx="6" fill={D} />
      <rect x="28" y="46" width="144" height="86" rx="3" fill={c} />
      <path d="M84 150h32l6 12H78z" fill={D} />
    </>
  ),
  headphones: (c) => (
    <>
      <path d="M52 112V96a48 48 0 0196 0v16" fill="none" stroke={D} strokeWidth="9" strokeLinecap="round" />
      <rect x="42" y="106" width="26" height="46" rx="12" fill={c} stroke={D} strokeWidth="4" />
      <rect x="132" y="106" width="26" height="46" rx="12" fill={c} stroke={D} strokeWidth="4" />
    </>
  ),
  buds: (c) => (
    <>
      <rect x="40" y="108" width="120" height="52" rx="22" fill={L} stroke={D} strokeWidth="4" />
      <ellipse cx="78" cy="78" rx="15" ry="22" fill={c} stroke={D} strokeWidth="4" />
      <ellipse cx="122" cy="78" rx="15" ry="22" fill={c} stroke={D} strokeWidth="4" />
    </>
  ),
  soundbar: (c) => (
    <>
      <rect x="18" y="80" width="164" height="38" rx="12" fill={D} />
      <rect x="26" y="88" width="148" height="22" rx="6" fill={c} opacity=".85" />
      {[40, 70, 100, 130, 160].map((x) => <circle key={x} cx={x} cy="99" r="3" fill={D} />)}
    </>
  ),
  speaker: (c) => (
    <>
      <rect x="64" y="40" width="72" height="120" rx="30" fill={D} />
      <circle cx="100" cy="80" r="19" fill={c} />
      <circle cx="100" cy="128" r="14" fill={c} opacity=".7" />
    </>
  ),
  vacuum: (c) => (
    <>
      <circle cx="100" cy="102" r="66" fill={D} />
      <circle cx="100" cy="102" r="52" fill={c} />
      <circle cx="100" cy="102" r="14" fill={D} />
      <circle cx="100" cy="102" r="5" fill="#fff" />
    </>
  ),
  coffee: (c) => (
    <>
      <rect x="54" y="28" width="92" height="140" rx="10" fill={D} />
      <rect x="64" y="42" width="72" height="30" rx="5" fill={c} />
      <rect x="82" y="86" width="36" height="24" rx="4" fill={L} />
      <rect x="70" y="140" width="60" height="22" rx="3" fill={L} />
      <path d="M86 118h28l-4 20H90z" fill="#fff" opacity=".75" />
    </>
  ),
  fridge: (c) => (
    <>
      <rect x="56" y="18" width="88" height="164" rx="8" fill={D} />
      <rect x="62" y="24" width="76" height="50" rx="4" fill={c} />
      <rect x="62" y="80" width="76" height="96" rx="4" fill={c} opacity=".75" />
      <rect x="126" y="40" width="4" height="22" rx="2" fill="#fff" />
      <rect x="126" y="100" width="4" height="40" rx="2" fill="#fff" />
    </>
  ),
  console: (c) => (
    <>
      <path d="M72 26h56v148H72z" fill={L} stroke={D} strokeWidth="4" />
      <path d="M72 26c-18 6-18 142 0 148" fill="none" stroke={c} strokeWidth="10" />
      <path d="M128 26c18 6 18 142 0 148" fill="none" stroke={c} strokeWidth="10" />
      <rect x="92" y="46" width="16" height="4" rx="2" fill={D} />
    </>
  ),
  gamepad: (c) => (
    <>
      <path d="M52 78h96c16 0 26 16 30 42l4 22c1 12-12 18-22 8l-22-22H62l-22 22c-10 10-23 4-22-8l4-22c4-26 14-42 30-42z" fill={c} stroke={D} strokeWidth="4" strokeLinejoin="round" />
      <path d="M70 100v16M62 108h16" stroke={D} strokeWidth="4" strokeLinecap="round" />
      <circle cx="132" cy="102" r="5" fill={D} />
      <circle cx="144" cy="114" r="5" fill={D} />
    </>
  ),
}

export default function ProductArt({ kind, hue, className = '' }: { kind: Kind; hue: number; className?: string }) {
  const accent = hue === 0 ? '#475569' : `hsl(${hue} 70% 55%)`
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label={kind} className={`bg-gradient-to-br from-slate-50 to-slate-100 ${className}`}>
      <ellipse cx="100" cy="184" rx="52" ry="6" fill="#0f172a" opacity=".08" />
      {shapes[kind](accent)}
    </svg>
  )
}
