'use client'

import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

interface StaticHeroProps {
  backgroundImage: StaticImageData
  altText: string
  children: React.ReactNode
}

export default function StaticHero({ backgroundImage, altText, children }: StaticHeroProps) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
    // Add CSS for fixed background
    const style = document.createElement('style')
    style.innerHTML = `
      .parallax-container {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])
  
  // Use inline style for background image with fixed attachment
  const bgStyle = mounted ? {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  } : {}
  
  return (
    <div className="relative -mt-[72px] pt-[72px] pb-8 sm:pb-10 md:pb-12 lg:pb-16">
      {/* Fixed Parallax Background */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden parallax-container" 
        style={bgStyle}
        aria-label={altText}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-80"></div>
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 z-10 opacity-30">
        <div className="absolute top-10 right-10 w-48 h-48 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary rounded-full blur-2xl"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-20 pt-8 sm:pt-10 pb-4 sm:pb-6">
        {children}
      </div>
    </div>
  )
}
