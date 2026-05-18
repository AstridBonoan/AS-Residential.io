import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { QuoteForm } from './components/QuoteForm'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-stone-900 focus:shadow-card"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
    </>
  )
}

export default App
