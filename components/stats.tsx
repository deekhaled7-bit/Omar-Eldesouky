'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Users, Calendar, ShoppingBag } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: 60, suffix: '+', label: 'Projects Delivered' },
  { icon: Users, value: 60, suffix: '+', label: 'Happy Clients' },
  { icon: Calendar, value: 6, suffix: '+', label: 'Years Experience' },
  { icon: ShoppingBag, value: 30, suffix: '+', label: 'Shopify Stores Built' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-foreground">
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-yellow/10 text-yellow mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
