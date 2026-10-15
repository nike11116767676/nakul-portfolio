import { ArrowUpRight, Award } from 'lucide-react'
import { certifications } from '../data/certifications.js'
import SectionHeading from './SectionHeading.jsx'

export default function Certifications() {
  return (
    <section className="section-wrap" id="certifications">
      <div className="container">
        <SectionHeading
          eyebrow="Additional learning"
          title="Courses & certifications"
          description="Course titles are listed below. Issuers, dates, and verification links can be added when available."
        />
        <div className="cert-grid">
          {certifications.map(({ name, issuer, date, url }) => (
            <article className="cert-card" key={name}>
              <span className="cert-icon"><Award size={20} aria-hidden="true" /></span>
              <div className="cert-info"><h3>{name}</h3><p>{[issuer, date].filter(Boolean).join(' · ') || 'Details to be added'}</p></div>
              {url && <a className="cert-link" href={url} target="_blank" rel="noreferrer" aria-label={`View ${name}`}><ArrowUpRight size={16} /></a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
