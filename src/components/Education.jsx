import { GraduationCap, MapPin } from 'lucide-react'
import { education } from '../data/education.js'
import SectionHeading from './SectionHeading.jsx'

export default function Education() {
  return (
    <section className="section-wrap section-muted" id="education">
      <div className="container">
        <SectionHeading eyebrow="My foundation" title="Education" />
        <div className="education-list">
          {education.map(({ degree, institution, location, period, details }) => (
            <article className="education-card" key={`${degree}-${institution}`}>
              <div className="education-icon"><GraduationCap size={23} aria-hidden="true" /></div>
              <div className="education-main">
                <span className="eyebrow">GRADUATE</span>
                <h3>{degree}</h3>
                <p>{institution}</p>
                <span className="education-location"><MapPin size={14} />{location}</span>
                {details && <p className="education-details">{details}</p>}
              </div>
              {period && <span className="education-period">{period}</span>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
