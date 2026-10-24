'use client'

import { QRCodeSVG } from 'qrcode.react'
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

const LINKEDIN = 'https://www.linkedin.com/in/lissyamadorsazo'

const LINKS = [
  {
    href: 'mailto:lissyamadorsazo@gmail.com',
    label: 'lissyamadorsazo@gmail.com',
    hint: 'Correo',
    icon: Mail,
  },
  {
    href: 'https://www.linkedin.com/in/lissyamadorsazo',
    label: 'LinkedIn',
    hint: 'Lissy Amador Sazo',
    icon: Linkedin,
  },
  {
    href: 'https://www.facebook.com/edukidsgt',
    label: 'Facebook',
    hint: 'EduKids',
    icon: Facebook,
  },
  {
    href: 'https://www.instagram.com/edukids_gt',
    label: 'Instagram',
    hint: '@edukids_gt',
    icon: Instagram,
  },
]

export function ContactSlide() {
  return (
    <div className="grid h-full w-full items-center gap-8 px-8 pb-24 pt-8 md:px-14 lg:grid-cols-3">
      <img
        src="/portraits/lissy-amador.jpg"
        alt="Lissy Amador"
        className="mx-auto h-[34vh] w-full max-w-sm rounded-[1.6rem] object-cover object-top lg:h-[58vh] lg:max-w-none"
      />
      <div className="lg:col-span-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">Seguimos en contacto</p>
        <h2 className="mt-3 font-display text-5xl font-bold text-white sm:text-6xl">Contáctame</h2>
        <div className="mt-4 flex items-center gap-5">
          <p className="text-xl text-pink sm:text-2xl">Lissy Amador · EduKids</p>
          <img src="/portraits/edukids.png" alt="Logo de EduKids" className="h-[min(26vh,210px)] w-auto shrink-0" />
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <ul className="grid min-w-[16rem] flex-1 gap-3 sm:grid-cols-2">
            {LINKS.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex h-full items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 hover:border-amber/60"
                  >
                    <Icon className="shrink-0 text-amber" size={26} aria-hidden="true" />
                    <span>
                      <span className="block text-sm font-semibold uppercase tracking-wide text-white/60">{item.hint}</span>
                      <span className="block text-lg font-semibold text-white">{item.label}</span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
          <a
            href={LINKEDIN}
            className="mx-auto flex shrink-0 flex-col items-center rounded-[1.4rem] bg-white p-3 text-night"
          >
            <QRCodeSVG value={LINKEDIN} size={168} bgColor="#ffffff" fgColor="#0D0714" level="M" />
            <span className="mt-2 flex items-center gap-2 text-base font-bold">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
