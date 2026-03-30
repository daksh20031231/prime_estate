'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary/10 rounded-full"
            >
              <p className="text-sm font-medium text-primary">About Us</p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-balance"
            >
              Prime Estate - Trusted Real Estate Excellence
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-foreground/70 text-lg"
            >
              <p>
                Prime Estate is a trusted real estate consultancy based in Bengaluru. We specialize in helping clients with property rentals, buying & selling, and full property management services.
              </p>

              <p>
                Our goal is to provide smooth, transparent and professional real estate solutions from start to finish. With a team of experienced professionals, we ensure every transaction is seamless and beneficial for all parties involved.
              </p>

              <p>
                We believe in building long-term relationships with our clients based on trust, integrity, and exceptional service delivery.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
