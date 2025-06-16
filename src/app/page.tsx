import HeroSection from '@/components/HeroSection'
import ServiceCards from '@/components/ServiceCards'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section - Base Layer */}
      <div className="relative w-full">
        <HeroSection />
      </div>
      
      {/* Service Cards Section - Middle Layer with higher z-index */}
      <div className="relative -mt-16 md:-mt-20 lg:-mt-24 z-[20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceCards />
        </div>
      </div>
      
      {/* About Section - Bottom Layer with background */}
      <div className="relative -mt-12 sm:-mt-16 md:-mt-20 z-[10] pb-16">
        <AboutSection />
      </div>
    </div>
  )
}
