'use client'

import Link from 'next/link'
import { TruckIcon, ShieldCheckIcon, ClockIcon, CogIcon } from './icons'

export default function BulkTransportContent() {
  const features = [
    {
      icon: TruckIcon,
      title: 'Heavy Duty Fleet',
      description: 'Modern fleet of heavy-duty trucks and trailers designed for bulk cargo transportation.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Safe Transport',
      description: 'Specialized equipment and safety protocols for secure bulk cargo handling.'
    },
    {
      icon: ClockIcon,
      title: 'Scheduled Delivery',
      description: 'Reliable scheduling with dedicated routes between Kenya and Uganda.'
    },
    {
      icon: CogIcon,
      title: 'Custom Solutions',
      description: 'Tailored transport solutions for different types of bulk materials and cargo.'
    }
  ]

  const cargoTypes = [
    'Agricultural Products',
    'Construction Materials',
    'Mining Equipment',
    'Industrial Machinery',
    'Petroleum Products',
    'Chemical Products',
    'Food & Beverages',
    'Raw Materials'
  ]

  const routes = [
    { from: 'Nairobi', to: 'Kampala', duration: '12-14 hours' },
    { from: 'Mombasa', to: 'Nairobi', duration: '8-10 hours' },
    { from: 'Nairobi', to: 'Mombasa', duration: '8-10 hours' },
    { from: 'Kampala', to: 'Nairobi', duration: '12-14 hours' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative pt-[120px] pb-20 px-4 sm:px-6 lg:px-8 sm:pt-[140px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-sk-modernist font-bold text-slate-800 mb-6">
              Bulk <span className="text-primary-600">Transport</span>
            </h1>
            <p className="text-xl text-slate-600 font-fustat max-w-3xl mx-auto">
              Specialized bulk transport services for large-scale cargo movements across Kenya and Uganda. 
              Heavy-duty solutions for your biggest shipping needs.
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

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cargo Types */}
            <div className="bg-white shadow-md rounded-lg p-6 h-full border border-gray-100">
              <h2 className="text-2xl font-sk-modernist font-bold text-slate-800 mb-6">Cargo Types</h2>
              <div className="grid grid-cols-2 gap-4">
                {cargoTypes.map((cargo, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg px-4 py-3 text-slate-700 font-fustat border border-gray-100">
                    {cargo}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Routes */}
            <div className="bg-white shadow-md rounded-lg p-6 h-full border border-gray-100">
              <h2 className="text-2xl font-sk-modernist font-bold text-slate-800 mb-6">Main Routes</h2>
              <div className="space-y-4">
                {routes.map((route, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-sk-modernist font-semibold text-slate-800">{route.from}</span>
                      <div className="w-8 h-0.5 bg-primary-500 mx-2"></div>
                      <span className="font-sk-modernist font-semibold text-slate-800">{route.to}</span>
                    </div>
                    <div className="text-xs text-slate-600 font-fustat">
                      Estimated transit time: {route.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fleet Specifications */}
            <div className="bg-white shadow-md rounded-lg p-6 h-full border border-gray-100">
              <h2 className="text-2xl font-sk-modernist font-bold text-slate-800 mb-6">Fleet Specifications</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-sk-modernist font-semibold text-slate-800 mb-2">Heavy Trucks</h3>
                  <p className="text-slate-600 font-fustat">50+ modern heavy-duty trucks with GPS tracking</p>
                </div>

                <div>
                  <h3 className="font-sk-modernist font-semibold text-slate-800 mb-2">Safety Equipment</h3>
                  <p className="text-slate-600 font-fustat">Advanced safety features and cargo securing systems</p>
                </div>
                <div>
                  <h3 className="font-sk-modernist font-semibold text-slate-800 mb-2">Experienced Drivers</h3>
                  <p className="text-slate-600 font-fustat">Professional drivers with specialized training</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <section className="py-16 px-4 sm:px-6 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-2xl font-sk-modernist font-bold text-slate-800 mb-8 text-center">Our Transport Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="p-5 bg-white shadow-sm rounded-lg">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-xl text-primary-600 font-bold">1</div>
                  </div>
                  <h3 className="font-sk-modernist font-semibold text-slate-800 mb-2">Assessment</h3>
                  <p className="text-slate-600 font-fustat text-sm">Analysis of cargo type, volume, and route requirements</p>
                </div>
                <div className="p-5 bg-white shadow-sm rounded-lg">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-xl text-primary-600 font-bold">2</div>
                  </div>
                  <h3 className="font-sk-modernist font-semibold text-slate-800 mb-2">Loading</h3>
                  <p className="text-slate-600 font-fustat text-sm">Safe and secure loading with proper documentation</p>
                </div>
                <div className="p-5 bg-white shadow-sm rounded-lg">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-xl text-primary-600 font-bold">3</div>
                  </div>
                  <h3 className="font-sk-modernist font-semibold text-slate-800 mb-2">Transport</h3>
                  <p className="text-slate-600 font-fustat text-sm">Real-time tracking and monitoring throughout transit</p>
                </div>
                <div className="p-5 bg-white shadow-sm rounded-lg">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-xl text-primary-600 font-bold">4</div>
                  </div>
                  <h3 className="font-sk-modernist font-semibold text-slate-800 mb-2">Delivery</h3>
                  <p className="text-slate-600 font-fustat text-sm">On-time delivery with complete documentation</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16 px-4 sm:px-6 border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-sk-modernist font-bold text-slate-800 mb-4">
                Need Specialized Bulk Transport Services?<br />
                <span className="text-primary-600">Request a Quote Today</span>
              </h2>
              <p className="text-slate-600 font-fustat mb-8">
                Our logistics experts will help you find the right solution for your bulk cargo needs.
              </p>
              <Link href="/contact" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-fustat font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Get a Customized Quote
              </Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
