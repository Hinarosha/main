"use client"

import React, { createContext, useCallback, useContext, useEffect, useState } from "react"
import { NextIntlClientProvider } from "next-intl"

import en from "@/translations/en.json"
import fr from "@/translations/fr.json"
import jp from "@/translations/jp.json"

export type Locale = "en" | "fr" | "jp"

// Messages can have partial structure (some locales may not have all translations yet)
type Messages = Record<string, any>

const messagesMap: Record<Locale, Messages> = { en, fr, jp }

/** Detects browser language; returns en, fr, or jp if supported, otherwise en */
function getDetectedLocale(): Locale {
  if (typeof window === "undefined" || !navigator?.language) return "en"
  const langs = [navigator.language, ...(navigator.languages || [])]
  for (const raw of langs) {
    const code = raw.toLowerCase().split("-")[0]
    if (code === "fr") return "fr"
    if (code === "ja" || code === "jp") return "jp"
    if (code === "en") return "en"
  }
  return "en"
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider")
  return ctx
}

/** Client-only locale: detects browser language on each visit, no persistence. Provides next-intl messages for the current locale. */
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocaleState(getDetectedLocale())
    setMounted(true)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
  }, [])

  const value: LocaleContextValue = { locale, setLocale }
  const messages = messagesMap[locale]

  if (!mounted) {
    return (
      <LocaleContext.Provider value={{ locale: "en", setLocale }}>
        <NextIntlClientProvider locale="en" messages={en}>
          {children}
        </NextIntlClientProvider>
      </LocaleContext.Provider>
    )
  }

  return (
    <LocaleContext.Provider value={value}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  )
}
