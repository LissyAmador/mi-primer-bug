'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const PEOPLE = [
  {
    id: 'hopper',
    name: 'Grace Hopper',
    role: 'Creó el término «bug» en software',
    photos: [{ src: '/portraits/grace-hopper.jpg', alt: 'Grace Hopper', position: 'object-[center_20%]' }],
    story:
      'Cuando trabajaba en la computadora Mark II en 1947, una polilla física se metió en un relé y detuvo todo el sistema. Grace no se rindió: retiró el insecto y acuñó el término «debugging».',
    message: 'Incluso la pionera de la programación moderna tuvo que enfrentarse literalmente a su primer bug para hacer historia.',
  },
  {
    id: 'guido',
    name: 'Guido van Rossum',
    role: 'Creador de Python',
    photos: [{ src: '/portraits/guido-van-rossum.jpg', alt: 'Guido van Rossum', position: 'object-[center_30%]' }],
    story:
      'Creó Python como un proyecto personal durante sus vacaciones de Navidad porque estaba frustrado con los lenguajes existentes. Al principio muchos no creían en su propuesta.',
    message: 'Las grandes herramientas que usamos hoy nacieron de alguien que solo quería resolver una frustración personal, sin saber que impactaría al planeta.',
  },
]

export function PioneersSlide() {
  const [active, setActive] = useState(0)
  const person = PEOPLE[active]

  return (
    <div className="flex h-full w-full flex-col px-8 pb-24 pt-6 md:px-14">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">También empezaron con dudas</p>
      <h2 className="mt-2 max-w-5xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
        Personajes célebres que también sintieron miedo o fallaron al inicio
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {PEOPLE.map((item, index) => {
          const on = index === active
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(index)}
              className={`rounded-full border px-4 py-2 text-left text-base font-semibold ${
                on ? 'border-amber bg-amber text-night' : 'border-white/20 text-white'
              }`}
            >
              {item.name}
            </button>
          )
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={person.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="mt-4 grid min-h-0 flex-1 gap-6 overflow-hidden lg:grid-cols-3"
        >
          <div className={`grid h-full min-h-0 gap-3 overflow-hidden ${person.photos.length > 1 ? 'grid-cols-2 lg:grid-cols-1' : ''}`}>
            {person.photos.map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className={`h-full min-h-0 w-full rounded-[1.6rem] object-cover ${photo.position}`}
              />
            ))}
          </div>
          <div className="flex flex-col justify-center lg:col-span-2">
            <p className="font-display text-3xl font-bold text-white sm:text-4xl">{person.name}</p>
            <p className="mt-1 text-lg text-pink sm:text-xl">{person.role}</p>
            <p className="mt-4 text-xl leading-snug text-white sm:text-2xl">{person.story}</p>
            <p className="mt-4 rounded-2xl border border-amber/40 bg-amber/10 px-5 py-3 text-xl font-medium leading-snug text-amber sm:text-2xl">
              {person.message}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <p className="mt-3 text-xs text-white/45">
        Fotos: James S. Davis, Marina de EE. UU. (dominio público); Daniel Stroud (CC BY-SA 4.0).
      </p>
    </div>
  )
}
