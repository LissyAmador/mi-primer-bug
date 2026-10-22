'use client'

import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

const GUIDE_URL = 'https://mi-primer-bug.vercel.app'

const CONFETTI = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${4 + ((index * 13) % 92)}%`,
  delay: (index % 8) * 0.12,
  duration: 2.4 + (index % 5) * 0.35,
  color: index % 3 === 0 ? '#FACC15' : index % 3 === 1 ? '#F59E0B' : '#EC4899',
  rotate: (index * 24) % 80 - 40,
}))

export function CloseSlide() {
  const [celebrating, setCelebrating] = useState(false)

  return (
    <div className="relative flex h-full w-full items-center justify-center px-8 pb-24 pt-8">
      {celebrating && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 40%, rgba(250,204,21,0.55), transparent 62%)',
              animation: 'light-pulse 2.2s ease-in-out infinite',
            }}
          />
          {CONFETTI.map((piece) => (
            <span
              key={piece.id}
              className="absolute top-0 h-3 w-2 rounded-sm"
              style={{
                left: piece.left,
                background: piece.color,
                '--confetti-rot': `${piece.rotate}deg`,
                animation: `confetti-fall ${piece.duration}s linear ${piece.delay}s infinite`,
              }}
            />
          ))}
        </div>
      )}
      <div className="relative grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">El vuelo colectivo</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            No necesitas ser perfecta para crear. Encendiste esta luz hoy; no dejes que nadie la apague.
          </h2>
          <button
            type="button"
            onClick={() => setCelebrating((value) => !value)}
            className="mt-8 rounded-full bg-amber px-6 py-3 text-base font-bold text-night"
          >
            {celebrating ? 'Bajar las luces' : 'Celebrar la luz'}
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-3xl bg-white p-4">
            <QRCodeSVG value={GUIDE_URL} size={188} bgColor="#ffffff" fgColor="#0D0714" level="M" />
          </div>
          <p className="mt-3 text-center text-base font-medium text-white">Escanea y llévate la guía</p>
          <p className="text-center text-sm text-amber">mi-primer-bug.vercel.app</p>
        </div>
      </div>
    </div>
  )
}
