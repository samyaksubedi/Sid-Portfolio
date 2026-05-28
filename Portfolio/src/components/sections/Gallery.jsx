import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { galleryItems } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import { cn } from '../../utils/cn'

function GalleryItem({ item, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      className={cn('group relative overflow-hidden bg-mist', item.span)}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.1,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={cn('overflow-hidden', item.aspect)}>
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition-transform duration-[1.6s] ease-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/10" />
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-charcoal py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          label="Selected Work"
          title="Portfolio"
          className="[&_h2]:text-paper [&_span]:text-stone"
        />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4 md:auto-rows-[280px]">
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
