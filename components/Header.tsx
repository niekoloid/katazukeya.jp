'use client'

import { useState, useEffect } from 'react'
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              片付け屋.jp
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              サービス
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              料金
            </button>
            <button 
              onClick={() => scrollToSection('areas')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              対応エリア
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              お問い合わせ
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-right">
              <div className="flex items-center space-x-2 text-primary-600">
                <PhoneIcon className="w-5 h-5" />
                <span className="text-xl font-bold">080-7383-0972</span>
              </div>
              <div className="text-sm text-gray-500">24時間受付中</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg">
            <nav className="p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                サービス
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                料金
              </button>
              <button 
                onClick={() => scrollToSection('areas')}
                className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                対応エリア
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                お問い合わせ
              </button>
              <div className="border-t pt-4">
                <div className="flex items-center space-x-2 text-primary-600 justify-center">
                  <PhoneIcon className="w-5 h-5" />
                  <span className="text-xl font-bold">080-7383-0972</span>
                </div>
                <div className="text-sm text-gray-500 text-center mt-1">24時間受付中</div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}