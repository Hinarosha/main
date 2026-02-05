"use client"

import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Neural Canvas",
    objective: "An AI-powered creative tool that transforms text prompts into dynamic, interactive art pieces using generative algorithms.",
    progress: 75,
    githubUrl: "https://github.com",
  },
  {
    title: "Flux Protocol",
    objective: "A real-time collaboration platform enabling seamless synchronization of design assets across distributed teams.",
    progress: 45,
    githubUrl: "https://github.com",
  },
  {
    title: "Quantum UI Kit",
    objective: "A next-generation component library built for performance-critical applications with zero-runtime styling.",
    progress: 90,
    githubUrl: "https://github.com",
  },
  {
    title: "Echo Analytics",
    objective: "Privacy-first analytics dashboard providing actionable insights without compromising user data sovereignty.",
    progress: 30,
    githubUrl: "https://github.com",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl rounded-2xl border border-border/20 bg-background/[0.03] px-6 py-6 backdrop-blur-[3px] md:px-8 md:py-8">
          <span className="mb-4 inline-block text-xs font-medium text-muted-foreground uppercase tracking-widest">
            Selected Work
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Projects in Progress
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A collection of ongoing explorations where I push creative boundaries 
            and experiment with emerging technologies.
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
