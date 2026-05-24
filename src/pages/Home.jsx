import Hero from '../components/home/Hero'
import SocialProof from '../components/home/SocialProof'
import FeaturesSection from '../components/home/FeaturesSection'
import WhySection from '../components/home/WhySection'
import Testimonials from '../components/home/Testimonials'
import Pricing from '../components/home/Pricing'
import CTASection from '../components/home/CTASection'

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
