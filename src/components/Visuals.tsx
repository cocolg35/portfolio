import { useState } from 'react'
import type { VisualKind } from '../i18n/types'
import { useLang } from '../i18n/LangContext'
import { BrowserFrame, PhoneFrame, Tilt } from './Frames'
import { Camera, Clock, Map, Museum, Pin, Ticket, Bus } from './Icons'
import styles from './Visuals.module.scss'

export function StationVisual({ kind }: { kind: VisualKind }) {
  switch (kind) {
    case 'gap':
      return <GapVisual />
    case 'appia':
      return <AppiaVisual />
    case 'showroom':
      return <ShowroomVisual />
    case 'facilite':
      return <FaciliteVisual />
    case 'lorient':
      return <LorientVisual />
  }
}

function GapVisual() {
  const { lang } = useLang()
  const alt =
    lang === 'fr'
      ? 'Page d’accueil du Guichet d’accès à la première ligne numérique du Gouvernement du Québec'
      : 'Home page of the Québec government digital primary care access point'
  return (
    <Tilt className={styles.gap}>
      <BrowserFrame src="/projects/gap-desktop-crop.png" alt={alt} url="gap.soinsvirtuels.gouv.qc.ca" className={styles.gapDesktop} />
      <PhoneFrame src="/projects/gap-mobile.png" alt="" className={styles.gapPhone} scrolls />
    </Tilt>
  )
}

const APPIA_SCREENS = [
  { id: 'departure', src: '/projects/appia-departure-screen.png', fr: 'Tableau de bord des départs', en: 'Departure dashboard' },
  { id: 'forecast', src: '/projects/appia-forecast-screen.png', fr: 'Analyse des prévisions', en: 'Forecast analysis' },
  { id: 'competition', src: '/projects/appia-competition-screen.png', fr: 'Analyse de la concurrence', en: 'Competition analysis' },
]

function AppiaVisual() {
  const { lang } = useLang()
  const [front, setFront] = useState(0)
  return (
    <div className={styles.appia}>
      <Tilt className={styles.deckScene} max={5}>
        <div className={styles.deck}>
          {APPIA_SCREENS.map((s, i) => {
            const pos = (i - front + APPIA_SCREENS.length) % APPIA_SCREENS.length
            return (
              <button
                type="button"
                key={s.id}
                className={styles.deckCard}
                data-pos={pos}
                onClick={() => setFront(i)}
                aria-label={lang === 'fr' ? `Afficher : ${s.fr}` : `Show: ${s.en}`}
                aria-pressed={pos === 0}
                tabIndex={pos === 0 ? -1 : 0}
              >
                <BrowserFrame src={s.src} alt={`Appia — ${lang === 'fr' ? s.fr : s.en}`} url="appia — expretio" eager={i === 0} />
              </button>
            )
          })}
        </div>
      </Tilt>
      <div className={styles.deckTabs} role="tablist" aria-label="Appia">
        {APPIA_SCREENS.map((s, i) => (
          <button
            type="button"
            role="tab"
            key={s.id}
            aria-selected={front === i}
            className={styles.deckTab}
            onClick={() => setFront(i)}
          >
            <span className={styles.deckIndex}>{String(i + 1).padStart(2, '0')}</span>
            {lang === 'fr' ? s.fr : s.en}
          </button>
        ))}
      </div>
    </div>
  )
}

function ShowroomVisual() {
  const { lang } = useLang()
  return (
    <Tilt className={styles.showroom} max={6}>
      <BrowserFrame
        src="/projects/showroom-tablet-screen.png"
        alt={lang === 'fr' ? 'Showroom 360 : configuration d’un véhicule et calcul du financement' : 'Showroom 360: vehicle build and financing calculator'}
        url="showroom 360 — build & buy"
        ratio="288 / 228"
      />
    </Tilt>
  )
}

const LEGACY = [
  ['$(', "'#orders'", ').on(', "'click'", ', ', "'.row'", ', function () {'],
  ['  var id = $(this).data(', "'id'", ');'],
  ['  $.get(', "'/orders/'", ' + id, function (html) {'],
  ['    $(', "'#detail'", ').html(html).show();'],
  ['  });'],
  ['});'],
]
const MODERN = [
  ['export function OrderList({ orders }: Props) {'],
  ['  const [selected, select] = useState<Order>()'],
  ['  return ('],
  ['    <ul onSelect={select}>'],
  ['      {orders.map((o) => <OrderRow key={o.id} {...o} />)}'],
  ['    </ul>'],
  ['  )'],
  ['}'],
]

function FaciliteVisual() {
  const { lang } = useLang()
  return (
    <Tilt className={styles.facilite} max={5}>
      <div className={styles.editor} role="img" aria-label={lang === 'fr' ? 'Illustration : migration d’une interface jQuery vers React' : 'Illustration: migrating a jQuery interface to React'}>
        <div className={styles.editorTabs} aria-hidden="true">
          <span data-state="old">orders.legacy.js</span>
          <span data-state="new">OrderList.tsx</span>
        </div>
        <div className={styles.editorPanes} aria-hidden="true">
          <pre className={styles.pane} data-state="old">
            {LEGACY.map((line, i) => (
              <span key={i} className={styles.line}><b>{i + 1}</b>{line.join('')}</span>
            ))}
          </pre>
          <span className={styles.editorArrow} aria-hidden="true">→</span>
          <pre className={styles.pane} data-state="new">
            {MODERN.map((line, i) => (
              <span key={i} className={styles.line}><b>{i + 1}</b>{line.join('')}</span>
            ))}
          </pre>
        </div>
      </div>
    </Tilt>
  )
}

function LorientVisual() {
  const { lang } = useLang()
  const fr = lang === 'fr'
  const tiles = [
    { icon: <Museum />, label: fr ? 'Visite' : 'Tour', wide: true },
    { icon: <Ticket />, label: fr ? 'Billets' : 'Tickets' },
    { icon: <Clock />, label: fr ? 'Horaires' : 'Hours' },
    { icon: <Map />, label: fr ? 'Plan' : 'Map', wide: true },
    { icon: <Bus />, label: fr ? 'Accès' : 'Access' },
    { icon: <Camera />, label: fr ? 'Galerie' : 'Gallery' },
  ]
  return (
    <div className={styles.lorient} role="img" aria-label={fr ? 'Illustration : application Windows 8.1 pour un musée et application mobile de signalement' : 'Illustration: Windows 8.1 museum app and incident reporting mobile app'}>
      <Tilt className={styles.tilesScene} max={5}>
        <div className={styles.tiles} aria-hidden="true">
          <div className={styles.tilesHead}>{fr ? 'Pôle muséal' : 'Museum hub'}</div>
          {tiles.map((tile, i) => (
            <div key={i} className={styles.tile} data-wide={tile.wide || undefined} style={{ ['--i' as string]: i }}>
              {tile.icon}
              <span>{tile.label}</span>
            </div>
          ))}
        </div>
      </Tilt>
      <div className={styles.report} aria-hidden="true">
        <div className={styles.reportBar} />
        <div className={styles.reportMap}>
          <Pin />
        </div>
        <div className={styles.reportForm}>
          <span className={styles.reportTitle}>{fr ? 'Signaler' : 'Report'}</span>
          <span className={styles.reportField} style={{ width: '82%' }} />
          <span className={styles.reportField} style={{ width: '58%' }} />
          <span className={styles.reportPhoto}><Camera /></span>
          <span className={styles.reportSend}>{fr ? 'Envoyer' : 'Send'}</span>
        </div>
      </div>
    </div>
  )
}
