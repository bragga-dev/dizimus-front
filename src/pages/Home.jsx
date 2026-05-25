import Hero from '../components/sections/home/Hero'
import SocialProof from '../components/sections/home/SocialProof'
import FeaturesSection from '../components/sections/home/FeaturesSection'
import WhySection from '../components/sections/home/WhySection'
import Testimonials from '../components/sections/home/Testimonials'
import Pricing from '../components/sections/home/Pricing'
import CTASection from '../components/sections/home/CTASection'

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <FeaturesSection />
      <WhySection />
      <Testimonials />
      <Pricing />
      <CTASection />
    </main>
  )
}
