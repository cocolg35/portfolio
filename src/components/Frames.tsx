import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { PointerEvent, ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import styles from './Frames.module.scss'

/** Public assets are referenced from the site root ('/projects/…'); prefix them with Vite's base. */
const asset = (src: string) => (src.startsWith('/') ? import.meta.env.BASE_URL + src.slice(1) : src)

/** Perspective tilt that follows the pointer. Inert on touch and reduced motion. */
export function Tilt({ children, className, max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const reduced = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 120, damping: 18, mass: 0.6 })
  const sy = useSpring(py, { stiffness: 120, damping: 18, mass: 0.6 })
  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const rotateX = useTransform(sy, [0, 1], [max, -max])

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const onLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <div className={[styles.tiltScene, className].filter(Boolean).join(' ')} onPointerMove={onMove} onPointerLeave={onLeave}>
      <motion.div className={styles.tiltBody} style={reduced ? undefined : { rotateX, rotateY }}>
        {children}
      </motion.div>
    </div>
  )
}

export function BrowserFrame({ src, alt, url, className, eager, ratio }: { src: string; alt: string; url: string; className?: string; eager?: boolean; ratio?: string }) {
  return (
    <figure className={[styles.browser, className].filter(Boolean).join(' ')}>
      <div className={styles.chrome} aria-hidden="true">
        <span className={styles.lights}><i /><i /><i /></span>
        <span className={styles.url}>{url}</span>
      </div>
      <img src={asset(src)} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" style={ratio ? { aspectRatio: ratio } : undefined} />
    </figure>
  )
}

export function PhoneFrame({ src, alt, className, scrolls, old }: { src: string; alt: string; className?: string; scrolls?: boolean; old?: boolean }) {
  return (
    <figure className={[old ? styles.phoneOld : styles.phone, className].filter(Boolean).join(' ')}>
      <span className={old ? undefined: styles.notch} aria-hidden="true" />
      <div className={old ? styles.phoneScreenOld : styles.phoneScreen} data-scrolls={scrolls || undefined}>
        <img src={asset(src)} alt={alt} loading="lazy" decoding="async" />
      </div>
    </figure>
  )
}

export function TabletFrame({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={[styles.tablet, className].filter(Boolean).join(' ')}>
      <div className={styles.tabletScreen}>
        <img src={asset(src)} alt={alt} loading="lazy" decoding="async" />
      </div>
    </figure>
  )
}

export function PhotoFrame({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={[styles.photo, className].filter(Boolean).join(' ')}>
      <img src={asset(src)} alt={alt} loading="lazy" decoding="async" />
    </figure>
  )
}

/** A bare dark frame that keeps the image's own aspect ratio. */
export function PlainFrame({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={[styles.plain, className].filter(Boolean).join(' ')}>
      <img src={asset(src)} alt={alt} loading="lazy" decoding="async" />
    </figure>
  )
}

/** A bare app icon, rounded like a home-screen tile. */
export function IconFrame({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={[styles.icon, className].filter(Boolean).join(' ')}>
      <img src={asset(src)} alt={alt} loading="lazy" decoding="async" />
    </figure>
  )
}
