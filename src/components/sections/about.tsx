import { CheckCircle2 } from "lucide-react"

const values = [
  "Hablamos claro, sin tecnicismos innecesarios",
  "Estrategias basadas en datos y resultados reales",
  "Atencion personalizada para cada cliente",
  "Creatividad con proposito y enfoque local",
]

const stats = [
  { number: "+150", label: "Marcas impulsadas" },
  { number: "+500", label: "Campanas lanzadas" },
  { number: "98%", label: "Clientes satisfechos" },
  { number: "+5M", label: "Alcance generado" },
]

export function About() {
  return (
    <section id="nosotros" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Sobre Nosotros
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl text-balance">
              Marketing digital hecho con sabor local
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Somos una agencia que nacio con una mision simple: hacer que el
              marketing digital sea accesible para todos. Creemos que no
              necesitas hablar en ingles ni entender algoritmos complicados para
              hacer crecer tu negocio.
            </p>

            <ul className="flex flex-col gap-4">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-base text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-background p-8 text-center"
              >
                <span className="block text-3xl font-extrabold text-primary md:text-4xl">
                  {stat.number}
                </span>
                <span className="mt-2 block text-sm font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
