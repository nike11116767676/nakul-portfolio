import { ArrowUpRight, CheckCircle2, Github } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import ProjectVisual from './ProjectVisual.jsx'

function ProjectLink({ href, children, icon: Icon, className = '' }) {
  if (!href) return null

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {Icon && <Icon size={15} aria-hidden="true" />}
      {children}
    </a>
  )
}

export default function ProjectCard({ project, index }) {
  const reduceMotion = useReducedMotion()
  const { name, category, type, description, problem, technologies, features, github, demo, visual, visualLabel } = project

  return (
    <motion.article
      className={`project-card project-card-${visual}`}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <ProjectVisual type={visual} label={visualLabel} />
      <div className="project-content">
        <div className="project-topline"><span>{type}</span><span className="project-number">0{index + 1}</span></div>
        <h3>{name}</h3>
        <p className="project-category">{category}</p>
        <p className="project-description">{description}</p>
        <p className="project-problem"><span>Focus</span>{problem}</p>
        {technologies.length > 0 && (
          <div className="tag-list project-tags">
            {technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}
          </div>
        )}
        {features.length > 0 ? (
          <ul className="project-features">
            {features.map((feature) => <li key={feature}><CheckCircle2 size={15} />{feature}</li>)}
          </ul>
        ) : (
          <p className="verification-note">Implementation details to be confirmed</p>
        )}
        <div className="project-actions">
          <ProjectLink href={github} icon={Github} className="project-action-link">GitHub</ProjectLink>
          <ProjectLink href={demo} icon={ArrowUpRight} className="project-action-link">Live demo</ProjectLink>
        </div>
      </div>
    </motion.article>
  )
}
