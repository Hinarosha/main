/**
 * Static project data shared across all locales.
 * Only non-translatable fields (imageUrl, githubUrl, progress) live here.
 * Title and objective come from translation files.
 */

export interface ProjectConfig {
  /** Translation key used to fetch title and objective (e.g. project-card.project1) */
  id: string
  /** Preview image path - add your image to public/ and reference it here */
  imageUrl?: string
  /** Link to the project's GitHub repository */
  githubUrl: string
  /** Progress percentage (0-100) */
  progress: number
}

export const projectsConfig: ProjectConfig[] = [
  {
    id: "project1",
    // imageUrl: "/projects/howmuch-preview.jpg",
    githubUrl: "https://github.com/Hinarosha/HowMuch",
    progress: 20,
  },
  {
    id: "project2",
    // imageUrl: "/projects/esup-chatbot-preview.jpg",
    githubUrl: "https://github.com/teblam/esup-chatbot",
    progress: 10,
  },
]
