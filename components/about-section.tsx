import Image from 'next/image'
import { aboutSection } from '@/lib/site'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-title"
      className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32"
    >
      <SectionHeading
        id="sobre-mi-title"
        index={aboutSection.index}
        label={aboutSection.label}
        title={aboutSection.title}
      />

      <div className="mt-14 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-4 md:col-start-1">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <Image
              src={aboutSection.image.src}
              alt={aboutSection.image.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
        </Reveal>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <p className="text-pretty text-2xl leading-snug tracking-[-0.02em] md:text-3xl">
              {aboutSection.intro}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 max-w-prose text-pretty leading-relaxed text-foreground/75">{aboutSection.body}</p>
          </Reveal>

          <dl className="mt-14 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {aboutSection.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 60} className="border-t border-border py-6">
                <dt className="text-sm font-medium">{p.title}</dt>
                <dd className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{p.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
