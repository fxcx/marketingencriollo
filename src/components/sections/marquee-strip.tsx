"use client"

const items = [
  "Redes Sociales",
  "Branding",
  "Estrategia Digital",
  "Contenido",
  "Publicidad",
  "Community Manager",
  "SEO",
  "Email Marketing",
]

export function MarqueeStrip() {
  return (
    <div className="overflow-hidden bg-primary py-3">
      <div className="flex animate-marquee items-center gap-8 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, idx) => (
          <span
            key={idx}
            className="flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-primary-foreground"
          >
            {item}
            <span className="text-accent" aria-hidden="true">
              +++
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
