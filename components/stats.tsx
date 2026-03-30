'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Building2, TrendingUp, Home } from 'lucide-react'

interface StatCardProps {
  number: number
  label: string
  icon: React.ReactNode
  delay: number
}

function StatCard({ number, label, icon, delay }: StatCardProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    const increment = number / 60
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [isVisible, number])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={() => {
        setIsVisible(true)
        return { opacity: 1, y: 0 }
      }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative p-8 md:p-10 bg-white dark:bg-card rounded-2xl border border-border backdrop-blur-sm hover:shadow-xl transition-shadow">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <div className="text-primary">{icon}</div>
          </div>
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-primary"
        >
          {count}+
        </motion.h3>

        <p className="text-foreground/70 mt-3 text-lg">{label}</p>
      </div>
    </motion.div>
  )
}

export function Stats() {
  const stats = [
    {
      number: 150,
      label: 'Properties Rented',
      icon: <Home className="w-6 h-6" />,
    },
    {
      number: 100,
      label: 'Buy & Sale Transactions',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: 55,
      label: 'Properties Managed',
      icon: <Building2 className="w-6 h-6" />,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our Track Record
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Proven expertise and consistent growth in the real estate industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
