'use client'

import { motion } from 'framer-motion'
import { Bed, Bath, Square } from 'lucide-react'
import { useState, useEffect } from 'react'

const propertyImages = [
  'linear-gradient(135deg, #6366f1, #a855f7)',
  'linear-gradient(135deg, #06b6d4, #3b82f6)',
  'linear-gradient(135deg, #ec4899, #f43f5e)',
]

const propertyOneImages = [
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

const propertyTwoImages = [
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

const propertyThreeImages = [
  '/listings/id-3/IMG_3143.jpg',
  '/listings/id-3/IMG_3144.jpg',
  '/listings/id-3/IMG_3145.jpg',
  '/listings/id-3/IMG_3146.jpg',
  '/listings/id-3/IMG_3147.jpg',
  '/listings/id-3/IMG_3148.jpg',
]


const propertyFourImages = [
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

const properties = [
  {
    id: 1,
    name: '2 BHK Penthouse - Gated Society',
    location: 'Provident Park Square, Bengaluru',
    price: '₹ 1 Cr',
    beds: 2,
    baths: 2,
    sqft: '1000',
    furnishType: 'Unfurnished',
    images: propertyOneImages,
    type: '2 BHK Penthouse Apartment',
  },
  {
    id: 2,
    name: '2 BHK Apartment - Gated Society',
    location: 'Assets Canvas and Cove, Bengaluru',
    price: '₹ 45000',
    beds: 2,
    baths: 2,
    sqft: '958',
    furnishType: 'Semi Furnished',
    images: propertyTwoImages,
    type: '1.5 BHK Apartment',
  },
  {
    id: 3,
    name: '2 BHK Apartment - Gated Society',
    location: 'Provident Park Square, Bengaluru',
    price: '₹ 32000',
    beds: 2,
    baths: 2,
    sqft: '900',
    furnishType: 'Semi Furnished',
    images: propertyThreeImages,
    type: '2 BHK Apartment',
  },
  {
    id: 4,
    name: 'Luxury 4 BHK Apartment - Gated Society',
    location: 'Prestige Falcon City, Bengaluru',
    price: '₹ 1.5L',
    beds: 4,
    baths: 4,
    sqft: '2689',
    furnishType: 'Fully furnished',
    images: propertyFourImages,
    type: '4 BHK Apartment',
  },
]

export function FeaturedProperties() {
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>(
    () =>
      properties.reduce<Record<number, number>>((acc, property) => {
        acc[property.id] = 0
        return acc
      }, {})
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        properties.reduce<Record<number, number>>((acc, property) => {
          const previousValue = prev[property.id] ?? 0
          acc[property.id] = (previousValue + 1) % property.images.length
          return acc
        }, {})
      )
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="properties" className="py-20 md:py-32 bg-secondary/30 dark:bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-4">Featured Listings</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Properties Showcase
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the best properties in Bengaluru curated by Prime Estate
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card text-card-foreground border border-border rounded-2xl shadow-lg overflow-hidden"
            >

              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                {property.images.map((img, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0"
                    animate={{ opacity: (currentImageIndex[property.id] ?? 0) === i ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {img.startsWith('linear-gradient') ? (
                      <div className="h-full w-full" style={{ background: img }} />
                    ) : (
                      <img
                        src={img}
                        alt={`${property.name} ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </motion.div>
                ))}

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs">
                  {property.type}
                </div>

                {property.id === 1 && (
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    For Sale
                  </div>
                )}

                {property.id === 2 && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    For Rent
                  </div>
                )}

                {property.id === 3 && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    For Rent
                  </div>
                )}

                {property.id === 4 && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    For Rent
                  </div>
                )}

                {/* Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {property.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        setCurrentImageIndex((prev) => ({
                          ...prev,
                          [property.id]: i,
                        }))
                      }
                      className={`w-2 h-2 rounded-full ${
                        (currentImageIndex[property.id] ?? 0) === i ? 'bg-white w-5' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{property.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    📍 {property.location}
                  </p>
                </div>

                <p className="text-2xl font-bold text-primary">{property.price}</p>

                {/* Details */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Bed className="mx-auto mb-1 text-primary" />
                    <p className="text-foreground">{property.beds}</p>
                    <span className="text-xs text-muted-foreground">Beds</span>
                  </div>
                  <div>
                    <Bath className="mx-auto mb-1 text-primary" />
                    <p className="text-foreground">{property.baths}</p>
                    <span className="text-xs text-muted-foreground">Baths</span>
                  </div>
                  <div>
                    <Square className="mx-auto mb-1 text-primary" />
                    <p className="text-foreground">{property.sqft}</p>
                    <span className="text-xs text-muted-foreground">Sq.ft</span>
                  </div>
                </div>


                <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/40 px-3 py-2">
                  <span className="text-xs text-muted-foreground">Furnish Type</span>
                  <span className="text-sm font-semibold text-foreground">{property.furnishType}</span>
                </div>

                {/* Button */}
                <a
                  href="#contact"
                  className="block text-center bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90"
                >
                  Contact For Details
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
