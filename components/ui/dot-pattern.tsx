"use client"

import React from "react"

import { cn } from "@/lib/utils"

/**
 * DotPatternProps
 *
 * @param {number} [width=16] - Horizontal spacing between dots (px)
 * @param {number} [height=16] - Vertical spacing between dots (px)
 * @param {number} [cx=1] - Horizontal offset of the pattern seed (px)
 * @param {number} [cy=1] - Vertical offset of the pattern seed (px)
 * @param {number} [cr=1] - Radius of each dot (px)
 * @param {string} [className] - Additional classes for the layer
 */
interface DotPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
  cx?: number
  cy?: number
  cr?: number
}

/**
 * DotPattern
 *
 * A dot-grid background drawn with a single repeating CSS
 * `radial-gradient` instead of thousands of SVG nodes.
 *
 * The previous SVG implementation emitted one element per dot
 * (~8,000 on a 1080p viewport), which made full-page renders —
 * including `document.startViewTransition` snapshots used by the
 * theme toggler — noticeably slow. This version is one element
 * regardless of viewport size, so the pattern costs no layout work
 * and view-transition snapshots stay cheap.
 *
 * Dot color follows `currentColor`, so drive it with a `text-*`
 * utility (e.g. `text-foreground/10`).
 */
export function DotPattern({
  width = 16,
  height = 16,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  style,
  ...props
}: DotPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(circle, currentColor ${cr}px, transparent ${cr}px)`,
        backgroundSize: `${width}px ${height}px`,
        backgroundPosition: `${cx}px ${cy}px`,
        ...style,
      }}
      {...props}
    />
  )
}
