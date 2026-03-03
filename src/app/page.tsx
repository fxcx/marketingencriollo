import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { MarqueeStrip } from "@/components/sections/marquee-strip"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { CtaSection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"
import { WhatsappFab } from "@/components/shared/whatsapp-fab"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Services />
      <About />
      <CtaSection />
      <Footer />
      <WhatsappFab />
    </main>
  )
}
