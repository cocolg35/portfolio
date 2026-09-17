import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { fr } from './fr'
import { en } from './en'
import type { Content, Lang } from './types'

interface LangValue {
  lang: Lang
  t: Content
  setLang: (l: Lang) => void
  toggle: () => void
}

const LangContext = createContext<LangValue | null>(null)
const STORAGE_KEY = 'clg-portfolio-lang'

function detectInitial(): Lang {
  if (typeof window === 'undefined') return 'fr'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'fr' || stored === 'en') return stored
  return 'fr'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitial)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    window.localStorage.setItem(STORAGE_KEY, l)
  }, [])

  const toggle = useCallback(() => setLang(lang === 'fr' ? 'en' : 'fr'), [lang, setLang])

  const t = lang === 'fr' ? fr : en

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.meta.description)
  }, [lang, t])

  const value = useMemo(() => ({ lang, t, setLang, toggle }), [lang, t, setLang, toggle])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): LangValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
