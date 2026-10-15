import { BookOpen, Bot, Braces, HeartPulse, Search, Sparkles } from 'lucide-react'

function LibraryVisual() {
  return (
    <div className="mock-panel library-mock" aria-hidden="true">
      <div className="mock-sidebar"><span className="mock-logo">L</span><i /><i /><i /></div>
      <div className="mock-main">
        <div className="mock-toolbar"><span className="mock-title-line" /><span className="mock-avatar">N</span></div>
        <div className="mock-welcome"><small>LIBRARY OVERVIEW</small><strong>Manage your collection</strong></div>
        <div className="mock-stats"><i /><i /><i /></div>
        <div className="mock-table"><span /><span /><span /><span /><span /><span /></div>
        <div className="mock-book-strip"><BookOpen /><i /><i /><i /></div>
      </div>
    </div>
  )
}

function CodeVisual() {
  return (
    <div className="mock-panel code-mock" aria-hidden="true">
      <div className="code-mock-toolbar"><span className="window-dots"><i /><i /><i /></span><small>analysis.workspace</small><Search size={13} /></div>
      <div className="code-mock-content">
        <div className="code-mock-editor">
          <span className="mock-gutter">1<br />2<br />3<br />4<br />5<br />6</span>
          <div><b>class</b> <em>LibraryService</em> {'{'}<br />&nbsp; <i>public</i> List&lt;Book&gt;<br />&nbsp; <u>findAvailable</u>() {'{'}<br />&nbsp;&nbsp; return books.stream()<br />&nbsp;&nbsp;&nbsp; .filter(Book::isAvailable);<br />&nbsp; {'}'}</div>
        </div>
        <div className="analysis-pane"><span><Sparkles size={12} /> ANALYSIS</span><i /><i /><i /></div>
      </div>
    </div>
  )
}

function HealthVisual() {
  return (
    <div className="mock-panel health-mock" aria-hidden="true">
      <div className="health-toolbar"><span className="health-logo"><HeartPulse size={17} /></span><i /><span className="mock-avatar">N</span></div>
      <div className="health-content"><small>YOUR WELLNESS SPACE</small><strong>How can I help today?</strong><div className="chat-bubble bubble-question"><span /> <i /></div><div className="chat-bubble bubble-answer"><Bot size={14} /><i /></div></div>
      <div className="health-input"><span>Type a message...</span><span><Sparkles size={13} /></span></div>
    </div>
  )
}

const visuals = { library: LibraryVisual, code: CodeVisual, health: HealthVisual }

export default function ProjectVisual({ type, label }) {
  const Visual = visuals[type]
  if (!Visual) return <div className="project-visual-fallback"><Braces aria-hidden="true" /></div>

  return (
    <div className={`project-visual project-visual-${type}`} role="img" aria-label={label}>
      <span className="illustrative-label">Illustrative preview</span>
      <Visual />
    </div>
  )
}
