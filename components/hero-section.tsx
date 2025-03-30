"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

interface HeroSectionProps {
  title: string
  description: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export default function HeroSection({
  title,
  description,
  ctaText,
  ctaLink = "/",
  secondaryCtaText,
  secondaryCtaLink = "/",
}: HeroSectionProps) {
  const { language } = useLanguage()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">{title}</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{description}</p>
          </div>
          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaText && (
                <Link href={ctaLink}>
                  <Button size="lg">{ctaText}</Button>
                </Link>
              )}
              {secondaryCtaText && (
                <Link href={secondaryCtaLink}>
                  <Button variant="outline" size="lg">
                    {secondaryCtaText}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

