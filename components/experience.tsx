'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Fullstack Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications using Next.js, TypeScript, and Node.js. Mentoring junior developers and architecting scalable solutions.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Shopify Developer',
    company: 'E-Commerce Agency',
    period: '2020 - 2022',
    description: 'Developed custom Shopify themes and apps for high-profile clients. Implemented complex checkout flows and integrations with third-party services.',
    technologies: ['Shopify', 'Liquid', 'React', 'GraphQL', 'Node.js'],
  },
  {
    title: 'Fullstack Developer',
    company: 'Digital Studio',
    period: '2019 - 2020',
    description: 'Built responsive web applications and REST APIs. Collaborated with design teams to implement pixel-perfect interfaces.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Hub',
    period: '2018 - 2019',
    description: 'Started professional journey building websites and learning modern development practices. Gained foundation in frontend and backend technologies.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'PHP', 'MySQL'],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 md:py-32">
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
            Career
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            My professional journey through the world of web development, 
            from junior developer to senior fullstack engineer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-yellow border-4 border-background -translate-x-[7px] md:-translate-x-1/2`}
                />

                {/* Content Card */}
                <div
                  className={`bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-yellow/50 transition-colors ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className={`flex items-center gap-2 text-yellow mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  
                  <div className={`flex items-center gap-2 text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">{exp.company}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
