import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import GuaranteeBanner from './components/GuaranteeBanner'
import TransformationSection from './components/TransformationSection'
// import BeforeAfterSection from './components/BeforeAfterSection'
import FacingSection from './components/FacingSection'
import TreatmentsSection from './components/TreatmentsSection'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import StickyBottomCta from './components/StickyBottomCta'
import ThankYou from './components/ThankYou'

const Home = () => (
  <>
    <Hero />
    <GuaranteeBanner />
    <FacingSection />
    <TreatmentsSection />
    <TransformationSection />
    <CtaBanner />
  </>
)

function App() {
  return (
    <div className="pb-16">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
      <Footer />
      <StickyBottomCta />
    </div>
  )
}

export default App
