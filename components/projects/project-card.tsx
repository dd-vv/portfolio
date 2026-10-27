import Image from 'next/image'
import type { Project } from '@/lib/projects'
import { a11y, projectsSection } from '@/lib/site'
import { cn } from '@/lib/utils'

type ProjectCardProps = {
  project: Project
  index: number
  priority?: boolean
}

export function ProjectCard({ project, index, priority }: ProjectCardProps) {
  const isWide = project.layout === 'wide'
  const number = String(index + 1).padStart(2, '0')
  const hasUrl = project.url.trim() !== ''

  const media = (
    <div className={cn('relative overflow-hidden bg-muted', isWide ? 'aspect-[16/10]' : 'aspect-[4/5]')}>
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        priority={priority}
        sizes={isWide ? '(min-width: 768px) 58vw, 100vw' : '(min-width: 768px) 42vw, 100vw'}
        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
      />
    </div>
  )

  return (
    <article className="group">
      {hasUrl ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus-visible:outline-offset-4"
          aria-label={`${project.name} — ${projectsSection.visitAriaLabel} ${a11y.opensInNewTab}`}
        >
          {media}
        </a>
      ) : (
        media
      )}

      <div className="mt-5 grid grid-cols-[auto_1fr] gap-x-5 border-0 border-border pt-4 md:mt-6">
        <div>
          <div className="flex items-start justify-between gap-6">
            <h3 className="text-pretty text-lg font-medium leading-snug tracking-[-0.02em] md:text-xl">
              {project.name}
            </h3>
            {hasUrl && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 pt-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                tabIndex={-1}
                aria-hidden="true"
              >
                {projectsSection.visitLabel} {'\u2197\uFE0E'}
              </a>
            )}
          </div>
          <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
            <div className="flex gap-2">
              <dt className="sr-only">Sector</dt>
              <dd className="text-foreground">{project.sector}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="sr-only">Servicios</dt>
              <dd>{project.services.join(' · ')}</dd>
            </div>
            {project.year && (
              <div className="flex gap-2">
                <dt className="sr-only">Año</dt>
                <dd>{project.year}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </article>
  )
}
