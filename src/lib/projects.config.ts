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
    imageUrl: "/projectspreview/howmuch-preview.png",
    githubUrl: "https://github.com/Hinarosha/HowMuch",
    progress: 20,
    status: "inprogress",
  },
  {
    id: "project2",
    imageUrl: "/projectspreview/esup-chatbot-preview.png",
    githubUrl: "https://github.com/teblam/esup-chatbot",
    progress: 100,
    status: "done",
  },
  {
    id: "project3",
    imageUrl: "/projectspreview/sleeprecords-preview.png",
    githubUrl: "https://github.com/Hinarosha/SleepRecords_CakePHP",
    progress: 100,
    status: "done",
  },
  {
    id: "project4",
    imageUrl: "/projectspreview/2048-preview.png",
    githubUrl: "https://github.com/Hinarosha/2048-flutter-game",
    progress: 100,
    status: "done",
  },
  {
    id: "project5",
    // imageUrl: "/projectspreview/synthetic-sacrifice-preview.jpg",
    githubUrl: "https://github.com/Hinarosha/synthetic-sacrifice",
    progress: 5,
    status: "planned",
  },
  {
    id: "project6",
    imageUrl: "/projectspreview/synthetic-sacrifice-web-preview.png",
    githubUrl: "https://github.com/Hinarosha/synthetic-sacrifice-web",
    progress: 50,
    status: "inprogress",
  },
  {
    id: "project7",
    imageUrl: "/projectspreview/hinaroshagames-preview.png",
    githubUrl: "https://github.com/Hinarosha/hinaroshagames",
    progress: 100,
    status: "done",
  },
  {
    id: "project8",
    imageUrl: "/projectspreview/happybirthdayos-preview.png",
    githubUrl: "https://github.com/Hinarosha/HappyBirthdayOS",
    progress: 100,
    status: "done",
  },
  {
    id: "project9",
    imageUrl: "/projectspreview/to-do-list-preview.png",
    githubUrl: "https://github.com/Hinarosha/To-Do_list_test",
    progress: 100,
    status: "done",
  },
  {
    id: "project10",
    imageUrl: "/projectspreview/thumbnails-downloader-plus-preview.png",
    githubUrl: "https://github.com/Hinarosha/thumbnails-downloader-plus",
    progress: 100,
    status: "done",
  }
]
