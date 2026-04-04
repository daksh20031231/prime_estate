'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <a href="#" className="flex flex-col leading-tight">
              <span className="font-bold text-lg text-foreground">Prime Estate</span>
              <span className="text-[10px] sm:text-xs text-foreground/70 self-end">by ADINIA GROUP</span>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#regions" className="text-sm font-medium hover:text-primary transition-colors">Regions</a>
            <a href="#properties" className="text-sm font-medium hover:text-primary transition-colors">Properties</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#join-us" className="text-sm font-medium hover:text-primary transition-colors">Join Us</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Theme Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border py-4"
          >
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
              <a href="#properties" className="text-sm font-medium hover:text-primary transition-colors">Properties</a>
              <a href="#regions" className="text-sm font-medium hover:text-primary transition-colors">Regions</a>
              <a href="#join-us" className="text-sm font-medium hover:text-primary transition-colors">Join Us</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
