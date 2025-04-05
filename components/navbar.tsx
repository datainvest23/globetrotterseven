"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/lib/i18n/language-context"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Globetrotterseven Logo" width={150} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <nav className="flex gap-6 mr-4">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.home")}
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.about")}
            </Link>
            <Link href="/meet-maureen" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.meetMaureen")}
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.services")}
            </Link>
            <Link href="/unity-homes" className="text-sm font-medium transition-colors hover:text-primary">
              Unity Homes
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.contact")}
            </Link>
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            className="ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/meet-maureen"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.meetMaureen")}
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.services")}
            </Link>
            <Link
              href="/unity-homes"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Unity Homes
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

