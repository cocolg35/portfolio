import { AnimatePresence, motion } from 'framer-motion'
import { useId, useRef, useState, type KeyboardEvent } from 'react'
import type { FrameKind, Tour, TourVisual } from '../i18n/types'
import { useLang } from '../i18n/LangContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { BrowserFrame, IconFrame, PhoneFrame, PhotoFrame, PlainFrame, TabletFrame } from './Frames'
import { Deck } from './Deck'
import styles from './ProjectTour.module.scss'

/** One visual in its frame. `fill` drops the per-frame width so the parent group sizes it. */
function Visual({ v, fill }: { v: TourVisual; fill?: boolean }) {
  const cls = (own: string) => (fill ? styles.fill : own)
  switch (v.frame) {
    case 'browser':
      return <BrowserFrame src={v.src} alt={v.alt} url={v.url ?? ''} className={cls(styles.browser)} />
    case 'phone':
      return <PhoneFrame src={v.src} alt={v.alt} className={cls(v.small ? styles.phoneSmall : styles.phone)} old={v.old} />
    case 'tablet':
      return <TabletFrame src={v.src} alt={v.alt} className={cls(styles.tablet)} />
    case 'photo':
      return <PhotoFrame src={v.src} alt={v.alt} className={cls(styles.photoFrame)} />
    case 'plain':
      return <PlainFrame src={v.src} alt={v.alt} className={cls(v.small ? styles.plainSmall : styles.plainFrame)} />
    case 'icon':
      return <IconFrame src={v.src} alt={v.alt} className={cls(styles.iconFrame)} />
  }
}

interface Group {
  frame: FrameKind
  items: { v: TourVisual; i: number }[]
}

/** Visuals grouped by frame, in order of first appearance. */
function groupByFrame(visuals: TourVisual[]): Group[] {
  const groups: Group[] = []
  visuals.forEach((v, i) => {
    const g = groups.find((x) => x.frame === v.frame)
    if (g) g.items.push({ v, i })
    else groups.push({ frame: v.frame, items: [{ v, i }] })
  })
  return groups
}

/**
 * A branch line off the main rail: one stop per sub-project, one panel at a time.
 * Tabs follow the WAI-ARIA tabs pattern (arrow keys move between stops).
 */
export function ProjectTour({ tour, stationColor }: { tour: Tour; stationColor: string }) {
  const { t } = useLang()
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)
  const baseId = useId()
  const tabsRef = useRef<HTMLDivElement>(null)
  const item = tour.items[active]

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const n = tour.items.length
    let next = active
    if (e.key === 'ArrowRight') next = (active + 1) % n
    else if (e.key === 'ArrowLeft') next = (active - 1 + n) % n
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = n - 1
    else return
    e.preventDefault()
    setActive(next)
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus()
  }

  const frames = item.visuals.map((v) => v.frame)
  const layout = frames.every((f) => f === 'phone' || f === 'plain') ? 'phones' : frames.includes('phone') ? 'mixed' : 'wide'
  const groups = tour.stacked ? groupByFrame(item.visuals) : []

  return (
    <section className={styles.tour} aria-label={tour.title} style={{ ['--s' as string]: stationColor }}>
      <header className={styles.head}>
        <h4 className={styles.title}>{tour.title}</h4>
        <p className={styles.lede}>{tour.lede}</p>
      </header>

      <div className={styles.branch} role="tablist" aria-label={t.journey.tourAria} ref={tabsRef} onKeyDown={onKey}>
        {tour.items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            role="tab"
            id={`${baseId}-tab-${it.id}`}
            aria-selected={i === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={i === active ? 0 : -1}
            className={styles.stop}
            data-active={i === active || undefined}
            data-passed={i < active || undefined}
            onClick={() => setActive(i)}
          >
            <span className={styles.stopDot} aria-hidden="true" />
            <span className={styles.stopLabel}>{it.label}</span>
            {it.year && <span className={styles.stopYear}>{it.year}</span>}
          </button>
        ))}
      </div>

      <div className={styles.panelWrap} id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${item.id}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={item.id}
            className={styles.panel}
            data-layout={layout}
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.text}>
              <h5 className={styles.itemTitle}>{item.title}</h5>
              <p className={styles.itemText}>{item.text}</p>
              {item.bullets && (
                <ul className={styles.bullets}>
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              <p className={styles.credit}>
                <span className={styles.tag} data-kind={item.kind}>
                  {item.kind === 'real' ? t.journey.screenshotLabel : t.journey.mockupLabel}
                </span>
                <span>{item.credit}</span>
              </p>
            </div>
            {tour.stacked ? (
              <div className={styles.visuals} data-stacked data-groups={groups.length}>
                {groups.map((g) => (
                  <div key={g.frame} className={styles.group} data-frame={g.frame}>
                    {g.items.length > 1 && g.frame !== 'icon' ? (
                      <Deck
                        ariaLabel={item.title}
                        cards={g.items.map(({ v, i }) => ({ key: String(i), label: v.label ?? String(i + 1), node: <Visual v={v} fill /> }))}
                      />
                    ) : (
                      g.items.map(({ v, i }) => <Visual key={i} v={v} fill />)
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.visuals} data-count={item.visuals.length}>
                {item.visuals.map((v, i) => (
                  <Visual key={i} v={v} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
