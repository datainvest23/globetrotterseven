"use client"

import { MoveRight, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"
import Link from "next/link"
import Image from "next/image"

function CTA() {
  const { t, language } = useLanguage()

  return (
    <div className="w-full py-12 lg:py-20 relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/images/cta-bg.png" alt="Background pattern" fill className="object-cover" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col text-center bg-background border rounded-lg shadow-lg p-6 lg:p-10 gap-8 items-center">
          <div>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              {language === "en" ? "Upcoming Event" : "Próximo Evento"}
            </Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight max-w-2xl mx-auto">
              {language === "en" ? "Investment Meetup Madrid" : "Encuentro de Inversión Madrid"}
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto">
              {language === "en"
                ? "Unity Homes is coming to Madrid on April 13, 2025, to help Kenyans in the diaspora find a place to call their own back home."
                : "Unity Homes llegará a Madrid el 13 de abril de 2025, para ayudar a los kenianos en la diáspora a encontrar un lugar propio en su país."}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://lu.ma/7oxel7dr" target="_blank" rel="noopener noreferrer">
              <Button className="gap-2" variant="default">
                {language === "en" ? "RSVP Now" : "Reservar Ahora"} <Calendar className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button className="gap-2" variant="outline">
                {language === "en" ? "Our Services" : "Nuestros Servicios"} <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CTA }

