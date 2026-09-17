import { useEffect } from 'react'
import Lenis from 'lenis'

function scrollToHash(hash: string, lenis?: Lenis) {
  if (!hash || hash === '#top') {
    if (lenis) lenis.scrollTo(0, { immediate: false })
    else window.scrollTo({ top: 0 })
    return
  }
  const target = document.querySelector<HTMLElement>(hash)
  if (!target) return
  if (lenis) lenis.scrollTo(target, { offset: -24 })
  else target.scrollIntoView({ block: 'start' })
}

/**
 * Smooth, inertial scrolling plus in-page anchor handling.
 * Lenis is skipped when the user prefers reduced motion; anchors still work.
 */
export function useLenis(enabled: boolean) {
  useEffect(() => {
    let lenis: Lenis | undefined
    let raf = 0

    if (enabled) {
      lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 0.95 })
      if (import.meta.env.DEV) (window as unknown as { __lenis?: Lenis }).__lenis = lenis
      const loop = (time: number) => {
        lenis?.raf(time)
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    }

    // Landing on a hash: React has only just rendered the targets.
    if (window.location.hash) {
      const hash = window.location.hash
      requestAnimationFrame(() => {
        const target = document.querySelector<HTMLElement>(hash)
        if (!target) return
        if (lenis) lenis.scrollTo(target, { immediate: true, offset: -24 })
        else target.scrollIntoView()
      })
    }

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!a) return
      const hash = a.getAttribute('href') ?? ''
      if (hash.length < 1) return
      e.preventDefault()
      scrollToHash(hash, lenis)
      history.replaceState(null, '', hash === '#top' ? window.location.pathname : hash)
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(raf)
      lenis?.destroy()
    }
  }, [enabled])
}
