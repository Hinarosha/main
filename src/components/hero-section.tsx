"use client"

import { ArrowDown } from "lucide-react"
import { useTranslations } from "next-intl"
import { TypewriterTitle } from "@/components/typewriter-title"
import { useState, useEffect, useRef } from "react"

export function HeroSection() {
  const t = useTranslations("hero-section")
  // True after first animation run completes. When true, we show all content statically (no steps).
  const hasAnimatedRef = useRef(false)
  
  // 0 = title, 1 = job, 2 = descriptions (only used during first-load animation)
  const [step, setStep] = useState<0 | 1 | 2>(0)
  const [descStep, setDescStep] = useState<0 | 1 | 2>(0)

  useEffect(() => {
    if (step >= 2 && descStep >= 2) {
      hasAnimatedRef.current = true
    }
  }, [step, descStep])

  const isStaticMode = hasAnimatedRef.current

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Glassmorphism container */}
      <div className="relative z-10 text-center">
        <div className="mx-auto max-w-3xl rounded-3xl bg-background/[0.03] px-8 py-16 backdrop-blur-[3px] md:px-16 md:py-24">
          {/* Layout: job on top, title below, descriptions last. Typing order: title → job → descriptions */}
          <span className="mb-6 inline-block rounded-full bg-secondary/80 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase min-h-[2rem] flex items-center justify-center">
            {isStaticMode ? (
              t("job")
            ) : step >= 1 ? (
              <TypewriterTitle
                text={t("job")}
                speedMs={45}
                animate
                onComplete={() => {
                  setStep(2)
                  setDescStep(1)
                }}
              />
            ) : null}
          </span>
          <h1 className="mb-6 flex min-h-[3rem] items-center justify-center gap-x-2 text-center text-4xl font-bold tracking-tight text-foreground md:min-h-[4rem] md:text-6xl lg:text-7xl whitespace-nowrap">
            {isStaticMode ? (
              t("title")
            ) : (
              <TypewriterTitle
                text={t("title")}
                speedMs={80}
                cursorClassName="leading-none"
                animate
                onComplete={() => setStep(1)}
              />
            )}
          </h1>
          
          {(isStaticMode || step >= 2) && (
          <div className="space-y-4">
            <p className="mx-auto max-w-lg text-base text-muted-foreground leading-relaxed md:text-lg">
              {isStaticMode ? (
                t("description")
              ) : descStep >= 1 ? (
                <TypewriterTitle
                  text={t("description")}
                  speedMs={18}
                  animate
                  onComplete={() => setDescStep(2)}
                />
              ) : null}
            </p>
            <p className="mx-auto max-w-lg text-base text-muted-foreground leading-relaxed md:text-lg">
              {isStaticMode ? t("description2") : descStep >= 2 ? (
                <TypewriterTitle
                  text={t("description2")}
                  speedMs={18}
                  animate
                />
              ) : null}
            </p>
          </div>
          )}
        </div>

        {/* Floating scroll indicator */}
        <div className="mt-12 flex justify-center animate-bounce">
          <div className="rounded-full border border-border/20 bg-background/[0.03] p-3 backdrop-blur-[3px]">
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
