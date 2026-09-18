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

const GAP_SCREENS = [
  { id: 'accueil', fr: 'Accueil', en: 'Home', altFr: 'Page d’accueil du Guichet d’accès à la première ligne numérique', altEn: 'Home page of the digital primary care access point' },
  { id: 'besoin', fr: 'Besoin de santé', en: 'Health need', altFr: 'Choix du besoin de santé parmi huit catégories', altEn: 'Choosing the health need among eight categories' },
  { id: 'orientation', fr: 'Orientation', en: 'Referral', altFr: 'Informations d’orientation : code postal et numéro d’assurance maladie', altEn: 'Referral information: postal code and health insurance number' },
]

/** Three steps of the GAP, each card pairing the desktop page with its mobile counterpart. */
function GapVisual() {
  const { lang } = useLang()
  const fr = lang === 'fr'
  return (
    <Deck
      ariaLabel="GAP"
      className={styles.gapDeck}
      cards={GAP_SCREENS.map((s, i) => ({
        key: s.id,
        label: fr ? s.fr : s.en,
        node: (
          <div className={styles.gap}>
            <BrowserFrame src={`/projects/gap-desktop-${i + 1}.png`} alt={fr ? s.altFr : s.altEn} url="gap.soinsvirtuels.gouv.qc.ca" className={styles.gapDesktop} eager={i === 0} />
            <PhoneFrame src={`/projects/gap-mobile-${i + 1}.png`} alt="" className={styles.gapPhone} scrolls />
          </div>
        ),
      }))}
    />
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
