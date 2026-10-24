'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GlowButterfly } from '../GlowButterfly'

const STAGES = [
  {
    id: 'oruga',
    title: 'La oruga',
    line: 'Miedo, dudas y el Síndrome del Impostor.',
    support: 'Al empezar, el mundo se ve enorme. Esa voz no significa que no pertenezcas: significa que estás empezando.',
  },
  {
    id: 'bug',
    title: 'El bug',
    line: 'El error no es fracaso; es el momento exacto donde ocurre el aprendizaje.',
    support: 'La crisálida es la fricción. El programa no abre, la luz no enciende, y ahí empieza la transformación.',
  },
  {
    id: 'vuelo',
    title: 'La mariposa de luz',
    line: 'Descubrir tu propio camino y encender tu chispa.',
    support: 'Programar no es no equivocarse. Es salir de esa fricción con una luz que ya es tuya.',
  },
]

export function MetamorphosisSlide() {
  const [stage, setStage] = useState(0)
  const [playing, setPlaying] = useState(false)
  const current = STAGES[stage]

  useEffect(() => {
    if (!playing) return undefined
    const id = setInterval(() => {
      setStage((value) => (value >= 2 ? 2 : value + 1))
    }, 2200)
    return () => clearInterval(id)
  }, [playing])

  useEffect(() => {
    if (playing && stage === 2) setPlaying(false)
  }, [playing, stage])

  return (
    <div className="grid h-full w-full items-center gap-6 px-8 pb-24 pt-8 md:px-14 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="flex min-h-0 flex-col items-center justify-center">
        <div className="flex h-[min(46vh,380px)] w-full items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-md"
            >
              {stage === 0 && (
                <img
                  src="/portraits/oruga-morada.png?v=3"
                  alt="Oruga morada"
                  className="mx-auto max-h-[min(42vh,360px)] w-auto max-w-full rounded-[1.6rem] object-contain"
                />
              )}
              {stage === 1 && <Chrysalis />}
              {stage === 2 && <GlowButterfly lit className="mx-auto h-72 w-full" />}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {STAGES.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={stage === index}
              onClick={() => {
                setPlaying(false)
                setStage(index)
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                stage === index ? 'bg-amber text-night' : 'border border-white/20 text-white'
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
            className="rounded-full border border-pink/60 px-4 py-2 text-sm font-semibold text-pink"
          >
            {playing ? 'Pausar' : 'Ver la secuencia'}
          </button>
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">La metamorfosis</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">{current.title}</h2>
        <p className="mt-5 text-pretty text-2xl font-medium leading-snug text-white">{current.line}</p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">{current.support}</p>
      </div>
    </div>
  )
}

function Chrysalis() {
  return (
    <svg viewBox="0 0 240 300" className="mx-auto h-64 w-full" role="img" aria-label="Crisálida">
      <path d="M36 48H204" stroke="#FACC15" strokeWidth="2" />
      <path d="M120 48V92" stroke="#FACC15" />
      <path
        d="M120 92C164 104 184 160 170 214C160 258 120 276 120 276C120 276 80 258 70 214C56 160 76 104 120 92Z"
        fill="#2A1248"
        stroke="#FACC15"
        strokeWidth="1.6"
      />
      <ellipse cx="120" cy="180" rx="28" ry="52" fill="#A855F7" opacity="0.28" />
      <path d="M106 128L126 158L112 188L134 224" fill="none" stroke="#FACC15" strokeWidth="1.7" />
      <text x="120" y="198" textAnchor="middle" fill="#FACC15" fontFamily="Space Grotesk, Segoe UI, sans-serif" fontSize="18" fontWeight="700">
        BUG
      </text>
    </svg>
  )
}
