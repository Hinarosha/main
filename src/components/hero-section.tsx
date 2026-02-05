"use client"

import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Glassmorphism container */}
      <div className="relative z-10 text-center">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/20 bg-background/[0.03] px-8 py-16 backdrop-blur-[3px] md:px-16 md:py-24">
          <span className="mb-6 inline-block rounded-full bg-secondary/80 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Développeur web
          </span>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            Kyllian Levent
            <br />
            <span className="text-muted-foreground"></span>
          </h1>
          
          <p className="mx-auto max-w-lg text-base text-muted-foreground leading-relaxed md:text-lg">
            Ce site web est encore en construction. <br/>
            Il sera disponible le 6 Janvier 2026. <br/>
            Merci de votre patience. Voici mon github : <a href="https://github.com/hinarosha">hinarosha</a>
          </p>
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
