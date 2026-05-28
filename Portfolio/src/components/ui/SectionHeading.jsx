import { cn } from '../../utils/cn'
import ScrollReveal from './ScrollReveal'

export default function SectionHeading({
  label,
  title,
  align = 'left',
  className,
}) {
  return (
    <ScrollReveal className={cn('mb-16 md:mb-24', className)}>
      <div
        className={cn(
          'flex flex-col gap-4',
          align === 'center' && 'items-center text-center',
          align === 'right' && 'items-end text-right',
        )}
      >
        {label && (
          <span className="text-[10px] md:text-xs uppercase editorial-tracking text-stone font-sans">
            {label}
          </span>
        )}
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-ink text-balance">
          {title}
        </h2>
      </div>
    </ScrollReveal>
  )
}
