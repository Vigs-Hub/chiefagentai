export default function WhatItDoes() {
  return (
    <main>
      <section className="page-hero">
        <p className="section-label">What It Does</p>
        <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          What Chief Agent AI Does
        </h1>
        <p className="section-sub" style={{ margin: '1rem auto 0', textAlign: 'center' }}>
          Chief Agent AI sits above the rest of your AI infrastructure as the orchestration 
          and coordination layer — helping ensure agents, workflows, automations, and systems 
          operate in a connected and commercially useful way.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="card-grid">
          {[
            {
              icon: '⚡',
              title: 'Coordinate AI Agents',
              desc: 'Chief Agent AI helps manage how multiple agents operate, interact, and support different parts of the business — ensuring they work together rather than in isolation.'
            },
            {
              icon: '🔄',
              title: 'Orchestrate Workflows',
              desc: 'Chief Agent AI helps sequence and direct AI-enabled workflows so tasks move in the right order and with the right logic — reducing friction and improving execution.'
            },
            {
              icon: '🧭',
              title: 'Route Tasks and Decisions',
              desc: 'Chief Agent AI helps determine where tasks, triggers, data, or actions should flow across the AI system — ensuring the right output reaches the right destination.'
            },
            {
              icon: '👁️',
              title: 'Oversee Connected Systems',
              desc: 'Chief Agent AI helps connect the movement between tools, workflows, agents, and business infrastructure — creating visibility across the entire AI stack.'
            },
            {
              icon: '📐',
              title: 'Maintain Operational Flow',
              desc: 'Chief Agent AI helps reduce fragmentation and keeps the AI-enabled operating rhythm cleaner and more reliable — so things keep running without constant intervention.'
            },
            {
              icon: '📈',
              title: 'Improve and Refine the System',
              desc: 'Chief Agent AI supports continuous improvement by helping identify gaps, failures, friction points, and optimisation opportunities — so the system gets smarter over time.'
            },
          ].map((item) => (
            <div key={item.title} className="card">
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            Why This Role Matters
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            AI becomes harder to manage as more tools, agents, and workflows are introduced. 
            That's why orchestration becomes essential — not optional.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="/why-it-matters" className="btn btn-secondary">Why It Matters</a>
            <a href="/contact" className="btn btn-primary">Book a Call</a>
          </div>
        </div>
      </section>
    </main>
  )
}
