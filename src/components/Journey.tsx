import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import type { Station as StationT } from '../i18n/types'
import { StationVisual } from './Visuals'
import { ProjectTour } from './ProjectTour'
import styles from './Journey.module.scss'

export function Journey() {
  const { t } = useLang()
  const reduced = useReducedMotion()
  const trackRef = useRef<HTMLDivElement>(null)
  const [offsets, setOffsets] = useState<number[]>([])
  const [active, setActive] = useState<string>(t.stations[0].id)

  // Measure where each station's heading sits inside the track, for the rail dots.
  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => {
      const h = track.offsetHeight
      const heads = Array.from(track.querySelectorAll<HTMLElement>('[data-station-head]'))
      setOffsets(heads.map((el) => (el.offsetTop + el.offsetHeight / 2) / h))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track)
    return () => ro.disconnect()
  }, [t])

  // Which station is on screen → drives --station colour across the page.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-station]'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.getAttribute('data-station') ?? '')
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [t])

  useEffect(() => {
    const s = t.stations.find((x) => x.id === active)
    if (!s) return
    const root = document.documentElement
    root.style.setProperty('--station', s.color)
    root.style.setProperty('--station-rgb', s.colorRgb)
  }, [active, t])

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 55%', 'end 55%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.5 })
  const fillScale = useTransform(progress, [0, 1], [0, 1])

  return (
    <section id="parcours" className={styles.journey} aria-labelledby="journey-title">
      <div className={styles.glow} aria-hidden="true" />
      <header className={styles.header}>
        <h2 id="journey-title" className="section-title">{t.journey.title}</h2>
        <p className="lede">{t.journey.lede}</p>
      </header>

      <div className={styles.track} ref={trackRef}>
        <div className={styles.rail} aria-hidden="true">
          <span className={styles.railGhost} />
          <motion.span className={styles.railFill} style={{ scaleY: reduced ? 1 : fillScale }} />
          {offsets.map((o, i) => (
            <span
              key={t.stations[i]?.id ?? i}
              className={styles.railStop}
              data-active={t.stations[i]?.id === active || undefined}
              style={{ top: `${o * 100}%`, ['--stop' as string]: t.stations[i]?.color }}
            />
          ))}
          <span className={styles.marker}>
            <span className={styles.markerDot} />
            <span className={styles.markerLabel}>{t.journey.yourHere}</span>
          </span>
        </div>

        <div className={styles.stations}>
          {t.stations.map((s, i) => (
            <Station key={s.id} station={s} index={i} isActive={active === s.id} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Station({ station: s, index, isActive, reduced }: { station: StationT; index: number; isActive: boolean; reduced: boolean }) {
  const { t } = useLang()
  const isIllustration = s.visual === 'facilite'
  const reveal = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: { once: true, margin: '-10% 0px -10% 0px' },
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
      }

  return (
    <article
      className={styles.station}
      data-station={s.id}
      data-active={isActive || undefined}
      data-index={index}
      style={{ ['--s' as string]: s.color, ['--s-rgb' as string]: s.colorRgb }}
      aria-labelledby={`st-${s.id}`}
    >
      <header className={styles.head} data-station-head>
        <p className={styles.years}>
          <span>{s.start}</span>
          <span className={styles.yearsSep} aria-hidden="true" />
          <span>{index === 0 ? t.journey.now : s.end}</span>
        </p>
        <h3
          id={`st-${s.id}`}
          className={styles.company}
          style={{ ['--longest' as string]: Math.max(...s.company.split(/\s+/).map((w) => w.length)) }}
        >
          {s.company}
        </h3>
        <p className={styles.role}>
          {s.role}
          <span className={styles.roleSep} aria-hidden="true">·</span>
          {s.location}
        </p>
      </header>

      <div className={styles.body}>
        <motion.div className={styles.text} {...reveal}>
          <p className={styles.tagline}>{s.tagline}</p>
          <p className={styles.narrative}>{s.narrative}</p>
          <ul className={styles.bullets}>
            {s.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          {s.figures && (
            <dl className={styles.figures}>
              {s.figures.map((f) => (
                <div key={f.label} className={styles.figure}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
              {s.figuresNote && <p className={styles.figuresNote}>{s.figuresNote}</p>}
            </dl>
          )}

          <p className={styles.stackLabel}>{t.journey.stackLabel}</p>
          <ul className={styles.stack} aria-label={t.journey.stackLabel}>
            {s.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </motion.div>

        <motion.figure
          className={styles.visual}
          {...(reduced ? {} : { ...reveal, transition: { ...reveal.transition, delay: 0.12 } })}
        >
          <div className={styles.visualBody}>
            <StationVisual kind={s.visual} />
          </div>
          <figcaption className={styles.caption}>
            <span className={styles.captionTag} data-kind={isIllustration ? 'illustration' : 'real'}>
              {isIllustration ? t.journey.illustrationLabel : t.journey.screenshotLabel}
            </span>
            <span>{s.visualCredit}</span>
          </figcaption>
        </motion.figure>
      </div>

      {s.tour && (
        <motion.div
          className={styles.tourWrap}
          {...(reduced ? {} : { ...reveal, transition: { ...reveal.transition, delay: 0.05 } })}
        >
          <ProjectTour tour={s.tour} stationColor={s.color} />
        </motion.div>
      )}
    </article>
  )
}
