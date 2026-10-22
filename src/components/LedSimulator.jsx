import { useEffect, useId, useRef, useState } from 'react'

const COLORS = [
  { id: 'ambar', label: 'Ámbar', hex: '#ffb703' },
  { id: 'rojo', label: 'Rojo', hex: '#ff4d6d' },
  { id: 'verde', label: 'Verde', hex: '#5ee0a0' },
  { id: 'azul', label: 'Azul', hex: '#7cc4ff' },
  { id: 'violeta', label: 'Violeta', hex: '#c4b5fd' },
]

const LONG_LEFT = 'M200 108C150 140 60 160 52 220C46 270 80 300 100 340'
const SHORT_LEFT = 'M208 114L100 340'
const LONG_RIGHT = 'M240 108C290 140 380 160 388 220C394 270 360 300 340 340'
const SHORT_RIGHT = 'M232 114L340 340'

export function LedSimulator() {
  const uid = useId().replace(/:/g, '')
  const [positiveOnLeft, setPositiveOnLeft] = useState(false)
  const [anodeOnLeft, setAnodeOnLeft] = useState(true)
  const [color, setColor] = useState(COLORS[0].hex)
  const [tries, setTries] = useState(0)
  const [squish, setSquish] = useState(false)
  const [burst, setBurst] = useState(0)
  const wasLit = useRef(false)

  const lit = positiveOnLeft === anodeOnLeft
  const leftIsLong = anodeOnLeft

  useEffect(() => {
    if (lit && !wasLit.current) setBurst((value) => value + 1)
    wasLit.current = lit
  }, [lit])

  function flipBattery() {
    setSquish(true)
    window.setTimeout(() => setPositiveOnLeft((value) => !value), 140)
    window.setTimeout(() => setSquish(false), 300)
    setTries((value) => value + 1)
  }

  function flipLed() {
    setAnodeOnLeft((value) => !value)
    setTries((value) => value + 1)
  }

  function reset() {
    setPositiveOnLeft(false)
    setAnodeOnLeft(true)
    setTries(0)
    setSquish(false)
  }

  const message = explain(lit, positiveOnLeft, anodeOnLeft, tries)

  return (
    <section className="mx-auto grid min-h-full w-full max-w-6xl items-center gap-6 px-5 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">La chispa · minuto 16</p>
        <h2 className="mt-2 font-display text-balance text-4xl text-champagne sm:text-5xl">Cambia la polaridad</h2>
        <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-champagne" aria-live="polite">
          {message}
        </p>
        <p className="mt-3 text-sm text-muted">
          Regla de esta tarde: la pata larga, el ánodo, enciende cuando toca el signo +.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <StatusChip label="Pata larga toca" value={lit ? 'el +' : 'el −'} hot={lit} />
          <StatusChip label="Luz" value={lit ? 'encendida' : 'apagada'} hot={lit} />
        </div>
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Color de tu chispa</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {COLORS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={color === item.hex}
                aria-label={`LED ${item.label}`}
                onClick={() => setColor(item.hex)}
                className={`grid h-11 place-items-center rounded-full border px-3 text-sm ${
                  color === item.hex ? 'border-champagne text-champagne' : 'border-white/15 text-muted'
                }`}
              >
                <span className="mr-2 inline-block h-3 w-3 rounded-full" style={{ background: item.hex }} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <button type="button" onClick={reset} className="mt-5 text-sm text-gold underline-offset-4 hover:underline">
          Reiniciar el bug
        </button>
      </div>

      <div className="rounded-[2rem] border border-gold/25 bg-plum/40 p-3">
        <svg viewBox="0 0 440 430" className="mx-auto h-auto max-h-[54vh] w-full max-w-lg select-none">
          <defs>
            <filter id={`glow-${uid}`} x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <clipPath id={`coin-${uid}`}>
              <ellipse cx="220" cy="340" rx="120" ry="40" />
            </clipPath>
          </defs>

          <path
            d={leftIsLong ? LONG_LEFT : SHORT_LEFT}
            fill="none"
            stroke={lit ? color : '#8d7b9d'}
            strokeWidth={leftIsLong ? 6 : 4}
            strokeLinecap="round"
          />
          <path
            d={leftIsLong ? SHORT_RIGHT : LONG_RIGHT}
            fill="none"
            stroke={lit ? color : '#8d7b9d'}
            strokeWidth={leftIsLong ? 4 : 6}
            strokeLinecap="round"
          />

          <g
            role="button"
            tabIndex={0}
            onClick={flipLed}
            onKeyDown={(event) => activate(event, flipLed)}
            className="cursor-pointer"
            aria-label={`LED. La pata larga está a la ${anodeOnLeft ? 'izquierda' : 'derecha'}. Activar para girarlo.`}
          >
            <g key={burst} className={lit ? 'pop-in' : undefined}>
              <circle
                cx="220"
                cy="78"
                r="34"
                stroke="#f3e6bf"
                strokeWidth="2"
                filter={lit ? `url(#glow-${uid})` : undefined}
                style={{ fill: lit ? color : '#2a1838' }}
              />
            </g>
            <rect x="204" y="106" width="32" height="14" rx="2" fill="#d9cbb0" />
            <ellipse cx="220" cy="78" rx="46" ry="48" fill="transparent" />
          </g>

          <g
            role="button"
            tabIndex={0}
            onClick={flipBattery}
            onKeyDown={(event) => activate(event, flipBattery)}
            className="cursor-pointer"
            aria-label={`Pila CR2032. El lado izquierdo es ${positiveOnLeft ? 'positivo' : 'negativo'}. Activar para voltearla.`}
            style={{
              transform: squish ? 'scaleX(0.14)' : 'scaleX(1)',
              transformOrigin: '220px 340px',
              transformBox: 'view-box',
              transition: 'transform 0.14s ease',
            }}
          >
            <g clipPath={`url(#coin-${uid})`}>
              <rect x="100" y="300" width="120" height="80" fill={positiveOnLeft ? '#e4c36a' : '#2a143c'} />
              <rect x="220" y="300" width="120" height="80" fill={positiveOnLeft ? '#2a143c' : '#e4c36a'} />
            </g>
            <ellipse cx="220" cy="340" rx="120" ry="40" fill="none" stroke="#f3e6bf" strokeWidth="3" />
            <text
              x="160"
              y="348"
              textAnchor="middle"
              fontSize="32"
              fontFamily="Fraunces Variable, Palatino, serif"
              fill={positiveOnLeft ? '#100818' : '#e4c36a'}
            >
              {positiveOnLeft ? '+' : '−'}
            </text>
            <text
              x="280"
              y="348"
              textAnchor="middle"
              fontSize="32"
              fontFamily="Fraunces Variable, Palatino, serif"
              fill={positiveOnLeft ? '#e4c36a' : '#100818'}
            >
              {positiveOnLeft ? '−' : '+'}
            </text>
            {tries === 0 && (
              <ellipse
                cx="220"
                cy="340"
                rx="132"
                ry="54"
                fill="none"
                stroke="#e4c36a"
                strokeWidth="2"
                style={{ animation: 'hint-ring 1.6s ease-out infinite' }}
              />
            )}
          </g>

          <text x="220" y="392" textAnchor="middle" fill="#d9cbb0" fontSize="13" fontFamily="Outfit, Segoe UI, sans-serif">
            CR2032 · 3V · toca la pila
          </text>
          <text x="100" y="248" textAnchor="middle" fill="#f7f1e1" fontSize="13" fontFamily="Outfit, Segoe UI, sans-serif">
            {leftIsLong ? 'PATA LARGA' : 'PATA CORTA'}
          </text>
          <text x="340" y="248" textAnchor="middle" fill="#f7f1e1" fontSize="13" fontFamily="Outfit, Segoe UI, sans-serif">
            {leftIsLong ? 'PATA CORTA' : 'PATA LARGA'}
          </text>
        </svg>
        <p className="px-4 pb-3 text-center text-sm text-muted">
          Toca la pila para voltearla. Toca el LED para cambiar de lado la pata larga.
        </p>
      </div>
    </section>
  )
}

function StatusChip({ label, value, hot }) {
  return (
    <div className={`rounded-2xl border px-4 py-3 ${hot ? 'border-gold/60 bg-gold/10' : 'border-white/10 bg-white/5'}`}>
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted">{label}</p>
      <p className="font-display text-2xl text-champagne">{value}</p>
    </div>
  )
}

function activate(event, action) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    action()
  }
}

function explain(lit, positiveOnLeft, anodeOnLeft, tries) {
  if (tries === 0) {
    return 'Este es el bug de la sala: hay pila, hay LED, y no hay luz. Nada se quemó. Observen qué cambia al voltear la CR2032.'
  }
  if (!lit && !positiveOnLeft && anodeOnLeft) {
    return 'La pata larga sigue en el lado −. El LED está entero y la pila también. Solo falta que el ánodo encuentre el +.'
  }
  if (!lit) {
    return 'Movieron las dos piezas y volvieron a no coincidir. Es un bug nuevo, igual de inofensivo. Cambien solo una.'
  }
  if (positiveOnLeft && anodeOnLeft) {
    return 'Voltearon la pila. El + quedó contra la pata larga. La luz no estaba rota: estaba al revés.'
  }
  return 'Giraron el LED. La pata larga ahora toca el +. Misma lección, otro movimiento.'
}
