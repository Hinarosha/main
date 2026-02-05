"use client"

export function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/20 bg-background/[0.03] px-6 py-6 backdrop-blur-[3px] sm:flex-row">
          <p className="text-sm text-muted-foreground">
            2026. Crafted with care.
          </p>
          <nav className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Work
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
