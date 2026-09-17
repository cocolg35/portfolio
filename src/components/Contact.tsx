import { useLang } from '../i18n/LangContext'
import { ArrowUp, External, Linkedin, Mail, Phone, Pin } from './Icons'
import styles from './Contact.module.scss'

export function Contact() {
  const { t } = useLang()
  const rows = [
    { icon: <Mail />, label: t.contact.emailLabel, value: t.contact.email, href: `mailto:${t.contact.email}` },
    { icon: <Phone />, label: t.contact.phoneLabel, value: t.contact.phone, href: `tel:${t.contact.phone.replace(/[^\d+]/g, '')}` },
    { icon: <Pin />, label: t.contact.locationLabel, value: t.contact.location },
    ...(t.contact.linkedinUrl
      ? [{ icon: <Linkedin />, label: t.contact.linkedinLabel, value: t.contact.linkedinUrl.replace(/^https?:\/\/(www\.)?/, ''), href: t.contact.linkedinUrl, external: true }]
      : []),
  ]

  return (
    <>
      <section id="contact" className={styles.contact} aria-labelledby="contact-title">
        <div className={styles.inner}>
          <div className={styles.terminus} aria-hidden="true">
            <span className={styles.terminusLine} />
            <span className={styles.terminusStop} />
          </div>
          <h2 id="contact-title" className={styles.title}>{t.contact.title}</h2>
          <p className={styles.lede}>{t.contact.lede}</p>

          <ul className={styles.rows}>
            {rows.map((r) => {
              const inner = (
                <>
                  <span className={styles.rowIcon}>{r.icon}</span>
                  <span className={styles.rowLabel}>{r.label}</span>
                  <span className={styles.rowValue}>
                    {r.value}
                    {'external' in r && r.external && <External className={styles.rowExt} />}
                  </span>
                </>
              )
              return (
                <li key={r.label}>
                  {r.href ? (
                    <a href={r.href} className={styles.row} {...('external' in r && r.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                      {inner}
                    </a>
                  ) : (
                    <span className={styles.row} data-static>{inner}</span>
                  )}
                </li>
              )
            })}
          </ul>

          <a href={`mailto:${t.contact.email}`} className={`btn btn--primary ${styles.cta}`}>
            {t.hero.ctaContact} <Mail />
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>{t.footer.built}</p>
          <p className={styles.credits}>{t.footer.credits}</p>
          <a href="#top" className={styles.top}>
            {t.footer.top} <ArrowUp />
          </a>
        </div>
      </footer>
    </>
  )
}
