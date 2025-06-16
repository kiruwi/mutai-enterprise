'use client'

import { useEffect, useRef } from 'react'
import { PhoneIcon, CheckIcon, TruckIcon } from './icons'
import styles from './CTABanner.module.css'

export default function CTABanner() {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  // We'll use pure CSS animation for smoother performance
  // No JavaScript animation needed for this scrolling effect
  
  return (
    <div className={`${styles.bannerContainer} top-0 left-0 right-0`}>
      <div className={styles.scrollContainer}>
        {/* First copy of content */}
        <div className={styles.contentContainer}>
          <div className="flex items-center space-x-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-white" />
                <span className="font-fustat text-sm text-white font-semibold">Get a custom freight quote</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <TruckIcon className="w-4 h-4 text-white" />
                <span className="font-fustat text-sm text-white font-semibold">Reliable freight services</span>
              </div>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-white" />
                <span className="font-fustat text-sm text-white font-semibold">Emergency? Call us: +254713346815</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second copy of content for seamless loop */}
        <div className={styles.contentContainer}>
          <div className="flex items-center space-x-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-white" />
                <span className="font-fustat text-sm text-white font-semibold">Get a custom freight quote</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <TruckIcon className="w-4 h-4 text-white" />
                <span className="font-fustat text-sm text-white font-semibold">Reliable freight services</span>
              </div>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-white" />
                <span className="font-fustat text-sm text-white font-semibold">Emergency? Call us: +254713346815</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
