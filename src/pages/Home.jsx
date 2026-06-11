import Hero from '../components/sections/home/Hero'
import ChurchesCarousel from '../components/sections/home/ChurchesCarousel'
import ProblemSection from '../components/sections/home/ProblemSection'
import FeaturesSection from '../components/sections/home/FeaturesSection'
import BenefitsSection from '../components/sections/home/BenefitsSection'
import TestimonialsSection from '../components/sections/home/TestimonialsSection'
import PricingSection from '../components/sections/home/PricingSection'
import CTASection from '../components/sections/home/CTASection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <ChurchesCarousel />
      <ProblemSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </div>
  )
}