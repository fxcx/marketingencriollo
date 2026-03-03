import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Espacio de trabajo creativo de marketing digital"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            Agencia de Marketing Digital
          </span>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
            Marketing que habla{" "}
            <span className="text-accent">tu idioma</span>
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            Hacemos crecer tu negocio con estrategias digitales claras, directas
            y sin rodeos. Sin jerga complicada, solo resultados.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Quiero crecer
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-8 py-4 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
