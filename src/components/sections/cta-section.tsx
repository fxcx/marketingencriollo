import { MessageCircle } from "lucide-react"

export function CtaSection() {
  return (
    <section id="contacto" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-3xl font-bold text-primary-foreground md:text-5xl text-balance">
          {"Listo para hacer crecer tu negocio?"}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Escribinos por WhatsApp y te contamos como podemos ayudarte. Sin
          compromiso, sin vueltas, en criollo.
        </p>
        <a
          href="https://wa.me/1234567890?text=Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios%20de%20marketing%20digital."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-xl bg-card px-10 py-5 text-lg font-bold text-primary shadow-xl transition-transform hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
          Hablemos por WhatsApp
        </a>
      </div>
    </section>
  )
}
