import { services, servicesSection } from '@/lib/site'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { LayoutTemplate, Code2, Gauge, Sparkles } from 'lucide-react'

// Assignem una icona a cada servei segons la seva posició
const serviceIcons = [LayoutTemplate, Code2, Gauge, Sparkles]

export function ServicesSection() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32"
    >
      <SectionHeading
        id="servicios-title"
        index={servicesSection.index}
        label={servicesSection.label}
        title={servicesSection.title}
      />

      <ol className="mt-14 md:mt-24">
        {services.map((service, i) => {
          const IconComponent = serviceIcons[i] || LayoutTemplate

          return (
            <Reveal
              as="li"
              key={service.title}
              delay={i * 60}
              className="grid grid-cols-1 gap-4 border-t border-border py-10 first:border-t-0 md:grid-cols-12 md:gap-8 md:py-14"
            >
              <div className="md:col-span-3 md:pt-1.5">
                <IconComponent className="h-5 w-5 text-muted-foreground stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em] md:col-span-4 md:text-3xl">
                {service.title}
              </h3>
              <div className="md:col-span-5">
                <p className="text-pretty leading-relaxed text-foreground/75">{service.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </ol>
    </section>
  )
}