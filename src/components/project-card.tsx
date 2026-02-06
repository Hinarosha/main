"use client"

import { Github, ExternalLink } from "lucide-react"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface ProjectCardProps {
  title: string
  objective: string
  progress: number
  imageUrl?: string
  githubUrl?: string
}

export function ProjectCard({
  title,
  objective,
  progress,
  imageUrl,
  githubUrl = "#",
}: ProjectCardProps) {
  const t = useTranslations("project-card.repetition")
  
  return (
    <Card className="group relative overflow-hidden border border-border/20 bg-background/[0.03] backdrop-blur-[3px] transition-all duration-300 hover:border-border/40 hover:bg-background/[0.06] hover:shadow-lg hover:-translate-y-1">
      {/* Image placeholder */}
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary/40">
        {imageUrl ? (
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
              <div className="h-12 w-12 rounded-xl border-2 border-dashed border-current" />
              <span className="text-xs uppercase tracking-wider">Project Preview</span>
            </div>
          </div>
        )}
        
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/20 bg-background/[0.03] px-2.5 py-1 text-xs font-medium backdrop-blur-[3px]">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
            {t("status") || "In Progress"}
          </span>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
            asChild
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
            {t("objectif")}
          </p>
          <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
            {objective}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-muted-foreground">{t("progress")}</span>
            <span className="font-semibold text-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>
      </CardContent>
    </Card>
  )
}
