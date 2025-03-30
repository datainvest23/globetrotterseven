"use client"

import HeroSection from "@/components/hero-section"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

export default function MeetMaureenPage() {
  const { t } = useLanguage()

  return (
    <>
      <HeroSection title={t("meetMaureen.hero.title")} description={t("meetMaureen.hero.description")} />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/maureen.png"
                  alt="Maureen Mungai"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{t("meetMaureen.background.title")}</h2>
                <p className="text-muted-foreground">{t("meetMaureen.background.description")}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{t("meetMaureen.expertise.title")}</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
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
                      className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>{t("meetMaureen.expertise.broker.title")}</strong>{" "}
                      {t("meetMaureen.expertise.broker.description")}
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>{t("meetMaureen.expertise.insights.title")}</strong>{" "}
                      {t("meetMaureen.expertise.insights.description")}
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>{t("meetMaureen.expertise.development.title")}</strong>{" "}
                      {t("meetMaureen.expertise.development.description")}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{t("meetMaureen.leadership.title")}</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
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
                      className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>{t("meetMaureen.leadership.director.title")}</strong>{" "}
                      {t("meetMaureen.leadership.director.description")}
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>{t("meetMaureen.leadership.passion.title")}</strong>{" "}
                      {t("meetMaureen.leadership.passion.description")}
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>{t("meetMaureen.leadership.vision.title")}</strong>{" "}
                      {t("meetMaureen.leadership.vision.description")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-24 mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold text-center">{t("meetMaureen.leader.title")}</h2>
            <p className="text-muted-foreground">{t("meetMaureen.leader.description")}</p>

            <h2 className="text-2xl font-bold text-center mt-8">{t("meetMaureen.legacy.title")}</h2>
            <p className="text-muted-foreground">{t("meetMaureen.legacy.description1")}</p>
            <p className="text-muted-foreground">{t("meetMaureen.legacy.description2")}</p>
          </div>
        </div>
      </section>
    </>
  )
}

