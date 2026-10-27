import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProjectsSection } from '@/components/projects/projects-section'
import { ServicesSection } from '@/components/services-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { projects } from '@/lib/projects'
import { a11y, activeSocials, siteConfig, siteUrl } from '@/lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteUrl,
  email: `mailto:${siteConfig.email}`,
  jobTitle: siteConfig.role,
  sameAs: activeSocials.map((s) => s.href),
  subjectOf: projects.map((project) => ({
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    genre: project.sector,
    ...(project.url ? { url: project.url } : {}),
  })),
}

export default function Page() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        {a11y.skipToContent}
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <ProjectsSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
