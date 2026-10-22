import { useId } from 'react'

function Wings({ id }) {
  return (
    <>
      <path
        d="M196 150C170 96 118 66 74 88C28 110 30 164 74 188C114 210 160 184 196 168Z"
        fill={`url(#${id}-upper)`}
        stroke="#FACC15"
        strokeWidth="1.6"
      />
      <path
        d="M176 150C146 112 108 98 84 116C60 136 74 170 112 180C142 188 166 170 176 158Z"
        fill="#EC4899"
        opacity="0.35"
      />
      <path
        d="M196 174C158 194 108 214 96 240C86 266 132 270 168 238C186 216 196 196 200 182Z"
        fill={`url(#${id}-lower)`}
        stroke="#FACC15"
        strokeWidth="1.6"
      />
    </>
  )
}

export function GlowButterfly({ lit = false, className = '' }) {
  const uid = useId().replace(/:/g, '')

  return (
    <svg viewBox="0 0 400 320" className={className} role="img" aria-label={lit ? 'Mariposa encendida' : 'Mariposa'}>
      <defs>
        <linearGradient id={`${uid}-upper`} x1="40" y1="70" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C084FC" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id={`${uid}-lower`} x1="90" y1="180" x2="190" y2="270" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#3B0764" />
        </linearGradient>
        <filter id={`${uid}-glow`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g className="wing-left">
        <Wings id={uid} />
      </g>
      <g transform="translate(400 0) scale(-1 1)">
        <g className="wing-left">
          <Wings id={uid} />
        </g>
      </g>
      <path d="M196 120C176 86 150 68 136 54" fill="none" stroke="#FACC15" strokeWidth="1.5" />
      <path d="M204 120C224 86 250 68 264 54" fill="none" stroke="#FACC15" strokeWidth="1.5" />
      <circle cx="136" cy="52" r="3.2" fill="#FACC15" />
      <circle cx="264" cy="52" r="3.2" fill="#FACC15" />
      <ellipse cx="200" cy="176" rx="9" ry="42" fill="#140910" stroke="#FACC15" />
      <circle cx="200" cy="128" r="11" fill="#140910" stroke="#FACC15" />
      <circle
        cx="200"
        cy="178"
        r={lit ? 8 : 4.5}
        fill={lit ? '#FACC15' : '#3A2A40'}
        filter={lit ? `url(#${uid}-glow)` : undefined}
      />
    </svg>
  )
}
