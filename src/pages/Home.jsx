

import Hero from "../components/sections/home/Hero";
import ChurchesCarousel from "../components/sections/home/ChurchesCarousel";
import ProblemSection from "../components/sections/home/ProblemSection";
import FeaturesSection from "../components/sections/home/FeaturesSection";



export default function HomePage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <ChurchesCarousel />
      <ProblemSection />
      <FeaturesSection />
    </main>
  )
}


