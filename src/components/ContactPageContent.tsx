'use client'

import { useState } from 'react'
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from './icons'

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add actual form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-28">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-sk-modernist font-bold text-white mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 font-fustat max-w-3xl mx-auto">
              Ready to move your cargo? Contact us today for reliable logistics solutions across Kenya and Uganda.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-sk-modernist font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-sk-modernist font-semibold text-white mb-1">Phone</h3>
                      <p className="text-gray-300 font-fustat">+254 713 346 815</p>
                      <p className="text-sm text-gray-400 font-fustat">24/7 Emergency Line</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MailIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-sk-modernist font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300 font-fustat">info@mutaienterprises.com</p>
                      <p className="text-sm text-gray-400 font-fustat">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-sk-modernist font-semibold text-white mb-1">Locations</h3>
                      <p className="text-gray-300 font-fustat">Nairobi, Kenya</p>
                      <p className="text-gray-300 font-fustat">Mombasa, Kenya</p>
                      <p className="text-gray-300 font-fustat">Kampala, Uganda</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-sk-modernist font-semibold text-white mb-1">Business Hours</h3>
                      <p className="text-gray-300 font-fustat">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-300 font-fustat">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-gray-300 font-fustat">Sunday: Emergency only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-xl font-sk-modernist font-bold text-white mb-4">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-sk-modernist font-bold text-primary">10+</div>
                    <div className="text-sm text-gray-300 font-fustat">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-sk-modernist font-bold text-primary">500+</div>
                    <div className="text-sm text-gray-300 font-fustat">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-sk-modernist font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-300 font-fustat">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-sk-modernist font-bold text-primary">3</div>
                    <div className="text-sm text-gray-300 font-fustat">Countries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-sk-modernist font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-fustat font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white font-fustat placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-fustat font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white font-fustat placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-fustat font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white font-fustat placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+254 xxx xxx xxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-fustat font-medium text-gray-300 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white font-fustat focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="freight-forwarding">Freight Forwarding</option>
                      <option value="bulk-transport">Bulk Transport</option>
                      <option value="logistics-consulting">Logistics Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-fustat font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white font-fustat placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical"
                    placeholder="Tell us about your logistics needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-fustat font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
