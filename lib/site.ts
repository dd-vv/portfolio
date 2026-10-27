// ============================================================================
// CONTENIDO DEL PORTFOLIO
// Todo el texto visible de la web está en este archivo (excepto los proyectos,
// que están en lib/projects.ts). Edita los valores entre comillas y guarda.
// Si un campo opcional se deja vacío (''), el elemento correspondiente no se muestra.
// ============================================================================

export type SocialLink = {
  label: string
  href: string
}

export type Service = {
  title: string
  description: string
  items: string[]
}

// ---------------------------------------------------------------------------
// 1. Datos personales y SEO
// ---------------------------------------------------------------------------
export const siteConfig = {
  name: 'VILALTA RIBÉ',
  role: 'Diseño web · WordPress · SEO · IA',
  // Dominio final con https:// y sin barra al final, p. ej. 'https://midominio.com'.
  // Si se deja vacío, en Vercel se usa automáticamente el dominio de producción.
  url: '',
  email: 'vilaltaribe@gmail.com',
  location: 'Barcelona · Remote',
  availability: 'Disponible para nuevos proyectos',
  description:
    'Diseño y construcción de productos digitales. Del concepto visual a la interfaz funcional.',
  keywords: ['diseño web', 'desarrollo WordPress', 'SEO', 'inteligencia artificial', 'automatizaciones'],
  // Las redes con href vacío no se muestran.
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dvilalta/' },
    { label: 'GitHub', href: '' },
    { label: 'Dribbble', href: '' },
  ] satisfies SocialLink[],
}

// ---------------------------------------------------------------------------
// 2. Menú de navegación
// ---------------------------------------------------------------------------
export const navItems = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]

// ---------------------------------------------------------------------------
// 3. Portada (hero)
// ---------------------------------------------------------------------------
export const hero = {
  titleLine1: 'Diseño web con intención.',
  titleLine2: '',
  primaryButton: { label: 'Ver proyectos', href: '#proyectos' },
  secondaryButton: { label: 'Hablemos de tu proyecto', href: '#contacto' },
}

// ---------------------------------------------------------------------------
// 4. Sección Proyectos (los proyectos en sí están en lib/projects.ts)
// ---------------------------------------------------------------------------
export const projectsSection = {
  index: '01',
  label: 'Proyectos',
  title: 'Proyectos recientes.',
  visitLabel: 'Ver web',
  visitAriaLabel: 'visitar la web',
}

// ---------------------------------------------------------------------------
// 5. Sección Servicios
// ---------------------------------------------------------------------------
export const servicesSection = {
  index: '02',
  label: 'Servicios',
  title: 'Del concepto al código, con una sola visión.',
}

export const services: Service[] = [
  {
    title: 'Diseño web',
    description:
      'Interfaces claras y con identidad propia, pensadas desde el contenido y el objetivo de negocio, no desde una plantilla.',
    items: ['Dirección de arte', 'Arquitectura de información', 'Prototipado'],
  },
  {
    title: 'Custom theme',
    description:
      'Temas y bloques propios, ligeros y fáciles de editar. Sin constructores pesados ni dependencias innecesarias.',
    items: ['Temas a medida', 'WordPress', 'WooCommerce', 'Migraciones'],
  },
  {
    title: 'SEO y optimización',
    description:
      'Bases técnicas sólidas para que los buscadores entiendan tu web y los usuarios la disfruten rápida.',
    items: ['Core Web Vitals', 'Datos estructurados', 'Indexación'],
  },
  {
    title: 'Automatizaciones e IA',
    description:
      'Integración de herramientas de inteligencia artificial y flujos automáticos que ahorran tiempo de verdad.',
    items: ['Asistentes conversacionales', 'Flujos de contenido'],
  },
]

// ---------------------------------------------------------------------------
// 6. Sección Sobre mí
// ---------------------------------------------------------------------------
export const aboutSection = {
  index: '03',
  label: 'Sobre mí',
  title: 'Diseño y tecnología al servicio de objetivos reales.',
  // Sustituye el archivo public/portrait.png (mismo nombre) o cambia esta ruta.
  image: {
    src: '/dani.jpg',
    alt: 'Espacio de trabajo con portátil y cuaderno con bocetos de páginas web',
  },
  intro:
    'Soy Dani Vilalta, diseñador y desarrollador web. Ayudo a marcas y profesionales a construir presencia digital con webs a medida, una base técnica sólida para SEO y herramientas IA integradas con sentido.',
  body: 'Trabajo de principio a fin: estrategia, diseño, desarrollo y optimización. Un único interlocutor que entiende tanto la parte visual como la técnica, para que el resultado sea coherente, rápido y fácil de mantener.',
  principles: [
    { title: 'Diseño', text: 'Cada decisión visual responde a un objetivo. Menos ruido, más claridad.' },
    { title: 'Rendimiento', text: 'Código ligero y optimizado. La velocidad también es parte de la experiencia.' },
    { title: 'Usabilidad', text: 'Interfaces accesibles e intuitivas, para cualquier persona y dispositivo.' },
    { title: 'Resultados', text: 'Webs pensadas para cumplir metas medibles, no solo para verse bien.' },
  ],
}

// ---------------------------------------------------------------------------
// 7. Sección Contacto
// ---------------------------------------------------------------------------
export const contactSection = {
  index: '04',
  label: 'Contacto',
  title: '¿Tienes un proyecto en mente? Hablemos.',
  responseTime: '',
  socialsTitle: '',
}

// ---------------------------------------------------------------------------
// 8. Cabecera, pie de página y textos de accesibilidad
// ---------------------------------------------------------------------------
export const header = {
  menuOpenLabel: 'Menú',
  menuCloseLabel: 'Cerrar',
  homeAriaLabel: 'inicio',
}

export const footer = {
  // El año se añade automáticamente delante: "© 2026 Nombrea ..."
  socialsAriaLabel: 'Redes profesionales',
  backToTop: '↑',
  rights: 'Tots els drets reservats.',
}

export const a11y = {
  skipToContent: 'Saltar al contenido',
  opensInNewTab: '(se abre en una nueva pestaña)',
}

// ---------------------------------------------------------------------------
// Valores calculados (no hace falta editarlos)
// ---------------------------------------------------------------------------
export const siteUrl =
  siteConfig.url ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const activeSocials = siteConfig.socials.filter((social) => social.href.trim() !== '')