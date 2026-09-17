import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import styles from './Expertise.module.scss'

export function Expertise() {
  const { t } = useLang()
  const reduced = useReducedMotion()

  return (
    <section id="expertise" className={styles.expertise} aria-labelledby="expertise-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="expertise-title" className="section-title">{t.expertise.title}</h2>
          <p className="lede">{t.expertise.lede}</p>
        </header>

        <div className={styles.years} aria-label={`${t.expertise.yearsValue} ${t.expertise.yearsLabel}`}>
          <span className={styles.yearsValue}>{t.expertise.yearsValue}</span>
          <span className={styles.yearsLabel}>{t.expertise.yearsLabel}</span>
        </div>

        <div className={styles.platforms}>
          {t.expertise.groups.map((g, gi) => (
            <motion.div
              key={g.title}
              className={styles.platform}
              {...(reduced
                ? {}
                : {
                    initial: { opacity: 0, y: 24 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: '-10% 0px' },
                    transition: { duration: 0.8, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] as const },
                  })}
            >
              <h3 className={styles.platformTitle}>
                <span className={styles.platformIndex} aria-hidden="true">{String.fromCharCode(65 + gi)}</span>
                {g.title}
              </h3>
              <ul className={styles.skills}>
                {g.skills.map((s) => (
                  <li key={s} className={styles.skill}>
                    <span className={styles.skillFace}>{s}</span>
                    <span className={styles.skillFace} aria-hidden="true">{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
