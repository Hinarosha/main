"use client"

import React, { createContext, useCallback, useContext, useEffect, useState } from "react"
import { NextIntlClientProvider } from "next-intl"

import en from "@/translations/en.json"
import fr from "@/translations/fr.json"
import jp from "@/translations/jp.json"

export type Locale = "en" | "fr" | "jp"

const messagesMap: Record<Locale, typeof en> = { en, fr, jp }

const STORAGE_KEY = "locale"

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "en"
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === "en" || stored === "fr" || stored === "jp") return stored
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

/** Client-only locale: stored in localStorage, no URL change. Provides next-intl messages for the current locale. */
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocaleState(getStoredLocale())
    setMounted(true)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
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
