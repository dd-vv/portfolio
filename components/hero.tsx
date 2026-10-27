import type { CSSProperties } from 'react'
import { hero, siteConfig } from '@/lib/site'
import { ArrowLink } from '@/components/arrow-link'

const delay = (ms: number) => ({ '--rise-delay': `${ms}ms` }) as CSSProperties

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-[1440px] px-5 pt-32 pb-20 md:px-10 md:pt-44 md:pb-32">
      <div className="mb-12 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:mb-20">
        <p className="animate-rise" style={delay(0)}>
          {siteConfig.role}
        </p>
        <p className="animate-rise" style={delay(80)}>
          {siteConfig.location}
        </p>
      </div>

      <h1
        id="hero-title"
        className="max-w-[14ch] text-balance text-[clamp(2.75rem,9vw,8.5rem)] font-medium leading-[0.94] tracking-[-0.055em]"
      >
        <span className="block animate-rise" style={delay(120)}>
          {hero.titleLine1}
        </span>
        <span className="block animate-rise text-muted-foreground" style={delay(240)}>
          {hero.titleLine2}
        </span>
      </h1>

      <div className="mt-14 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-12 md:gap-8">
        <p
          className="animate-rise text-pretty text-lg leading-relaxed text-foreground/80 md:col-span-6 md:col-start-7 md:text-xl"
          style={delay(380)}
        >
          {siteConfig.description}
        </p>
        <div
          className="animate-rise flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8 md:col-span-6 md:col-start-7"
          style={delay(460)}
        >
          <a
            href={hero.primaryButton.href}
            className="inline-flex h-12 items-center justify-center bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            {hero.primaryButton.label}
          </a>
          <ArrowLink href={hero.secondaryButton.href}>{hero.secondaryButton.label}</ArrowLink>
        </div>
      </div>
    </section>
  )
}
