'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Using direct path to image in public folder instead of import
// import logoImage from '../images/Untitled-1ME logo@2x-8.png'
import { PhoneIcon } from './icons'
import styles from './Navbar.module.css'
import { useFocusTrap } from './useFocusTrap'

export default function Navbar({ isStatic = false }: { isStatic?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Use the focus trap hook for the mobile menu
  const mobileMenuRef = useFocusTrap(mobileMenuOpen)

  useEffect(() => {
    // If isStatic is true, always set scrolled to true
    if (isStatic) {
      setScrolled(true)
      return
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isStatic])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden' // Prevent scrolling when menu is open

      const closeOnOutsideClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        if (target.id === 'mobile-menu-overlay') {
          setMobileMenuOpen(false)
        }
      }

      document.addEventListener('click', closeOnOutsideClick)
      return () => {
        document.removeEventListener('click', closeOnOutsideClick)
        document.body.style.overflow = '' // Re-enable scrolling
      }
    }
  }, [mobileMenuOpen])

  return (
    <nav
      className={`fixed top-10 left-0 right-0 z-[2000] transition-all duration-300 ${
        scrolled ? styles.navbarScrolled : styles.navbarTransparent
      }`}
      style={{ position: 'fixed', top: '2.5rem' }} /* Exact height of banner */
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/logo.png" alt="Mutai Enterprises Limited" width={40} height={40} className="object-contain" />
            <span className="font-sk-modernist font-bold text-xl text-white">
              Mutai Enterprises Ltd
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="font-fustat font-medium text-white hover:text-primary transition-colors duration-200 relative group"
            >
              Our Journey
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
            
            <div className="relative group">
              <button className="font-fustat font-medium text-white hover:text-primary transition-colors duration-200 flex items-center group">
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className={`absolute top-full left-0 mt-2 w-56 ${styles.dropdownMenu} rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}>
                <Link
                  href="/services"
                  className="block px-4 py-3 text-sm font-fustat text-white hover:bg-slate-700/50 hover:text-primary transition-colors"
                >
                  All Services
                </Link>
                <Link
                  href="/services/freight-forwarding"
                  className="block px-4 py-3 text-sm font-fustat text-white hover:bg-slate-700/50 hover:text-primary transition-colors"
                >
                  Freight Forwarding
                </Link>
                <Link
                  href="/services/bulk-transport"
                  className="block px-4 py-3 text-sm font-fustat text-white hover:bg-slate-700/50 hover:text-primary transition-colors"
                >
                  Bulk Transport
                </Link>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="font-fustat font-medium text-white hover:text-primary transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 bg-teal-400
             rounded-full flex items-center justify-center shadow-lg">
                <PhoneIcon className="w-[18px] h-[18px] text-white" />
              </div>
              <div>
                <div className="text-sm font-bold font-fustat">+254 713 346 815</div>
                <div className="text-xs text-gray-300 font-fustat">24/7 Emergency</div>
              </div>
            </div>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-fustat font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-6 h-6 flex flex-col justify-center space-y-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`w-full h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className={styles.mobileMenuOverlay}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Link href="/" className="flex items-center space-x-3" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/images/logo.png"
                alt="Mutai Enterprises Limited"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-sk-modernist font-bold text-xl text-white">
                Mutai Enterprises Ltd
              </span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-white text-xl transition-colors"
              aria-label="Close mobile menu"
              onKeyDown={e => {
                if (e.key === 'Escape') {
                  setMobileMenuOpen(false)
                }
              }}
            >
              ✕
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-8">
            <div>
              <h3 className="font-fustat font-semibold text-primary mb-4 text-sm uppercase tracking-wide">Navigation</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/about"
                    className="block px-4 py-3 rounded-lg font-fustat font-medium text-white hover:bg-slate-700/30 hover:text-primary transition-all duration-200 border border-transparent hover:border-slate-600/30"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <div className="px-4 py-3">
                    <span className="font-fustat font-medium text-white mb-2 block">Services</span>
                    <ul className="ml-4 space-y-1 border-l-2 border-slate-700/50 pl-4">
                      <li>
                        <Link
                          href="/services"
                          className="block py-2 font-fustat text-gray-300 hover:text-primary transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          All Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/freight-forwarding"
                          className="block py-2 font-fustat text-gray-300 hover:text-primary transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Freight Forwarding
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/bulk-transport"
                          className="block py-2 font-fustat text-gray-300 hover:text-primary transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Bulk Transport
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block px-4 py-3 rounded-lg font-fustat font-medium text-white hover:bg-slate-700/30 hover:text-primary transition-all duration-200 border border-transparent hover:border-slate-600/30"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Contact Info */}
            <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
              <h3 className="font-fustat font-semibold text-primary mb-3 text-sm uppercase tracking-wide">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <div className="font-fustat font-medium text-white text-sm">+254 713 346 815</div>
                    <div className="font-fustat text-xs text-gray-400">24/7 Emergency</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">@</span>
                  </div>
                  <div className="font-fustat text-sm text-gray-300">info@mutai.co.ke</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-4 w-full bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg font-fustat font-medium transition-all duration-200 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  )
}
