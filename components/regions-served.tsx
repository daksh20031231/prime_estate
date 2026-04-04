'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronDown, MapPin, Bed, Bath, Square } from 'lucide-react'

const propertyImages = [
  'linear-gradient(135deg, #6366f1, #a855f7)',
  'linear-gradient(135deg, #06b6d4, #3b82f6)',
  'linear-gradient(135deg, #ec4899, #f43f5e)',
]

const southCardOneImages = [
  '/listings/id-1/IMG_2802.jpg',
  '/listings/id-1/IMG_2803.jpg',
  '/listings/id-1/IMG_2804.jpg',
  '/listings/id-1/IMG_2805.jpg',
  '/listings/id-1/IMG_2806.jpg',
  '/listings/id-1/IMG_2807.jpg',
  '/listings/id-1/IMG_2808.jpg',
  '/listings/id-1/IMG_2809.jpg',
  '/listings/id-1/IMG_2810.jpg',
  '/listings/id-1/IMG_2811.jpg',
]

const northCardOneImages = [
  '/listings/id-4/WhatsApp Image 2026-04-04 at 16.43.28 (1).jpg',
  '/listings/id-4/WhatsApp Image 2026-04-04 at 16.43.28.jpg',
  '/listings/id-4/WhatsApp Image 2026-04-04 at 16.43.29 (1).jpg',
  '/listings/id-4/WhatsApp Image 2026-04-04 at 16.43.29.jpg',
  '/listings/id-4/WhatsApp Image 2026-04-04 at 16.43.30 (1).jpg',
  '/listings/id-4/WhatsApp Image 2026-04-04 at 16.43.30 (2).jpg',
  '/listings/id-4/WhatsApp Image 2026-04-04 at 16.43.30.jpg',
  '/listings/id-4/WhatsApp Image 2026-04-04 at 16.43.31 (1).jpg',
  '/listings/id-4/WhatsApp Image 2026-04-04 at 16.43.31.jpg',
  '/listings/id-4/WhatsApp Image 2026-04-04 at 16.43.32 (1).jpg',
  '/listings/id-4/WhatsApp Image 2026-04-04 at 16.43.32.jpg',
  '/listings/id-4/WhatsApp Image 2026-04-04 at 16.43.33 (1).jpg',
  '/listings/id-4/WhatsApp Image 2026-04-04 at 16.43.33.jpg',
  '/listings/id-4/WhatsApp Image 2026-04-04 at 16.43.34.jpg',
]

const southCardThreeImages = [
  '/listings/id-3/IMG_3143.jpg',
  '/listings/id-3/IMG_3144.jpg',
  '/listings/id-3/IMG_3145.jpg',
  '/listings/id-3/IMG_3146.jpg',
  '/listings/id-3/IMG_3147.jpg',
  '/listings/id-3/IMG_3148.jpg',
]

const southCardFourImages = [
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.00.27.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.01.46.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.01.49.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.01.52.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.04.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.05.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.06 (1).jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.06.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.07.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.08 (1).jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.08.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.09.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.10 (1).jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.10.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.11.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.13 (1).jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.13.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.14.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.15 (1).jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.15.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.16.jpeg',
  '/listings/id-5/WhatsApp Image 2026-04-04 at 20.02.17.jpeg',
]

const southCardFiveImages = [
  '/listings/id-2/IMG_3150.jpg',
  '/listings/id-2/IMG_3151.jpg',
  '/listings/id-2/IMG_3152.jpg',
  '/listings/id-2/IMG_3153.jpg',
  '/listings/id-2/IMG_3154.jpg',
  '/listings/id-2/IMG_3157.jpg',
  '/listings/id-2/IMG_3158.jpg',
]

const southCardSixImages = [
  '/listings/id-6/WhatsApp Image 2026-04-04 at 16.46.04 (1).jpeg',
  '/listings/id-6/WhatsApp Image 2026-04-04 at 16.46.04 (2).jpeg',
  '/listings/id-6/WhatsApp Image 2026-04-04 at 16.46.04.jpeg',
  '/listings/id-6/WhatsApp Image 2026-04-04 at 16.46.05 (1).jpeg',
  '/listings/id-6/WhatsApp Image 2026-04-04 at 16.46.05.jpeg',
  '/listings/id-6/WhatsApp Image 2026-04-04 at 16.46.06 (1).jpeg',
  '/listings/id-6/WhatsApp Image 2026-04-04 at 16.46.06.jpeg',
  '/listings/id-6/WhatsApp Image 2026-04-04 at 16.46.07.jpeg',
]

const northCardTwoImages = [
  '/listings/id-7/WhatsApp Image 2026-04-04 at 22.52.40.jpeg',
  '/listings/id-7/WhatsApp Image 2026-04-04 at 22.52.41 (1).jpeg',
  '/listings/id-7/WhatsApp Image 2026-04-04 at 22.52.41.jpeg',
  '/listings/id-7/WhatsApp Image 2026-04-04 at 22.52.42 (1).jpeg',
  '/listings/id-7/WhatsApp Image 2026-04-04 at 22.52.42.jpeg',
]

const maxRegionCardImages = Math.max(
  propertyImages.length,
  southCardOneImages.length,
  northCardOneImages.length,
  southCardThreeImages.length,
  southCardFourImages.length,
  southCardFiveImages.length,
  southCardSixImages.length,
  northCardTwoImages.length
)

const regions = [
  {
    name: 'North Bengaluru',
    description: 'IT Hub Excellence',
    areas: ['Whitefield', 'Marathahalli', 'Indiranagar', 'CV Raman Nagar'],
    highlights: [
      {
        name: '1 BHK Apartment - Standalone',
        location: 'Whitefiled, Bengaluru',
        price: '₹ 20,000',
        type: '1 BHK Apartment',
        status: 'For Rent',
        beds: 1,
        baths: 1,
        sqft: '850',
        furnishType: 'Semi Furnished',
        images: northCardTwoImages,
      },
    ],
  },
  {
    name: 'South Bengaluru',
    description: 'Lifestyle & Culture',
    areas: ['Vajrahalli', 'Silk Institute', 'JP Nagar', 'Jayanagar'],
    highlights: [
      {
        name: '2 BHK Penthouse - Gated Society',
        location: 'Provident Park Square, Bengaluru',
        price: '₹1 Cr',
        type: '2 BHK Penthouse Apartment',
        status: 'For Sale',
        beds: 2,
        baths: 2,
        sqft: '1000',
        furnishType: 'Unfurnished',
        images: southCardOneImages,
      },
      {
        name: '2 BHK Apartment - Gated Society',
        location: 'Assets Canvas and Cove, Bengaluru',
        price: '₹ 45,000',
        type: '2 BHK Apartment',
        status: 'For Rent',
        beds: 2,
        baths: 2,
        sqft: '958',
        furnishType: 'Fully Furnished',
        images: northCardOneImages,
      },
      {
        name: '2 BHK Apartment - Gated Society',
        location: 'Provident Park Square, Bengaluru',
        price: '₹32,000',
        type: '2 BHK Apartment',
        status: 'For Rent',
        beds: 2,
        baths: 2,
        sqft: '900',
        furnishType: 'Semi Furnished',
        images: southCardThreeImages,
      },
      {
        name: '4 BHK Apartment - Gated Society',
        location: 'Prestige Falcony City, Bengaluru',
        price: '₹ 1.5L',
        type: '4 BHK Apartment',
        status: 'For Rent',
        beds: 4,
        baths: 4,
        sqft: '2689',
        furnishType: 'Fully furnished',
        images: southCardFourImages,
      },
      {
        name: '1.5 BHK Apartment - Gated Society',
        location: 'Provident Park Square, Bengaluru',
        price: '₹ 25,000',
        type: '1.5 BHK Apartment',
        status: 'For Rent',
        beds: 2,
        baths: 1,
        sqft: '700',
        furnishType: 'Semi Furnished',
        images: southCardFiveImages,
      },
      {
        name: '3 BHK Apartment - Gated Society',
        location: 'South Bengaluru, Bengaluru',
        price: '₹ 49,000',
        type: '3 BHK Apartment',
        status: 'For Rent',
        beds: 3,
        baths: 2,
        sqft: '1215',
        furnishType: 'Semi Furnished',
        images: southCardSixImages,
      },    ],
  },
  {
    name: 'East Bengaluru',
    description: 'Tech Valley',
    areas: ['Bellandur', 'Sarjapur', 'Devarabisanahalli', 'Hoodi'],
    highlights: [],
  },
  {
    name: 'West Bengaluru',
    description: 'Urban Development',
    areas: ['Yeshwanthpur', 'Rajajinagar', 'Malleshwaram', 'Hebbal'],
    highlights: [],
  },
  {
    name: 'Central Bengaluru',
    description: 'Commercial Hub',
    areas: ['MG Road', 'Bangalore Fort', 'Shivajinagar', 'Commercial Street'],
    highlights: [],
  },
  {
    name: 'Outer Ring Road',
    description: 'Emerging Markets',
    areas: ['Rachenahalli', 'Varthur', 'Mahadevapura', 'Budigere'],
    highlights: [],
  },
]

export function RegionsServed() {
  const [expandedRegion, setExpandedRegion] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % maxRegionCardImages)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const openChatlingChatbot = () => {
    if (typeof window === 'undefined') return

    const chatlingWindow = window as Window & {
      chtl?: {
        open?: () => void
        openChat?: () => void
        show?: () => void
      }
      Chatling?: {
        open?: () => void
      }
    }

    if (chatlingWindow.chtl?.open) {
      chatlingWindow.chtl.open()
      return
    }

    if (chatlingWindow.chtl?.openChat) {
      chatlingWindow.chtl.openChat()
      return
    }

    if (chatlingWindow.Chatling?.open) {
      chatlingWindow.Chatling.open()
      return
    }

    if (chatlingWindow.chtl?.show) {
      chatlingWindow.chtl.show()
      return
    }

    const launcher = document.querySelector<HTMLElement>(
      '#chtl-launcher, [id*="chtl-launcher"], [aria-label*="chat" i]'
    )
    launcher?.click()
  }

  return (
    <section id="regions" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6"
          >
            <p className="text-sm font-medium text-primary">Our Regions</p>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Regions We Serve in Bengaluru
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Click on any region to explore properties and details
          </p>
        </motion.div>

        {/* Accordion Regions */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-border rounded-xl overflow-hidden bg-white dark:bg-card hover:border-primary/50 transition-colors"
            >
              {/* Header - Clickable */}
              <motion.button
                onClick={() =>
                  setExpandedRegion(expandedRegion === index ? null : index)
                }
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between hover:bg-secondary/50 dark:hover:bg-card/50 transition-colors"
              >
                <div className="flex items-center gap-4 text-left">
                  <motion.div
                    className="p-3 bg-primary/10 rounded-lg"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                  >
                    <MapPin className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {region.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-1">
                      {region.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden md:block text-right">
                    <p className="text-2xl font-bold text-primary">
                      {region.highlights.length}
                    </p>
                    <p className="text-xs text-foreground/60">
                      {region.highlights.length === 1 ? 'Property' : 'Properties'}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedRegion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>
              </motion.button>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedRegion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border overflow-hidden"
                  >
                    <div className="px-6 md:px-8 py-8 space-y-8 bg-gradient-to-b from-secondary/30 to-transparent dark:from-card/50 dark:to-transparent">
                      {/* Key Areas */}
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/60 mb-4">
                          Key Areas
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {region.areas.map((area, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                              className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-semibold rounded-lg transition-colors"
                            >
                              {area}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Properties in Region */}
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/60 mb-6">
                          Featured Properties & Pricing
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                          {region.highlights.map((property, i) => (
                            (() => {
                              const cardImages = 'images' in property && property.images
                                ? property.images
                                : propertyImages
                              const activeImageIndex = currentImageIndex % cardImages.length

                              return (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="bg-white dark:bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all overflow-hidden group"
                            >
                              <div className="relative h-52 overflow-hidden">
                                {cardImages.map((img, imageIndex) => (
                                  <motion.div
                                    key={imageIndex}
                                    className="absolute inset-0"
                                    animate={{ opacity: activeImageIndex === imageIndex ? 1 : 0 }}
                                    transition={{ duration: 0.8 }}
                                  >
                                    {img.startsWith('linear-gradient') ? (
                                      <div className="h-full w-full" style={{ background: img }} />
                                    ) : (
                                      <img
                                        src={img}
                                        alt={`${property.name} ${imageIndex + 1}`}
                                        className="h-full w-full object-cover"
                                      />
                                    )}
                                  </motion.div>
                                ))}

                                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                                  {property.type}
                                </div>

                                {'status' in property && property.status && (
                                  <div
                                    className={`absolute top-4 left-4 text-white px-3 py-1 rounded-full text-xs font-semibold ${
                                      property.status === 'For Sale' ? 'bg-emerald-600' : 'bg-red-600'
                                    }`}
                                  >
                                    {property.status}
                                  </div>
                                )}

                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                  {cardImages.map((_, imageIndex) => (
                                    <button
                                      key={imageIndex}
                                      onClick={() => setCurrentImageIndex(imageIndex)}
                                      className={`h-2 rounded-full transition-all ${
                                        activeImageIndex === imageIndex ? 'bg-white w-5' : 'bg-white/50 w-2'
                                      }`}
                                      aria-label={`Show image ${imageIndex + 1}`}
                                    />
                                  ))}
                                </div>
                              </div>

                              <div className="p-6 space-y-4">
                                <div>
                                  <h5 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                    {property.name}
                                  </h5>
                                  <p className="text-sm text-muted-foreground">
                                    📍 {'location' in property ? property.location : region.name}
                                  </p>
                                </div>

                                <p className="text-2xl font-bold text-primary">{property.price}</p>

                                <div className="grid grid-cols-3 gap-4 text-center">
                                  <div>
                                    <Bed className="mx-auto mb-1 text-primary" />
                                    <p className="text-foreground">{'beds' in property ? property.beds : '-'}</p>
                                    <span className="text-xs text-muted-foreground">Beds</span>
                                  </div>
                                  <div>
                                    <Bath className="mx-auto mb-1 text-primary" />
                                    <p className="text-foreground">{'baths' in property ? property.baths : '-'}</p>
                                    <span className="text-xs text-muted-foreground">Baths</span>
                                  </div>
                                  <div>
                                    <Square className="mx-auto mb-1 text-primary" />
                                    <p className="text-foreground">{'sqft' in property ? property.sqft : '-'}</p>
                                    <span className="text-xs text-muted-foreground">Sq.ft</span>
                                  </div>
                                </div>

                                <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/40 px-3 py-2">
                                  <span className="text-xs text-muted-foreground">Furnish Type</span>
                                  <span className="text-sm font-semibold text-foreground">{'furnishType' in property ? property.furnishType : '-'}</span>
                                </div>
                              </div>

                              {/* CTA Button */}
                              <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="block w-full mt-5 px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
                              >
                                Contact For Details
                              </motion.a>
                            </motion.div>
                              )
                            })()
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/60 mb-6">
            Can&apos;t find what you&apos;re looking for? Let us help you discover your perfect property
          </p>
          <motion.button
            onClick={openChatlingChatbot}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
