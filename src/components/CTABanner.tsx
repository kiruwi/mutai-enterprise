'use client'

import { useEffect, useRef } from 'react'
import { PhoneIcon, PriceTagIcon, TruckIcon } from './icons'
import styles from './CTABanner.module.css'

export default function CTABanner() {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  // We'll use pure CSS animation for smoother performance
  // No JavaScript animation needed for this scrolling effect
  
  return (
    <div className="bg-primary overflow-hidden fixed top-0 left-0 right-0 z-[60] h-10 flex items-center">
      <div className={styles.scrollContainer}>
        {/* First copy of content */}
        <div className={styles.contentContainer}>
          <div className="flex items-center space-x-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <PriceTagIcon size={16} className="text-slate-800" />
                <span className="font-fustat text-sm text-slate-800 font-bold">Get a custom freight quote</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <TruckIcon size={16} className="text-slate-800" />
                <span className="font-fustat text-sm text-slate-800 font-bold">Reliable freight services</span>
              </div>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <div className="flex items-center gap-2">
                <PhoneIcon size={16} className="text-slate-800" />
                <span className="font-fustat text-sm text-slate-800 font-bold">Emergency? Call us: +254713346815</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second copy of content for seamless loop */}
        <div className={styles.contentContainer}>
          <div className="flex items-center space-x-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <PriceTagIcon size={16} className="text-slate-800" />
                <span className="font-fustat text-sm text-slate-800 font-bold">Get a custom freight quote</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <TruckIcon size={16} className="text-slate-800" />
                <span className="font-fustat text-sm text-slate-800 font-bold">Reliable freight services</span>
              </div>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <div className="flex items-center gap-2">
                <PhoneIcon size={16} className="text-slate-800" />
                <span className="font-fustat text-sm text-slate-800 font-bold">Emergency? Call us: +254713346815</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
