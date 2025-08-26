'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HomeIcon, HeartIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

export default function Services() {
  const services = [
    {
      icon: HomeIcon,
      title: '不用品回収',
      description: '家具・家電・日用品など、あらゆる不用品を回収いたします。',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      features: ['家具・家電', '日用品・雑貨', '大型ゴミ', '引越し不用品']
    },
    {
      icon: HeartIcon,
      title: '遺品整理',
      description: '故人の大切な品物を丁寧に整理・仕分けいたします。',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=300&fit=crop',
      features: ['貴重品仕分け', '思い出の品保管', '供養・処分', 'ハウスクリーニング']
    },
    {
      icon: BuildingOfficeIcon,
      title: 'オフィス移転',
      description: 'オフィス用品の処分もスムーズに対応します。',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop',
      features: ['OA機器処分', '書類廃棄', '家具回収', '機密文書処理']
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
            サービス内容
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            お客様のニーズに合わせた幅広いサービスをご提供しています
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full mt-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-shadow"
                  >
                    詳しく相談する
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              どのサービスも即日対応可能！
            </h3>
            <p className="mb-6 opacity-90">
              お急ぎの場合もお気軽にご相談ください。最短即日でお伺いします。
            </p>
            <motion.a
              href="tel:080-7383-0972"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 font-bold py-3 px-8 rounded-full hover:shadow-lg transition-shadow"
            >
              📞 080-7383-0972
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}