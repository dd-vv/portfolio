import { activeSocials, contactSection, siteConfig } from '@/lib/site'
import { Reveal } from '@/components/reveal'
import { ArrowLink } from '@/components/arrow-link'

export function ContactSection() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32"
    >
      <Reveal className="border-t border-foreground/80 pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="text-foreground">{contactSection.index}</span>
          <span aria-hidden="true"> / </span>
          {contactSection.label}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h2
          id="contacto-title"
          className="mt-14 max-w-[16ch] text-balance text-[clamp(2.5rem,7.5vw,7rem)] font-medium leading-[0.95] tracking-[-0.05em] md:mt-20"
        >
          {contactSection.title}
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-8">
        <Reveal delay={140} className="md:col-span-7">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-baseline gap-3 break-all text-2xl font-medium tracking-[-0.03em] md:text-4xl"
          >
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
              {siteConfig.email}
            </span>
            <span aria-hidden="true" className="text-muted-foreground transition-colors group-hover:text-foreground">
              →
            </span>
          </a>
          {contactSection.responseTime && (
            <p className="mt-4 text-sm text-muted-foreground">{contactSection.responseTime}</p>
          )}
        </Reveal>

        {activeSocials.length > 0 && (
          <Reveal delay={200} className="md:col-span-4 md:col-start-9">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {contactSection.socialsTitle}
            </h3>
            <ul className="mt-5 flex flex-col">
              {activeSocials.map((social) => (
                <li key={social.label} className="border-t border-border py-3 last:border-b">
                  <ArrowLink href={social.href} external className="no-underline">
                    {social.label}
                  </ArrowLink>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  )
}
