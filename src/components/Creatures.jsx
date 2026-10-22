import { useEffect, useId, useState } from 'react'

function Wings({ glowId }) {
  return (
    <>
      <path
        d="M196 150C170 100 120 70 78 88C30 108 28 160 70 186C110 208 160 184 196 168Z"
        fill={`url(#${glowId}-wing)`}
        stroke="#e4c36a"
        strokeWidth="1.6"
      />
      <path
        d="M180 152C150 114 110 98 86 114C58 134 70 170 110 180C140 188 168 172 180 160Z"
        fill="#8b5cf6"
        opacity="0.28"
      />
      <path
        d="M188 154C140 118 96 112 72 132"
        fill="none"
        stroke="#f3e6bf"
        strokeWidth="1.1"
        opacity="0.7"
      />
      <path
        d="M196 172C160 190 110 210 96 236C86 262 130 268 168 236C186 214 196 196 200 180Z"
        fill={`url(#${glowId}-lower)`}
        stroke="#e4c36a"
        strokeWidth="1.6"
      />
      <path
        d="M190 184C150 206 124 228 130 246"
        fill="none"
        stroke="#f3e6bf"
        strokeWidth="1"
        opacity="0.65"
      />
    </>
  )
}

export function Butterfly({ lit = false, color = '#e4c36a', className = '' }) {
  const uid = useId().replace(/:/g, '')
  const glowId = `bf-${uid}`

  return (
    <svg
      viewBox="0 0 400 320"
      className={className}
      role="img"
      aria-label={lit ? 'Mariposa con la luz encendida' : 'Mariposa con el LED apagado'}
    >
      <defs>
        <linearGradient id={`${glowId}-wing`} x1="40" y1="70" x2="200" y2="210" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6d28d9" />
          <stop offset="1" stopColor="#2a1245" />
        </linearGradient>
        <linearGradient id={`${glowId}-lower`} x1="90" y1="180" x2="200" y2="270" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4c1d95" />
          <stop offset="1" stopColor="#1a0b28" />
        </linearGradient>
        <filter id={`${glowId}-glow`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g className="wing-left">
        <Wings glowId={glowId} />
      </g>
      <g transform="translate(400 0) scale(-1 1)">
        <g className="wing-left">
          <Wings glowId={glowId} />
        </g>
      </g>
      <path d="M196 122C180 90 154 72 140 58" fill="none" stroke="#e4c36a" strokeWidth="1.4" />
      <path d="M204 122C220 90 246 72 260 58" fill="none" stroke="#e4c36a" strokeWidth="1.4" />
      <circle cx="140" cy="56" r="3" fill="#e4c36a" />
      <circle cx="260" cy="56" r="3" fill="#e4c36a" />
      <ellipse cx="200" cy="176" rx="9" ry="42" fill="#140910" stroke="#e4c36a" strokeWidth="1.2" />
      <circle cx="200" cy="128" r="11" fill="#140910" stroke="#e4c36a" strokeWidth="1.2" />
      <circle
        cx="200"
        cy="178"
        r={lit ? 7 : 4.5}
        fill={lit ? color : '#3a2a40'}
        filter={lit ? `url(#${glowId}-glow)` : undefined}
      />
    </svg>
  )
}

export function Caterpillar({ className = '' }) {
  const segments = [
    { cx: 46, cy: 116, rx: 26, ry: 20 },
    { cx: 92, cy: 110, rx: 28, ry: 22 },
    { cx: 142, cy: 116, rx: 30, ry: 23 },
    { cx: 194, cy: 108, rx: 30, ry: 23 },
    { cx: 246, cy: 116, rx: 28, ry: 22 },
  ]

  return (
    <svg viewBox="0 0 360 200" className={className} role="img" aria-label="Oruga">
      <line x1="24" y1="158" x2="336" y2="158" stroke="#e4c36a" strokeOpacity="0.35" strokeWidth="1.5" />
      <g className="crawl">
        {segments.map((segment, index) => (
          <ellipse
            key={segment.cx}
            cx={segment.cx}
            cy={segment.cy}
            rx={segment.rx}
            ry={segment.ry}
            fill={index % 2 ? '#5b21b6' : '#3b1764'}
            stroke="#e4c36a"
            strokeWidth="1.4"
            style={{ animation: `bob 1.8s ${index * 0.12}s ease-in-out infinite` }}
          />
        ))}
        <g style={{ animation: 'bob 1.8s 0.6s ease-in-out infinite' }}>
          <ellipse cx="300" cy="104" rx="32" ry="26" fill="#4c1d95" stroke="#e4c36a" strokeWidth="1.5" />
          <path d="M292 84C286 58 270 46 254 40" fill="none" stroke="#e4c36a" strokeWidth="1.4" />
          <path d="M314 82C324 54 338 42 348 34" fill="none" stroke="#e4c36a" strokeWidth="1.4" />
          <circle cx="252" cy="38" r="2.4" fill="#e4c36a" />
          <circle cx="350" cy="32" r="2.4" fill="#e4c36a" />
          <circle cx="308" cy="98" r="2.2" fill="#f7f1e1" />
          <circle cx="320" cy="96" r="2.2" fill="#f7f1e1" />
        </g>
      </g>
    </svg>
  )
}

export function Chrysalis({ className = '' }) {
  return (
    <svg viewBox="0 0 240 340" className={className} role="img" aria-label="Crisálida, el momento del bug">
      <g className="hang">
        <path d="M28 46H212" stroke="#e4c36a" strokeWidth="2" />
        <path d="M120 46V96" stroke="#e4c36a" strokeWidth="1.5" />
        <path
          d="M120 96C168 106 190 166 176 226C166 276 120 300 120 300C120 300 74 276 64 226C50 166 72 106 120 96Z"
          fill="#2a1248"
          stroke="#e4c36a"
          strokeWidth="1.6"
        />
        <ellipse cx="120" cy="190" rx="30" ry="58" fill="#8b5cf6" opacity="0.22" />
        <path d="M104 132L126 164L110 196L136 236" fill="none" stroke="#e4c36a" strokeWidth="1.7" />
        <text
          x="120"
          y="214"
          textAnchor="middle"
          fill="#e4c36a"
          fontFamily="Fraunces Variable, Palatino, serif"
          fontSize="18"
          letterSpacing="3"
        >
          BUG
        </text>
      </g>
    </svg>
  )
}

const STAGES = [
  {
    title: 'La oruga',
    line: 'Al empezar, todas somos orugas. El mundo se ve enorme y avanzamos despacio.',
    support: 'Programar todavía parece un idioma lejano. Eso no es atraso: es el primer cuerpo del aprendizaje.',
  },
  {
    title: 'La crisálida',
    line: 'Aparece el error. En tecnología no se llama cero: se llama bug.',
    support: 'Es la fricción donde el cerebro busca otra salida. La oruga no se rompe: se está transformando.',
  },
  {
    title: 'El vuelo',
    line: 'Programar no es no equivocarse. Es salir de esa fricción con alas propias.',
    support: 'El bug era la crisálida. Resolverlo es el momento en que empieza el vuelo.',
  },
]

export function Metamorphosis() {
  const [stage, setStage] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return undefined
    const id = setInterval(() => {
      setStage((current) => (current >= 2 ? 2 : current + 1))
    }, 2400)
    return () => clearInterval(id)
  }, [playing])

  useEffect(() => {
    if (playing && stage === 2) setPlaying(false)
  }, [playing, stage])

  return (
    <section className="mx-auto grid min-h-full w-full max-w-6xl items-center gap-8 px-5 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">El nudo · minuto 5</p>
        <div className="mt-4 flex min-h-[280px] items-center justify-center rounded-[2rem] border border-gold/25 bg-plum/50 px-4 py-6">
          {stage === 0 && <Caterpillar className="slide-in h-52 w-full max-w-md" />}
          {stage === 1 && <Chrysalis className="slide-in h-72 w-full max-w-xs" />}
          {stage === 2 && <Butterfly lit className="slide-in h-72 w-full max-w-md" />}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {STAGES.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-pressed={stage === index}
              onClick={() => {
                setPlaying(false)
                setStage(index)
              }}
              className={`rounded-full px-4 py-2 text-sm transition ${
                stage === index ? 'bg-gold text-ink' : 'border border-gold/35 text-champagne hover:border-gold'
              }`}
            >
              {item.title}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              if (playing) {
                setPlaying(false)
                return
              }
              if (stage === 2) setStage(0)
              setPlaying(true)
            }}
            className="rounded-full border border-gold/35 px-4 py-2 text-sm text-gold hover:border-gold"
          >
            {playing ? 'Pausar' : 'Ver la secuencia'}
          </button>
        </div>
      </div>
      <div>
        <p className="text-sm text-gold">De la oruga al bug, y del bug al vuelo</p>
        <h2 className="mt-2 font-display text-balance text-4xl text-champagne sm:text-5xl">{STAGES[stage].title}</h2>
        <p className="mt-5 text-pretty text-xl leading-relaxed text-champagne">{STAGES[stage].line}</p>
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted">{STAGES[stage].support}</p>
      </div>
    </section>
  )
}
