import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { SplitFlap } from './SplitFlap'
import { ArrowDown, ArrowRight } from './Icons'
import styles from './Hero.module.scss'

export function Hero() {
  const { t } = useLang()
  const reduced = useReducedMotion()
  const colors = t.stations.map((s) => s.color).reverse()

  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(10px)' },
          animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
          transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-name">
      <LineMap colors={colors} reduced={reduced} />

      <div className={styles.inner}>
        <motion.h1 id="hero-name" className={styles.name} {...rise(0.2)}>
          <span>Corentin</span>
          <span>Le Gourrierec</span>
        </motion.h1>

        <motion.div className={styles.boardWrap} {...rise(0.45)}>
          <SplitFlap phrases={t.hero.board} reduced={reduced} />
        </motion.div>

        <motion.p className={styles.intro} {...rise(0.6)}>{t.hero.intro}</motion.p>

        <motion.div className={styles.actions} {...rise(0.7)}>
          <a href="#parcours" className="btn btn--primary">
            {t.hero.ctaJourney} <ArrowRight />
          </a>
          <a href="#contact" className="btn">{t.hero.ctaContact}</a>
        </motion.div>
      </div>

      <a href="#parcours" className={styles.scroll} aria-label={t.hero.scroll}>
        <ArrowDown />
      </a>
    </section>
  )
}

/** The career line drawn across the hero: five stations, oldest to newest. */
function LineMap({ colors, reduced }: { colors: string[]; reduced: boolean }) {
  // points from bottom-left (2013) to top-right (2026)
  // routed along the right edge and above the name so no segment crosses body copy or the board
  const pts = [
    [1440, 720],
    [1240, 720],
    [1060, 540],
    [1060, 330],
    [880, 150],
    [600, 150],
    [430, -20],
  ]
  const d = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x} ${y}`).join(' ')
  const stations = [pts[1], pts[2], pts[3], pts[4], pts[5]]
  return (
    <svg className={styles.map} viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="lineGrad" x1="0" x2="1" y1="1" y2="0">
          {colors.map((c, i) => (
            <stop key={c} offset={`${(i / (colors.length - 1)) * 100}%`} stopColor={c} />
          ))}
        </linearGradient>
      </defs>
      <path d={d} className={styles.mapGhost} />
      <motion.path
        d={d}
        className={styles.mapLine}
        stroke="url(#lineGrad)"
        initial={reduced ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />
      {stations.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="11"
          className={styles.mapStop}
          style={{ stroke: colors[i] }}
          initial={reduced ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 + i * 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      {!reduced && (
        <motion.circle
          r="7"
          className={styles.mapTrain}
          initial={{ offsetDistance: '0%' }}
          animate={{ offsetDistance: '100%' }}
          transition={{ duration: 14, ease: 'linear', repeat: Infinity, repeatDelay: 2 }}
          style={{ offsetPath: `path("${d}")` }}
        />
      )}
    </svg>
  )
}
