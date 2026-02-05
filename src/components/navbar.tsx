"use client"

import { Sun, Moon, Monitor } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { SegmentedControl } from "@/components/segmented-control"
import { useState, useEffect } from "react"

type Language = "FR" | "EN" | "JP"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [language, setLanguage] = useState<Language>("EN")
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  // Use a stable value until after mount so server and initial client render match (avoids hydration mismatch)
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Portfolio
          </span>
        </div>

        <div className="flex items-center gap-3">
          <SegmentedControl
            value={themeValue}
            onValueChange={setTheme}
            options={themeOptions}
          />
          <SegmentedControl
            value={language}
            onValueChange={setLanguage}
            options={languageOptions}
          />
        </div>
      </nav>
    </header>
  )
}
