'use client'

import { motion } from 'framer-motion'
import { CheckIcon, StarIcon } from '@heroicons/react/24/solid'

export default function Pricing() {
  const plans = [
    {
      name: '軽トラック積み放題',
      price: '15,000',
      description: '1〜2名での作業',
      features: [
        '小型家具・家電',
        '段ボール10箱程度',
        '搬出作業込み',
        '基本清掃サービス'
      ],
      popular: false
    },
    {
      name: '2tトラック積み放題',
      price: '35,000',
      description: '2〜3名での作業',
      features: [
        '大型家具・家電',
        '1K〜1DKお部屋丸ごと',
        '搬出作業込み',
        '基本清掃サービス',
        'リサイクル品買取'
      ],
      popular: true
    },
    {
      name: '4tトラック積み放題',
      price: '65,000',
      description: '3〜4名での作業',
      features: [
        '2DK〜3DKお部屋丸ごと',
        '大量の不用品回収',
        '搬出作業込み',
        '基本清掃サービス',
        'リサイクル品買取',
        '特殊清掃対応'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
            料金プラン
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            明朗会計で安心。お客様のご要望に合わせた最適なプランをご提案
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <StarIcon className="w-4 h-4" />
                    <span>人気</span>
                  </div>
                </div>
              )}
              
              <div className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover ${
                plan.popular ? 'ring-2 ring-orange-400 transform scale-105' : ''
              }`}>
                <div className={`px-8 py-6 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-orange-50 to-red-50' 
                    : 'bg-gray-50'
                }`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <div className="px-8 py-8">
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">¥{plan.price.toLocaleString()}</span>
                      <span className="text-gray-500 ml-1">〜</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">基本料金（税込）</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.popular ? 'bg-orange-500' : 'bg-primary-500'
                        }`}>
                          <CheckIcon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full py-4 px-6 rounded-full font-bold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl'
                        : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    見積もり依頼
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              🎯 追加料金なしの安心システム
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-700 mb-2">事前見積もり</div>
                <p className="text-blue-600">現地確認で正確な料金をお伝えします</p>
              </div>
              <div>
                <div className="font-semibold text-blue-700 mb-2">作業時間延長無料</div>
                <p className="text-blue-600">予想より時間がかかっても追加料金なし</p>
              </div>
              <div>
                <div className="font-semibold text-blue-700 mb-2">階段料金込み</div>
                <p className="text-blue-600">2階・3階からの搬出も基本料金に含まれます</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          ※ 基本料金です。品目や状況により料金が変動する場合があります。詳しくはお見積もりでご確認ください。
        </motion.p>
      </div>
    </section>
  )
}