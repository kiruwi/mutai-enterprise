"use client";

import Image from 'next/image';
import truckImage from '@/images/truck.png';
import bgImage from '@/images/bg background.jpg';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  // Force image rendering even in static export mode
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Ensure the image is processed for display after component mounts
    setImageLoaded(true);
  }, []);
  
  return (
    <section className="hero-section min-h-[100vh] w-full relative z-[1]">
      {/* Background Image with Overlay */}
      <div className="hero-background-image absolute inset-0 z-[1]">
        {/* Use standard background-image with fixed attachment */}
        <div 
          className="absolute inset-0 fixed-bg" 
          style={{ 
            backgroundImage: `url('${bgImage.src}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div 
          className="hero-gradient-overlay absolute inset-0 z-[2]" 
          style={{
            background: 'linear-gradient(to right, rgba(31, 41, 55, 0.95), rgba(51, 65, 85, 0.92), rgba(31, 41, 55, 0.95))'
          }}
        ></div>
      </div>

      {/* Background Pattern */}
      <div className="hero-bg-pattern absolute inset-0 z-[3]">
        <div className="hero-primary-blob"></div>
        <div className="hero-secondary-blob"></div>
      </div>

      <div className="hero-content-container relative z-[5] pt-[80px] h-full w-full">
        <div className="hero-flex-container flex flex-col md:flex-row h-full items-center max-w-7xl mx-auto pl-4 pr-0 sm:px-6 py-8 sm:py-12 md:py-16">
          {/* Left Content - Text */}
          <div className="hero-text-container w-full md:w-1/2 mb-8 md:mb-0">
            <div className="max-w-xl">
              <h1 className="hero-heading uppercase text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] sm:leading-[1.15] lg:leading-[1.15] mb-4">
                Logistics and Freight Services<br />
                <span className="hero-heading-highlight text-primary">Across Kenya & Beyond</span> <br />
              </h1>
              <p className="hero-paragraph text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                Premier Kenya freight forwarding with specialized transit services to Uganda. 
                Serving major routes including Nairobi, Mombasa, and Kampala with reliable road freight solutions.
              </p>
            </div>
          </div>
          
          {/* Right Content - Truck Image */}
          <div className="hero-image-container w-full md:w-1/2">
            <div className="hero-image-wrapper relative">
              <img 
                src={truckImage.src} 
                alt="Logistics Truck" 
                className="object-contain w-full h-auto animate-fade-in" 
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
