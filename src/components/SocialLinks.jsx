import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile.js'

const socials = [
  { label: 'GitHub', href: profile.github, Icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, Icon: Linkedin },
  {
    label: 'Email',
    href: profile.email ? `mailto:${profile.email}` : '',
    Icon: Mail,
  },
]

export function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`}>
      {socials.filter(({ href }) => href).map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
        >
          <Icon size={18} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export function ResumeLink({ className = '', children = 'Download Resume' }) {
  if (!profile.resumeAvailable) return null

  return (
    <a className={className} href={profile.resumePath} download>
      {children}
    </a>
  )
}
