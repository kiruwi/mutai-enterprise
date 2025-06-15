import Image from 'next/image';
import truckImage from '@/images/truck.png';
import bgImage from '@/images/bg background.jpg';
import '@/styles/HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background Image with Overlay */}
      <div className="hero-background-image">
        <Image 
          src={bgImage} 
          alt="Background" 
          fill 
          priority
          className="object-cover"
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      {/* Background Pattern */}
      <div className="hero-bg-pattern">
        <div className="hero-primary-blob"></div>
        <div className="hero-secondary-blob"></div>
      </div>

      <div className="hero-content-container">
        <div className="hero-flex-container">
          {/* Left Content - Text */}
          <div className="hero-text-container">
            <div className="max-w-xl">
              <h1 className="hero-heading uppercase">
                Logistics and Freight Services<br />
                <span className="hero-heading-highlight">Across Kenya & Beyond</span> <br />
              </h1>
              <p className="hero-paragraph">
                Premier Kenya freight forwarding with specialized transit services to Uganda. 
                Serving major routes including Nairobi, Mombasa, and Kampala with reliable road freight solutions.
              </p>
            </div>
          </div>
          
          {/* Right Content - Truck Image */}
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <Image 
                src={truckImage} 
                alt="Logistics Truck" 
                className="object-contain w-full h-auto animate-fade-in" 
                width={800}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
