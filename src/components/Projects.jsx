import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="section-wrap" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects with a purpose."
          description="A few ideas and applications I’m developing. Project links and implementation details will appear here when verified."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
