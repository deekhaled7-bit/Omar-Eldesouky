'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

const categories = ['All', 'Shopify', 'Fullstack'] as const

const projects = [
  {
    id: 1,
    title: 'The Good News',
    description: 'A multilingual content platform dedicated to sharing uplifting stories, inspiring articles, and positive news from around the world. The platform supports both Arabic and English, providing an engaging reading experience for diverse audiences.The project includes a comprehensive administration dashboard that enables content management, article publishing, category organization, and language-specific content control. Designed with performance and scalability in mind, it offers a seamless experience for both readers and administrators.',
    // description: 'A modern Shopify store with custom theme development, advanced filtering, and seamless checkout experience.',
    image: '/projects/coding/tgn.png',
    category: 'Fullstack',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind'],
    // github: 'https://github.com',
    demo: 'https://www.thegoodnews-me.com/en',
  },
  {
    id: 2,
    title: 'Wifey For Lifey',
    description: 'A comprehensive bridal platform designed to deliver a unique and personalized experience for brides throughout their wedding journey. The platform combines premium content, bridal planning tools, and curated products to support brides from engagement to wedding day.Through a subscription-based model, users gain access to exclusive bridal resources, including carefully curated playlists, planning guides, inspiration content, and members-only experiences. The platform also features a bridal accessories marketplace and a collection of custom-built tools that help brides stay organized, inspired, and prepared during every stage of wedding planning.',
    image: '/projects/coding/wifeyForLifey2.png',
    category: 'Fullstack',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    demo: 'https://www.shopwifeyforlifey.com/',
  },
  {
    id: 3,
    title: 'Free Birds',
    description: 'A Shopify-powered fashion eCommerce store developed for Free Birds, a minimal and bohemian-inspired clothing brand that celebrates freedom, simplicity, and effortless style. The website was crafted to reflect the brand\'s calming aesthetic while providing a seamless and enjoyable shopping experience.The store focuses on intuitive navigation, clean layouts, and a distraction-free user journey, allowing customers to effortlessly explore collections, discover products, and complete purchases with confidence. Every element was optimized to create a smooth browsing experience across desktop and mobile devices while maintaining the brand\'s relaxed and elegant identity.',
    image: '/projects/shopify/freeBirds.png',
    category: 'Shopify',
    technologies: ['Shopify', 'Liquid', 'React', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://freebirdsliving.com/',
  },
  {
    id: 4,
    title: 'Elegance Store',
    description: 'A premium Shopify fashion store designed to deliver a sophisticated and luxurious shopping experience tailored to high-end customers. The project focused on creating an elegant visual identity that reflects the brand\'s commitment to quality, style, and exclusivity.Every aspect of the store was carefully crafted to appeal to discerning shoppers, from refined layouts and premium product presentation to a seamless browsing and purchasing journey. The design emphasizes elegance, trust, and attention to detail, ensuring that customers enjoy a smooth and memorable experience across all devices.',
    image: '/projects/shopify/elegance.png',
    category: 'Shopify',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    demo: 'https://www.elegancestorebrand.com/',
  },
  {
    id: 5,
    title: 'The Good Space',
    description: 'A dedicated workshop reservation platform developed as an extension of The Good News ecosystem. The platform enables users to discover, book, and attend real-world educational and community workshops through a streamlined registration experience.Built with a unique visual identity and user-focused interface, the system provides workshop management, attendee registration, booking tracking, and payment confirmation through InstaPay integration. Administrators can efficiently manage workshops, registrations, schedules, and participant information from a centralized dashboard.',
    image: '/projects/coding/tgs.png',
    category: 'Fullstack',
    technologies: ['Shopify Plus', 'Liquid', 'GraphQL', 'Hydrogen'],
    // github: 'https://github.com',
    demo: 'https://www.thegoodnews-me.com/en/the-good-space',
  },
  {
    id: 6,
    title: 'The Box Giftery',
    description: 'A Shopify eCommerce store developed for The Box Giftery, a gifting brand focused on creating memorable and personalized gift experiences. The project emphasized a seamless customer journey, making it easy for shoppers to discover products, build custom gift bundles, and complete purchases with minimal friction.One of the key challenges was the migration from the Easy Orders platform, including domain transfer and ensuring a smooth transition to Shopify while preserving the brand\'s online presence. The store was optimized to provide a user-friendly shopping experience, intuitive navigation, and flexible bundle-building capabilities that encourage customers to create thoughtful, customized gifts.',
    image: '/projects/shopify/theBoxGiftery.png',
    category: 'Shopify',
    technologies: ['Shopify Plus', 'Liquid', 'GraphQL', 'Hydrogen'],
    // github: 'https://github.com',
    demo: 'https://theboxgiftery.com/',
  },
  {
    id: 7,
    title: 'The Writing Ninjas Academy',
    description: 'An interactive educational platform designed to inspire children to develop their reading and writing skills through gamification, challenges, and achievement-based learning. Built around a fun ninja-themed experience, the platform encourages young learners to create stories, complete tasks, and progress through different skill levels while earning rewards and recognition for their accomplishments.The system features dedicated interfaces for students, parents, teachers, and administrators, creating a complete educational ecosystem. Children can participate in learning activities and track their progress, while parents can monitor achievements and engagement. Teachers are provided with tools to manage content, assignments, and student development, while administrators oversee the entire platform.',
    image: '/projects/coding/ninja.png',
    category: 'Fullstack',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    // github: 'https://github.com',
    demo: 'https://www.thewritingninjasacademy.org/explore',
  },
  {
    id: 8,
    title: 'Najeyah',
    description: 'A Shopify eCommerce store developed for Najeyah, a brand inspired by Islamic values and aesthetics. The project focused on creating a clean, elegant, and culturally aligned shopping experience that reflects the brand\'s identity while ensuring simplicity and ease of use for customers.The store combines thoughtful design elements, harmonious typography, and a refined visual style to create a welcoming environment for shoppers. Particular attention was given to user experience, making it effortless for customers to browse collections, discover products, and complete purchases through a smooth and intuitive journey.',
    image: '/projects/shopify/najeyah.png',
    category: 'Shopify',
    technologies: ['Shopify Plus', 'Liquid', 'GraphQL', 'Hydrogen'],
    // github: 'https://github.com',
    demo: 'https://najeyah.com/',
  },
  {
    id: 9,
    title: 'Youssef Mansour photography',
    description: 'A professional portfolio website developed for Youssef Mansour Photography, designed to showcase his creative vision, photography sessions, and finest work through an elegant and immersive digital experience.The website focuses on visual storytelling, allowing visitors to explore curated galleries, featured photo sessions, and signature shots in a clean and distraction-free environment. Special attention was given to image presentation, performance optimization, and responsive design to ensure that every photograph is displayed with maximum impact across all devices.',
    image: '/projects/coding/youssefMansour.png',
    category: 'Fullstack',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    // github: 'https://github.com',
    demo: 'https://www.youssefmansourphotography.com/',
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All')
  const ref = useRef(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth * 0.85
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 md:py-32">
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
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Selected Projects
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            A curated collection of my best work, showcasing expertise in Shopify development 
            and fullstack web applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-yellow text-yellow-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="relative group">
          {/* Mobile Carousel Controls */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/90 text-foreground backdrop-blur-sm border border-border rounded-full shadow-lg md:hidden hover:bg-muted transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/90 text-foreground backdrop-blur-sm border border-border rounded-full shadow-lg md:hidden hover:bg-muted transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <motion.div
            layout
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-yellow/50 transition-colors w-[85vw] sm:w-[400px] md:w-auto shrink-0 snap-center md:snap-none"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-background/90 text-foreground hover:bg-yellow hover:text-yellow-foreground transition-colors"
                    aria-label="View GitHub"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </motion.a> */}
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-background/90 text-foreground hover:bg-yellow hover:text-yellow-foreground transition-colors"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-xs text-yellow font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-foreground group-hover:text-yellow transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
