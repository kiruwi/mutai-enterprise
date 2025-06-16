'use client'

import React from 'react'
import Link from 'next/link'
import { CheckIcon } from '@/components/icons'
import Footer from '@/components/Footer'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      <div className="flex-grow flex items-center justify-center py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckIcon className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="font-fustat text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Thank You!
          </h1>
          
          <p className="font-fustat text-lg text-gray-600 mb-8">
            Your message has been received successfully. Our team will get back to you shortly.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
            <Link 
              href="/"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Return to Home
            </Link>
            
            <Link
              href="/contact"
              className="inline-block bg-white border border-gray-300 hover:bg-gray-50 text-slate-800 font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Back to Contact
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
