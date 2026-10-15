import { Braces, Code2, LayoutPanelTop, Server, Wrench } from 'lucide-react'
import { skills } from '../data/skills.js'
import SectionHeading from './SectionHeading.jsx'

const icons = { code: Code2, server: Server, layout: LayoutPanelTop, wrench: Wrench }

export default function Skills() {
  return (
    <section className="section-wrap section-muted" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & technologies"
          description="A focused snapshot of my current foundations and learning direction."
        />
        <div className="skills-grid">
          {skills.map(({ category, icon, items }) => {
            const Icon = icons[icon] ?? Braces
            return (
              <article className="skill-card" key={category}>
                <div className="skill-card-heading">
                  <span className="skill-icon"><Icon size={19} aria-hidden="true" /></span>
                  <h3>{category}</h3>
                </div>
                <div className="tag-list">
                  {items.map((item) => <span className="tech-tag" key={item}>{item}</span>)}
                </div>
              </article>
            )
          })}
        </div>
        <p className="skills-note">This list reflects my current focus, not a proficiency rating. I’m continuing to build practical experience.</p>
      </div>
    </section>
  )
}
