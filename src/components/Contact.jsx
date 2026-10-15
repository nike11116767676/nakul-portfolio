import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile.js'
import { SocialLinks } from './SocialLinks.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Contact() {
  return (
    <section className="section-wrap contact-section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Let’s connect"
          title="Have an opportunity in mind?"
          description="I’m open to entry-level Java Developer opportunities and conversations about software development."
        />
        <div className="contact-card">
          <div className="contact-icon"><Mail size={23} aria-hidden="true" /></div>
          <div className="contact-copy">
            <h3>Start a conversation</h3>
            <p>Reach out about Java Developer opportunities or software development.</p>
            <div className="contact-details">
              {profile.email && <a href={`mailto:${profile.email}`}>{profile.email}</a>}
              {profile.phone && <a href={`tel:${profile.phone}`}><Phone size={13} aria-hidden="true" />{profile.phone}</a>}
            </div>
          </div>
          {profile.email ? (
            <a className="button button-primary" href={`mailto:${profile.email}`}>Email me <ArrowUpRight size={16} /></a>
          ) : <span className="contact-pending">Email not configured</span>}
          <SocialLinks className="contact-socials" />
        </div>
      </div>
    </section>
  )
}
