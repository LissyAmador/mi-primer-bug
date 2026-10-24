'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react'
import { HeroSlide } from './slides/HeroSlide'
import { MythSlide } from './slides/MythSlide'
import { PioneersSlide } from './slides/PioneersSlide'
import { AwakeningSlide } from './slides/AwakeningSlide'
import { MetamorphosisSlide } from './slides/MetamorphosisSlide'
import { SimulatorSlide } from './slides/SimulatorSlide'
import { RouteSlide } from './slides/RouteSlide'
import { CloseSlide } from './slides/CloseSlide'
import { FeedbackSlide } from './slides/FeedbackSlide'

const SLIDES = [
  { id: 'hero', Component: HeroSlide },
  { id: 'mito', Component: MythSlide },
  { id: 'referentes', Component: PioneersSlide },
  { id: 'despertar', Component: AwakeningSlide },
  { id: 'metamorfosis', Component: MetamorphosisSlide },
  { id: 'simulador', Component: SimulatorSlide },
  { id: 'ruta', Component: RouteSlide },
  { id: 'cierre', Component: CloseSlide },
  { id: 'opinion', Component: FeedbackSlide },
]

export function Deck() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [fullscreen, setFullscreen] = useState(false)
  const indexRef = useRef(0)
  const Current = SLIDES[index].Component

  const go = useCallback((nextIndex) => {
    const target = Math.max(0, Math.min(SLIDES.length - 1, nextIndex))
    setDirection(target >= indexRef.current ? 1 : -1)
    indexRef.current = target
    setIndex(target)
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return
      const tag = event.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        event.preventDefault()
        go(indexRef.current + 1)
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault()
        go(indexRef.current - 1)
      } else if (event.key === ' ' && tag !== 'BUTTON') {
        event.preventDefault()
        go(indexRef.current + 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch {
      // El navegador puede negar la pantalla completa si la página está embebida.
    }
  }

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-night">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-24 -top-24 h-[36rem] w-[36rem] rounded-full bg-neon/25 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-[28rem] w-[28rem] rounded-full bg-pink/20 blur-3xl" />
      </div>
      <div className="absolute inset-x-0 top-0 z-20 h-1 bg-white/10">
        <div className="h-full bg-amber transition-all" style={{ width: `${((index + 1) / SLIDES.length) * 100}%` }} />
      </div>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.section
          key={SLIDES[index].id}
          custom={direction}
          initial={{ opacity: 0, x: direction * 48 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -48 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Current />
        </motion.section>
      </AnimatePresence>
      <nav className="absolute inset-x-0 bottom-4 z-20 flex justify-center px-4" aria-label="Controles de la presentación">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-2 py-2 backdrop-blur-md">
          <NavButton label="Lámina anterior" onClick={() => go(index - 1)} disabled={index === 0}>
            <ChevronLeft size={20} />
          </NavButton>
          <p className="min-w-16 text-center text-sm font-semibold tabular-nums text-white">
            {String(index + 1).padStart(2, '0')}
            <span className="text-white/50"> / {String(SLIDES.length).padStart(2, '0')}</span>
          </p>
          <NavButton label="Lámina siguiente" onClick={() => go(index + 1)} disabled={index === SLIDES.length - 1}>
            <ChevronRight size={20} />
          </NavButton>
          <NavButton label={fullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'} onClick={toggleFullscreen}>
            {fullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </NavButton>
        </div>
      </nav>
    </main>
  )
}

function NavButton({ children, label, onClick, disabled = false }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="grid h-11 w-11 place-items-center rounded-full text-amber disabled:opacity-30"
    >
      {children}
    </button>
  )
}
