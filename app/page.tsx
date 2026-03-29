export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">
          <span>◆</span> AI Orchestration
        </div>
        <h1>
          The AI Layer That<br />
          <span className="gradient">Orchestrates</span> the Rest
        </h1>
        <p className="hero-sub">
          Chief Agent AI is the coordinating intelligence that helps businesses 
          orchestrate agents, tools, workflows, and automations — so your 
          AI infrastructure actually works as one connected system.
        </p>
        <div className="hero-cta">
          <a href="/contact" className="btn btn-primary">Book a Call</a>
          <a href="/what-it-does" className="btn btn-secondary">See How It Works</a>
        </div>
        <p className="hero-meta">
          For founders, operators, and businesses building real AI infrastructure
        </p>
      </section>

      {/* What It Does */}
      <section className="section" id="what-it-does">
        <p className="section-label">What It Does</p>
        <h2 className="section-title">The Orchestration Layer for Your AI Stack</h2>
        <p className="section-sub">
          Chief Agent AI sits above the rest of your AI infrastructure — coordinating, 
          directing, and keeping everything connected and operational.
        </p>
        <div className="card-grid">
          {[
            {
              icon: '⚡',
              title: 'Coordinate AI Agents',
              desc: 'Manage how multiple agents operate, interact, and support different parts of the business.'
            },
            {
              icon: '🔄',
              title: 'Orchestrate Workflows',
              desc: 'Sequence and direct AI-enabled workflows so tasks move in the right order with the right logic.'
            },
            {
              icon: '🧭',
              title: 'Route Tasks & Decisions',
              desc: 'Determine where tasks, triggers, data, and actions should flow across the AI system.'
            },
            {
              icon: '👁️',
              title: 'Oversee Connected Systems',
              desc: 'Manage the movement between tools, workflows, agents, and business infrastructure.'
            },
            {
              icon: '📐',
              title: 'Maintain Operational Flow',
              desc: 'Reduce fragmentation and keep the AI-enabled operating rhythm cleaner and more reliable.'
            },
            {
              icon: '📈',
              title: 'Improve & Refine the System',
              desc: 'Identify gaps, failures, friction points, and optimisation opportunities continuously.'
            },
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

      {/* Problem */}
      <section className="section problem">
        <p className="section-label">The Problem</p>
        <h2 className="section-title">AI Without Orchestration<br />Becomes Noise</h2>
        <p className="section-sub">
          Businesses are adopting AI rapidly — but without a central coordination layer, 
          the results are fragmented systems, broken workflows, and wasted spend.
        </p>
        <div className="problem-grid">
          {[
            'Workflows become disconnected and inefficient',
            'AI agents work in isolation, missing context',
            'Automations break or overlap without oversight',
            'No single layer controls the whole flow',
            'Systems do not talk to each other properly',
            'AI infrastructure turns into expensive chaos',
          ].map((item) => (
            <div key={item} className="problem-item">
              <span className="icon">✕</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* How It Works */}
      <section className="section">
        <p className="section-label text-center">How It Works</p>
        <h2 className="section-title text-center">Three Steps to<br />Orchestrated AI</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Connect</h3>
            <p>Connect your existing AI tools, agents, and workflows into one coordinated system.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Orchestrate</h3>
            <p>Chief Agent AI coordinates the flow, manages task routing, and keeps systems connected.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Optimise</h3>
            <p>Continuous monitoring and refinement to improve reliability, speed, and commercial output.</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Use Cases Preview */}
      <section className="section">
        <p className="section-label">Use Cases</p>
        <h2 className="section-title">Where Chief Agent AI Fits</h2>
        <p className="section-sub">
          Designed for businesses where AI is no longer a single tool, 
          but part of a wider operating system that needs coordination.
        </p>
        <div className="card-grid">
          {[
            {
              tag: 'Multi-Agent',
              title: 'Multi-Agent Businesses',
              desc: 'Businesses using multiple AI agents across different functions that need one orchestration layer.'
            },
            {
              tag: 'Operations',
              title: 'Internal Operations Teams',
              desc: 'Companies using AI across admin, lead flow, service delivery, and reporting that need coordinated execution.'
            },
            {
              tag: 'Services',
              title: 'AI-Enabled Service Businesses',
              desc: 'Businesses delivering services with AI-supported workflows and systems that need a central control layer.'
            },
            {
              tag: 'Scaling',
              title: 'Growing AI Infrastructure',
              desc: 'Companies adding more tools, automations, integrations, and agents that need the wider system brought into order.'
            },
          ].map((item) => (
            <div key={item.title} className="usecase-card">
              <span className="tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <a href="/use-cases" className="btn btn-secondary">View All Use Cases</a>
        </div>
      </section>

      <div className="divider" />

      {/* Authority */}
      <section className="section">
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p className="section-label">Positioning</p>
          <h2 className="section-title">
            Not Another AI Tool.<br />
            The Layer That Makes the Tools Work Together.
          </h2>
          <p className="section-sub" style={{ margin: '0 auto 2rem' }}>
            As businesses add more AI systems, they need orchestration — not just more tools. 
            Chief Agent AI is the control layer that brings everything together into one 
            working, commercially useful system.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/why-it-matters" className="btn btn-secondary">Why It Matters</a>
            <a href="/contact" className="btn btn-primary">Book a Call</a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Final CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <p className="section-label">Get Started</p>
        <h2 className="section-title">
          Bring Your AI Systems Under<br />One Orchestrated Layer
        </h2>
        <p className="section-sub" style={{ margin: '0 auto 2rem' }}>
          If your business is building AI infrastructure, Chief Agent AI helps organise 
          the moving parts into a structured system that actually runs properly.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" className="btn btn-primary">Book a Call</a>
          <a href="/contact" className="btn btn-secondary">Request a Review</a>
        </div>
      </section>
    </main>
  )
}
