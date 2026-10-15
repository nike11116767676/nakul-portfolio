import { ArrowUpRight, Compass, GraduationCap, Lightbulb } from 'lucide-react'
import { profile } from '../data/profile.js'
import SectionHeading from './SectionHeading.jsx'

const highlights = [
  { icon: GraduationCap, title: 'Learning by building', text: 'Growing my software skills through study and project work.' },
  { icon: Compass, title: 'Backend focused', text: 'Interested in APIs, data, and reliable application design.' },
  { icon: Lightbulb, title: 'Curious by nature', text: 'Enjoying practical problem-solving and continuous learning.' },
]

export default function About() {
  return (
    <section className="section-wrap" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="A little about me"
          title="Curious about how things work."
          description="A grounded introduction to what I’m learning and where I want to grow."
        />
        <div className="about-layout">
          <div className="about-copy">
            <p>{profile.about}</p>
            <p>{profile.objective}</p>
            <a className="text-link" href="#education">More about my education <ArrowUpRight size={16} /></a>
          </div>
          <div className="about-highlights">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <article className="highlight-card" key={title}>
                <span className="highlight-icon"><Icon size={19} aria-hidden="true" /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <span className="highlight-index">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
