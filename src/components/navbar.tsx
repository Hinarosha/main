"use client"

import { Sun, Moon, Monitor } from "lucide-react"
import { useTranslations } from "next-intl"
import { useTheme } from "@/components/theme-provider"
import { useLocale, type Locale } from "@/components/locale-provider"
import { SegmentedControl } from "@/components/segmented-control"
import { useState, useEffect } from "react"

const LOCALE_TO_UI: Record<Locale, string> = { en: "EN", fr: "FR", jp: "JP" }
const UI_TO_LOCALE = { EN: "en" as Locale, FR: "fr" as Locale, JP: "jp" as Locale }
type Language = keyof typeof UI_TO_LOCALE

export function Navbar() {
  const t = useTranslations("navbar")
  const { theme, setTheme } = useTheme()
  const { locale, setLocale } = useLocale()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const themeValue = mounted ? theme : "system"

  const themeOptions = [
    { value: "light" as const, icon: <Sun className="h-3.5 w-3.5" /> },
    { value: "system" as const, icon: <Monitor className="h-3.5 w-3.5" /> },
    { value: "dark" as const, icon: <Moon className="h-3.5 w-3.5" /> },
  ]

  const languageOptions = [
    { value: "FR" as const, label: "FR" },
    { value: "EN" as const, label: "EN" },
    { value: "JP" as const, label: "JP" },
  ]

  const languageValue = mounted ? LOCALE_TO_UI[locale] : "EN"
  const onLanguageChange = (value: string) => {
    const next = UI_TO_LOCALE[value as Language]
    if (next) setLocale(next)
  }

  // Blur only behind the two content areas on desktop; middle stays fully clear
  const blurPill = "sm:bg-background/[0.03] sm:backdrop-blur-[3px] sm:rounded-full sm:px-6 sm:py-3 sm:border sm:border-border/20"

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex w-full items-center justify-between px-4 py-4 sm:px-6">
        <div className={`flex items-center gap-2 ${blurPill}`}>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            {t("title")}
          </span>
        </div>

        <div className={`flex items-center gap-3 ${blurPill}`}>
          <SegmentedControl
            value={themeValue}
            onValueChange={setTheme}
            options={themeOptions}
          />
          <SegmentedControl
            value={languageValue}
            onValueChange={onLanguageChange}
            options={languageOptions}
          />
        </div>
      </nav>
    </header>
  )
}
