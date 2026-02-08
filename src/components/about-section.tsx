"use client"

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

const socialLinks = [
  { icon: Github, href: "https://github.com/Hinarosha", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kyllian-levent-627216251/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:levent.kyllian@gmail.com", label: "Email" },
]

export function AboutSection() {
  const t = useTranslations("about-section")
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - heading */}
          <div className="rounded-2xl border border-border/20 bg-background/[0.03] px-6 py-6 backdrop-blur-[3px] md:px-8 md:py-8">
            <span className="mb-4 inline-block text-xs font-medium text-muted-foreground uppercase tracking-widest">
              {t("title")}
            </span>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              {t("title2")}
            </h2>
            <p className="text-foreground/90 leading-relaxed">
                {t("description")}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
                {t("description2")}
            </p>
          </div>

          {/* Right column - content */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/20 bg-background/[0.03] p-6 backdrop-blur-[3px] md:p-8">
              <p className="text-foreground/90 leading-relaxed">
                {t("description3")}
              </p>
              
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t("description4")}
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
