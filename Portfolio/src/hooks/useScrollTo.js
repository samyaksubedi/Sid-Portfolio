export function scrollToSection(href) {
  const id = href.replace('#', '')
  const target = document.getElementById(id)
  if (!target) return

  if (window.lenis) {
    window.lenis.scrollTo(target, { offset: -80, duration: 1.6 })
  } else {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
