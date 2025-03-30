"use client"

import HeroSection from "@/components/hero-section"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <>
      <HeroSection title={t("about.hero.title")} description={t("about.hero.description")} />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{t("about.mission.title")}</h2>
              <p className="text-muted-foreground">{t("about.mission.description")}</p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/images/cover1.png"
                alt="Sustainable real estate concept with green house"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-16 mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{t("about.difference.title")}</h2>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{t("about.difference.approach.title")}</h3>
                  <p className="text-muted-foreground">{t("about.difference.approach.description")}</p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{t("about.difference.perspective.title")}</h3>
                  <p className="text-muted-foreground">{t("about.difference.perspective.description")}</p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{t("about.difference.impact.title")}</h3>
                  <p className="text-muted-foreground">{t("about.difference.impact.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

