'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GraduationCap, Hammer, School, Users } from 'lucide-react'

const ROUTES = [
  {
    id: 'bach',
    title: 'Bachillerato',
    icon: School,
    text: 'La curiosidad es más importante que el nombre de tu especialidad.',
    step: 'Si tu colegio no tiene computación, igual puedes empezar con un proyecto propio.',
  },
  {
    id: 'carrera',
    title: 'Carrera universitaria',
    icon: GraduationCap,
    text: 'Ingeniería en Sistemas, Diseño UX, QA, Datos... Hay un lugar para cada talento.',
    step: 'Programar es una herramienta, no el único destino. No tienes que encerrarte hoy.',
  },
  {
    id: 'proyectos',
    title: 'Tus primeros proyectos',
    icon: Hammer,
    text: 'Aprende construyendo pequeñas cosas reales, sin esperar a graduarte.',
    step: 'Una página, un horario automático o un juego de una pantalla ya cuentan.',
  },
  {
    id: 'comunidad',
    title: 'Comunidad',
    icon: Users,
    text: 'No camines sola; busca colectivos, mentores y eventos como Aurora STEAM GT.',
    step: 'Compartir incluso este primer bug es una forma de entrar.',
  },
]

export function RouteSlide() {
  const [active, setActive] = useState('bach')
  const selected = ROUTES.find((route) => route.id === active)

  return (
    <div className="flex h-full w-full flex-col justify-center px-8 pb-24 pt-8 md:px-14">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">12 a 18 años</p>
      <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Tu ruta STEAM</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {ROUTES.map((route) => {
          const Icon = route.icon
          const on = active === route.id
          return (
            <button
              key={route.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(route.id)}
              className={`rounded-[1.5rem] border p-4 text-left transition ${
                on ? 'border-amber bg-amber/15' : 'border-white/15 bg-white/5 hover:border-pink/50'
              }`}
            >
              <Icon className={on ? 'text-amber' : 'text-pink'} size={26} aria-hidden="true" />
              <span className="mt-3 block font-display text-2xl font-bold text-white">{route.title}</span>
              <span className="mt-2 block text-base leading-snug text-white/85">{route.text}</span>
            </button>
          )
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={selected.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="mt-4 rounded-2xl border border-neon/40 bg-neon/15 px-5 py-3 text-lg text-white"
        >
          {selected.step}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
