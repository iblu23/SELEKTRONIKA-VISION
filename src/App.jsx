import Navigation from './components/Navigation'
import Hero from './components/Hero'
import News from './components/News'
import Events from './components/Events'
import Artists from './components/Artists'
import About from './components/About'
import Footer from './components/Footer'
import LanguageSwitcher from './components/LanguageSwitcher'
import { TranslationProvider } from './contexts/TranslationContext'
import SoundWaveBackground from './components/SoundWaveBackground'

function App() {
  return (
    <TranslationProvider>
      <div className="relative min-h-screen bg-void text-white">
        <SoundWaveBackground />
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <News />
          <Events />
          <Artists />
          <About />
          <Footer />
          <LanguageSwitcher />
        </div>
      </div>
    </TranslationProvider>
  )
}

export default App
