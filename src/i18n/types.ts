export type Lang = 'fr' | 'en'

export type VisualKind = 'gap' | 'appia' | 'showroom' | 'facilite' | 'lorient'

export interface Figure {
  value: string
  label: string
}

export interface Station {
  id: string
  company: string
  role: string
  start: string
  end: string
  location: string
  color: string
  colorRgb: string
  tagline: string
  narrative: string
  bullets: string[]
  stack: string[]
  figures?: Figure[]
  figuresNote?: string
  visual: VisualKind
  visualCredit: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Degree {
  title: string
  school: string
  place: string
  years: string
}

export interface Content {
  meta: { title: string; description: string; langLabel: string; switchTo: string }
  nav: { journey: string; expertise: string; education: string; contact: string; skip: string }
  hero: {
    name: string
    board: string[]
    intro: string
    ctaJourney: string
    ctaContact: string
    scroll: string
  }
  journey: {
    title: string
    lede: string
    now: string
    present: string
    stackLabel: string
    illustrationLabel: string
    screenshotLabel: string
    sourceLabel: string
    yourHere: string
  }
  stations: Station[]
  expertise: {
    title: string
    lede: string
    groups: SkillGroup[]
  }
  education: {
    title: string
    degrees: Degree[]
    languagesTitle: string
    languages: { name: string; level: string; pct: number }[]
    interestsTitle: string
    interests: string[]
  }
  contact: {
    title: string
    lede: string
    email: string
    phone: string
    location: string
    linkedinLabel: string
    linkedinUrl: string
    emailLabel: string
    phoneLabel: string
    locationLabel: string
  }
  footer: {
    built: string
    credits: string
    top: string
  }
}
