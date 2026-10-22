import { CareerMap } from '../components/CareerMap'
import { LedSimulator } from '../components/LedSimulator'
import { Metamorphosis } from '../components/Creatures'
import { BugSlide, FlightSlide, HeroSlide, ImpostorSlide, KitSlide, MythSlide, ShapeSlide } from './StorySlides'

export const slides = [
  {
    id: 'hero',
    nav: 'Inicio',
    section: 'Prólogo',
    when: 'Minuto 0',
    Component: HeroSlide,
    notes: [
      {
        type: 'cue',
        text: 'Sostienes la mariposa con el LED apagado. Luz normal o apenas baja. Inicia el temporizador con T cuando saludes.',
      },
      {
        type: 'say',
        text: 'Bienvenidas. En 35 minutos no vamos a memorizar definiciones. Vamos a crear un bug, resolverlo y salir con una luz propia y un mapa para lo que sigue.',
      },
      {
        type: 'cue',
        text: 'Orden ajustado: prólogo 5, metamorfosis 7, chispa con el kit 14, mapa 6, vuelo 3. El mapa va antes del cierre para que la última imagen sea la luz, no la lista de carreras.',
      },
    ],
  },
  {
    id: 'mito',
    nav: 'El mito',
    section: 'Prólogo',
    when: 'Minuto 1',
    Component: MythSlide,
    notes: [
      {
        type: 'say',
        text: 'Imaginen esta escena: una habitación a oscuras, letras verdes cayendo como en una película, y alguien escribiendo a mil por hora sin dudar. Nos vendieron la idea de que la tecnología es solo para genios que nacieron sabiendo y que nunca se equivocan.',
      },
      { type: 'cue', text: 'Aquí quitas la película en pantalla.' },
      {
        type: 'say',
        text: 'Eso es cine. La tecnología real se ve más como esta sala: personas curiosas, con dudas, aprendiendo en voz alta.',
      },
    ],
  },
  {
    id: 'impostor',
    nav: 'La voz',
    section: 'Prólogo',
    when: 'Minuto 4',
    Component: ImpostorSlide,
    notes: [
      {
        type: 'say',
        text: 'Cuando yo empezaba me sentía como esta figura: un bicho pequeño en la penumbra. Miedo de presionar Enter. Miedo de arruinar la computadora. Y una voz que decía: ¿y si no soy lo suficientemente inteligente para esto?',
      },
      { type: 'cue', text: 'Nombra la voz en pantalla y deja un silencio real para que asientan.' },
      {
        type: 'say',
        text: 'Eso se llama síndrome del impostor. No es un defecto. Es una alarma que baja cuando hay evidencia y compañía. Apuesto a que más de una aquí la ha escuchado. Ser nueva no es ser impostora: es ser oruga.',
      },
    ],
  },
  {
    id: 'metamorfosis',
    nav: 'Metamorfosis',
    section: 'Metamorfosis',
    when: 'Minuto 5',
    Component: Metamorphosis,
    notes: [
      { type: 'cue', text: 'Avanza la animación con tu voz. Usa los tres botones. La secuencia automática es solo de respaldo.' },
      {
        type: 'say',
        text: 'Al empezar, todas somos orugas. Vamos despacio, el mundo se ve enorme y da miedo caer. Creemos que programar es solo código frío.',
      },
      {
        type: 'say',
        text: 'Luego escribes tu primera línea o conectas algo y, pum, un error. En el colegio equivocarse parece un cero. En tecnología ese tropiezo tiene otro nombre.',
      },
      {
        type: 'say',
        text: 'Se llama bug. Y el bug no es una puerta cerrada: es la crisálida. Ahí, en la fricción, la oruga se transforma. Programar no es no equivocarse. Es aprender a resolver el acertijo.',
      },
    ],
  },
  {
    id: 'bug',
    nav: 'Qué es un bug',
    section: 'Metamorfosis',
    when: 'Minuto 10',
    Component: BugSlide,
    notes: [
      { type: 'cue', text: 'Lámina corta, unos 90 segundos. No adelantes todavía el secreto del LED.' },
      {
        type: 'say',
        text: 'Quédense con tres palabras: fricción, acertijo, crisálida. Un bug es un comportamiento que no era el que esperabas. No dice nada sobre tu inteligencia. Dice que hay algo concreto que observar.',
      },
    ],
  },
  {
    id: 'kit',
    nav: 'El reto',
    section: 'La chispa',
    when: 'Minuto 12',
    Component: KitSlide,
    notes: [
      { type: 'cue', text: 'Entrega el kit ahora: una CR2032, un LED y limpiapipas. No pases al simulador hasta que hayan intentado.' },
      {
        type: 'say',
        text: 'Un cuidado breve y en serio: la pila no va a la boca y no se aprieta con tijeras ni con otro metal. Solo con las patitas del LED.',
      },
      { type: 'say', text: 'El reto: intenten encender la luz tocando la batería con las patas del LED.' },
      { type: 'cue', text: 'Calla. Deja intentar. A una parte de la sala no le va a encender. No corras a salvarlas.' },
      {
        type: 'say',
        text: 'Cuando veas caras de preocupación: alto. Felicidades. Acaban de crear su primer bug de la tarde. ¿Se quemó el LED? ¿Murió la pila? No. Tiene polaridad. Una patita es más larga: ese es el lado positivo. Si no enciende, no fallaste. Dale la vuelta.',
      },
      { type: 'cue', text: 'Al decir el giro, pasa al simulador y haz clic en la pila delante de todas.' },
    ],
  },
  {
    id: 'simulador',
    nav: 'Simulador',
    section: 'La chispa',
    when: 'Minuto 16',
    Component: LedSimulator,
    notes: [
      { type: 'cue', text: 'Empieza apagado a propósito. El primer clic en la pila lo enciende. Girar el LED también es una solución válida.' },
      {
        type: 'say',
        text: 'Miren la pantalla. La pata larga es el ánodo, el positivo. La pila tiene un lado marcado con más y otro con menos. La luz aparece cuando la pata larga toca el más. Girar la pila y girar el LED es el mismo aprendizaje: observar, probar otra orientación, volver a intentar.',
      },
      { type: 'cue', text: 'Si a alguien sigue sin encenderle, revisa que las patas hagan contacto firme. Ten un LED de repuesto. No dejes que una pila floja se vuelva la moraleja.' },
    ],
  },
  {
    id: 'esculpir',
    nav: 'Los caminos',
    section: 'La chispa',
    when: 'Minuto 19',
    Component: ShapeSlide,
    notes: [
      {
        type: 'say',
        text: 'Ya tienen la chispa. Ahora la estructura. Con los limpiapipas armen el cuerpo de su mariposa o luciérnaga. Abracen la pila y el LED para que la luz no se suelte.',
      },
      {
        type: 'say',
        text: 'Cada doblez es un camino: robótica, desarrollo web, inteligencia artificial, diseño. No hay una forma correcta de moldear su mariposa, ni una sola forma de hacer una vida en tecnología.',
      },
      { type: 'cue', text: 'Camina por el espacio mientras moldean. Si el tiempo se comprime, recorta aquí antes que en el cierre. Unos 7 minutos.' },
    ],
  },
  {
    id: 'mapa',
    nav: 'Tu mapa',
    section: 'Tu mapa',
    when: 'Minuto 26',
    Component: CareerMap,
    notes: [
      {
        type: 'say',
        text: 'Así como cada mariposa quedó distinta, no existe una sola ruta. El mapa tiene cuatro estaciones: bachillerato, carrera, proyectos y comunidad.',
      },
      { type: 'cue', text: 'Si el grupo es mixto, abre bachillerato y una sola carrera como muestra. No recorras las seis en voz alta.' },
      {
        type: 'say',
        text: 'Mito: si no estudio computación en el bachillerato, no podré programar. Realidad: cualquier bachillerato sirve si la curiosidad sigue despierta. La tecnología se aprende haciendo.',
      },
      {
        type: 'say',
        text: 'A los 16 o 18, sistemas es una puerta hermosa si te apasiona la lógica. No es la única. Diseño, calidad, datos, educación tecnológica y gestión también son tecnología. Programar es una herramienta, no el único destino.',
      },
      {
        type: 'say',
        text: 'Y no esperen el título para empezar. Un horario automatizado, una página para un emprendimiento de la familia o un juego pequeño enseñan más que esperar a ser expertas.',
      },
      {
        type: 'say',
        text: 'El secreto para bajarle el volumen al impostor es no caminar solas. Vengan a Aurora, pidan mentoras, compartan incluso este primer bug. Todas empezamos desde cero.',
      },
      { type: 'cue', text: 'Si vas justo de tiempo: bachillerato, una carrera y comunidad. Deja proyectos visibles en pantalla y no los narres todos.' },
    ],
  },
  {
    id: 'vuelo',
    nav: 'El vuelo',
    section: 'El vuelo',
    when: 'Minuto 32',
    Component: FlightSlide,
    notes: [
      { type: 'cue', text: 'Baja un poco las luces del auditorio. Pide que levanten la mariposa. Deja tres segundos de silencio. Luego pulsa «Encender el salón».' },
      {
        type: 'say',
        text: 'Miren a su alrededor. Hace un rato había miedo de dar el primer paso. Hoy crearon su primer bug, lo resolvieron y le dieron forma a su propia luz.',
      },
      {
        type: 'say',
        text: 'No necesitan permiso para crear. No necesitan ser perfectas para entrar. Llévense esta mariposa al escritorio. Cuando duden de ustedes, cuando un programa no salga a la primera, cuando no sepan qué bachillerato o qué carrera elegir, miren esta luz y recuerden: no están fallando. Están cambiando la polaridad para emprender su propio vuelo.',
      },
      { type: 'cue', text: 'Cierra nombrando a Aurora STEAM GT y al espacio, CCE Zona 1. Unos 3 minutos.' },
    ],
  },
]
