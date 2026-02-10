"use client"

import { useEffect, useRef, useState } from "react"

interface TypewriterTitleProps {
  text: string
  speedMs?: number
  className?: string
  onComplete?: () => void
  /** Adds extra space below the line while typing (useful for large titles). */
  cursorClassName?: string
  /** If false, displays text immediately without animation (useful when language changes) */
  animate?: boolean
}

/**
 * Real character-by-character typewriter animation with custom cursor image.
 * Types each character one by one, skipping HTML tags if present.
 */
export function TypewriterTitle({ 
  text, 
  speedMs = 80,
  className = "",
  onComplete,
  cursorClassName = "",
  animate = true,
}: TypewriterTitleProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const onCompleteRef = useRef(onComplete)
  
  // Keep onComplete ref updated without triggering re-renders
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    // If no animation, show text immediately
    if (!animate) {
      setDisplayedText(text || "")
      setIsComplete(true)
      setCursorVisible(false)
      if (onCompleteRef.current) {
        setTimeout(() => {
          onCompleteRef.current?.()
        }, 0)
      }
      return
    }

    setDisplayedText("")
    setIsComplete(false)
    setCursorVisible(true)

    if (!text) return

    let currentIndex = 0
    let timeoutId: NodeJS.Timeout | null = null

    const typeNextChar = () => {
      if (currentIndex >= text.length) {
        setIsComplete(true)
        if (onCompleteRef.current) {
          setTimeout(() => {
            onCompleteRef.current?.()
          }, 500)
        }
        return
      }

      // Skip HTML tags instantly but count them
      let char = text[currentIndex]
      // let nextIndex = currentIndex + 1 // reserved for future use

      if (char === "<") {
        // Find closing >
        const closeIndex = text.indexOf(">", currentIndex)
        if (closeIndex !== -1) {
          // Include the whole tag at once
          setDisplayedText(text.slice(0, closeIndex + 1))
          currentIndex = closeIndex + 1
        } else {
          // Malformed HTML, just advance
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
        }
      } else {
        // Regular character - add it one by one
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
      }

      timeoutId = setTimeout(typeNextChar, speedMs)
    }

    // Start typing after a small delay
    timeoutId = setTimeout(typeNextChar, 300)

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [text, speedMs, animate]) // Added animate to dependencies

  // Blinking cursor animation
  useEffect(() => {
    if (isComplete) return

    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 360) // Blink a bit faster

    return () => clearInterval(interval)
  }, [isComplete])

  // Keep cursor space stable so the line/box doesn't "grow" when the cursor appears/disappears.
  // Cursor is always rendered at 1em x 1em; we only toggle opacity.
  const cursorOpacity = isComplete ? 0 : cursorVisible ? 1 : 0

  return (
    <span className={`inline-block ${className}`}>
      <span dangerouslySetInnerHTML={{ __html: displayedText }} />
      <img
        src="/cursor.png"
        alt=""
        aria-hidden="true"
        className={`inline-block select-none pointer-events-none ml-[0.12em] object-contain ${cursorClassName}`}
        style={{
          // Scale cursor to text size without deforming: height = 1em, width auto keeps PNG ratio
          height: "1em",
          width: "auto",
          verticalAlign: "-0.15em",
          opacity: cursorOpacity,
        }}
      />
    </span>
  )
}
