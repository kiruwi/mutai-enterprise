export const metadata = {
  title: 'News & Media | Mutai Enterprises',
  description: 'Latest news, updates, and insights from Mutai Enterprises',
}

export default function NewsPage() {
  // Mock news data - in a real app, this would come from a CMS or API
  const newsItems = [
    {
      id: 1,
      title: 'Mutai Enterprises Launches New Cloud Infrastructure Service',
      excerpt: 'Our new cloud infrastructure service offers enterprise-grade solutions with enhanced security and scalability features.',
      date: 'June 10, 2025',
      category: 'Product Launch',
      image: '☁️'
    },
    {
      id: 2,
      title: 'The Future of Digital Transformation in 2025',
      excerpt: 'Exploring how AI, machine learning, and automation are reshaping digital transformation strategies for enterprises.',
      date: 'May 28, 2025',
      category: 'Industry Insights',
      image: '🤖'
    },
    {
      id: 3,
      title: 'Mutai Enterprises Recognized as Top IT Consultant',
      excerpt: 'We are proud to announce that Mutai Enterprises has been named a top IT consultant by Business Technology Review.',
      date: 'May 15, 2025',
      category: 'Awards',
      image: '🏆'
    },
    {
      id: 4,
      title: 'Cybersecurity Trends to Watch in 2025',
      excerpt: 'Our security experts share insights on emerging cybersecurity threats and how businesses can protect themselves.',
      date: 'April 22, 2025',
      category: 'Security',
      image: '🔒'
    },
    {
      id: 5,
      title: 'Case Study: Digital Transformation for Financial Services',
      excerpt: 'How we helped a leading financial institution modernize their operations and improve customer experience.',
      date: 'April 10, 2025',
      category: 'Case Study',
      image: '📊'
    },
    {
      id: 6,
      title: 'Mutai Enterprises Expands Operations to Asia Pacific',
      excerpt: 'We are excited to announce the opening of our new office in Singapore to serve the Asia Pacific region.',
      date: 'March 8, 2025',
      category: 'Company News',
      image: '🌏'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Banner */}
      <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-48 h-48 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="text-center">
            <h1 className="font-fustat text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              News & Media
            </h1>
            <p className="font-fustat text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest news, industry insights, and announcements from Mutai Enterprises.
            </p>
          </div>
        </div>
      </section>
      
      {/* Latest News Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured Article */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-slate-900 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-6 sm:p-10 md:p-12 lg:p-16">
                  <div className="space-y-6">
                    <span className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">Featured</span>
                    <h2 className="font-fustat text-3xl lg:text-4xl font-bold text-white leading-tight">
                      Mutai Enterprises Partners with Leading AI Company
                    </h2>
                    <p className="font-fustat text-blue-100 text-lg">
                      We're excited to announce our strategic partnership with InnovateAI to bring cutting-edge 
                      artificial intelligence solutions to our enterprise clients.
                    </p>
                    <div className="flex items-center text-blue-200 text-sm">
                      <span>June 12, 2025</span>
                      <span className="mx-2">•</span>
                      <span>Strategic Partnership</span>
                    </div>
                    <a href="#" className="inline-block bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                      Read Full Story
                    </a>
                  </div>
                </div>
                <div className="h-80 bg-gradient-to-br from-blue-500/20 to-slate-700/20 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/30 rounded-full flex items-center justify-center">
                    <span className="text-6xl">🤝</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="h-48 bg-blue-50 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-5xl">{item.image}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary">{item.category}</span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="font-fustat font-bold text-xl text-slate-800 mb-3">{item.title}</h3>
                  <p className="font-fustat text-gray-600 mb-4">{item.excerpt}</p>
                  <a href="#" className="text-primary font-medium flex items-center hover:text-primary/80">
                    Read More <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-500 hover:bg-gray-50">
                ←
              </button>
              <button className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white">
                1
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-blue-500">
                2
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-blue-500">
                3
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-500 hover:bg-gray-50">
                →
              </button>
            </nav>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-fustat text-3xl font-bold text-white mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="font-fustat text-blue-100 text-lg mb-8">
                Stay updated with the latest industry news, technology trends, and company announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email"
                  className="flex-grow px-4 py-3 rounded-lg outline-none"
                  placeholder="Enter your email address"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
              <p className="font-fustat text-blue-200 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer would go here */}
    </div>
  )
}
