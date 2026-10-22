'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const LONG_LEFT = 'M200 108C150 140 60 160 52 220C46 270 80 300 100 340'
const SHORT_RIGHT = 'M232 114L340 340'

export function SimulatorSlide() {
  const uid = useId().replace(/:/g, '')
  const [positiveOnLeft, setPositiveOnLeft] = useState(false)
  const [squish, setSquish] = useState(false)
  const wasLit = useRef(false)
  const [burst, setBurst] = useState(0)
  const lit = positiveOnLeft

  useEffect(() => {
    if (lit && !wasLit.current) setBurst((value) => value + 1)
    wasLit.current = lit
  }, [lit])

  function flipBattery() {
    setSquish(true)
    window.setTimeout(() => setPositiveOnLeft((value) => !value), 140)
    window.setTimeout(() => setSquish(false), 300)
  }

  return (
    <div className="relative grid h-full w-full items-center gap-6 px-8 pb-24 pt-8 md:px-14 lg:grid-cols-[0.9fr_1.1fr]">
      {lit && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(circle at 68% 42%, rgba(250,204,21,0.42), transparent 58%)' }}
        />
      )}
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">Tu primer circuito</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Enciende el LED</h2>
        <p
          aria-live="polite"
          className="mt-5 rounded-3xl border border-pink/50 bg-pink/10 px-5 py-4 text-xl font-medium leading-snug text-white"
        >
          {lit
            ? 'La pata larga tocó el +. La luz no estaba rota: estaba al revés.'
            : '¿No encendió a la primera? ¡No estás fallando, solo cambia la polaridad!'}
        </p>
        <button
          type="button"
          onClick={flipBattery}
          className="mt-6 rounded-full bg-amber px-6 py-3 text-base font-bold text-night"
        >
          Voltear la pila
        </button>
        <p className="mt-4 text-lg text-white/80">
          Luz <span className="font-semibold text-amber">{lit ? 'encendida' : 'apagada'}</span>
          {' · '}la pata larga toca el {lit ? '+' : '−'}
        </p>
      </div>
      <div className="relative rounded-[2rem] border border-white/10 bg-ink/70 p-2">
        <svg viewBox="0 0 440 420" className="mx-auto h-auto max-h-[48vh] w-full max-w-lg">
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
          <path d={LONG_LEFT} fill="none" stroke={lit ? '#FACC15' : '#8D7B9D'} strokeWidth="6" strokeLinecap="round" />
          <path d={SHORT_RIGHT} fill="none" stroke={lit ? '#FACC15' : '#8D7B9D'} strokeWidth="4" strokeLinecap="round" />
          <g key={burst}>
            <circle
              cx="220"
              cy="78"
              r="34"
              stroke="#FFF7EA"
              strokeWidth="2"
              filter={lit ? `url(#glow-${uid})` : undefined}
              style={{ fill: lit ? '#FACC15' : '#2A1838' }}
            />
          </g>
          <rect x="204" y="106" width="32" height="14" rx="2" fill="#E7D7B8" />
          <g
            role="button"
            tabIndex={0}
            onClick={flipBattery}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                flipBattery()
              }
            }}
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
              <rect x="100" y="300" width="120" height="80" fill={positiveOnLeft ? '#FACC15' : '#2A143C'} />
              <rect x="220" y="300" width="120" height="80" fill={positiveOnLeft ? '#2A143C' : '#FACC15'} />
            </g>
            <ellipse cx="220" cy="340" rx="120" ry="40" fill="none" stroke="#FFF7EA" strokeWidth="3" />
            <text x="160" y="350" textAnchor="middle" fontSize="34" fontFamily="Space Grotesk, Segoe UI, sans-serif" fontWeight="700" fill={positiveOnLeft ? '#0D0714' : '#FACC15'}>
              {positiveOnLeft ? '+' : '−'}
            </text>
            <text x="280" y="350" textAnchor="middle" fontSize="34" fontFamily="Space Grotesk, Segoe UI, sans-serif" fontWeight="700" fill={positiveOnLeft ? '#FACC15' : '#0D0714'}>
              {positiveOnLeft ? '−' : '+'}
            </text>
            {!lit && (
              <ellipse cx="220" cy="340" rx="132" ry="54" fill="none" stroke="#FACC15" strokeWidth="2" style={{ animation: 'hint-ring 1.6s ease-out infinite' }} />
            )}
          </g>
          <text x="100" y="250" textAnchor="middle" fill="#FFF7EA" fontSize="14" fontFamily="Plus Jakarta Sans, Segoe UI, sans-serif" fontWeight="700">
            PATA LARGA
          </text>
          <text x="340" y="250" textAnchor="middle" fill="#FFF7EA" fontSize="14" fontFamily="Plus Jakarta Sans, Segoe UI, sans-serif" fontWeight="700">
            PATA CORTA
          </text>
          <text x="220" y="398" textAnchor="middle" fill="#E7D7B8" fontSize="13" fontFamily="Plus Jakarta Sans, Segoe UI, sans-serif">
            CR2032 · toca la pila
          </text>
        </svg>
      </div>
    </div>
  )
}
