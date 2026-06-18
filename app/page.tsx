import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Testimonials } from '@/components/testimonials'
import { Services } from '@/components/services'
import { WhyMe } from '@/components/why-me'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Projects />
        {/* <Skills /> */}
        {/* <Experience /> */}

        <Services />
        <WhyMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
