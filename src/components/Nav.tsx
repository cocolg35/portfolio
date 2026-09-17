import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LangContext'
import styles from './Nav.module.scss'

export function Nav() {
  const { t, lang, toggle } = useLang()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 })
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#parcours', label: t.nav.journey },
    { href: '#expertise', label: t.nav.expertise },
    { href: '#formation', label: t.nav.education },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <>
      <a href="#main" className={styles.skip}>{t.nav.skip}</a>
      <header className={styles.nav} data-scrolled={scrolled || undefined}>
        <a href="#top" className={styles.brand} aria-label={t.hero.name}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.brandText}>Corentin<em>Le Gourrierec</em></span>
        </a>
        <nav className={styles.links} aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <button type="button" className={styles.lang} onClick={toggle} aria-label={t.meta.switchTo} title={t.meta.switchTo}>
          <span data-active={lang === 'fr' || undefined}>FR</span>
          <span className={styles.langSep} aria-hidden="true">/</span>
          <span data-active={lang === 'en' || undefined}>EN</span>
        </button>
        <motion.div className={styles.progress} style={{ scaleX: progress }} aria-hidden="true" />
      </header>
    </>
  )
}
