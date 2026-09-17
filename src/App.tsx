import { LangProvider } from './i18n/LangContext'
import { useReducedMotion } from './hooks/useReducedMotion'
import { useLenis } from './hooks/useLenis'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Expertise } from './components/Expertise'
import { Education } from './components/Education'
import { Contact } from './components/Contact'

function Page() {
  const reduced = useReducedMotion()
  useLenis(!reduced)
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Journey />
        <Expertise />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  )
}
