"use client"

import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/i18n/language-context"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <>
      <HeroSection title={t("contact.hero.title")} description={t("contact.hero.description")} />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t("contact.form.title")}</h2>
              <p className="text-muted-foreground">{t("contact.form.description")}</p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t("contact.form.firstName")}
                  </label>
                  <Input id="first-name" placeholder={t("contact.form.placeholders.firstName")} />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t("contact.form.lastName")}
                  </label>
                  <Input id="last-name" placeholder={t("contact.form.placeholders.lastName")} />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {t("contact.form.email")}
                </label>
                <Input id="email" type="email" placeholder={t("contact.form.placeholders.email")} />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {t("contact.form.subject")}
                </label>
                <Input id="subject" placeholder={t("contact.form.placeholders.subject")} />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {t("contact.form.message")}
                </label>
                <Textarea id="message" placeholder={t("contact.form.placeholders.message")} className="min-h-32" />
              </div>

              <Button type="submit" className="w-full">
                {t("contact.form.submit")}
              </Button>
            </form>

            <div className="space-y-4 text-center">
              <h3 className="text-xl font-bold">{t("contact.direct.title")}</h3>
              <p className="text-muted-foreground">
                {t("contact.direct.email")}{" "}
                <a href="mailto:Maureen@globetrotterseven.com" className="text-primary hover:underline">
                  Maureen@globetrotterseven.com
                </a>
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center">{t("contact.signup.title")}</h3>
              <p className="text-muted-foreground text-center">{t("contact.signup.description")}</p>
              <div className="flex gap-2">
                <Input placeholder={t("contact.signup.placeholder")} className="flex-1" />
                <Button type="submit">{t("contact.signup.button")}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

