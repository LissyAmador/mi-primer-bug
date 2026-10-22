import { useEffect, useState } from 'react'
import { DeckChrome, useWorkshopTimer } from './components/DeckChrome'
import { slides } from './slides/deck'

export default function App() {
  const [index, setIndex] = useState(0)
  const [notesOpen, setNotesOpen] = useState(false)
  const [indexOpen, setIndexOpen] = useState(false)
  const timer = useWorkshopTimer()
  const Current = slides[index].Component

  function jumpTo(id) {
    const next = slides.findIndex((slide) => slide.id === id)
    if (next >= 0) setIndex(next)
  }

  useEffect(() => {
    const onKey = (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return
      const tag = event.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || event.target?.isContentEditable) return

      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        event.preventDefault()
        setIndex((value) => Math.min(slides.length - 1, value + 1))
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault()
        setIndex((value) => Math.max(0, value - 1))
      } else if (event.key === 'Home') {
        setIndex(0)
      } else if (event.key === 'End') {
        setIndex(slides.length - 1)
      } else if (event.key === 'Escape') {
        setNotesOpen(false)
        setIndexOpen(false)
      } else if (event.key === 'n' || event.key === 'N') {
        setNotesOpen((open) => !open)
        setIndexOpen(false)
      } else if (event.key === 't' || event.key === 'T') {
        timer.toggle()
      } else if (event.key === 'i' || event.key === 'I') {
        setIndexOpen((open) => !open)
        setNotesOpen(false)
      } else if (/^[0-9]$/.test(event.key)) {
        const next = event.key === '0' ? 9 : Number(event.key) - 1
        if (next >= 0 && next < slides.length) setIndex(next)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [timer])

  return (
    <DeckChrome
      slides={slides}
      index={index}
      setIndex={setIndex}
      notesOpen={notesOpen}
      setNotesOpen={setNotesOpen}
      indexOpen={indexOpen}
      setIndexOpen={setIndexOpen}
      remaining={timer.remaining}
      running={timer.running}
      onToggleTimer={timer.toggle}
      onResetTimer={timer.reset}
    >
      <div key={slides[index].id} className="slide-in min-h-full">
        <h1 className="sr-only">{slides[index].nav}</h1>
        <Current onJump={jumpTo} />
      </div>
    </DeckChrome>
  )
}
