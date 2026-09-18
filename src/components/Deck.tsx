import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { useLang } from '../i18n/LangContext'
import { Tilt } from './Frames'
import styles from './Deck.module.scss'

export interface DeckCard {
  key: string
  label: string
  node: ReactNode
}

/**
 * A stack of screens: the front card is in flow, the others sit behind it in 3D.
 * Clicking a card or its tab brings it to the front. At most three cards are visible.
 */
export function Deck({ cards, ariaLabel, className }: { cards: DeckCard[]; ariaLabel: string; className?: string }) {
  const { t } = useLang()
  const [front, setFront] = useState(0)
  const tabsRef = useRef<HTMLDivElement>(null)
  const n = cards.length

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    let next = front
    if (e.key === 'ArrowRight') next = (front + 1) % n
    else if (e.key === 'ArrowLeft') next = (front - 1 + n) % n
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = n - 1
    else return
    e.preventDefault()
    setFront(next)
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus()
  }

  return (
    <div className={[styles.wrap, className].filter(Boolean).join(' ')}>
      <Tilt className={styles.scene} max={5}>
        <div className={styles.deck}>
          {cards.map((c, i) => {
            const pos = (i - front + n) % n
            const hidden = pos > 2
            return (
              <button
                type="button"
                key={c.key}
                className={styles.card}
                data-pos={Math.min(pos, 3)}
                onClick={() => setFront(i)}
                aria-label={`${t.journey.show} : ${c.label}`}
                aria-pressed={pos === 0}
                aria-hidden={hidden || undefined}
                tabIndex={pos === 0 || hidden ? -1 : 0}
              >
                {c.node}
              </button>
            )
          })}
        </div>
      </Tilt>
      <div className={styles.tabs} role="tablist" aria-label={ariaLabel} ref={tabsRef} onKeyDown={onKey}>
        {cards.map((c, i) => (
          <button
            type="button"
            role="tab"
            key={c.key}
            aria-selected={front === i}
            tabIndex={front === i ? 0 : -1}
            className={styles.tab}
            onClick={() => setFront(i)}
          >
            <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
            {c.label}
          </button>
        ))}
      </div>
    </div>
  )
}
