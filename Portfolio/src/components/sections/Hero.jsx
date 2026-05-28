import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { model, images } from '../../data/content'
import { scrollToSection } from '../../hooks/useScrollTo'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.35, 0.65])

  const nameParts = model.name.split(' ')

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <img
          src={images.hero}
          alt="Editorial fashion portrait"
          className="h-full w-full object-cover object-top grayscale"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-ink"
      />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto w-full max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-[10px] md:text-xs uppercase editorial-tracking text-paper/70"
          >
            {model.tagline}
          </motion.p>

          <h1 className="overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block font-display text-[clamp(3.5rem,12vw,9rem)] font-light leading-[0.9] tracking-tight text-paper"
            >
              {nameParts[0]}
            </motion.span>
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="block font-display text-[clamp(3.5rem,12vw,9rem)] font-light italic leading-[0.9] tracking-tight text-paper/90"
            >
              {nameParts[1]}
            </motion.span>
          </h1>
        </div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-paper/60 transition-colors hover:text-paper"
        aria-label="Scroll to about section"
      >
        <span className="text-[9px] uppercase editorial-tracking">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} strokeWidth={1} />
        </motion.div>
      </motion.button>
    </section>
  )
}
