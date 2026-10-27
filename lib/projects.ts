// ============================================================================
// PROYECTOS
// Para añadir un proyecto, copia un bloque { ... } completo y cambia sus valores.
// Para quitarlo, borra su bloque. El orden de la lista es el orden en la web.
//
// - name:        nombre del proyecto (título visible).
// - sector:      sector del cliente.
// - description: descripción breve (se usa en buscadores / datos estructurados).
// - services:    servicios realizados, separados por comas.
// - year:        año (opcional, '' para ocultarlo).
// - url:         web del proyecto con https://. Si se deja vacío, la tarjeta no enlaza.
// - image.src:   imagen dentro de public/. Ej.: public/projects/mi-proyecto.jpg
//                se escribe '/projects/mi-proyecto.jpg'. Para cambiarla basta con
//                sustituir el archivo manteniendo el mismo nombre.
// - image.alt:   descripción de la imagen para accesibilidad.
// - layout:      'wide' (imagen horizontal 16:10) o 'narrow' (imagen vertical 4:5).
//                Alterna wide / narrow / narrow / wide para mantener la retícula.
// ============================================================================

export type Project = {
  name: string
  sector: string
  description: string
  services: string[]
  year: string
  url: string
  image: {
    src: string
    alt: string
  }
  layout: 'wide' | 'narrow'
}

export const projects: Project[] = [
  {
    name: 'Estudio de arquitectura',
    sector: 'Arquitectura',
    description: 'Diseño y desarrollo de la web corporativa de un estudio de arquitectura.',
    services: ['Diseño web', 'Custom theme', 'SEO'],
    year: '2025',
    url: '',
    image: {
      src: '/projects/estudio_desktop.jpg',
      alt: 'Página de inicio de estudioq barcelona con el proyecto Sa Caseta y un baño reformado',
    },
    layout: 'wide',
  },
  {
    name: 'E-commerce climbing',
    sector: 'Sports & Outdoor',
    description: 'Web optimizada para móvil con sistema de reserva de citas para una clínica.',
    services: ['Maquetación Web', 'WordPress' , 'WooCommerce'],
    year: '2026',
    url: '',
    image: {
      src: '/projects/blakpad.jpeg',
      alt: 'Web de una clínica de salud vista en un teléfono móvil',
    },
    layout: 'narrow',
  },
  {
    name: 'Optimización e-commerce',
    sector: 'Home & Garden',
    description: 'Tienda WooCommerce con automatizaciones y posicionamiento SEO.',
    services: ['WooCommerce', 'Rediseño'],
    year: '2026',
    url: '',
    image: {
      src: '/projects/jardin.jpeg',
      alt: 'Tienda online de aceite de oliva mostrada en un portátil',
    },
    layout: 'narrow',
  },
  {
    name: 'Design studio',
    sector: 'Branding',
    description: 'Rediseño, migración y mejora de rendimiento con un asistente basado en IA.',
    services: ['Maquetación Web', 'WordPress' , 'WooCommerce'],
    year: '2024',
    url: '',
    image: {
      src: '/projects/med.jpeg',
      alt: 'Web de un despacho legal mostrada en monitor y tableta',
    },
    layout: 'wide',
  },
]
