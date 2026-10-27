import type { ReactNode } from 'react'
import { a11y } from '@/lib/site'
import { cn } from '@/lib/utils'

type ArrowLinkProps = {
  href: string
  children: ReactNode
  external?: boolean
  className?: string
}

export function ArrowLink({ href, children, external, className }: ArrowLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex items-center gap-2 text-sm font-medium underline decoration-border decoration-1 underline-offset-[6px] transition-colors hover:decoration-foreground',
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        {external ? '\u2197\uFE0E' : '\u2192'}
      </span>
      {external && <span className="sr-only">{a11y.opensInNewTab}</span>}
    </a>
  )
}
