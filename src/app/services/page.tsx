import Image from 'next/image'
import StaticHero from '@/components/StaticHero'
import truckImage from '@/images/truck.png'
import bulkImage from '@/images/bulk.jpg'
import trucksImage from '@/images/trucks.jpg'
import tserv1Image from '@/images/tserv1.jpg'
import tserv2Image from '@/images/tserv2.jpg'
import { TruckIcon, PlaneIcon, PhoneIcon, LocationIcon } from '@/components/icons'

export const metadata = {
  title: 'Services & Solutions | Mutai Enterprises',
  description: 'Comprehensive business and technology services for your enterprise needs',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white relative pt-28">
      
      {/* Hero Banner with static image */}
      <StaticHero backgroundImage={bulkImage} altText="Bulk Transport">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 mx-auto max-w-3xl">
              <h1 className="font-sk-modernist text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Logistics & Freight Solutions
              </h1>
              <p className="font-fustat text-base sm:text-lg text-gray-300 mx-auto">
                We provide comprehensive freight forwarding and supply chain services with advanced tracking technology 
                to ensure your cargo arrives safely and on time anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </StaticHero>
      
      {/* Services Section */}
      <section className="relative z-10 pt-4 px-4">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Service Card 1 */}
            <div className="bg-white shadow-xl overflow-hidden border-0 transition-all duration-300 hover:bg-white/95">
              <div className="h-80 md:h-96 p-10 flex items-start justify-start relative">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={bulkImage} 
                    alt="Bulk Transport" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8 text-left">
                <h3 className="font-sk-modernist font-bold text-xl mb-3 text-slate-800">Bulk Transport</h3>
                <p className="font-fustat text-gray-600 mb-4">
                  Heavy-duty transportation for large cargo shipments across East Africa with specialized equipment and experienced drivers.
                </p>
                <a href="/services/bulk-transport" className="text-primary font-medium flex items-center hover:text-primary/80">
                  Learn More <span className="ml-1">→</span>
                </a>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white shadow-xl overflow-hidden border-0 transition-all duration-300 hover:bg-white/95">
              <div className="h-80 md:h-96 p-10 flex items-start justify-start relative">
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={tserv2Image} 
                    alt="Road Freight Services" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8 text-left">
                <h3 className="font-sk-modernist font-bold text-xl mb-3 text-slate-800">Road Freight Services</h3>
                <p className="font-fustat text-gray-600 mb-4">
                  Efficient road transportation with nationwide coverage for all your ground freight needs.
                </p>
                <a href="/services/freight-forwarding" className="text-primary font-medium flex items-center hover:text-primary/80">
                  Learn More <span className="ml-1">→</span>
                </a>
              </div>
            </div>
            
           
          </div>
        </div>
      </section>

      {/* Logistics Information Section */}
      <section id="logistics-network" className="py-12 sm:py-16 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="font-sk-modernist text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Logistics Network</h2>
            <p className="font-fustat text-gray-600 max-w-3xl mx-auto">Comprehensive transportation solutions serving major locations and businesses across East Africa</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <h3 className="font-sk-modernist font-bold text-xl mb-4 text-slate-800 flex items-center">
                <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <PhoneIcon className="w-5 h-5 text-primary" />
                </span>
                Contact Us
              </h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <span className="font-bold text-slate-800 mr-2">Phone:</span>
                  <a href="tel:+254713346815" className="text-slate-600 hover:text-primary">+254713346815                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-slate-800 mr-2">Email:</span>
                  <a href="mailto:info@mutai.co.ke" className="text-slate-600 hover:text-primary">info@mutai.co.ke</a>
                </li>
                <li className="border-t border-gray-200 pt-4 mt-4">
                  <span className="font-bold text-slate-800 block mb-2">Business Hours:</span>
                  <p className="text-slate-600">Monday - Friday: 8am to 5pm</p>
                  <p className="text-slate-600">Saturday: 8am to 1pm</p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </li>
              </ul>
            </div>
            
            {/* Locations Served */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <h3 className="font-sk-modernist font-bold text-xl mb-4 text-slate-800 flex items-center">
                <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <TruckIcon className="w-5 h-5 text-primary" />
                </span>
                Locations Transported To
              </h3>
              <div>
                <p className="font-bold text-slate-800 mb-2">Kenya:</p>
                <div className="flex flex-wrap text-left mb-4">
                  {[
                    'Kericho', 'Mombasa', 'Kisumu', 'Eldoret', 'Kisii', 'Bomet', 
                    'Kakamega', 'Bungoma', 'Webuye', 'Busia', 'Nairobi', 'Nakuru'
                  ].map((location, index) => (
                    <span key={index} className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm m-1">
                      {location}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-bold text-slate-800 mb-2">Uganda:</p>
                <div className="flex flex-wrap text-left mb-2">
                  {[
                    'Kampala', 'Jinja', 'Mbale', 'Tororo', 'Malaba'
                  ].map((location, index) => (
                    <span key={index} className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm m-1">
                      {location}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 mt-2">Specialized transit goods to Uganda</p>
              </div>
            </div>
            
            {/* Client Companies */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <h3 className="font-sk-modernist font-bold text-xl mb-4 text-slate-800 flex items-center">
                <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </span>
                Our Valued Clients
              </h3>
              <div className="mb-4">
                <p className="font-bold text-slate-800 mb-2">Companies (from Mombasa):</p>
                <div className="flex flex-wrap text-left">
                  {[
                    'Scooby Enterprises Ltd', 'Kisii discount', 'Eastern Produce Kenya Ltd', 'Kitui Flour Mills-Dola', 'Ronak Agrovet Ltd', 
                  'Adatia Distributors Ltd', 'Yara East Africa Ltd', 'Dixa Ltd', 'Josemo Distributors Ltd', 'Amirlal Wholesellers Ltd', 'Eldoret packers', 'Pramhuk Cash & Carry'
                  ].map((company, index) => (
                    <span key={index} className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm m-1">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-bold text-slate-800 mb-2">Tea Factories:</p>
                <div className="flex flex-wrap text-left">
                  {[
                    'Browns plantation', 'Momul', 'Tegat', 'Changoi', 'Kapset',
                    'Tebesonik', 'Toror', 'Boito', 'Tinderet', 'Kapchorua'
                  ].map((factory, index) => (
                    <span key={index} className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm m-1">
                      {factory}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-slate-900 py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-secondary rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="font-sk-modernist text-3xl font-bold text-white mb-4">Ready to transform your business?</h2>
              <p className="font-fustat text-white text-lg">
                Contact us today to discuss how our solutions can help you achieve your business goals.
              </p>
            </div>
            <div>
              <a href="/contact" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-50 transition-colors duration-300">
                Request a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer would go here */}
    </div>
  )
}
