import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import AddOns from '@/components/AddOns'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Pricing />
      <AddOns />
      <FinalCTA />
      <Footer />
    </main>
  )
}
