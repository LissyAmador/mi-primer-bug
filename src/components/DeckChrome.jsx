import { useEffect, useState } from 'react'

const TOTAL = 35 * 60

export function DeckChrome({
  slides,
  index,
  setIndex,
  notesOpen,
  setNotesOpen,
  indexOpen,
  setIndexOpen,
  remaining,
  running,
  onToggleTimer,
  onResetTimer,
  children,
}) {
  const slide = slides[index]

  useEffect(() => {
    const node = document.getElementById('deck-scroller')
    node?.scrollTo({ top: 0, behavior: 'auto' })
  }, [index])

  function go(next) {
    setIndex(Math.min(slides.length - 1, Math.max(0, next)))
    setIndexOpen(false)
  }

  return (
    <div className="relative h-dvh text-champagne">
      <Atmosphere />
      <div className="relative z-10 flex h-full flex-col">
        <div className="h-1 bg-white/5">
          <div className="h-full bg-gold transition-all" style={{ width: `${((index + 1) / slides.length) * 100}%` }} />
        </div>
        <main id="deck-scroller" className="min-h-0 flex-1 overflow-y-auto">
          {children}
        </main>
        {notesOpen && <Notes slide={slide} />}
        <footer className="shrink-0 overflow-x-auto border-t border-gold/25 bg-ink/85 backdrop-blur-md">
          <div className="flex min-w-max items-center gap-2 px-3 py-2 sm:px-4">
          <IconButton label="Lámina anterior" onClick={() => go(index - 1)} disabled={index === 0}>
            <Chevron direction="left" />
          </IconButton>
          <p className="hidden min-w-0 flex-1 truncate text-sm sm:block">
            <span className="text-gold">{String(index + 1).padStart(2, '0')}</span>
            <span className="mx-2 text-muted">/</span>
            {slide.nav}
            <span className="ml-3 text-muted">{slide.when}</span>
          </p>
          <div className="flex flex-1 justify-center gap-1.5 sm:flex-none">
            {slides.map((item, itemIndex) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Ir a ${item.nav}`}
                aria-current={itemIndex === index ? 'true' : undefined}
                onClick={() => go(itemIndex)}
                className={`h-2.5 rounded-full transition ${itemIndex === index ? 'w-6 bg-gold' : 'w-2.5 bg-white/25 hover:bg-gold/70'}`}
              />
            ))}
          </div>
          <div className="ml-auto flex items-center gap-1.5 sm:ml-0">
            <TextButton
              onClick={() => {
                setIndexOpen((open) => !open)
                setNotesOpen(false)
              }}
            >
              Índice
            </TextButton>
            <TextButton
              pressed={notesOpen}
              onClick={() => {
                setNotesOpen((open) => !open)
                setIndexOpen(false)
              }}
            >
              Notas
            </TextButton>
            <button
              type="button"
              onClick={onToggleTimer}
              className={`shrink-0 rounded-full border px-3 py-2 text-sm ${
                remaining <= 5 * 60 && running ? 'border-rose text-rose' : 'border-gold/40 text-gold'
              }`}
              aria-label={running ? 'Pausar temporizador' : 'Iniciar temporizador de 35 minutos'}
            >
              {formatTime(remaining)}
            </button>
            {remaining !== TOTAL && (
              <IconButton label="Reiniciar temporizador" onClick={onResetTimer}>
                <span className="text-xs">↺</span>
              </IconButton>
            )}
            <IconButton label="Lámina siguiente" onClick={() => go(index + 1)} disabled={index === slides.length - 1}>
              <Chevron direction="right" />
            </IconButton>
          </div>
          </div>
        </footer>
      </div>
      {indexOpen && (
        <IndexPanel
          slides={slides}
          index={index}
          onClose={() => setIndexOpen(false)}
          onJump={go}
        />
      )}
    </div>
  )
}

function Atmosphere() {
  const specks = [
    ['12%', '20%', '7s'],
    ['22%', '70%', '9s'],
    ['70%', '18%', '8s'],
    ['82%', '62%', '11s'],
    ['48%', '30%', '10s'],
    ['90%', '40%', '12s'],
    ['6%', '48%', '9s'],
    ['60%', '78%', '8s'],
  ]

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-violet/20 blur-3xl" />
      <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(243,230,191,0.18) 0.6px, transparent 0.7px)',
          backgroundSize: '5px 5px',
        }}
      />
      {specks.map(([left, top, duration]) => (
        <span
          key={`${left}-${top}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-gold"
          style={{ left, top, animation: `drift ${duration} ease-in-out infinite` }}
        />
      ))}
    </div>
  )
}

function Notes({ slide }) {
  return (
    <aside data-notes="true" className="max-h-[38vh] overflow-y-auto border-t border-gold/20 bg-[#1a0c28] px-5 py-4">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] tracking-[0.22em] text-gold">
          GUIÓN · {slide.section} · {slide.when}
        </p>
        <div className="mt-3 space-y-3">
          {slide.notes.map((block) => (
            <p key={block.text} className={block.type === 'cue' ? 'text-sm leading-relaxed text-gold' : 'text-base leading-relaxed text-champagne'}>
              {block.type === 'cue' && <span className="mr-2 text-[10px] tracking-[0.18em]">EN SALA</span>}
              {block.text}
            </p>
          ))}
        </div>
      </div>
    </aside>
  )
}

function IndexPanel({ slides, index, onClose, onJump }) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-ink/75 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-[1.6rem] border border-gold/30 bg-plum p-5"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-label="Recorrido del taller"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold">35 minutos</p>
            <h2 className="font-display text-3xl text-champagne">Recorrido</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-gold/30 px-3 py-1 text-sm text-gold">
            Cerrar
          </button>
        </div>
        <p className="mt-2 text-sm text-muted">5 prólogo · 7 metamorfosis · 14 chispa · 6 mapa · 3 vuelo</p>
        <ol className="mt-4 space-y-1">
          {slides.map((slide, slideIndex) => (
            <li key={slide.id}>
              <button
                type="button"
                onClick={() => onJump(slideIndex)}
                className={`flex w-full items-baseline gap-3 rounded-2xl px-3 py-2 text-left ${
                  slideIndex === index ? 'bg-gold/15 text-champagne' : 'hover:bg-white/5'
                }`}
              >
                <span className="w-8 text-sm text-gold">{String(slideIndex + 1).padStart(2, '0')}</span>
                <span className="flex-1">{slide.nav}</span>
                <span className="text-xs text-muted">{slide.when}</span>
              </button>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs leading-relaxed text-muted">Flechas para avanzar · N notas · T tiempo · I índice · 1 al 0 saltan de lámina</p>
      </div>
    </div>
  )
}

function TextButton({ children, onClick, pressed = false }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`inline-flex shrink-0 rounded-full border px-3 py-2 text-sm ${
        pressed ? 'border-gold bg-gold text-ink' : 'border-gold/35 text-champagne'
      }`}
    >
      {children}
    </button>
  )
}

function IconButton({ children, label, onClick, disabled = false }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/30 text-gold disabled:opacity-30"
    >
      {children}
    </button>
  )
}

function Chevron({ direction }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d={direction === 'left' ? 'M10 3L5 8l5 5' : 'M6 3l5 5-5 5'}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const rest = seconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(rest).padStart(2, '0')}`
}

export function useWorkshopTimer() {
  const [remaining, setRemaining] = useState(TOTAL)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return undefined
    const id = setInterval(() => {
      setRemaining((value) => {
        if (value <= 1) {
          setRunning(false)
          return 0
        }
        return value - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [running])

  return {
    remaining,
    running,
    toggle: () => setRunning((value) => !value),
    reset: () => {
      setRunning(false)
      setRemaining(TOTAL)
    },
  }
}
