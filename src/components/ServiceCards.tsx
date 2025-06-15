import React from 'react'
import Link from 'next/link'
import { TruckIcon, PlaneIcon, PhoneIcon, LocationIcon, RouteIcon } from './icons';

export default function ServiceCards() {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-3 lg:gap-4">
        {/* Facilities Card */}
        <div className="w-full md:w-1/3 relative">
          {/* Solid background color */}
          <div className="absolute inset-0 z-0" style={{backgroundColor: "#516468"}}></div>
          <div className="p-5 h-full flex flex-col justify-between relative z-10">
            <div className="mb-3 text-left">
              <div className="w-10 h-10 bg-white/20 rounded-full mb-2 flex items-center justify-center">
                <RouteIcon size={24} className="text-white" />
              </div>
              <h3 className="font-sk-modernist font-bold text-xl mb-2 text-white">East African Logistics Network</h3>
              <p className="font-fustat text-base text-white/80 mb-2">Serving major locations across Kenya and Uganda with strategically located transport hubs for efficient cargo delivery.</p>
            </div>
            

            
            <div className="mt-auto w-full">
              <Link href="/services#logistics-network" className="text-white text-sm border-t border-white/30 w-full pt-2 flex items-center justify-center hover:text-white/80 transition-colors">
                <span className="mr-1">→</span> Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Bulk Transport Services */}
        <div className="w-full md:w-1/3 relative">
          {/* Solid background color */}
          <div className="absolute inset-0 z-0" style={{backgroundColor: "#33bfb4"}}></div>
          <div className="p-5 h-full flex flex-col justify-between relative z-10">
            <div className="text-left">
              <div className="w-10 h-10 bg-white/20 rounded-full mb-2 flex items-center justify-center">
                <TruckIcon size={24} className="text-[#21282A]" />
              </div>
              <h3 className="font-sk-modernist font-bold text-xl text-[#21282A] mb-2">Bulk Transport</h3>
              <p className="font-fustat text-base text-[#21282A] mb-2">Specialized bulk cargo transport services with high-capacity vehicles for large volume goods across Kenya and Uganda.</p>
            </div>
            

            
            <div className="mt-auto w-full">
              <Link href="/services" className="text-[#21282A] text-sm border-t border-[#21282A]/30 w-full pt-2 flex items-center justify-center hover:text-teal-800 transition-colors">
                <span className="mr-1">→</span> View Services
              </Link>
            </div>
          </div>
        </div>



        {/* Contact Cards Container */}
        <div className="w-full md:w-1/3 bg-white p-0">
          <div className="flex flex-row md:flex-col h-full">
            {/* Quick Contact */}
            <div className="w-full md:w-1/2 flex">
              <div className="p-3 md:p-4 flex flex-row items-center md:flex-col md:justify-start md:text-left w-full">
                <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center mr-2 md:mr-0 md:mx-auto md:mb-1">
                  <PhoneIcon size={18} className="text-secondary/70" />
                </div>
                <div>
                  <h4 className="font-fustat text-sm font-medium text-secondary mb-1">Logistics Support</h4>
                  <p className="font-fustat text-sm text-secondary/80">Mon-Fri: 8am to 5pm</p>
                  <p className="font-fustat text-sm text-secondary/80">Phone: +254713346815                  </p>
                </div>
              </div>
            </div>
            
            {/* Our Location */}
            <div className="w-full md:w-1/2 flex">
              <div className="p-3 md:p-4 flex flex-row items-center md:flex-col md:justify-start md:text-left w-full border-l md:border-l-0 md:border-t border-secondary/10">
                <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center mr-2 md:mr-0 md:mx-auto md:mb-1">
                  <LocationIcon size={18} className="text-secondary/70" />
                </div>
                <div>
                  <h4 className="font-fustat text-sm font-medium text-secondary mb-1">Kenya & Uganda</h4>
                  <p className="font-fustat text-sm text-secondary/80">Major Transit Routes</p>
                  <p className="font-fustat text-sm text-secondary/80">Nairobi • Mombasa • Kampala</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </div>
  )
}
