'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const STEPS = [
  {
    id: 'fundamentos',
    number: '01',
    label: 'Fundamentos',
    title: 'No te cases con una sola tecnología',
    image: '/steps/paso-fundamentos.jpg',
    alt: 'Una brújula dorada en el centro y, alrededor, herramientas que se van apagando',
    text: 'Las herramientas cambian cada 6 meses. Los fundamentos de resolución de problemas duran para siempre.',
  },
  {
    id: 'proyectos',
    number: '02',
    label: 'Proyectos',
    title: 'Construye proyectos reales que te duelan',
    image: '/steps/paso-proyectos.jpg',
    alt: 'Una joven arma una lámpara que ilumina una casa de su comunidad',
    text: 'No hagas el clásico «Hola Mundo». Crea herramientas que resuelvan problemas de tu comunidad, automatiza cosas de tu día a día o colabora en repositorios abiertos.',
  },
  {
    id: 'comunidad',
    number: '03',
    label: 'Comunidad',
    title: 'Haz comunidad',
    image: '/steps/paso-comunidad.jpg',
    alt: 'Un grupo de jóvenes reunidas alrededor de una luz, con una laptop',
    text: 'El síndrome del impostor ataca más fuerte cuando estás solo frente a la pantalla. Rodéate de comunidades locales como Aurora STEAM GT, ve a meetups y comparte tus errores en público. Construir en comunidad acelera tu crecimiento ×10.',
  },
]

export function RouteSlide() {
  const [index, setIndex] = useState(0)
  const step = STEPS[index]

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8 pb-24 pt-6 text-center md:px-14">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber sm:text-base">
        Tu ruta · paso {step.number}
      </p>
      <div className="mt-4 w-full max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
            className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10"
          >
            <img
              src={step.image}
              alt={step.alt}
              className="h-[min(30vh,240px)] w-auto shrink-0 rounded-[1.4rem] object-contain lg:h-[min(46vh,340px)]"
            />
            <div className="min-w-0">
              <h2 className="text-balance font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {step.title}
              </h2>
              <p className="mt-4 text-pretty text-2xl font-medium leading-snug text-white sm:text-3xl">
                {step.text}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        {STEPS.map((item, itemIndex) => {
          const on = itemIndex === index
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={on}
              onClick={() => setIndex(itemIndex)}
              className={`rounded-full px-6 py-3 text-lg font-bold ${
                on ? 'bg-amber text-night' : 'border border-white/25 text-white'
              }`}
            >
              {item.number} {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
