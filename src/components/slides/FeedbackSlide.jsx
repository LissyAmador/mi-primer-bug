'use client'

import { QRCodeSVG } from 'qrcode.react'

const FORM_URL = 'https://forms.gle/hncgCc6eRUcQjztL6'

export function FeedbackSlide() {
  return (
    <div className="grid h-full w-full items-center gap-8 px-8 pb-24 pt-8 md:px-14 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">Antes de irte</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
          Dame tu opinión sobre la charla
        </h2>
        <p className="mt-5 max-w-xl text-xl leading-snug text-white/80 sm:text-2xl">
          El formulario toma menos de dos minutos. Escanea el código con tu teléfono.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-[2rem] bg-white p-5">
          <QRCodeSVG value={FORM_URL} size={320} bgColor="#ffffff" fgColor="#0D0714" level="M" />
        </div>
        <p className="mt-4 text-center text-lg font-medium text-white">Escanea y cuéntame qué te pareció</p>
        <a href={FORM_URL} className="mt-1 text-center text-base text-amber underline-offset-4 hover:underline">
          forms.gle/hncgCc6eRUcQjztL6
        </a>
      </div>
    </div>
  )
}
