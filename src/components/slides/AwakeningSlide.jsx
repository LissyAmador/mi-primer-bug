'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const THOUGHTS = [
  '«La tecnología es demasiado difícil para mí».',
  '«Seguro que las demás saben más que yo».',
  '«¿Y si me equivoco?».',
]

export function AwakeningSlide() {
  const [picked, setPicked] = useState(() => new Set())

  function toggle(index) {
    setPicked((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="flex h-full w-full flex-col justify-center px-8 pb-24 pt-8 md:px-14">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pink">
        El despertar de la mariposa de luz
      </p>
      <h2 className="mt-3 max-w-5xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
        ¿Y si no soy suficientemente buena?
      </h2>
      <p className="mt-4 text-xl text-white/80 sm:text-2xl">¿Alguna vez has pensado...?</p>
      <div className="mt-5 max-w-5xl rounded-[1.6rem] border border-pink/40 px-5 py-4 sm:px-7">
        {THOUGHTS.map((thought, index) => {
          const on = picked.has(index)
          return (
            <motion.button
              key={thought}
              type="button"
              aria-pressed={on}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              onClick={() => toggle(index)}
              className="flex w-full items-center gap-4 py-2.5 text-left"
            >
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 ${
                  on ? 'border-amber bg-amber' : 'border-white/70'
                }`}
                aria-hidden="true"
              >
                {on && <span className="h-2.5 w-2.5 rounded-full bg-night" />}
              </span>
              <span className="text-lg leading-snug text-white sm:text-xl">{thought}</span>
            </motion.button>
          )
        })}
      </div>
      <div className="mt-6 flex max-w-5xl items-end justify-between gap-6">
        <div>
          <p className="font-display text-2xl font-bold text-amber sm:text-3xl">No eres la única.</p>
          <p className="mt-2 max-w-xl text-lg leading-snug text-white/85 sm:text-xl">
            Toda persona que aprende algo nuevo comienza sin saberlo todo.
          </p>
        </div>
        <LittleCaterpillar />
      </div>
    </div>
  )
}

function LittleCaterpillar() {
  return (
    <div className="hidden h-36 w-44 shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-[#102418] sm:block">
      <svg viewBox="0 0 220 160" className="h-full w-full" role="img" aria-label="Oruga morada sobre una hoja">
        <ellipse cx="150" cy="132" rx="78" ry="18" fill="#166534" opacity="0.45" />
        <path d="M8 126C70 108 130 118 214 96" fill="none" stroke="#22C55E" strokeWidth="7" strokeLinecap="round" />
        <ellipse cx="62" cy="104" rx="20" ry="15" fill="#6D28D9" />
        <ellipse cx="96" cy="96" rx="22" ry="16" fill="#7C3AED" />
        <ellipse cx="130" cy="88" rx="24" ry="18" fill="#A855F7" />
        <ellipse cx="162" cy="76" rx="28" ry="22" fill="#C084FC" />
        <path d="M168 58C166 40 176 34 174 22" fill="none" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" />
        <path d="M182 56C188 38 198 32 202 20" fill="none" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" />
        <circle cx="172" cy="20" r="3" fill="#FACC15" />
        <circle cx="204" cy="18" r="3" fill="#FACC15" />
        <circle cx="170" cy="70" r="6" fill="white" />
        <circle cx="186" cy="68" r="6" fill="white" />
        <circle cx="172" cy="71" r="2.4" fill="#1A1024" />
        <circle cx="188" cy="69" r="2.4" fill="#1A1024" />
      </svg>
    </div>
  )
}
