'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'

const contacts = [
  {
    name: 'Rahul',
    phone1: '636608560',
    phone2: '8971187951',
  },
  {
    name: 'Daksh',
    phone1: '7597526065',
    phone2: undefined,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
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
            <p className="text-sm font-medium text-primary">Get In Touch</p>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Contact Prime Estate
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Reach out to our team for property inquiries and consultations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone Contacts */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Contact Numbers</h3>
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="p-6 bg-secondary/50 rounded-xl border border-border hover:bg-secondary/80 transition-colors"
                  >
                    <h4 className="font-semibold text-lg mb-4 text-foreground">{contact.name}</h4>
                    <div className="space-y-3">
                      <a
                        href={`tel:${contact.phone1}`}
                        className="flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <span className="font-medium">{contact.phone1}</span>
                      </a>
                      {contact.phone2 && (
                        <a
                          href={`tel:${contact.phone2}`}
                          className="flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors"
                        >
                          <Phone className="w-5 h-5" />
                          <span className="font-medium">{contact.phone2}</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Office Location */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Office Location</h3>
              <div className="p-6 bg-secondary/50 rounded-xl border border-border">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Opposite Provident Park Square</p>
                    <p className="text-foreground/60">Judicial Layout</p>
                    <p className="text-foreground/60">Thalaghattpura</p>
                    <p className="font-semibold text-foreground">Bengaluru – 560109</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-full min-h-[500px] rounded-2xl overflow-hidden border border-border shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0153916838477!2d77.57637932346195!3d12.93523118747462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1448a8b8b8b3%3A0x3b8b3b8b3b8b3b8b!2sJudicial%20Layout%2C%20Bengaluru%2C%20Karnataka%20560109!5e0!3m2!1sen!2sin!4v1711453800000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prime Estate Office Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
