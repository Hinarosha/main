"use client"

import { useRef, useEffect, useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { Canvas } from "@react-three/fiber"
import Medusae from "@/components/medusae"

export default function PortfolioPage() {
  const mouseRef = useRef({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Start Medusae centered on first load/refresh instead of in the corner
    if (typeof window !== "undefined") {
      mouseRef.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      }
    }
  }, [])
  useEffect(() => {
    const onMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative min-h-screen">
        {/* Medusae only after mount so server and initial client HTML match (avoids hydration mismatch) */}
        {mounted && (
          <div className="fixed inset-0 -z-10">
            <Canvas
              camera={{ position: [0, 0, 5] }}
              style={{ width: '100%', height: '100%' }}
            >
              <Medusae mouseRef={mouseRef} />
            </Canvas>
          </div>
        )}

        <Navbar />
        
        <main>
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}
