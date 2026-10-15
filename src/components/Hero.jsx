import { ArrowDown, ArrowRight, Braces, Code2, Database, Server } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile.js'
import { ResumeLink, SocialLinks } from './SocialLinks.jsx'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="hero-section section-wrap" id="home">
      <div className="hero-grid container">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="availability">
            <span className="availability-dot" />
            Open to Java Developer Opportunities
          </div>
          <p className="hero-greeting">Hello, I’m</p>
          <h1>{profile.name}<span className="heading-period">.</span></h1>
          <div className="hero-role">
            <span className="role-line" />
            <p>{profile.title}<span> · Backend Development</span></p>
          </div>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore My Projects <ArrowRight size={17} aria-hidden="true" />
            </a>
            <ResumeLink className="button button-outline" />
          </div>
          {(profile.github || profile.linkedin || profile.email) && (
            <div className="hero-social-row">
              <SocialLinks />
              <span className="social-caption">Find me online</span>
            </div>
          )}
        </motion.div>

        <motion.div
          className="hero-art-wrap"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          aria-label="Decorative backend development illustration"
          role="img"
        >
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-glow" />
          <div className="hero-code-card">
            <div className="code-card-top">
              <div className="window-dots"><i /><i /><i /></div>
              <span>developer.java</span>
              <Braces size={16} aria-hidden="true" />
            </div>
            <div className="code-card-body" aria-hidden="true">
              <div className="code-line"><span className="code-number">01</span><span className="syntax-purple">public class</span> <span className="syntax-cyan">Developer</span> {'{'}</div>
              <div className="code-line"><span className="code-number">02</span>&nbsp;&nbsp;<span className="syntax-purple">private</span> <span className="syntax-cyan">String</span> focus =</div>
              <div className="code-line"><span className="code-number">03</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-green">"building useful things"</span>;</div>
              <div className="code-line"><span className="code-number">04</span>&nbsp;</div>
              <div className="code-line"><span className="code-number">05</span>&nbsp;&nbsp;<span className="syntax-purple">void</span> <span className="syntax-blue">keepLearning</span>() {'{'}</div>
              <div className="code-line"><span className="code-number">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-cyan">Java</span>.grow();</div>
              <div className="code-line"><span className="code-number">07</span>&nbsp;&nbsp;{'}'}</div>
              <div className="code-line"><span className="code-number">08</span>{'}'}</div>
            </div>
          </div>
          <div className="floating-chip chip-api"><Server size={16} /> REST APIs</div>
          <div className="floating-chip chip-java"><Code2 size={16} /> Java</div>
          <div className="floating-chip chip-data"><Database size={16} /> SQL</div>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#about">
        <span>Scroll to explore</span><ArrowDown size={15} aria-hidden="true" />
      </a>
    </section>
  )
}
