import { ArrowUp, Code2, Phone } from 'lucide-react'
import { profile } from '../data/profile.js'
import { SocialLinks } from './SocialLinks.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#home"><span className="brand-mark">{profile.monogram}</span><span><strong>{profile.name}</strong><small>{profile.title}</small></span></a>
        <p className="footer-note"><Code2 size={15} /> Learning, building, and getting better every day.</p>
        <SocialLinks className="footer-socials" />
        <div className="footer-bottom">
          <span className="footer-contact">
            © {new Date().getFullYear()} {profile.name}
            {profile.phone && <a href={`tel:${profile.phone}`}><Phone size={12} />{profile.phone}</a>}
          </span>
          <a className="back-to-top" href="#home">Back to top <ArrowUp size={14} /></a>
        </div>
      </div>
    </footer>
  )
}
