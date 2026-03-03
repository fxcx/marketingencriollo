import {
  Megaphone,
  Palette,
  BarChart3,
  PenTool,
  Globe,
  Mail,
} from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "Redes Sociales",
    description:
      "Gestionamos tus redes con contenido que conecta. Estrategia, calendario editorial y comunidad activa.",
  },
  {
    icon: Palette,
    title: "Branding & Identidad",
    description:
      "Creamos la identidad visual de tu marca: logo, colores, tipografia y todo lo que necesitas para destacar.",
  },
  {
    icon: BarChart3,
    title: "Publicidad Digital",
    description:
      "Campanas en Meta Ads, Google Ads y TikTok Ads optimizadas para que cada peso invertido rinda al maximo.",
  },
  {
    icon: PenTool,
    title: "Creacion de Contenido",
    description:
      "Fotos, videos, reels y disenos que cuentan la historia de tu marca y generan interaccion real.",
  },
  {
    icon: Globe,
    title: "Paginas Web",
    description:
      "Disenamos y desarrollamos sitios web modernos, rapidos y optimizados para convertir visitantes en clientes.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Campanas de email que nutren tu audiencia, fidelizan clientes y generan ventas recurrentes.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestros Servicios
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">
            Todo lo que tu marca necesita para crecer
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Ofrecemos soluciones integrales de marketing digital adaptadas a tu
            negocio, sin complicaciones.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
