'use client'

import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
              片付け屋.jp
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              長野県の不用品回収・遺品整理専門店。お客様に寄り添った丁寧なサービスをご提供します。
            </p>
            
            <div className="bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-primary-300">運営会社</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="font-medium">株式会社曉</p>
                <div className="flex items-start space-x-2">
                  <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>〒380-0834</p>
                    <p>長野県長野市大字鶴賀緑町1418番地</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:info@akatsuki.works" className="hover:text-primary-300 transition-colors">
                    info@akatsuki.works
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4 text-primary-300">サービス</h4>
            <ul className="space-y-3">
              {['不用品回収', '遺品整理', 'オフィス移転', 'ハウスクリーニング'].map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full group-hover:bg-primary-400 transition-colors"></span>
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4 text-primary-300">主な対応エリア</h4>
            <ul className="space-y-3">
              {['長野市', '松本市', '上田市', '佐久市', '飯田市', '長野県全域'].map((area, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('areas')}
                    className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full group-hover:bg-primary-400 transition-colors"></span>
                    <span>{area}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4 text-primary-300">お問い合わせ</h4>
            
            {/* Phone */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-6 h-6" />
                <div>
                  <div className="text-sm opacity-90">24時間365日受付</div>
                  <motion.a
                    href="tel:080-7383-0972"
                    className="text-2xl font-bold block hover:text-red-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    080-7383-0972
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors"
              >
                📧 お問い合わせフォーム
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors"
              >
                💰 料金プラン
              </button>
            </div>
          </motion.div>
        </div>

        {/* Features Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 mt-8"
        >
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              { icon: '⚡', text: '即日対応' },
              { icon: '💰', text: '無料見積もり' },
              { icon: '♻️', text: '適正処理・リサイクル' },
              { icon: '🌟', text: '地域最安値挑戦中' }
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-gray-300">
                <span className="text-xl">{feature.icon}</span>
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 mt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; 2024 片付け屋.jp / 株式会社曉 All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}