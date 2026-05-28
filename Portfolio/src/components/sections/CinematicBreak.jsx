import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { quote, images } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function CinematicBreak() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[70vh] md:min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={images.break}
          alt="Cinematic fashion editorial"
          className="h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-ink/55" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center md:px-10">
        <ScrollReveal>
          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-light italic leading-tight text-paper text-balance">
            &ldquo;{quote.text}&rdquo;
          </blockquote>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-10 text-[10px] uppercase editorial-tracking text-paper/50">
            — {quote.attribution}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
