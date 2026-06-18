'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Next.js', level: 95 },
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'Authentication', level: 85 },
      { name: 'Authorization', level: 85 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'MSSQL', level: 80 },
      { name: 'MySQL', level: 82 },
      { name: 'PostgreSQL', level: 78 },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
      { name: 'Vercel', level: 88 },
      { name: 'Docker', level: 75 },
    ],
  },
  {
    title: 'Shopify',
    skills: [
      { name: 'Shopify Themes', level: 95 },
      { name: 'Shopify Liquid', level: 93 },
      { name: 'Shopify Apps', level: 85 },
      { name: 'Store Customization', level: 92 },
    ],
  },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay * 0.1, ease: 'easeOut' }}
          className="h-full bg-yellow rounded-full"
        />
      </div>
    </div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 md:py-32 bg-muted/30">
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
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            A comprehensive toolkit built over years of professional development, 
            constantly evolving with the latest technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow rounded-full" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex + skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
