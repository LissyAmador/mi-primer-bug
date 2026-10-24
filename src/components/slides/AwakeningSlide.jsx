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
        <img
          src="/portraits/oruga-morada.png?v=3"
          alt="Oruga morada"
          className="h-[min(36vh,420px)] w-auto max-w-[42vw] shrink-0 rounded-[1.6rem] object-contain"
        />
      </div>
    </div>
  )
}
