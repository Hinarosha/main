"use client"

import { ProjectCard } from "@/components/project-card"
import { useTranslations, useMessages } from "next-intl"
import { projectsConfig, STATUS_STYLES } from "@/lib/projects.config"

export function ProjectsSection() {
  const t = useTranslations("projects-section")
  const messages = useMessages() as any

  // Helper to safely get a nested value from messages object
  const safeGet = (path: string): string | null => {
    const keys = path.split(".")
    let value: unknown = messages

    for (const key of keys) {
      if (value === null || value === undefined || typeof value !== "object") {
        return null
      }
      value = (value as Record<string, unknown>)[key]
    }

    return typeof value === "string" ? value : null
  }

  // Merge static config with translated content for current locale
  const projects = projectsConfig
    .map((config) => {
      const title = safeGet(`project-card.${config.id}.title`)
      const objective = safeGet(`project-card.${config.id}.objective`)
      const status = safeGet(`project-card.${config.id}.status`)

      if (!title || !objective) {
        return null
      }

      return {
        title,
        objective,
        status: status ?? undefined,
        statusColor: STATUS_STYLES[config.status],
        progress: config.progress,
        githubUrl: config.githubUrl,
        imageUrl: config.imageUrl,
      }
    })
    .filter((p): p is NonNullable<typeof p> => p !== null)

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl rounded-2xl border border-border/20 bg-background/[0.03] px-6 py-6 backdrop-blur-[3px] md:px-8 md:py-8">
          <span className="mb-4 inline-block text-xs font-medium text-muted-foreground uppercase tracking-widest">
            {t("title")}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {t("title2")}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
