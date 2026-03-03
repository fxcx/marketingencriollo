"use client"

import { MessageCircle } from "lucide-react"

export function WhatsappFab() {
  return (
    <a
      href="https://wa.me/1234567890?text=Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios%20de%20marketing%20digital."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-card shadow-lg transition-transform hover:scale-110 md:h-16 md:w-16"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  )
}
