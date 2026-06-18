'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MessageCircle, CheckCircle } from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

const socialLinks = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com', username: '@omareldesouky' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com', username: 'Omar Eldesouky' },
  { icon: Mail, label: 'Email', href: 'mailto:omar@example.com', username: 'omar@example.com' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/1234567890', username: '+1 234 567 890' },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
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
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. 
            Send me a message and let&apos;s create something amazing.
          </p>
        </motion.div>

        {/* Contact form hidden for now */}
        {false && (
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card rounded-2xl border border-border p-8 md:p-10 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-yellow hover:underline font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl border border-border p-8 md:p-10"
                >
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company <span className="text-muted-foreground">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-yellow text-yellow-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-yellow-foreground/30 border-t-yellow-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a question about my services, want to discuss a project, 
                or just want to say hello, feel free to reach out. I&apos;m always happy 
                to connect with fellow developers and potential clients.
              </p>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-yellow/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-yellow group-hover:text-yellow-foreground transition-colors">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{social.label}</h4>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        )}

        <div className="max-w-xl mx-auto flex justify-center mt-8">
          <motion.a
            href="https://wa.me/+201114369970"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-yellow text-yellow-foreground rounded-full font-semibold  transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg">Chat on WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
