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
  '/listings/id-2/IMG_3150.jpg',
  '/listings/id-2/IMG_3151.jpg',
  '/listings/id-2/IMG_3152.jpg',
  '/listings/id-2/IMG_3153.jpg',
  '/listings/id-2/IMG_3154.jpg',
  '/listings/id-2/IMG_3157.jpg',
  '/listings/id-2/IMG_3158.jpg',
]

const propertyThreeImages = [
  '/listings/id-3/IMG_3143.jpg',
  '/listings/id-3/IMG_3144.jpg',
  '/listings/id-3/IMG_3145.jpg',
  '/listings/id-3/IMG_3146.jpg',
  '/listings/id-3/IMG_3147.jpg',
  '/listings/id-3/IMG_3148.jpg',
]

const properties = [
  {
    id: 1,
    name: 'Luxury Penthouse',
    location: 'Provident Park Square, Bengaluru',
    price: '₹1 Cr',
    beds: 2,
    baths: 2,
    sqft: '1000',
    images: propertyOneImages,
    type: '2 BHK Penthouse Apartment',
  },
  {
    id: 2,
    name: 'Premium Villa',
    location: 'Provident Park Square, Bengaluru',
    price: '₹25000',
    beds: 2,
    baths: 1,
    sqft: '750',
    images: propertyTwoImages,
    type: '1.5 BHK Apartment',
  },
  {
    id: 3,
    name: 'Modern Townhouse',
    location: 'Koramangala, Bengaluru',
    price: '₹32000',
    beds: 2,
    baths: 2,
    sqft: '900',
    images: propertyThreeImages,
    type: '2BHK Apartment',
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
    <section id="properties" className="py-20 md:py-32 bg-secondary/30">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
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
                  <h3 className="text-xl font-bold">{property.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    📍 {property.location}
                  </p>
                </div>

                <p className="text-2xl font-bold text-primary">{property.price}</p>

                {/* Details */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Bed className="mx-auto mb-1 text-primary" />
                    <p>{property.beds}</p>
                    <span className="text-xs text-muted-foreground">Beds</span>
                  </div>
                  <div>
                    <Bath className="mx-auto mb-1 text-primary" />
                    <p>{property.baths}</p>
                    <span className="text-xs text-muted-foreground">Baths</span>
                  </div>
                  <div>
                    <Square className="mx-auto mb-1 text-primary" />
                    <p>{property.sqft}</p>
                    <span className="text-xs text-muted-foreground">Sq.ft</span>
                  </div>
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
