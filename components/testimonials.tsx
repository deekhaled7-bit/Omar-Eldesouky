'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 3,
    name: 'Mariam Solika',
    company: '',
    role: 'CEO OF The Good News & The Good Space',
    image: '/testimonials/Mariam.jpg',
    rating: 5,
    text: `بتفكرني بحديث الرسول عليه افضل الصلاة والسلام : ان الله يحب اذا عمل احدكم عملا ان يتقنه`,
  },
  {
    id: 1,
    name: 'Fanno Salah Eldin',
    company: '',
    role: 'CEO OF Mamilk',
    image: '/testimonials/Fanno.jpg',
    rating: 5,
    text: `I did two websites with Omar Wagih 
One through shopify and the other was special coding 
Omar was very very supportive and creative through building the two websites 
Even the after sale service is more than perfect 
He is always available for any emergency or inquiry 
I highly recommend him if anyone is looking for a developer 
Thank you Omar`,
  },
  {
    id: 2,
    name: 'Nareiman Ahmed Hamed',
    company: '',
    role: 'CEO OF Wifey For Lifey',
    image: '/testimonials/Nareiman.jpg',
    rating: 5,
    text: `You've raised my standards in dealing with people.`,
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth > 1024 
        ? window.innerWidth / 3 
        : window.innerWidth > 768 
          ? window.innerWidth / 2 
          : window.innerWidth * 0.85
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16 md:mb-24"
        >
          <span className="text-yellow font-medium text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            What Clients Say
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Don&apos;t just take my word for it. Here&apos;s what some of my clients 
            have to say about working with me.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative group max-w-[100vw] sm:max-w-7xl mx-auto">
          {/* Navigation Controls */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-background/90 text-foreground backdrop-blur-sm border border-border rounded-full shadow-lg md:opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-muted"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-background/90 text-foreground backdrop-blur-sm border border-border rounded-full shadow-lg md:opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-muted"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <motion.div
            ref={carouselRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-8 pt-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2 md:px-4"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative bg-card rounded-3xl border border-border p-8 w-[85vw] sm:w-[400px] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] shrink-0 snap-center flex flex-col justify-between hover:border-yellow/50 transition-colors shadow-sm hover:shadow-md"
              >
                {/* Quote Icon */}
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-yellow flex items-center justify-center shadow-md">
                  <Quote className="w-6 h-6 text-yellow-foreground" />
                </div>

                <div className="pt-2">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow text-yellow" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-base md:text-lg text-foreground leading-relaxed mb-8 italic whitespace-pre-line">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto border-t border-border pt-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-1">
                      {testimonial.role}{testimonial.company ? ` at ${testimonial.company}` : ''}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
