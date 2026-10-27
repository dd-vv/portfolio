import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  id: string
  index: string
  label: string
  title: string
}

export function SectionHeading({ id, index, label, title }: SectionHeadingProps) {
  return (
    <Reveal className="grid grid-cols-1 gap-6 border-t border-foreground/80 pt-6 md:grid-cols-12 md:gap-8">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:col-span-3">
        <span className="text-foreground">{index}</span>
        <span aria-hidden="true"> / </span>
        {label}
      </p>
      <h2
        id={id}
        className="text-balance text-3xl font-medium leading-[1.05] tracking-[-0.03em] md:col-span-9 md:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
    </Reveal>
  )
}
