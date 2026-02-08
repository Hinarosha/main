/**
 * Static project data shared across all locales.
 * Only non-translatable fields (imageUrl, githubUrl, progress) live here.
 * Title and objective come from translation files.
 */

/** Maps status keys to Tailwind classes for the status indicator dot */
export const STATUS_STYLES = {
  done: "bg-emerald-500",
  inprogress: "bg-amber-500 animate-pulse",
  planned: "bg-red-500",
} as const

export type ProjectStatus = keyof typeof STATUS_STYLES

export interface ProjectConfig {
  /** Translation key used to fetch title and objective (e.g. project-card.project1) */
  id: string
  /** Preview image path - add your image to public/ and reference it here */
  imageUrl?: string
  /** Link to the project's GitHub repository */
  githubUrl: string
  /** Progress percentage (0-100) */
  progress: number
  /** Status key for the indicator dot: "done" | "inprogress" | "planned" */
  status: ProjectStatus
}

export const projectsConfig: ProjectConfig[] = [
  {
    id: "project1",
    // imageUrl: "/projects/howmuch-preview.jpg",
    githubUrl: "https://github.com/Hinarosha/HowMuch",
    progress: 20,
    status: "inprogress",
  },
  {
    id: "project2",
    // imageUrl: "/projects/esup-chatbot-preview.jpg",
    githubUrl: "https://github.com/teblam/esup-chatbot",
    progress: 100,
    status: "done",
  },
  {
    id: "project3",
    // imageUrl: "/projects/sleeprecords-preview.jpg",
    githubUrl: "https://github.com/Hinarosha/SleepRecords_CakePHP",
    progress: 100,
    status: "done",
  },
  {
    id: "project4",
    // imageUrl: "/projects/2048-preview.jpg",
    githubUrl: "https://github.com/Hinarosha/2048-flutter-game",
    progress: 100,
    status: "done",
  },
  {
    id: "project5",
    // imageUrl: "/projects/synthetic-sacrifice-preview.jpg",
    githubUrl: "https://github.com/Hinarosha/synthetic-sacrifice",
    progress: 5,
    status: "planned",
  },
  {
    id: "project6",
    // imageUrl: "/projects/synthetic-sacrifice-web-preview.jpg",
    githubUrl: "https://github.com/Hinarosha/synthetic-sacrifice-web",
    progress: 50,
    status: "inprogress",
  },
  {
    id: "project7",
    // imageUrl: "/projects/hinaroshagames-preview.jpg",
    githubUrl: "https://github.com/Hinarosha/hinaroshagames",
    progress: 100,
    status: "done",
  },
  {
    id: "project8",
    // imageUrl: "/projects/happybirthdayos-preview.jpg",
    githubUrl: "https://github.com/Hinarosha/HappyBirthdayOS",
    progress: 100,
    status: "done",
  },
  {
    id: "project9",
    // imageUrl: "/projects/happybirthdayos-preview.jpg",
    githubUrl: "https://github.com/Hinarosha/To-Do_list_test",
    progress: 100,
    status: "done",
  },
  {
    id: "project10",
    // imageUrl: "/projects/thumbnails-downloader-plus-preview.jpg",
    githubUrl: "https://github.com/Hinarosha/thumbnails-downloader-plus",
    progress: 100,
    status: "done",
  }
]
