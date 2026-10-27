import { projects } from '@/lib/projects'
import { projectsSection } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ProjectCard } from '@/components/projects/project-card'

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-title"
      className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32"
    >
      <SectionHeading
        id="proyectos-title"
        index={projectsSection.index}
        label={projectsSection.label}
        title={projectsSection.title}
      />

      <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 md:mt-24 md:grid-cols-12 md:gap-y-28">
        {projects.map((project, i) => {
          const isWide = project.layout === 'wide'
          const isRight = i % 2 === 1
          return (
            <li
              key={`${project.name}-${i}`}
              className={cn(
                isWide ? 'md:col-span-7' : 'md:col-span-5',
                isRight && !isWide && 'md:mt-40',
                isRight && isWide && 'md:mt-40',
              )}
            >
              <Reveal delay={isRight ? 120 : 0}>
                <ProjectCard project={project} index={i} priority={i === 0} />
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
