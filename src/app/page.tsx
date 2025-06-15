import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServiceCards from '@/components/ServiceCards'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative">
        <HeroSection />
      </div>
      
      {/* Service Cards - responsive positioning */}
      <div className="lg:relative lg:-mt-48 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:pb-0">
          <ServiceCards />
        </div>
      </div>
      
      <AboutSection />
    </div>
  )
}
