'use client'

import { GlowButterfly } from '../GlowButterfly'

const SPECKS = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: `${6 + ((index * 19) % 88)}%`,
  top: `${8 + ((index * 27) % 78)}%`,
  size: 3 + (index % 4),
  delay: index * 0.18,
  duration: 3.2 + (index % 4) * 0.55,
  color: index % 3 === 0 ? '#FACC15' : index % 3 === 1 ? '#EC4899' : '#A855F7',
}))

export function HeroSlide() {
  return (
    <div className="grid h-full w-full items-center gap-6 px-8 pb-24 pt-8 md:px-14 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="relative z-10">
        <p className="inline-flex rounded-full border border-pink/50 bg-pink/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-amber">
          Aurora STEAM GT • CCE Guatemala
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-balance text-5xl font-bold leading-[0.92] text-white sm:text-6xl">
          Superando tu primer <span className="text-glow text-amber">Bug</span>
          <span className="mt-2 block">y descubriendo tu propio camino.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg font-medium leading-snug text-white/70 sm:text-xl">
          De la duda a la luz: tu metamorfosis en la tecnología
        </p>
        <p className="mt-6 text-lg font-medium tracking-wide text-pink">Lissy Amador</p>
      </div>
      <div className="relative mx-auto h-[min(52vh,420px)] w-full max-w-lg">
        {SPECKS.map((speck) => (
          <span
            key={speck.id}
            className="absolute rounded-full"
            style={{
              left: speck.left,
              top: speck.top,
              width: speck.size,
              height: speck.size,
              background: speck.color,
              animation: `speck-float ${speck.duration}s ease-in-out ${speck.delay}s infinite`,
            }}
          />
        ))}
        <div className="absolute inset-8 rounded-full bg-neon/30 blur-3xl" />
        <GlowButterfly lit className="relative h-full w-full" />
      </div>
    </div>
  )
}
