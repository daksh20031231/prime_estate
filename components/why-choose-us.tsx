'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const reasons = [
  'Trusted local real estate experts',
  'End-to-end property support',
  'Verified property listings',
  'Transparent transactions',
  'Professional service',
  'Client-focused approach',
]

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
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
            <p className="text-sm font-medium text-primary">Why Choose Us</p>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Why Prime Estate Stands Out
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Experience the difference of working with industry leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4 p-6 rounded-xl bg-white dark:bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg font-medium text-foreground">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
