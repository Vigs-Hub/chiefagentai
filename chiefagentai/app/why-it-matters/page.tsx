export default function WhyItMatters() {
  return (
    <main>
      <section className="page-hero">
        <p className="section-label">Why It Matters</p>
        <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Why AI Orchestration Matters
        </h1>
        <p className="section-sub" style={{ margin: '1rem auto 0', textAlign: 'center' }}>
          The more AI tools, agents, and workflows a business adds, the more important 
          orchestration becomes. Without coordination, AI infrastructure turns into fragmented 
          moving parts instead of a working system.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <p className="section-label">The Problem</p>
        <h2 className="section-title">What's Happening in Businesses Right Now</h2>
        <p className="section-sub">
          Businesses are adopting AI rapidly — but most are adding tools without coordination.
        </p>
        <div className="problem-grid">
          {[
            'Businesses are adopting AI rapidly with no coordination layer',
            'Different tools are being layered into operations without integration',
            'Workflows become disconnected and inconsistent',
            'Agents work in isolation, missing cross-functional context',
            'Automations break or overlap, creating more work than they save',
            'There is no central coordination layer managing the whole flow',
            'AI infrastructure becomes expensive fragmented chaos',
            'Teams spend more time managing AI than benefiting from it',
          ].map((item) => (
            <div key={item} className="problem-item">
              <span className="icon">✕</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <p className="section-label">The Cost</p>
        <h2 className="section-title">The Real Cost of Poor Orchestration</h2>
        <p className="section-sub">
          Fragmented AI doesn't just underperform — it actively drains resources.
        </p>
        <div className="card-grid">
          {[
            { title: 'Fragmented Systems', desc: 'Multiple AI tools working in silos, creating data inconsistencies and duplicated effort.' },
            { title: 'Duplicated Work', desc: 'Agents and automations repeating tasks that should only happen once, wasting compute and time.' },
            { title: 'Poor Reliability', desc: 'Workflows that break unpredictably, requiring constant manual oversight and intervention.' },
            { title: 'Missed Tasks', desc: 'Actions that fall through the cracks because no system is tracking the full flow.' },
            { title: 'Weak Visibility', desc: 'No clear picture of what AI is doing across the business at any given moment.' },
            { title: 'Wasted Spend', desc: 'Money spent on tools that don\'t work together efficiently or deliver compounding value.' },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <p className="section-label">The Answer</p>
        <h2 className="section-title">What Chief Agent AI Delivers</h2>
        <p className="section-sub">
          Chief Agent AI gives the business a central orchestration layer that brings 
          coordination, structure, and operational clarity to the entire AI infrastructure.
        </p>
        <div className="card-grid">
          {[
            { icon: '🎯', title: 'Coordination', desc: 'One layer that understands how all the AI components fit together and work as a system.' },
            { icon: '🔗', title: 'Structure', desc: 'Defined workflows, clear dependencies, and predictable execution across all AI operations.' },
            { icon: '🎛️', title: 'Orchestration', desc: 'Central control over how tasks move, where data flows, and when actions trigger.' },
            { icon: '👁️', title: 'Oversight', desc: 'Clear visibility into what the AI system is doing, catching issues before they become problems.' },
            { icon: '⚡', title: 'Task Flow Control', desc: 'Managing the movement of tasks and decisions across agents, tools, and workflows.' },
            { icon: '📊', title: 'Clearer AI Operations', desc: 'Reporting and insights on AI performance, reliability, and commercial output.' },
          ].map((item) => (
            <div key={item.title} className="card">
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p className="section-label">The Moment</p>
          <h2 className="section-title">
            Orchestration Is Now a Business Essential
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            As businesses rely on more connected AI systems, orchestration moves from 
            "nice to have" to core infrastructure requirement. The businesses that 
            build this coordination layer now will have a structural advantage — 
            cleaner operations, faster execution, and AI that actually delivers.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn btn-primary">Book a Call</a>
            <a href="/use-cases" className="btn btn-secondary">View Use Cases</a>
          </div>
        </div>
      </section>
    </main>
  )
}
