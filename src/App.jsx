import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTABand from './components/CTABand'
import AboutProduct from './components/AboutProduct'
import ImageShowcase from './components/ImageShowcase'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTABand />
        <AboutProduct />
        <ImageShowcase />
      </main>
      <Footer />
    </>
  )
}
