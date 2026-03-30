'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">PE</span>
              </div>
              <span className="font-bold text-lg">Prime Estate</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Premium real estate solutions for rental, buying, selling, and property management.
            </p>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Rental Services</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Buy & Sell</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Property Management</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Consultation</a></li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-foreground/60 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-foreground/60 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-foreground/60">
              © 2026 Prime Estate. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
