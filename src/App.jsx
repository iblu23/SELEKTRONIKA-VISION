import Navigation from './components/Navigation'
import Hero from './components/Hero'
import News from './components/News'
import Events from './components/Events'
import Artists from './components/Artists'
import About from './components/About'
import Footer from './components/Footer'
import LanguageSwitcher from './components/LanguageSwitcher'
import { TranslationProvider } from './contexts/TranslationContext'

function App() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-void text-white">
        <Navigation />
        <Hero />
        <News />
        <Events />
        <Artists />
        <About />
        <Footer />
        <LanguageSwitcher />
      </div>
    </TranslationProvider>
  )
}

export default App
