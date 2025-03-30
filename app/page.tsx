"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedHero } from "@/components/animated-hero"
import { useLanguage } from "@/lib/i18n/language-context"
import { CTA } from "@/components/ui/call-to-action"
import Image from "next/image"

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <AnimatedHero />

      {/* CTA Component added below hero section */}
      <CTA />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t("home.vision.title")}</h2>
              <p className="text-muted-foreground">{t("home.vision.description")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button>{t("home.vision.cta1")}</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline">{t("home.vision.cta2")}</Button>
                </Link>
              </div>
            </div>
            {/* Replaced placeholder with actual image */}
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/cover2.jpg"
                alt="Sustainable urban development with green spaces and modern architecture"
                width={600}
                height={340}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Added Meet Maureen image */}
            <div className="aspect-square rounded-lg overflow-hidden max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/meet-maureen-new.jpg"
                alt="Maureen Mungai - Founder of Globetrotterseven"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center lg:items-start justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t("home.meetMaureen.title")}</h2>
                <p className="mx-auto lg:mx-0 max-w-[700px] text-muted-foreground md:text-xl">
                  {t("home.meetMaureen.description")}
                </p>
              </div>
              <Link href="/meet-maureen">
                <Button size="lg" className="mt-4">
                  {t("home.meetMaureen.cta")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">{t("home.services.title1")}</h3>
              <p className="text-muted-foreground">{t("home.services.description1")}</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m2 12 20 0" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">{t("home.services.title2")}</h3>
              <p className="text-muted-foreground">{t("home.services.description2")}</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">{t("home.services.title3")}</h3>
              <p className="text-muted-foreground">{t("home.services.description3")}</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/services">
              <Button size="lg">{t("home.services.cta")}</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t("home.cta.title")}</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("home.cta.description")}</p>
            </div>
            <Link href="/contact">
              <Button size="lg" className="mt-4">
                {t("home.cta.button")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

