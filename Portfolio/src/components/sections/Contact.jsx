import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import InstagramIcon from '../ui/InstagramIcon'
import { contact, model } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function Contact() {
  return (
    <section id="contact" className="bg-paper py-24 md:py-32 lg:py-40 border-t border-mist">
      <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <ScrollReveal>
          <span className="text-[10px] uppercase editorial-tracking text-stone">
            Get in Touch
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-ink">
            Let&apos;s Create
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-8 text-sm text-stone leading-relaxed max-w-md mx-auto">
            Available for editorial, runway, and luxury brand collaborations
            worldwide. Represented by {contact.agency}.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14">
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center gap-3 text-stone transition-colors duration-500 hover:text-ink"
            >
              <Mail size={18} strokeWidth={1} />
              <span className="text-sm tracking-wide">{contact.email}</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-stone transition-colors duration-500 hover:text-ink"
            >
              <InstagramIcon size={18} />
              <span className="text-sm tracking-wide">{contact.instagram}</span>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <motion.a
            href={`mailto:${contact.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="mt-14 inline-block border border-ink px-12 py-4 text-[11px] uppercase editorial-tracking text-ink transition-colors duration-500 hover:bg-ink hover:text-paper"
          >
            Request Booking
          </motion.a>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <footer className="mt-24 pt-8 border-t border-mist">
            <p className="text-[10px] uppercase editorial-tracking text-stone/60">
              © {new Date().getFullYear()} {model.name}. All rights reserved.
            </p>
          </footer>
        </ScrollReveal>
      </div>
    </section>
  )
}
