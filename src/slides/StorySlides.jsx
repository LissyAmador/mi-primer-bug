import { useMemo, useState } from 'react'
import { Butterfly, Caterpillar } from '../components/Creatures'

export function HeroSlide({ onJump }) {
  return (
    <section className="mx-auto grid min-h-full w-full max-w-6xl items-center gap-8 px-5 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-gold">Aurora STEAM GT</p>
        <p className="mt-3 text-sm text-muted">Taller vivo · 35 minutos · chicas de 12 a 18 años</p>
        <h1 className="mt-5 font-display text-balance text-5xl leading-[0.95] text-champagne sm:text-6xl lg:text-7xl">
          Mi primer <span className="text-foil italic">Bug</span>
          <span className="mt-3 block text-3xl font-medium sm:text-4xl lg:text-5xl">y descubriendo tu propio camino</span>
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
          Hoy una luz apagada no es un fracaso. Es el inicio de una metamorfosis: crear un error, resolverlo y salir con un mapa propio.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => onJump?.('mito')}
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-champagne"
          >
            Comenzar el taller
          </button>
          <div className="flex flex-wrap gap-3 text-sm text-gold">
            <Jump onClick={() => onJump?.('metamorfosis')}>Metamorfosis</Jump>
            <Jump onClick={() => onJump?.('simulador')}>Simulador</Jump>
            <Jump onClick={() => onJump?.('mapa')}>Mapa</Jump>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-8 rounded-full bg-violet/20 blur-3xl" />
        <Butterfly className="relative mx-auto w-full max-w-md" />
        <p className="text-center text-sm tracking-wide text-gold">LED apagado. Por ahora.</p>
      </div>
    </section>
  )
}

function Jump({ children, onClick }) {
  return (
    <button type="button" onClick={onClick} className="underline decoration-gold/40 underline-offset-4 hover:decoration-gold">
      {children}
    </button>
  )
}

const RAIN = ['BUG 01', '010010', 'ERROR', 'NULL', 'GENIO', '101101', 'MATRIX', 'ENTER?']

export function MythSlide() {
  const [movie, setMovie] = useState(true)

  return (
    <section className="relative min-h-full overflow-hidden">
      {movie && (
        <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden="true">
          {RAIN.map((word, index) => (
            <span
              key={word}
              className="absolute top-0 font-mono text-sm leading-6 text-emerald-300/80"
              style={{
                left: `${8 + index * 12}%`,
                animation: `rain ${7 + (index % 4)}s linear ${index * 0.4}s infinite`,
              }}
            >
              {Array.from({ length: 18 }, (_, line) => (
                <span key={line} className="block">
                  {word}
                </span>
              ))}
            </span>
          ))}
        </div>
      )}
      <div className="relative mx-auto flex min-h-full max-w-4xl flex-col justify-center px-6 py-10">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">El prólogo · minuto 1</p>
        {movie ? (
          <>
            <h2 className="mt-4 max-w-3xl font-display text-balance text-4xl leading-tight text-champagne sm:text-6xl">
              Nos vendieron un genio que nunca se equivoca.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-champagne/90">
              Habitación a oscuras. Letras verdes. Alguien escribiendo a mil por hora, sin dudar ni un segundo.
            </p>
            <button
              type="button"
              onClick={() => setMovie(false)}
              className="mt-8 w-fit rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-champagne"
            >
              Quitar la película
            </button>
          </>
        ) : (
          <>
            <h2 className="mt-4 font-display text-balance text-4xl leading-tight text-champagne sm:text-6xl">
              Eso es una película.
            </h2>
            <ul className="mt-6 space-y-3 text-lg text-champagne">
              <li>Nadie nace sabiendo programar.</li>
              <li>Equivocarse es parte del oficio, no una prueba de que no perteneces.</li>
              <li>La tecnología real se parece más a esta sala que a una pantalla de cine.</li>
            </ul>
            <button type="button" onClick={() => setMovie(true)} className="mt-8 w-fit text-sm text-gold underline-offset-4 hover:underline">
              Volver a ver el mito
            </button>
          </>
        )}
      </div>
    </section>
  )
}

const VOICES = [
  { title: 'Miedo de Enter', text: 'La tecla se siente enorme cuando crees que un clic puede arruinarlo todo.' },
  { title: 'Miedo de romper algo', text: 'Casi nunca se rompe. Y cuando algo falla, suele tener arreglo.' },
  { title: '«¿Y si no soy suficiente?»', text: 'Esa pregunta tiene nombre. No es un veredicto.' },
]

export function ImpostorSlide() {
  const [named, setNamed] = useState(false)

  return (
    <section className={`min-h-full transition ${named ? '' : 'bg-black/35'}`}>
      <div className="mx-auto grid min-h-full max-w-6xl items-center gap-8 px-5 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div className={`mx-auto w-full max-w-sm rounded-full border border-gold/20 p-6 ${named ? 'opacity-100' : 'opacity-60'}`}>
          <Caterpillar className="w-full" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">El prólogo · minuto 4</p>
          <blockquote className="mt-4 font-display text-balance text-3xl italic leading-tight text-champagne sm:text-5xl">
            «¿Y si no soy lo suficientemente inteligente para esto?»
          </blockquote>
          {!named ? (
            <button
              type="button"
              onClick={() => setNamed(true)}
              className="mt-8 rounded-full border border-gold px-6 py-3 text-sm text-gold hover:bg-gold hover:text-ink"
            >
              Ponerle nombre a esa voz
            </button>
          ) : (
            <div className="slide-in mt-6">
              <p className="text-sm uppercase tracking-[0.22em] text-gold">Síndrome del impostor</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {VOICES.map((voice) => (
                  <article key={voice.title} className="rounded-2xl border border-gold/25 bg-plum/60 p-4">
                    <h3 className="font-display text-xl text-champagne">{voice.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{voice.text}</p>
                  </article>
                ))}
              </div>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-champagne">
                Ser nueva no es ser impostora. Es ser oruga. Más de una persona en esta sala ha escuchado esa voz, y nadie tiene que cruzarla sola.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

const CONTRAST = [
  { place: 'En el colegio', text: 'Equivocarse se siente como un cero o como fallar el examen.' },
  { place: 'En tecnología', text: 'Equivocarte es el momento en que el acertijo por fin se deja ver.' },
]

export function BugSlide() {
  return (
    <section className="mx-auto flex min-h-full max-w-5xl flex-col justify-center px-5 py-8 lg:px-10">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">El nudo · minuto 10</p>
      <h2 className="mt-2 font-display text-[clamp(4.5rem,14vw,9rem)] leading-none text-foil">bug</h2>
      <p className="max-w-2xl text-pretty text-xl leading-relaxed text-champagne">
        No es una puerta cerrada. Es la crisálida: la fricción donde tu cerebro busca la otra salida.
      </p>
      <div className="mt-6 flex flex-wrap gap-3 text-sm uppercase tracking-[0.2em] text-gold">
        <span>Fricción</span>
        <span aria-hidden="true">·</span>
        <span>Acertijo</span>
        <span aria-hidden="true">·</span>
        <span>Crisálida</span>
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {CONTRAST.map((item) => (
          <article key={item.place} className="rounded-3xl border border-gold/25 bg-plum/50 p-5">
            <h3 className="font-display text-2xl text-gold">{item.place}</h3>
            <p className="mt-2 text-base leading-relaxed text-champagne">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function KitSlide() {
  return (
    <section className="mx-auto flex min-h-full max-w-5xl flex-col justify-center px-5 py-8 lg:px-10">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">Paso 1 · minuto 12</p>
      <h2 className="mt-3 max-w-3xl font-display text-balance text-4xl leading-tight text-champagne sm:text-6xl">
        Enciendan la luz. Toquen la pila con las dos patitas del LED.
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Si no enciende a la primera, quédense con esa sensación. La vamos a nombrar.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <KitCard title="Pila CR2032" caption="3 voltios, del tamaño de una moneda.">
          <Coin />
        </KitCard>
        <KitCard title="LED" caption="La pequeña luz del circuito.">
          <LedIcon />
        </KitCard>
        <KitCard title="Limpiapipas" caption="Para el cuerpo, todavía no. Primero la chispa.">
          <PipeIcon />
        </KitCard>
      </div>
      <p className="mt-6 max-w-3xl rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm leading-relaxed text-champagne">
        Un cuidado breve: la pila no va a la boca y no se aprieta con otro metal. Solo con las patitas del LED.
      </p>
    </section>
  )
}

function KitCard({ title, caption, children }) {
  return (
    <article className="rounded-3xl border border-gold/25 bg-plum/40 p-4">
      <div className="grid h-28 place-items-center">{children}</div>
      <h3 className="font-display text-2xl text-champagne">{title}</h3>
      <p className="mt-1 text-sm text-muted">{caption}</p>
    </article>
  )
}

function Coin() {
  return (
    <svg viewBox="0 0 88 88" className="h-20 w-20" aria-hidden="true">
      <circle cx="44" cy="44" r="34" fill="#d7d2c8" stroke="#e4c36a" strokeWidth="3" />
      <circle cx="44" cy="44" r="24" fill="none" stroke="#9a7424" strokeWidth="1.5" />
      <text x="44" y="52" textAnchor="middle" fontSize="28" fontFamily="Fraunces Variable, Palatino, serif" fill="#100818">
        +
      </text>
    </svg>
  )
}

function LedIcon() {
  return (
    <svg viewBox="0 0 80 100" className="h-24 w-16" aria-hidden="true">
      <path d="M28 46C28 30 52 30 52 46V58H28Z" fill="#ffb703" stroke="#f7f1e1" />
      <rect x="30" y="58" width="20" height="8" fill="#d9cbb0" />
      <path d="M34 66V96" stroke="#e4c36a" strokeWidth="3" />
      <path d="M46 66V84" stroke="#d9cbb0" strokeWidth="3" />
    </svg>
  )
}

function PipeIcon() {
  return (
    <svg viewBox="0 0 120 70" className="h-16 w-28" aria-hidden="true">
      <path d="M10 40C30 10 50 10 60 36C70 62 90 62 110 28" fill="none" stroke="#e7a0b0" strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

const PATHS = [
  {
    id: 'robo',
    label: 'Robótica',
    text: 'Manos, sensores y cosas que se mueven en el mundo físico.',
    color: '#ffb703',
    d: 'M180 118C120 28 36 48 62 128C84 176 140 156 180 140',
  },
  {
    id: 'web',
    label: 'Desarrollo web',
    text: 'Páginas e ideas que otras personas pueden abrir y usar.',
    color: '#c4b5fd',
    d: 'M180 118C240 28 324 48 298 128C276 176 220 156 180 140',
  },
  {
    id: 'ia',
    label: 'Inteligencia artificial',
    text: 'Enseñar a una máquina a ayudar, con criterio humano delante.',
    color: '#e4c36a',
    d: 'M180 150C130 170 48 188 70 230C96 262 150 236 180 190',
  },
  {
    id: 'diseno',
    label: 'Diseño',
    text: 'Decidir cómo se ve, se siente y se entiende la tecnología.',
    color: '#e7a0b0',
    d: 'M180 150C230 170 312 188 290 230C264 262 210 236 180 190',
  },
]

export function ShapeSlide() {
  const [picked, setPicked] = useState([])
  const latest = PATHS.find((path) => path.id === picked.at(-1))
  const message = useMemo(() => shapeMessage(picked.length), [picked.length])

  function toggle(id) {
    setPicked((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
  }

  return (
    <section className="mx-auto grid min-h-full w-full max-w-6xl items-center gap-8 px-5 py-8 lg:grid-cols-2 lg:px-10">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">Paso 2 · minuto 19</p>
        <h2 className="mt-3 font-display text-balance text-4xl text-champagne sm:text-5xl">Cada doblez es un camino</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Con los limpiapipas abracen la pila y el LED. No hay una forma correcta de moldear su mariposa.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {PATHS.map((path) => {
            const on = picked.includes(path.id)
            return (
              <button
                key={path.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(path.id)}
                className="rounded-full px-4 py-2 text-sm"
                style={
                  on
                    ? { background: path.color, color: '#100818' }
                    : { border: '1px solid rgba(228,195,106,0.4)', color: '#f7f1e1' }
                }
              >
                {path.label}
              </button>
            )
          })}
        </div>
        <p className="mt-5 text-lg leading-relaxed text-champagne">{latest ? latest.text : message}</p>
        {latest && <p className="mt-2 text-sm text-gold">{message}</p>}
        {picked.length > 0 && (
          <button type="button" onClick={() => setPicked([])} className="mt-4 text-sm text-gold underline-offset-4 hover:underline">
            Soltar los dobleces
          </button>
        )}
      </div>
      <div className="rounded-[2rem] border border-gold/25 bg-plum/40 p-4">
        <svg viewBox="0 0 360 300" className="mx-auto w-full max-w-md" role="img" aria-label="Mariposa de limpiapipas">
          {PATHS.map((path) => {
            const on = picked.includes(path.id)
            return (
              <path
                key={path.id}
                d={path.d}
                fill="none"
                stroke={on ? path.color : 'rgba(228,195,106,0.35)'}
                strokeWidth={on ? 10 : 4}
                strokeLinecap="round"
                strokeDasharray={on ? undefined : '7 9'}
                className="cursor-pointer"
                onClick={() => toggle(path.id)}
              />
            )
          })}
          <path d="M180 96V214" stroke="#e4c36a" strokeWidth="7" strokeLinecap="round" />
          <circle cx="180" cy="78" r="12" fill="#ffb703" />
          <ellipse cx="180" cy="150" rx="26" ry="16" fill="#d7d2c8" stroke="#e4c36a" strokeWidth="2" />
          <text x="180" y="155" textAnchor="middle" fontSize="16" fontFamily="Fraunces Variable, Palatino, serif" fill="#100818">
            +
          </text>
        </svg>
      </div>
    </section>
  )
}

function shapeMessage(count) {
  if (count === 0) return 'Cada doblez puede ser un camino. Toca uno para sumarlo a tu mariposa.'
  if (count === 1) return 'Con un solo camino ya hay vuelo.'
  if (count < 4) return 'Varios caminos pueden convivir en la misma vida.'
  return 'Incluso todas a la vez: la tecnología real es mestiza.'
}

const LIGHTS = [
  { left: '8%', delay: '0s', duration: '9s', color: '#ffb703' },
  { left: '16%', delay: '1.2s', duration: '11s', color: '#ff4d6d' },
  { left: '24%', delay: '0.4s', duration: '10s', color: '#c4b5fd' },
  { left: '33%', delay: '2s', duration: '12s', color: '#5ee0a0' },
  { left: '42%', delay: '0.8s', duration: '9.5s', color: '#7cc4ff' },
  { left: '51%', delay: '1.6s', duration: '11.5s', color: '#e4c36a' },
  { left: '60%', delay: '0.2s', duration: '10.5s', color: '#e7a0b0' },
  { left: '69%', delay: '2.4s', duration: '12.5s', color: '#ffb703' },
  { left: '78%', delay: '1s', duration: '9.8s', color: '#c4b5fd' },
  { left: '87%', delay: '1.8s', duration: '11.2s', color: '#5ee0a0' },
  { left: '12%', delay: '3s', duration: '13s', color: '#7cc4ff' },
  { left: '72%', delay: '2.8s', duration: '10.8s', color: '#ff4d6d' },
]

export function FlightSlide() {
  const [raised, setRaised] = useState(false)

  return (
    <section className={`relative min-h-full overflow-hidden ${raised ? 'bg-black/40' : ''}`}>
      {raised &&
        LIGHTS.map((light) => (
          <span
            key={`${light.left}-${light.delay}`}
            className="pointer-events-none absolute bottom-0"
            style={{
              left: light.left,
              animation: `rise-light ${light.duration} linear ${light.delay} infinite`,
            }}
            aria-hidden="true"
          >
            <ButterflyDot color={light.color} />
          </span>
        ))}
      <div className="relative mx-auto flex min-h-full max-w-3xl flex-col items-center justify-center px-6 py-12 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">El vuelo · minuto 32</p>
        {!raised ? (
          <>
            <Butterfly lit className="mt-4 w-full max-w-xs" />
            <h2 className="mt-2 font-display text-balance text-4xl text-champagne sm:text-6xl">
              Pongan su mariposa o luciérnaga en alto.
            </h2>
            <button
              type="button"
              onClick={() => setRaised(true)}
              className="mt-8 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-champagne"
            >
              Encender el salón
            </button>
          </>
        ) : (
          <div className="slide-in">
            <h2 className="font-display text-balance text-4xl leading-tight text-champagne sm:text-5xl">
              No están fallando. Están cambiando la polaridad.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-champagne">
              Hace un rato había miedo de dar el primer paso. Hoy crearon su primer bug, lo resolvieron y le dieron forma a su propia luz.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
              No necesitan permiso para crear ni ser perfectas para entrar. Cuando duden del camino, miren esta luz y emprendan su propio vuelo.
            </p>
            <p className="mt-8 text-sm tracking-[0.22em] text-gold">AURORA STEAM GT · CCE ZONA 1</p>
            <button type="button" onClick={() => setRaised(false)} className="mt-6 text-sm text-muted underline-offset-4 hover:text-gold hover:underline">
              Volver a la invitación
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function ButterflyDot({ color }) {
  return (
    <svg width="28" height="22" viewBox="0 0 28 22" aria-hidden="true">
      <path d="M14 11C10 4 3 4 3 9s6 4 11 2c5 2 11-1 11-2s-7-5-11 2z" fill={color} opacity="0.9" />
      <circle cx="14" cy="11" r="1.4" fill="#fff6d6" />
    </svg>
  )
}
