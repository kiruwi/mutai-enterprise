'use client'

import Link from 'next/link'
import { TruckIcon, ShieldCheckIcon, ClockIcon, GlobeIcon } from './icons'

export default function FreightForwardingContent() {
  const features = [
    {
      icon: TruckIcon,
      title: 'International Shipping',
      description: 'Seamless cross-border freight forwarding between Kenya, Uganda, and international destinations.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure Handling',
      description: 'Professional cargo handling with full insurance coverage and tracking throughout the journey.'
    },
    {
      icon: ClockIcon,
      title: 'Timely Delivery',
      description: 'Reliable scheduling and on-time delivery with real-time tracking and updates.'
    },
    {
      icon: GlobeIcon,
      title: 'Global Network',
      description: 'Extensive network of partners and agents for worldwide freight forwarding solutions.'
    }
  ]

  const services = [
    'Road Freight Forwarding',
    'Documentation Services',
    'Cargo Insurance',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative pt-[120px] pb-20 px-4 sm:px-6 lg:px-8 sm:pt-[140px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-sk-modernist font-bold text-slate-800 mb-6">
              Freight <span className="text-primary-600">Forwarding</span>
            </h1>
            <p className="text-xl text-slate-600 font-fustat max-w-3xl mx-auto">
              Professional freight forwarding services connecting Kenya, Uganda, and the world. 
              Your cargo, our expertise, delivered with precision.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-sk-modernist font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600 font-fustat text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Services List */}
            <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-sk-modernist font-bold text-slate-800 mb-6">Our Services</h2>
              <div className="grid gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-600 font-fustat">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-sk-modernist font-bold text-slate-800 mb-6">Our Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-sk-modernist font-semibold text-slate-800 mb-1">Quote & Planning</h3>
                    <p className="text-slate-600 font-fustat text-sm">Get detailed quotes and shipping plans tailored to your needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-sk-modernist font-semibold text-slate-800 mb-1">Documentation</h3>
                    <p className="text-slate-600 font-fustat text-sm">Handle all customs and shipping documentation requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-sk-modernist font-semibold text-slate-800 mb-1">Transportation</h3>
                    <p className="text-slate-600 font-fustat text-sm">Secure transportation via road with full tracking.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-sk-modernist font-semibold text-slate-800 mb-1">Delivery</h3>
                    <p className="text-slate-600 font-fustat text-sm">Final delivery to destination with confirmation and documentation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-slate-100 rounded-2xl p-8 border border-primary/20">
              <h2 className="text-2xl font-sk-modernist font-bold text-slate-800 mb-4">
                Ready to Ship Your Cargo?
              </h2>
              <p className="text-slate-600 font-fustat mb-6">
                Get a free quote for your freight forwarding needs today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary-700 text-white font-fustat font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get Quote
                </Link>
                <Link
                  href="/services"
                  className="border border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-fustat font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
