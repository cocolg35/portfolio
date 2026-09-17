import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { PointerEvent, ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import styles from './Frames.module.scss'

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

export function BrowserFrame({ src, alt, url, className, eager }: { src: string; alt: string; url: string; className?: string; eager?: boolean }) {
  return (
    <figure className={[styles.browser, className].filter(Boolean).join(' ')}>
      <div className={styles.chrome} aria-hidden="true">
        <span className={styles.lights}><i /><i /><i /></span>
        <span className={styles.url}>{url}</span>
      </div>
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </figure>
  )
}

export function PhoneFrame({ src, alt, className, scrolls }: { src: string; alt: string; className?: string; scrolls?: boolean }) {
  return (
    <figure className={[styles.phone, className].filter(Boolean).join(' ')}>
      <span className={styles.notch} aria-hidden="true" />
      <div className={styles.phoneScreen} data-scrolls={scrolls || undefined}>
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
    </figure>
  )
}
