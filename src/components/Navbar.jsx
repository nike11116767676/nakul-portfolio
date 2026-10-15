import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile.js'
import { ResumeLink } from './SocialLinks.jsx'

const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${profile.name}, home`}>
          <span className="brand-mark">{profile.monogram}</span>
          <span>{profile.name}</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div
          className={`nav-content ${menuOpen ? 'is-open' : ''}`}
          id="primary-navigation"
        >
          <div className="nav-links">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
          <ResumeLink className="button button-small button-outline" />
        </div>
      </nav>
    </header>
  )
}
