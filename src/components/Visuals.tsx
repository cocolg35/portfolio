import type { VisualKind } from '../i18n/types'
import { useLang } from '../i18n/LangContext'
import { BrowserFrame, PhoneFrame, PhotoFrame, Tilt } from './Frames'
import { Deck } from './Deck'
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
    <div className={styles.gapStack}>
      <Tilt className={styles.gap}>
        <BrowserFrame src="/projects/gap-desktop-1.png" alt={alt} url="gap.soinsvirtuels.gouv.qc.ca" className={styles.gapDesktop} />
        <PhoneFrame src="/projects/gap-mobile-1.png" alt="" className={styles.gapPhone} scrolls />
      </Tilt>
      <Tilt className={styles.gap}>
        <BrowserFrame src="/projects/gap-desktop-2.png" alt={alt} url="gap.soinsvirtuels.gouv.qc.ca" className={styles.gapDesktop} />
        <PhoneFrame src="/projects/gap-mobile-2.png" alt="" className={styles.gapPhone} scrolls />
      </Tilt>
      <Tilt className={styles.gap}>
        <BrowserFrame src="/projects/gap-desktop-3.png" alt={alt} url="gap.soinsvirtuels.gouv.qc.ca" className={styles.gapDesktop} />
        <PhoneFrame src="/projects/gap-mobile-3.png" alt="" className={styles.gapPhone} scrolls />
      </Tilt>
    </div>
  )
}

const APPIA_SCREENS = [
  { id: 'departure', src: '/projects/appia-departure-screen.png', fr: 'Tableau de bord des départs', en: 'Departure dashboard' },
  { id: 'forecast', src: '/projects/appia-forecast-screen.png', fr: 'Analyse des prévisions', en: 'Forecast analysis' },
  { id: 'competition', src: '/projects/appia-competition-screen.png', fr: 'Analyse de la concurrence', en: 'Competition analysis' },
]

function AppiaVisual() {
  const { lang } = useLang()
  return (
    <Deck
      ariaLabel="Appia"
      className={styles.appia}
      cards={APPIA_SCREENS.map((s, i) => {
        const label = lang === 'fr' ? s.fr : s.en
        return { key: s.id, label, node: <BrowserFrame src={s.src} alt={`Appia — ${label}`} url="appia — expretio" eager={i === 0} /> }
      })}
    />
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
  return (
    <Tilt className={styles.lorient} max={6}>
      <PhotoFrame
        src="/projects/lorient/musee-borne.jpg"
        alt={fr ? 'Borne tactile du musée de la Compagnie des Indes avec l’application en cours d’utilisation' : 'Touch kiosk at the Musée de la Compagnie des Indes running the application'}
        className={styles.lorientPhoto}
      />
      <PhoneFrame
        src="/projects/lorient/siv-signalement.jpg"
        alt={fr ? 'Application SIV Lorient : formulaire de signalement Propreté et espaces verts' : 'SIV Lorient app: cleanliness and green spaces reporting form'}
        className={styles.lorientPhone}
        old
      />
    </Tilt>
  )
}
