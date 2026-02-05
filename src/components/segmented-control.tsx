"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SegmentedControlProps<T extends string> {
  value: T
  onValueChange: (value: T) => void
  options: {
    value: T
    label?: string
    icon?: React.ReactNode
  }[]
  className?: string
}

export function SegmentedControl<T extends string>({
  value,
  onValueChange,
  options,
  className,
}: SegmentedControlProps<T>) {
  const [activeIndex, setActiveIndex] = React.useState(
    options.findIndex((opt) => opt.value === value)
  )

  React.useEffect(() => {
    const index = options.findIndex((opt) => opt.value === value)
    setActiveIndex(index)
  }, [value, options])

  return (
    <div
      className={cn(
        "relative inline-flex items-center rounded-full bg-secondary/60 p-1 backdrop-blur-sm",
        className
      )}
    >
      {/* Sliding indicator */}
      <div
        className="absolute h-[calc(100%-8px)] rounded-full bg-background shadow-sm transition-all duration-200 ease-out"
        style={{
          width: `calc(${100 / options.length}% - 4px)`,
          left: `calc(${(activeIndex * 100) / options.length}% + 2px)`,
        }}
      />

      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onValueChange(option.value)}
          className={cn(
            "relative z-10 flex items-center justify-center px-3 py-1.5 text-xs font-medium transition-colors duration-200",
            "min-w-[40px]",
            value === option.value
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground/80"
          )}
        >
          {option.icon || option.label}
        </button>
      ))}
    </div>
  )
}
