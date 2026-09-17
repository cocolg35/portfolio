import { useLang } from '../i18n/LangContext'
import styles from './Education.module.scss'

export function Education() {
  const { t } = useLang()
  return (
    <section id="formation" className={styles.education} aria-labelledby="education-title">
      <div className={styles.inner}>
        <h2 id="education-title" className="section-title">{t.education.title}</h2>

        <div className={styles.columns}>
          <ul className={styles.degrees}>
            {t.education.degrees.map((d) => (
              <li key={d.title} className={styles.degree}>
                <span className={styles.degreeYears}>{d.years}</span>
                <span className={styles.degreeTitle}>{d.title}</span>
                <span className={styles.degreeSchool}>{d.school} · {d.place}</span>
              </li>
            ))}
          </ul>

          <div className={styles.side}>
            <div>
              <h3 className={styles.sideTitle}>{t.education.languagesTitle}</h3>
              <ul className={styles.langs}>
                {t.education.languages.map((l) => (
                  <li key={l.name} className={styles.lang}>
                    <span className={styles.langName}>{l.name}</span>
                    <span className={styles.langLevel}>{l.level}</span>
                    <span className={styles.langTrack} aria-hidden="true">
                      <span className={styles.langFill} style={{ width: `${l.pct}%` }} />
                      <span className={styles.langStop} style={{ left: `${l.pct}%` }} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.sideTitle}>{t.education.interestsTitle}</h3>
              <ul className={styles.interests}>
                {t.education.interests.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
