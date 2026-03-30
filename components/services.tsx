'use client'

import { motion } from 'framer-motion'
import { Home, Building2, Users, Lightbulb, Palette, HandshakeIcon } from 'lucide-react'

const services = [
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Rental Services',
    description: 'Helping tenants find homes and owners find reliable tenants with our comprehensive rental support.',
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Buy & Sell',
    description: 'Complete support for property purchase and selling with transparent processes and expert guidance.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Property Management',
    description: 'Full management for landlords including tenant handling, maintenance, and legal compliance.',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Real Estate Consultation',
    description: 'Strategic guidance for property investment decisions and market analysis for optimal returns.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Interior Design',
    description: 'Transform your space with our professional interior design services tailored to your preferences.',
  },
  {
    icon: <HandshakeIcon className="w-8 h-8" />,
    title: 'Loan Help',
    description: 'Expert assistance with home loan processing and documentation from top financial institutions.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
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
            <p className="text-sm font-medium text-primary">Our Services</p>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            We offer a wide range of services tailored to meet your real estate needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative h-full p-8 md:p-10 bg-white dark:bg-card rounded-2xl border border-border backdrop-blur-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <div className="text-primary">{service.icon}</div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>

                <p className="text-foreground/60 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
