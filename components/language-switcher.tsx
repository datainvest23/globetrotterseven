"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        className="h-8 px-2 text-xs"
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
      >
        EN
      </Button>
      <span className="text-muted-foreground">/</span>
      <Button
        variant={language === "es" ? "default" : "ghost"}
        size="sm"
        className="h-8 px-2 text-xs"
        onClick={() => setLanguage("es")}
        aria-label="Switch to Spanish"
      >
        ES
      </Button>
    </div>
  )
}

