import Link from 'next/link'
import { PhoneIcon, LocationIcon, MailIcon } from './icons'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative z-10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About & Contact */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/images/logo.png"
                alt="Mutai Enterprise Logo"
                width={45}
                height={45}
                className="object-contain"
              />
              <span className="font-sk-modernist text-xl font-bold text-white">Mutai Enterprise Ltd</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing reliable logistics and transport solutions with advanced tracking technology to ensure your cargo arrives safely and on time.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                <a href="tel:+254713346815" className="text-gray-300 hover:text-primary transition-colors">+254713346815</a>
              </li>
              <li className="flex items-start">
                <MailIcon className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:info@mutai.co.ke" className="text-gray-300 hover:text-primary transition-colors">info@mutai.co.ke</a>
              </li>
            </ul>
          </div>
          
          {/* Column 2: Service Locations */}
          <div>
            <h3 className="font-fustat text-lg font-semibold text-white mb-6">Service Locations</h3>
            <div className="mb-4">
              <p className="text-primary font-medium mb-2">Kenya:</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  'Kericho', 'Mombasa', 'Kisumu', 'Eldoret', 'Kisii', 'Bomet', 
                  'Kakamega', 'Bungoma', 'Webuye', 'Busia', 'Nairobi', 'Nakuru', 'Mbale', 'Malaba'
                ].map((location, index) => (
                  <span key={index} className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full">
                    {location}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-primary font-medium mb-2">Uganda:</p>
              <div className="flex flex-wrap gap-2 text-sm mb-2">
                {[
                  'Kampala', 'Jinja'
                ].map((location, index) => (
                  <span key={index} className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full">
                    {location}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 mt-2">Specialized transit goods to Uganda</p>
            </div>
          </div>
          
          {/* Column 3: Business Hours & Links */}
          <div>
            <h3 className="font-fustat text-lg font-semibold text-white mb-6">Business Hours</h3>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <p className="text-gray-400">Monday - Friday:</p>
                <p className="text-gray-300">8:00 AM - 5:00 PM</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400">Saturday:</p>
                <p className="text-gray-300">8:00 AM - 1:00 PM</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400">Sunday:</p>
                <p className="text-gray-300">Closed</p>
              </div>
            </div>
            <h3 className="font-fustat text-lg font-semibold text-white mb-4 mt-8">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Clients */}
          <div>
            <h3 className="font-fustat text-lg font-semibold text-white mb-6">Our Valued Clients</h3>
            <div>
              <p className="text-primary font-medium mb-2">Companies</p>
              <div className="flex flex-wrap gap-2 text-sm mb-6">
                {[
                  'Scooby Enterprises Ltd', 'Kisii discount', 'Eastern Produce Kenya Ltd', 'Kitui Flour Mills-Dola', 'Ronax Agrovet Ltd', 
                  'Adatia Distributors Ltd', 'Yara East Africa Ltd', 'Dixa Ltd', 'Josemo Distributors Ltd', 'Amirlal Wholesellers Ltd', 'Eldoret packers', 'Pramhuk Cash & Carry'
                ].slice(0, 8).map((company, index) => (
                  <span key={index} className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full">
                    {company}
                  </span>
                ))}
              </div>
              <p className="text-primary font-medium mb-2">Tea Factories</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  'Browns plantation', 'Momul', 'Tegat', 'Changoi', 'Kapset',
                  'Tebesonik', 'Toror', 'Boito', 'Tinderet', 'Kapchorua', 'Tororo'
                ].slice(0, 6).map((factory, index) => (
                  <span key={index} className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full">
                    {factory}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-center">
            <p className="text-gray-400 text-sm text-center">
              &copy; {new Date().getFullYear()} Mutai Enterprises  Ltd. All rights reserved. Designed and Developed by <a href="https://www.iancheruiyot.work" className="text-primary hover:text-primary transition-colors">Ian K. Cheruiyot</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
