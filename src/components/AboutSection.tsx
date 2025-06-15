import { CheckIcon } from './icons'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-fustat font-medium text-sm sm:text-base">
                Trusted Logistics Partner Since 1970
              </p>
              <h2 className="font-sk-modernist text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                Safe, Reliable Freight
                <br />
                Solutions Across
                <br />
                <span className="text-primary">Kenya & Uganda</span>
              </h2>
              <p className="font-fustat text-gray-600 text-base sm:text-lg leading-relaxed">
                We specialize in comprehensive logistics solutions including freight forwarding,
                bulk transport, and cargo services. With over 50 years of experience, we connect
                businesses across East Africa with reliable, efficient transportation networks from
                Nairobi to Mombasa, and throughout Uganda.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center bg-primary hover:bg-primary/90 transition-colors px-6 py-3 rounded-lg text-white font-fustat font-medium"
              >
                Discover Our Journey
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Truck Guy Image */}
          <div className="relative">
            <div className="relative w-full h-72 sm:h-80 md:h-96 bg-gradient-to-br from-blue-100 to-slate-200 rounded-2xl overflow-hidden">
              <Image src="/images/truck man.jpg" alt="Truck Driver" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
