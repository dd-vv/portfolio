import { activeSocials, footer, siteConfig } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-[1440px] px-5 pb-10 md:px-10">
      <div className="flex flex-col gap-6 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {siteConfig.name}. {footer.rights}
        </p>
        {activeSocials.length > 0 && (
          <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label={footer.socialsAriaLabel}>
            {activeSocials.map((social) => (
              <li key={social.label}>
                
              </li>
            ))}
          </ul>
        )}
        <a href="#" className="transition-colors hover:text-foreground">
          {footer.backToTop}
        </a>
      </div>
    </footer>
  )
}
