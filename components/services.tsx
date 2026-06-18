'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, ShoppingBag, Globe, Server, ShoppingCart, MessageSquare } from 'lucide-react'

const services = [
  // {
  //   icon: Code2,
  //   title: 'Fullstack Development',
  //   description: 'End-to-end web application development using modern technologies like Next.js, React, Node.js, and TypeScript.',
  // },
  {
    icon: ShoppingBag,
    title: 'Shopify Development',
    description: 'Custom Shopify theme development, app creation, and store optimization for high-converting e-commerce experiences.',
  },
  {
    icon: Code2,
    title: 'Custom Web Applications',
    description: 'I am very open to different ideas and love bringing them to life. Let\'s collaborate to build tailored web solutions for your specific requirements.',
  },
  // {
  //   icon: Server,
  //   title: 'API Development',
  //   description: 'Robust REST and GraphQL API design and implementation with proper authentication and documentation.',
  // },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce setups including payment integration, inventory management, and order processing.',
  },
  {
    icon: MessageSquare,
    title: 'Technical Consulting',
    description: 'Expert advice on technology choices, architecture decisions, and best practices for your digital projects.',
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-yellow font-medium text-sm uppercase tracking-wider mb-4 block">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            What I Offer
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Comprehensive web development services to help your business 
            succeed in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-yellow/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-yellow/10 text-yellow flex items-center justify-center mb-6 group-hover:bg-yellow group-hover:text-yellow-foreground transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
