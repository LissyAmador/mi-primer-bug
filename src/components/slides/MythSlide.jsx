'use client'

import { motion } from 'framer-motion'
import { Clapperboard, Sparkles } from 'lucide-react'

const CARDS = [
  {
    kicker: 'Mito · La película',
    text: 'Programar es escribir código perfecto en pantallas oscuras a mil por hora sin equivocarse jamás.',
    icon: Clapperboard,
    className: 'border-pink/50 bg-pink/10',
    iconClass: 'text-pink',
  },
  {
    kicker: 'Realidad · La verdad',
    text: 'Programar es resolver acertijos, buscar respuestas, probar, equivocarse y aprender continuamente.',
    icon: Sparkles,
    className: 'border-amber/60 bg-amber/10',
    iconClass: 'text-amber',
  },
]

export function MythSlide() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-8 pb-24 pt-8 md:px-14">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">El mito y la realidad</p>
      <h2 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
        La tecnología no es una película.
      </h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {CARDS.map((card, index) => {
          const Icon = card.icon
          return (
            <motion.article
              key={card.kicker}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              className={`rounded-[1.8rem] border p-6 sm:p-8 ${card.className}`}
            >
              <div className="flex items-center gap-3">
                <Icon className={card.iconClass} size={28} aria-hidden="true" />
                <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${card.iconClass}`}>{card.kicker}</p>
              </div>
              <p className="mt-5 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">{card.text}</p>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}
