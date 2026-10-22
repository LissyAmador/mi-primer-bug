import { useState } from 'react'

const AGES = [
  {
    id: 'media',
    label: 'Tengo 12–15',
    note: 'Tu palanca ahora es el bachillerato y los proyectos pequeños. La carrera puede esperar.',
    focus: ['bach'],
  },
  {
    id: 'pre',
    label: 'Tengo 16–18',
    note: 'Puedes mirar carreras sin encerrarte. Un proyecto propio pesa más que el nombre perfecto.',
    focus: ['uni', 'proyectos'],
  },
  {
    id: 'ya',
    label: 'Ya estoy creando',
    note: 'Sigue por proyectos y comunidad. El mapa se ajusta mientras caminas.',
    focus: ['proyectos', 'comunidad'],
  },
]

const CAREERS = [
  {
    id: 'sistemas',
    title: 'Sistemas o Computación',
    fit: 'Te gusta entender cómo se construye el software por dentro: lógica, estructuras y arquitectura.',
  },
  {
    id: 'ux',
    title: 'Diseño UX/UI',
    fit: 'Te importa que las personas entiendan y disfruten lo que usan.',
  },
  {
    id: 'qa',
    title: 'Calidad de software',
    fit: 'Te divierte cazar el detalle que falla y cuidarlo antes de que llegue a alguien más.',
  },
  {
    id: 'datos',
    title: 'Ciencia de datos',
    fit: 'Te llaman los patrones, las preguntas y lo que los números esconden.',
  },
  {
    id: 'edu',
    title: 'Educación tecnológica',
    fit: 'Quieres que otras chicas también enciendan su luz.',
  },
  {
    id: 'gestion',
    title: 'Gestión de proyectos',
    fit: 'Te gusta ordenar ideas, tiempos y equipos para que un proyecto sí suceda.',
  },
]

const PROJECTS = [
  { id: 'auto', label: 'Automatizar una tarea pequeña: un horario, una lista, un recordatorio.' },
  { id: 'web', label: 'Una página para algo real: la familia, la clase o un club.' },
  { id: 'juego', label: 'Un juego de una sola pantalla, terminado aunque sea sencillo.' },
]

const ACTIONS = [
  { id: 'taller', label: 'Venir a un taller', detail: 'Un sábado en Aurora alcanza para perderle el miedo al primer paso.' },
  { id: 'mentora', label: 'Buscar una mentora', detail: 'Alguien que ya pasó por la duda puede acompañarte sin hacer el camino por ti.' },
  { id: 'compartir', label: 'Compartir tu primer bug', detail: 'Contar el LED que no encendió también es entrar a la comunidad.' },
]

const NODES = [
  {
    id: 'bach',
    index: '01',
    title: 'Bachillerato',
    when: '12 a 15 años',
    myth: 'Si no estudio Bachillerato en Computación, no voy a poder programar.',
    reality:
      'Cualquier bachillerato sirve si la curiosidad sigue despierta. Si tu colegio no tiene la especialidad, no estás fuera: la tecnología se aprende haciendo proyectos propios.',
    step: 'Esta semana elige una curiosidad concreta y dale 20 minutos. Un video, un LED, una página. Eso ya cuenta como inicio.',
  },
  {
    id: 'uni',
    index: '02',
    title: 'Carrera',
    when: '16 a 18 años',
    myth: 'La única carrera que vale es Ingeniería en Sistemas.',
    reality:
      'Programar es una herramienta, no el único destino. La tecnología también necesita diseño, datos, educación, calidad y coordinación.',
    step: 'Elige una ruta para ver si se parece a ti. No para encerrarte hoy.',
  },
  {
    id: 'proyectos',
    index: '03',
    title: 'Proyectos',
    when: 'Cuando quieras',
    myth: 'Hasta no tener el título, lo que yo haga no cuenta.',
    reality:
      'El código se aprende construyendo, no solo memorizando. Un proyecto pequeño y terminado enseña más que diez ideas perfectas.',
    step: 'Márcalo como propósito para llevarte, no como tarea vencida.',
  },
  {
    id: 'comunidad',
    index: '04',
    title: 'Comunidad',
    when: 'Siempre',
    myth: 'Tengo que poder sola antes de pedir ayuda.',
    reality:
      'El síndrome del impostor baja el volumen cuando no caminas sola. Las comunidades te recuerdan que todas empezamos desde cero.',
    step: 'Aurora STEAM GT es una puerta. No es la única, y no pide que llegues sabiendo.',
  },
]

export function CareerMap() {
  const [age, setAge] = useState(null)
  const [nodeId, setNodeId] = useState('bach')
  const [careerId, setCareerId] = useState(null)
  const [checks, setChecks] = useState([])
  const [actionId, setActionId] = useState('taller')

  const ageInfo = AGES.find((item) => item.id === age)
  const node = NODES.find((item) => item.id === nodeId)
  const career = CAREERS.find((item) => item.id === careerId)
  const action = ACTIONS.find((item) => item.id === actionId)

  function toggleCheck(id) {
    setChecks((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
  }

  return (
    <section className="mx-auto flex min-h-full w-full max-w-6xl flex-col px-5 py-6 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">Tu mapa · minuto 26</p>
          <h2 className="mt-2 font-display text-balance text-4xl text-champagne sm:text-5xl">Tu propio camino</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          No hay una forma correcta. Hay un siguiente paso, y cambia según el momento en el que estás.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {AGES.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={age === item.id}
            onClick={() => setAge((current) => (current === item.id ? null : item.id))}
            className={`rounded-full px-4 py-2 text-sm ${
              age === item.id ? 'bg-gold text-ink' : 'border border-gold/35 text-champagne hover:border-gold'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      {ageInfo && <p className="mt-3 rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-champagne">{ageInfo.note}</p>}

      <div className="relative mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute left-8 right-8 top-8 hidden h-px bg-gold/30 lg:block" />
        {NODES.map((item) => {
          const dim = ageInfo && !ageInfo.focus.includes(item.id)
          const active = nodeId === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setNodeId(item.id)}
              aria-pressed={active}
              className={`relative rounded-3xl border p-4 text-left transition ${
                active ? 'border-gold bg-gold/15' : 'border-white/10 bg-plum/40 hover:border-gold/40'
              } ${dim ? 'opacity-55' : ''}`}
            >
              <span className="text-[11px] tracking-[0.22em] text-gold">{item.index}</span>
              <span className="mt-1 block font-display text-2xl text-champagne">{item.title}</span>
              <span className="mt-1 block text-sm text-muted">{item.when}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <article className="rounded-3xl border border-dashed border-rose/50 bg-rose/5 p-5">
          <p className="text-[11px] tracking-[0.22em] text-rose">MITO</p>
          <p className="mt-2 font-display text-2xl leading-snug text-champagne">{node.myth}</p>
        </article>
        <article className="rounded-3xl border border-gold/40 bg-gold/10 p-5">
          <p className="text-[11px] tracking-[0.22em] text-gold">REALIDAD</p>
          <p className="mt-2 text-base leading-relaxed text-champagne">{node.reality}</p>
        </article>
      </div>

      <div className="mt-3 rounded-3xl border border-white/10 bg-plum/50 p-5">
        {nodeId === 'bach' && <p className="text-base leading-relaxed text-champagne">{node.step}</p>}

        {nodeId === 'uni' && (
          <div>
            {age === 'media' && (
              <p className="mb-3 text-sm text-gold">No tienes que decidir esto hoy. Es un mapa, no una sentencia.</p>
            )}
            <p className="text-sm text-muted">{node.step}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {CAREERS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={careerId === item.id}
                  onClick={() => setCareerId(item.id)}
                  className={`rounded-full px-3 py-2 text-sm ${
                    careerId === item.id ? 'bg-champagne text-ink' : 'border border-white/15 text-champagne hover:border-gold'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
            {career && (
              <p className="mt-4 text-base leading-relaxed text-champagne">
                {career.fit} También puedes llegar desde otra carrera, un curso o un proyecto.
              </p>
            )}
          </div>
        )}

        {nodeId === 'proyectos' && (
          <div>
            <p className="text-sm text-muted">{node.step}</p>
            <ul className="mt-3 space-y-2">
              {PROJECTS.map((item) => {
                const on = checks.includes(item.id)
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggleCheck(item.id)}
                      className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left text-sm ${
                        on ? 'border-gold bg-gold/10 text-champagne' : 'border-white/10 text-muted hover:border-gold/40'
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                          on ? 'border-gold bg-gold text-ink' : 'border-gold/40'
                        }`}
                        aria-hidden="true"
                      >
                        {on ? '✓' : ''}
                      </span>
                      {item.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {nodeId === 'comunidad' && (
          <div>
            <p className="text-base text-champagne">{node.step}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {ACTIONS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={actionId === item.id}
                  onClick={() => setActionId(item.id)}
                  className={`rounded-full px-3 py-2 text-sm ${
                    actionId === item.id ? 'bg-gold text-ink' : 'border border-gold/35 text-champagne'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <p className="mt-4 text-base leading-relaxed text-champagne">{action.detail}</p>
          </div>
        )}
      </div>
    </section>
  )
}
