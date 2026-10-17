"use client"

import Image from "next/image"
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react"

/**
 * FlyingRobot
 *
 * Decorative robot that rests in the bottom-right corner. It can be
 * dragged anywhere (pointer events, so mouse and touch both work); when
 * released it holds still for a beat, then glides slowly back home.
 *
 * A tap/click without dragging pops a short speech bubble and freezes
 * the robot's idle tilt; both reset after a few seconds. Yank it around
 * twice and it gets fed up with you.
 *
 * The overlay is `pointer-events-none` and the button is `tabIndex=-1`
 * + `aria-hidden`, so it stays decorative and never blocks the page.
 */
const MESSAGE = "How can I help you?"
const FRUSTRATED = "Tangina mo ah"
const VISIBLE_MS = 4000
const RETURN_DELAY_MS = 1000
const RETURN_MS = 1800
const DRAG_THRESHOLD = 4

export function FlyingRobot() {
  const [open, setOpen] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [message, setMessage] = useState(MESSAGE)
  const [mood, setMood] = useState<"idle" | "angry">("idle")

  const buttonRef = useRef<HTMLButtonElement>(null)
  const animationRef = useRef<Animation | null>(null)
  const offset = useRef({ x: 0, y: 0 })
  const start = useRef({ px: 0, py: 0, ox: 0, oy: 0 })
  const activeId = useRef<number | null>(null)
  const moved = useRef(false)
  const dragCount = useRef(0)
  const timer = useRef<number | undefined>(undefined)
  const returnTimer = useRef<number | undefined>(undefined)

  const clear = useCallback(() => {
    if (timer.current !== undefined) {
      window.clearTimeout(timer.current)
      timer.current = undefined
    }
  }, [])

  const reveal = useCallback(
    (text: string, nextMood: "idle" | "angry" = "idle") => {
      setMessage(text)
      setMood(nextMood)
      setOpen(true)
      clear()
      timer.current = window.setTimeout(() => setOpen(false), VISIBLE_MS)
    },
    [clear],
  )

  useEffect(() => {
    return () => {
      clear()
      if (returnTimer.current !== undefined) {
        window.clearTimeout(returnTimer.current)
      }
    }
  }, [clear])

  const setTranslate = (x: number, y: number) => {
    offset.current = { x, y }
    const node = buttonRef.current
    if (node) node.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  const cancelReturn = () => {
    if (returnTimer.current !== undefined) {
      window.clearTimeout(returnTimer.current)
      returnTimer.current = undefined
    }
    animationRef.current?.cancel()
    animationRef.current = null
  }

  const flyHome = () => {
    const node = buttonRef.current
    if (!node) return
    if (offset.current.x === 0 && offset.current.y === 0) {
      node.style.transform = ""
      return
    }

    // Hold still for a beat, then glide home slowly.
    returnTimer.current = window.setTimeout(() => {
      returnTimer.current = undefined
      const from = offset.current
      if (from.x === 0 && from.y === 0) return
      offset.current = { x: 0, y: 0 }
      const anim = node.animate(
        [
          { transform: `translate3d(${from.x}px, ${from.y}px, 0)` },
          { transform: "translate3d(0, 0, 0)" },
        ],
        { duration: RETURN_MS, easing: "cubic-bezier(0.45, 0, 0.25, 1)" },
      )
      animationRef.current = anim
      anim.onfinish = () => {
        if (buttonRef.current) buttonRef.current.style.transform = ""
        if (animationRef.current === anim) animationRef.current = null
      }
    }, RETURN_DELAY_MS)
  }

  const onPointerDown = (e: PointerEvent<HTMLButtonElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return
    cancelReturn()
    activeId.current = e.pointerId
    moved.current = false
    start.current = {
      px: e.clientX,
      py: e.clientY,
      ox: offset.current.x,
      oy: offset.current.y,
    }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: PointerEvent<HTMLButtonElement>) => {
    if (activeId.current !== e.pointerId) return
    const dx = e.clientX - start.current.px
    const dy = e.clientY - start.current.py
    if (!moved.current && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
      moved.current = true
      setDragging(true)
    }
    if (moved.current) setTranslate(start.current.ox + dx, start.current.oy + dy)
  }

  const onPointerUp = (e: PointerEvent<HTMLButtonElement>) => {
    if (activeId.current !== e.pointerId) return
    activeId.current = null
    setDragging(false)
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
    if (!moved.current) {
      reveal(MESSAGE)
      return
    }
    // Yank it around twice and it loses its patience.
    dragCount.current += 1
    if (dragCount.current % 2 === 0) {
      reveal(FRUSTRATED, "angry")
    }
    flyHome()
  }

  const onPointerCancel = (e: PointerEvent<HTMLButtonElement>) => {
    if (activeId.current !== e.pointerId) return
    activeId.current = null
    setDragging(false)
    flyHome()
  }

  return (
    <div className="flying-robot pointer-events-none fixed right-4 bottom-28 z-20 select-none lg:right-6 lg:bottom-6">
      <button
        ref={buttonRef}
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        data-dragging={dragging}
        data-paused={open}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        className="robot-hit pointer-events-auto"
      >
        <Image
          src="/robot.gif"
          alt=""
          width={96}
          height={96}
          unoptimized
          draggable={false}
          className="robot-gif drop-shadow-lg"
        />
        <span className="robot-bubble" data-open={open} data-mood={mood}>
          {message}
        </span>
      </button>
    </div>
  )
}
