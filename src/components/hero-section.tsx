"use client"

import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Glassmorphism container */}
      <div className="relative z-10 text-center">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/40 bg-background/60 px-8 py-16 backdrop-blur-xl md:px-16 md:py-24">
          <span className="mb-6 inline-block rounded-full bg-secondary/80 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Creative Developer
          </span>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            Building Digital
            <br />
            <span className="text-muted-foreground">Experiences</span>
          </h1>
          
          <p className="mx-auto max-w-lg text-base text-muted-foreground leading-relaxed md:text-lg">
            I craft elegant solutions at the intersection of design and code, 
            creating immersive web experiences that push boundaries.
          </p>
        </div>

        {/* Floating scroll indicator */}
        <div className="mt-12 flex justify-center animate-bounce">
          <div className="rounded-full border border-border/60 bg-background/40 p-3 backdrop-blur-sm">
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
