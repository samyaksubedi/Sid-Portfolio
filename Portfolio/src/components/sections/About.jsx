import { model, images } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import { cn } from '../../utils/cn'

const detailKeys = [
  { key: 'height', label: 'Height' },
  { key: 'hair', label: 'Hair' },
  { key: 'eyes', label: 'Eyes' },
  { key: 'location', label: 'Based In' },
]

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="Profile" title="About" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <ScrollReveal className="relative overflow-hidden">
            <div className="aspect-[3/4] overflow-hidden bg-mist">
              <img
                src={images.about}
                alt="Portrait of Sid Laurent"
                className="h-full w-full object-cover object-center grayscale transition-transform duration-[1.4s] ease-out hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border border-ink/10 md:block" />
          </ScrollReveal>

          <div className="flex flex-col justify-center gap-10">
            <ScrollReveal delay={0.15}>
              <p className="font-display text-2xl md:text-3xl font-light leading-snug text-ink/90 text-balance">
                Crafting stillness into statement.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-sm md:text-base leading-relaxed text-stone max-w-lg">
                {model.bio}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="grid grid-cols-2 gap-px bg-mist border border-mist">
                {detailKeys.map(({ key, label }) => (
                  <div
                    key={key}
                    className={cn(
                      'bg-paper px-5 py-6 md:px-6 md:py-7',
                    )}
                  >
                    <dt className="text-[10px] uppercase editorial-tracking text-stone mb-2">
                      {label}
                    </dt>
                    <dd className="font-display text-lg md:text-xl text-ink">
                      {model.details[key]}
                    </dd>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
