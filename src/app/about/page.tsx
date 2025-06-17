import Image from 'next/image'

import MarkPhoto from '@/images/mark.jpg'


export const metadata = {
  title: 'About Us - Mutai Enterprises',
  description: 'Learn about Mutai Enterprises - East Africa\'s leading logistics and freight forwarding company serving Kenya and Uganda.'
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-[150px] pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-primary-600">Mutai Enterprises</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            East Africa's trusted logistics and freight forwarding partner serving Kenya and Uganda
          </p>
        </div>

        <div className="space-y-12">
          {/* Company Overview */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Story</h2>
            
            <div className="flex flex-col md:flex-row md:space-x-8 items-start">
              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Mutai Enterprises has been at the forefront of logistics and freight forwarding across East Africa 
                  for over 50 years. Based in Kenya with operations extending to Uganda, we've built our reputation 
                  on reliability, efficiency, and exceptional customer service.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our strategic locations in Nairobi, Mombasa, and Kampala allow us to provide comprehensive logistics 
                  solutions that connect businesses across the region and beyond.
                </p>
              </div>
              
              <div className="md:w-1/3 mt-6 md:mt-0">
                <div className="relative w-full h-64 rounded-lg overflow-hidden border-4 border-gray-100 shadow-md">
                  <Image
                      src="/images/old-man.png"
                      alt="Seasoned logistics expert"
                      width={600}
                      height={400}
                      className="object-cover object-center rounded-lg"
                      unoptimized
                    />
                </div>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Freight Forwarding</h4>
                <p className="text-gray-700">
                  Comprehensive freight management services connecting Kenya and Uganda to global markets.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Bulk Transport</h4>
                <p className="text-gray-700">
                  Specialized handling of bulk commodities with our modern fleet of trucks and containers.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Transit Routes</h4>
                <p className="text-gray-700">
                  Strategic routing between major East African cities including Nairobi, Mombasa, and Kampala.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Logistics Solutions</h4>
                <p className="text-gray-700">
                  End-to-end supply chain management tailored to your business needs.
                </p>
              </div>
            </div>
          </section>

          {/* Leadership Team */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Leadership</h2>
            <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start md:space-x-8">
              <div className="mb-6 md:mb-0 md:mr-8">
                <Image
                  src={MarkPhoto}
                  alt="Mark Biegon"
                  width={550}
                  height={550}
                  className="rounded-full object-cover object-center shadow-lg border-4 border-gray-100" unoptimized
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Mark Biegon</h3>
                <p className="text-primary-600 font-medium mb-2">Chief Executive Officer</p>
                <p className="text-gray-700">
                  CEO of Makvo Ltd and operations expert with a solid track record in streamlining logistics and business operations across Kenya and East Africa, including work with Mutai Enterprises.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
