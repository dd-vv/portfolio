'use client'

import { useEffect, useState } from 'react'
import { header, navItems, siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a href="#" className="text-[15px] font-medium tracking-[-0.02em]" aria-label={`${siteConfig.name}, ${header.homeAriaLabel}`}>
          {siteConfig.name}
          <span className="text-muted-foreground"></span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contacto"
          className="hidden items-center gap-2 text-sm md:inline-flex"
        >
          <span className="size-1.5 rounded-full bg-foreground" aria-hidden="true" />
          {siteConfig.availability}
        </a>

        <button
          type="button"
          className="-mr-2 inline-flex h-10 items-center px-2 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? header.menuCloseLabel : header.menuOpenLabel}
        </button>
      </div>

      <div
        id="menu-movil"
        className={cn(
          'fixed inset-x-0 top-16 bottom-0 bg-background px-5 pt-10 transition-opacity duration-300 md:hidden',
          open ? 'opacity-100' : 'pointer-events-none invisible opacity-0',
        )}
      >
        <nav aria-label="Móvil">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li key={item.href} className="border-b border-border">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5 text-4xl font-medium tracking-[-0.03em]"
                >
                  {item.label}
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={`mailto:${siteConfig.email}`} className="mt-10 block text-sm text-muted-foreground">
          {siteConfig.email}
        </a>
      </div>
    </header>
  )
}
