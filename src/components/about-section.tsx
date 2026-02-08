"use client"

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Github, href: "https://github.com/Hinarosha", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kyllian-levent-627216251/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:levent.kyllian@gmail.com", label: "Email" },
]

export function AboutSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - heading */}
          <div className="rounded-2xl border border-border/20 bg-background/[0.03] px-6 py-6 backdrop-blur-[3px] md:px-8 md:py-8">
            <span className="mb-4 inline-block text-xs font-medium text-muted-foreground uppercase tracking-widest">
              About
            </span>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              A bit about me
            </h2>
            <p className="text-foreground/90 leading-relaxed">
                {"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
                {"Currently exploring the boundaries of creative coding, WebGL, and generative art. When I'm not pushing pixels, you'll find me experimenting with new technologies"}
            </p>
          </div>

          {/* Right column - content */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/20 bg-background/[0.03] p-6 backdrop-blur-[3px] md:p-8">
              <p className="text-foreground/90 leading-relaxed">
                {"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}
              </p>
              
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {"Currently exploring the boundaries of creative coding, WebGL, and generative art. When I'm not pushing pixels, you'll find me experimenting with new technologies or contributing to open-source projects."}
              </p>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-2 rounded-2xl border border-border/20 bg-background/[0.03] px-6 py-4 backdrop-blur-[3px]">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="outline"
                  size="sm"
                  className="gap-2 rounded-full bg-transparent"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-50" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
