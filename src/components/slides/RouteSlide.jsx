'use client'

import { motion } from 'framer-motion'
import { Compass, Hammer, Users } from 'lucide-react'

const STEPS = [
  {
    id: 'fundamentos',
    number: '01',
    title: 'No te cases con una sola tecnología',
    icon: Compass,
    text: 'Las herramientas cambian cada 6 meses. Los fundamentos de resolución de problemas duran para siempre.',
  },
  {
    id: 'proyectos',
    number: '02',
    title: 'Construye proyectos reales que te duelan',
    icon: Hammer,
    text: 'No hagas el clásico «Hola Mundo». Crea herramientas que resuelvan problemas de tu comunidad, automatiza cosas de tu día a día o colabora en repositorios abiertos.',
  },
  {
    id: 'comunidad',
    number: '03',
    title: 'Haz comunidad',
    icon: Users,
    text: 'El síndrome del impostor ataca más fuerte cuando estás solo frente a la pantalla. Rodéate de comunidades locales como Aurora STEAM GT, ve a meetups y comparte tus errores en público. Construir en comunidad acelera tu crecimiento ×10.',
  },
]

export function RouteSlide() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-8 pb-24 pt-8 md:px-14">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">Tu ruta</p>
      <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Primeros pasos</h2>
      <div className="mt-6 grid min-h-0 gap-4 lg:grid-cols-3">
        {STEPS.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col rounded-[1.6rem] border border-white/15 bg-white/5 p-5"
            >
              <div className="flex items-center justify-between">
                <Icon className="text-pink" size={28} aria-hidden="true" />
                <span className="font-display text-sm font-bold tracking-[0.2em] text-amber">{step.number}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white">{step.title}</h3>
              <p className="mt-3 text-base leading-snug text-white/85 sm:text-lg">{step.text}</p>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}
