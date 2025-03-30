"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, translations } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Check if there's a stored language preference
    const storedLanguage = localStorage.getItem("language") as Language
    if (storedLanguage && (storedLanguage === "en" || storedLanguage === "es")) {
      setLanguage(storedLanguage)
    }
  }, [])

  useEffect(() => {
    // Store language preference
    localStorage.setItem("language", language)
    // Update html lang attribute
    document.documentElement.lang = language
  }, [language])

  // Translation function
  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && value[k]) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }

    return value
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

