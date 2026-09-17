import { useEffect, useRef, useState } from 'react'
import styles from './SplitFlap.module.scss'

const CHARSET = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ÉÈÀÇ·,.-’\'+'
const STEP_MS = 62
const MAX_STEPS = 11

interface CellProps {
  target: string
  delay: number
  reduced: boolean
}

function Cell({ target, delay, reduced }: CellProps) {
  const [state, setState] = useState({ shown: ' ', prev: ' ', tick: 0 })
  const current = useRef(' ')

  useEffect(() => {
    const goal = CHARSET.includes(target) ? target : ' '
    if (reduced) {
      current.current = goal
      setState((s) => ({ shown: goal, prev: goal, tick: s.tick + 1 }))
      return
    }
    if (current.current === goal) return

    let timer = 0
    let interval = 0
    const start = () => {
      const goalIdx = CHARSET.indexOf(goal)
      let idx = CHARSET.indexOf(current.current)
      let dist = (goalIdx - idx + CHARSET.length) % CHARSET.length
      if (dist > MAX_STEPS) {
        idx = (goalIdx - MAX_STEPS + CHARSET.length) % CHARSET.length
        dist = MAX_STEPS
      }
      interval = window.setInterval(() => {
        idx = (idx + 1) % CHARSET.length
        const next = CHARSET[idx]
        const prev = current.current
        current.current = next
        setState((s) => ({ shown: next, prev, tick: s.tick + 1 }))
        if (idx === goalIdx) window.clearInterval(interval)
      }, STEP_MS)
    }
    timer = window.setTimeout(start, delay)
    return () => {
      window.clearTimeout(timer)
      window.clearInterval(interval)
    }
  }, [target, delay, reduced])

  const { shown, prev, tick } = state
  return (
    <span className={styles.cell} data-blank={shown === ' ' || undefined}>
      <span className={styles.top}><i>{shown}</i></span>
      <span className={styles.bottom}><i>{prev}</i></span>
      {!reduced && (
        <>
          <span className={styles.flapTop} key={`t${tick}`}><i>{prev}</i></span>
          <span className={styles.flapBottom} key={`b${tick}`}><i>{shown}</i></span>
        </>
      )}
    </span>
  )
}

interface BoardProps {
  phrases: string[]
  length?: number
  hold?: number
  reduced?: boolean
  className?: string
}

/** A split-flap departure board cycling through phrases. */
export function SplitFlap({ phrases, length, hold = 3400, reduced = false, className }: BoardProps) {
  const cols = length ?? Math.max(...phrases.map((p) => p.length))
  const [index, setIndex] = useState(0)

  useEffect(() => {
    // Reduced motion: hold the first phrase, no cycling.
    if (reduced || phrases.length < 2) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % phrases.length), hold)
    return () => window.clearInterval(id)
  }, [phrases.length, hold, reduced])

  const phrase = phrases[index].toUpperCase().padEnd(cols, ' ').slice(0, cols)

  return (
    <div className={[styles.board, className].filter(Boolean).join(' ')} role="status" aria-live="polite" aria-label={phrases[index]}>
      {Array.from(phrase).map((ch, i) => (
        <Cell key={i} target={ch} delay={i * 28} reduced={reduced} />
      ))}
    </div>
  )
}
