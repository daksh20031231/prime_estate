'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, TrendingUp, Award } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Access to premium properties and exclusive partnerships to grow your real estate portfolio',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Collaborate with experienced professionals who understand the Bengaluru market',
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Build your reputation with our established brand name and credibility',
  },
  {
    icon: CheckCircle,
    title: 'Comprehensive Support',
    description: 'End-to-end guidance from property selection to final transaction',
  },
]

const stats = [
  { value: '200+', label: 'Happy Clients' },
  { value: '60+', label: 'Properties Sold' },
  { value: '3+', label: 'Team Members' },
  { value: '4+', label: 'Years Experience' },
]

export function JoinUs() {
  return (
    <section id="join-us" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/10 dark:to-accent/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ float: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ float: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-primary/10 rounded-full"
              >
                <p className="text-sm font-medium text-primary">Partnership Opportunity</p>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Join Prime Estate
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed">
                Partner with one of Bengaluru&apos;s most trusted real estate firms. We&apos;re looking for talented agents and brokers who are passionate about excellence and client satisfaction.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-4 bg-card text-card-foreground rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start space-x-3">
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className="p-2 bg-primary/10 rounded-lg flex-shrink-0"
                      >
                        <IconComponent className="w-5 h-5 text-primary" />
                      </motion.div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground text-sm">{benefit.title}</h3>
                        <p className="text-xs text-foreground/60 mt-1">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us For Partnership
              </motion.a>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="p-8 bg-card text-card-foreground rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all text-center"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                >
                  {stat.value}
                </motion.p>
                <p className="text-foreground/60 font-medium">{stat.label}</p>
              </motion.div>
            ))}

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-2 p-8 bg-gradient-to-br from-primary to-accent rounded-2xl text-white text-center shadow-xl"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-4"
              >
                <Award className="w-12 h-12 mx-auto" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Bengaluru&apos;s Most Trusted</h3>
              <p className="text-white/80 text-sm">
                Recognized for excellence, integrity, and client satisfaction
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
