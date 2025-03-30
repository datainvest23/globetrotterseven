"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MoveRight, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

export function AnimatedHero() {
  const { t } = useLanguage()
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => t("animatedHero.words") as string[], [t])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="w-full relative min-h-[80vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cover.png"
          alt="Sustainable building with green architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              {t("home.hero.cta1")} <MoveRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular text-white">
              <span className="text-primary">{t("home.hero.title1")}</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-white"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-white"> {t("home.hero.title2")}</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white/80 max-w-2xl text-center">
              {t("home.hero.description")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button size="lg" className="gap-4" variant="outline">
              {t("home.hero.cta2")} <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              {t("home.hero.cta3")} <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

