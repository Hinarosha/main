"use client"

import { ProjectCard } from "@/components/project-card"
import { useTranslations, useMessages } from "next-intl"

export function ProjectsSection() {
  const t = useTranslations("projects-section")
  const messages = useMessages() as any
  
  // Helper to safely get a nested value from messages object
  const safeGet = (path: string): string | number | null => {
    const keys = path.split('.')
    let value: any = messages
    
    for (const key of keys) {
      if (value === null || value === undefined || typeof value !== 'object') {
        return null
      }
      value = value[key]
    }
    
    return value ?? null
  }
  
  // Read projects from translations - dynamically get all project keys
  // Limit to max 100 projects to prevent infinite loops
  const projects: Array<{
    title: string
    objective: string
    progress: number
    githubUrl: string
  }> = []
  
  const MAX_PROJECTS = 100
  let projectIndex = 1
  
  while (projectIndex <= MAX_PROJECTS) {
    const projectKey = `project${projectIndex}`
    
    // Check title first - if it doesn't exist, we've reached the end
    const title = safeGet(`project-card.${projectKey}.title`)
    
    if (!title || typeof title !== 'string') {
      // No more projects found, stop here
      break
    }
    
    // Now get the other fields
    const objective = safeGet(`project-card.${projectKey}.objective`)
    const progressRaw = safeGet(`project-card.${projectKey}.progress`)
    const githubUrl = safeGet(`project-card.${projectKey}.githubUrl`)
    
    // Skip this project if any required field is missing
    if (!objective || progressRaw === null || !githubUrl) {
      projectIndex++
      continue
    }
    
    // Parse progress as number
    const progress = typeof progressRaw === 'number' ? progressRaw : Number(progressRaw)
    
    projects.push({
      title: String(title),
      objective: String(objective),
      progress,
      githubUrl: String(githubUrl),
    })
    projectIndex++
  }

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
