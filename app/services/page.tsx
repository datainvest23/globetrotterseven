"use client"

import HeroSection from "@/components/hero-section"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <>
      <HeroSection title={t("services.hero.title")} description={t("services.hero.description")} />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mb-16">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/images/cover3.png"
                alt="Real estate professionals discussing sustainable building plans"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{t("services.intro.title")}</h2>
              <p className="text-muted-foreground">{t("services.intro.description")}</p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">{t("services.realEstate.title")}</h2>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{t("services.realEstate.valuation.title")}</h3>
                  <p className="text-muted-foreground">{t("services.realEstate.valuation.description")}</p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{t("services.realEstate.brokerage.title")}</h3>
                  <p className="text-muted-foreground">{t("services.realEstate.brokerage.description")}</p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{t("services.realEstate.citizenship.title")}</h3>
                  <p className="text-muted-foreground">{t("services.realEstate.citizenship.description")}</p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{t("services.realEstate.sustainable.title")}</h3>
                  <p className="text-muted-foreground">{t("services.realEstate.sustainable.description")}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">{t("services.development.title")}</h2>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{t("services.development.grant.title")}</h3>
                  <p className="text-muted-foreground">{t("services.development.grant.description")}</p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{t("services.development.program.title")}</h3>
                  <p className="text-muted-foreground">{t("services.development.program.description")}</p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{t("services.development.capacity.title")}</h3>
                  <p className="text-muted-foreground">{t("services.development.capacity.description")}</p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{t("services.development.csr.title")}</h3>
                  <p className="text-muted-foreground">{t("services.development.csr.description")}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">{t("services.business.title")}</h2>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{t("services.business.market.title")}</h3>
                  <p className="text-muted-foreground">{t("services.business.market.description")}</p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{t("services.business.investment.title")}</h3>
                  <p className="text-muted-foreground">{t("services.business.investment.description")}</p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{t("services.business.strategic.title")}</h3>
                  <p className="text-muted-foreground">{t("services.business.strategic.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

