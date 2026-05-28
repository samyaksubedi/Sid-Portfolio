import { experiences } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import { StaggerContainer, StaggerItem } from '../ui/ScrollReveal'

export default function Experience() {
  return (
    <section id="experience" className="bg-paper py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="Career" title="Experience" />

        <StaggerContainer className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-mist hidden md:block" />

          <div className="flex flex-col gap-8 md:gap-6">
            {experiences.map((item) => (
              <StaggerItem key={`${item.year}-${item.title}`}>
                <article className="group relative md:grid md:grid-cols-[120px_1fr] md:gap-12 md:pl-8">
                  <div className="absolute left-0 top-3 hidden h-3.5 w-3.5 rounded-full border border-stone bg-paper md:block group-hover:border-ink group-hover:bg-ink transition-colors duration-500" />

                  <div className="mb-3 md:mb-0">
                    <span className="font-display text-3xl md:text-4xl font-light text-stone/80">
                      {item.year}
                    </span>
                  </div>

                  <div className="border border-mist bg-paper p-8 md:p-10 transition-colors duration-700 hover:border-stone/40">
                    <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                      <h3 className="font-display text-xl md:text-2xl text-ink">
                        {item.title}
                      </h3>
                      <span className="text-[10px] uppercase editorial-tracking text-stone">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-stone mb-4">
                      {item.brand}
                    </p>
                    <p className="text-sm leading-relaxed text-stone max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
