"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Globetrotterseven</h3>
            <p className="text-sm text-muted-foreground">{t("footer.description")}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/meet-maureen"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.meetMaureen")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contact")}</h3>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:Maureen@globetrotterseven.com" className="hover:text-foreground transition-colors">
                Maureen@globetrotterseven.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Globetrotterseven. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}

