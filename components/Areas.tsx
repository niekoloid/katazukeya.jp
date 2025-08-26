'use client'

import { motion } from 'framer-motion'
import { MapPinIcon, ClockIcon, TruckIcon } from '@heroicons/react/24/outline'

export default function Areas() {
  const regions = [
    {
      name: '北信地域',
      cities: ['長野市', '須坂市', '千曲市', '坂城町', '小布施町', '高山村', '信濃町', '飯綱町', '小川村', '中野市', '飯山市'],
      icon: '🏔️'
    },
    {
      name: '中信地域', 
      cities: ['松本市', '安曇野市', '塩尻市', '大町市', '池田町', '松川村', '白馬村', '小谷村', '筑北村', '生坂村', '山形村', '朝日村'],
      icon: '🏕️'
    },
    {
      name: '東信地域',
      cities: ['上田市', '佐久市', '小諸市', '東御市', '軽井沢町', '御代田町', '立科町', '青木村', '長和町', '佐久穂町', '川上村', '南牧村', '南相木村', '北相木村'],
      icon: '🌄'
    },
    {
      name: '南信地域',
      cities: ['諏訪市', '茅野市', '伊那市', '駒ヶ根市', '岡谷市', '下諏訪町', '富士見町', '原村', '辰野町', '箕輪町', '飯島町', '南箕輪村', '中川村', '宮田村'],
      icon: '🗻'
    }
  ]

  const features = [
    {
      icon: ClockIcon,
      title: '即日対応',
      description: '緊急時も最短即日でお伺いします'
    },
    {
      icon: TruckIcon, 
      title: '無料出張',
      description: '長野県内どこでも出張費無料'
    },
    {
      icon: MapPinIcon,
      title: '地域密着',
      description: '地域の特性を理解したサービス'
    }
  ]

  return (
    <section id="areas" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
            対応エリア
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            長野県全域対応。地域密着でお客様に寄り添ったサービスを提供
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Main Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">🌟 長野県全域対応 🌟</h3>
            <p className="text-xl opacity-90 mb-4">
              山間部や離島も含め、長野県内すべてのエリアに対応しています
            </p>
            <div className="text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-full">
                どこでも出張費無料・即日対応可能
              </span>
            </div>
          </div>
        </motion.div>

        {/* Regions Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg card-hover"
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-4xl">{region.icon}</span>
                <h3 className="text-2xl font-bold text-gray-800">{region.name}</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {region.cities.map((city, cityIndex) => (
                  <div
                    key={cityIndex}
                    className="bg-white px-3 py-2 rounded-lg text-center text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">
              🚛 山間部・アクセス困難地域も対応
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-yellow-700">
              <div>
                <div className="font-semibold mb-2">山間部対応</div>
                <p className="text-sm">標高の高い地域や山間部も対応可能です</p>
              </div>
              <div>
                <div className="font-semibold mb-2">狭い道路対応</div>
                <p className="text-sm">軽トラックでアクセス困難な場所にも対応</p>
              </div>
              <div>
                <div className="font-semibold mb-2">特殊事例対応</div>
                <p className="text-sm">ご相談いただければ最適な方法をご提案</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 mb-8">
            お住まいの地域が対応エリアか不安な方も、まずはお気軽にご相談ください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:080-7383-0972"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 080-7383-0972
            </motion.a>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              お問い合わせフォーム
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}