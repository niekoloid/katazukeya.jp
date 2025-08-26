'use client'

import { motion } from 'framer-motion'
import { PhoneIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon, BoltIcon, CurrencyYenIcon, TruckIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center text-white"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            variants={fadeIn}
          >
            長野県の不用品回収なら
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              片付け屋.jp
            </span>
            にお任せ！
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 opacity-90"
            variants={fadeIn}
          >
            即日対応・無料見積もり・地域最安値挑戦中
          </motion.p>

          {/* Features */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            variants={stagger}
          >
            {[
              { icon: BoltIcon, text: '即日対応' },
              { icon: CurrencyYenIcon, text: '無料見積もり' },
              { icon: TruckIcon, text: '搬出作業込み' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <feature.icon className="w-6 h-6 text-yellow-400" />
                <span className="font-semibold text-lg">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={stagger}
          >
            <motion.a
              href="tel:080-7383-0972"
              className="group bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-6 px-10 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-lg"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 mb-1">
                  <PhoneIcon className="w-6 h-6" />
                  <span>今すぐ無料見積もり</span>
                </div>
                <span className="text-2xl font-bold">080-7383-0972</span>
              </div>
            </motion.a>

            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-6 px-10 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-lg"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <ChatBubbleLeftIcon className="w-6 h-6" />
                <span>LINE見積もり</span>
              </div>
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-80"
            variants={stagger}
          >
            {[
              '24時間365日受付',
              '損害保険加入済み',
              '明朗会計',
              '長野県全域対応'
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2"
                variants={fadeIn}
              >
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}