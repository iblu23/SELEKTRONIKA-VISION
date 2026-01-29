import Navigation from './components/Navigation'
import Hero from './components/Hero'
import News from './components/News'
import Events from './components/Events'
import Artists from './components/Artists'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-void text-white">
      <Navigation />
      <Hero />
      <News />
      <Events />
      <Artists />
      <About />
      <Footer />
    </div>
  )
}

export default App
