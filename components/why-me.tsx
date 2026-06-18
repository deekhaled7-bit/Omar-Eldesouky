'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Wrench, Zap } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and self-documenting code following best practices and design patterns.',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Providing ongoing support, regular updates, and continuous optimization to keep your projects running flawlessly.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing web applications for blazing-fast load times, smooth animations, and an exceptional user experience.',
  },
]

export function WhyMe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why-me" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-yellow font-medium text-sm uppercase tracking-wider mb-4 block">
            Why me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight">
            Because I treat each project as the best project I've ever made
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            I give every project 100% of my dedication and expertise. When you work with me, you get a commitment to excellence in every aspect of the development process.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-yellow/50 transition-all text-center flex flex-col items-center shadow-sm hover:shadow-md"
            >
              <div className="w-16 h-16 rounded-2xl bg-yellow/10 text-yellow flex items-center justify-center mb-6 group-hover:bg-yellow group-hover:text-yellow-foreground transition-colors">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
