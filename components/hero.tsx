'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const propertyImages = [
  'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepblusve53jwSPDO-PztZnO3GvT1nhU91L1fhIs52ZOiWkQ-xM9wd87XCl6sJtqhsakyCBVAAmFpRnh7cR39u8HSQSiEOuxSYenUOXOlwMQVrA80sp4xTyXkh2ui7-oWArDxlRR=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepGIeD_cdrac9qFEfHATcNH2IvbhZpU7ZjBoU02DWZonK1BMpOn3unPV_e15eQ78QbNwpl1LAqU6wo8UEJJF0JemrsMM_byCsnSUwARCVG0l9q1c4Xm9vCU572L8weJ-cG2WC2QHQ=s1360-w1360-h1020-rw',
  'https://media.settlin.in/projects/3MbsugqcLWshWLFcm/images/IMG20240627145901.jpg',
]

const propertyNames = [
  'Provident Park Square',
  'Sattva Misty Charm',
  'Sobha Arena',
]

const fallbackHeroImage =
  'https://future-hold.com/wp-content/uploads/2025/03/Provident-Park-Square-Future-Hold-1.jpg'

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % propertyImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-secondary rounded-full"
            >
              <p className="text-sm font-medium text-foreground">Welcome to Premium Real Estate</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
            >
              Find Your Perfect Property with Prime Estate
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-foreground/70 leading-relaxed text-balance max-w-xl"
            >
              Prime Estate provides end-to-end real estate services including rental, buying, selling and property management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Explore Services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Premium Properties Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-full h-full"
            >
              {propertyImages.map((imageUrl, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentImage === index ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                >
                  <div className="relative w-full h-full border border-white/20 shadow-2xl">
                    <img
                      src={imageUrl}
                      alt={`Prime Estate property ${index + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(event) => {
                        const img = event.currentTarget
                        img.onerror = null
                        img.src = fallbackHeroImage
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute left-6 bottom-6 text-white">
                      <p className="text-lg font-semibold">
                        Premium Property {index + 1} - {propertyNames[index]}
                      </p>
                      <p className="text-sm text-white/80">Prime Estate Showcase</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {propertyImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImage === index ? 'bg-primary w-8' : 'bg-foreground/30'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
