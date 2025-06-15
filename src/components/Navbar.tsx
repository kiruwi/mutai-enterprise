'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImage from '../images/Untitled-1ME logo@2x-8.png'
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
      className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? styles.navbarScrolled : styles.navbarTransparent
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Clickable to navigate to home */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={styles.logoContainer}>
              <Image
                src={logoImage}
                alt="Mutai Enterprises Limited"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-sk-modernist text-xl font-bold text-white">
              Mutai Enterprises Ltd
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <div className="relative group">
              <Link
                href="/about"
                className="font-fustat text-white hover:text-primary transition-colors duration-200"
              >
                The Journey
              </Link>
            </div>
            <div className="relative group">
              <button className="font-fustat text-white hover:text-primary transition-colors duration-200 flex items-center">
                Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
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
              <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/services"
                  className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                >
                  All Services
                </Link>
                <Link
                  href="/services/freight-forwarding"
                  className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                >
                  Freight Forwarding
                </Link>
                <Link
                  href="/services/bulk-transport"
                  className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                >
                  Bulk Transport
                </Link>
              </div>
            </div>
            <div className="relative group">
              <Link
                href="/contact"
                className="font-fustat text-white hover:text-primary transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <PhoneIcon size={16} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold">+254713346815</div>
                <div className="text-xs text-gray-300">Emergency? Create quote!</div>
              </div>
            </div>
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
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <div className={styles.logoContainer}>
                <Image
                  src={logoImage}
                  alt="Mutai Enterprise Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-sk-modernist text-xl font-bold text-white">
                Mutai Enterprises Ltd
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-2xl"
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

          <nav className="space-y-6">
            <div className="border-b border-slate-700 pb-4">
              <h3 className="font-fustat font-medium text-primary mb-3">Navigation</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="block font-fustat text-white hover:text-primary transition-colors duration-200"
                  >
                    The Journey
                  </Link>
                </li>
                <li className="relative">
                  <div>
                    <Link
                      href="#"
                      className="block font-fustat text-white hover:text-primary transition-colors duration-200"
                    >
                      Solutions
                    </Link>
                    <ul className="pl-4 mt-2 space-y-2">
                      <li>
                        <Link
                          href="/services"
                          className="block font-fustat text-gray-300 hover:text-primary transition-colors duration-200"
                        >
                          All Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/freight-forwarding"
                          className="block font-fustat text-gray-300 hover:text-primary transition-colors duration-200"
                        >
                          Freight Forwarding
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/bulk-transport"
                          className="block font-fustat text-gray-300 hover:text-primary transition-colors duration-200"
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
                    className="block font-fustat text-white hover:text-primary transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h3 className="font-fustat font-medium text-primary mb-3">Contact Info</h3>
              <div className="font-fustat text-white mb-2">+254713346815</div>
              <div className="font-fustat text-sm text-gray-300">info@mutai.co.ke</div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  )
}
