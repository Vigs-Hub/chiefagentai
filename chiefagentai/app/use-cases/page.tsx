export default function UseCases() {
  return (
    <main>
      <section className="page-hero">
        <p className="section-label">Use Cases</p>
        <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Where Chief Agent AI Fits
        </h1>
        <p className="section-sub" style={{ margin: '1rem auto 0', textAlign: 'center' }}>
          Chief Agent AI is designed for businesses where AI is no longer a single tool, 
          but part of a wider operating system that needs coordination and oversight.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            {
              tag: 'Multi-Agent',
              title: 'Multi-Agent Businesses',
              overview: 'Businesses using multiple AI agents across different functions need one orchestration layer to coordinate activities and prevent conflict.',
              problem: 'Agents start working at cross-purposes, duplicating tasks or missing handoffs entirely.',
              howHelps: 'Chief Agent AI coordinates which agent handles which task, manages handoffs, and ensures context flows between agents correctly.',
              whyMatters: 'Without orchestration, more agents mean more chaos. With it, more agents mean compounding productivity.',
            },
            {
              tag: 'Operations',
              title: 'Internal Operations Teams',
              overview: 'Companies using AI across admin, lead flow, service delivery, reporting, and internal support need coordinated execution.',
              problem: 'AI tools work in isolation — data doesn\'t flow, reporting is fragmented, and tasks fall through the cracks.',
              howHelps: 'Chief Agent AI orchestrates the full operational flow, connecting intake, processing, delivery, and reporting into one coherent system.',
              whyMatters: 'Operational AI only works when it\'s connected. Disconnected AI creates as many problems as it solves.',
            },
            {
              tag: 'Services',
              title: 'AI-Enabled Service Businesses',
              overview: 'Businesses delivering services with AI-supported workflows and systems need a central control layer to maintain quality and consistency.',
              problem: 'AI-assisted delivery becomes inconsistent when tools, agents, and automations don\'t coordinate properly.',
              howHelps: 'Chief Agent AI maintains the service delivery workflow, ensuring each step connects to the next with the right context and quality controls.',
              whyMatters: 'Client-facing AI needs to be reliable and consistent. Orchestration is what delivers that at scale.',
            },
            {
              tag: 'Scaling',
              title: 'Growing AI Infrastructure',
              overview: 'Companies adding more tools, automations, integrations, and agents need the wider system brought into order before it becomes unmanageable.',
              problem: 'The more AI tools added, the more fragmented and harder to manage the system becomes — approaching a breaking point.',
              howHelps: 'Chief Agent AI brings the wider system under one orchestration layer, creating structure before the complexity becomes unmanageable.',
              whyMatters: 'It\'s far easier to build orchestration in early than to untangle fragmented AI later.',
            },
            {
              tag: 'Traditional',
              title: 'Traditional Businesses Building an AI Operating Layer',
              overview: 'Traditional businesses moving into AI-enabled operations need a cleaner orchestration model from the start.',
              problem: 'Existing operations weren\'t designed for AI, so adding AI tools creates friction rather than flow.',
              howHelps: 'Chief Agent AI designs the orchestration layer alongside the AI implementation, building structure from the ground up.',
              whyMatters: 'Getting the orchestration right from the start prevents the fragmentation trap that most businesses fall into.',
            },
          ].map((item) => (
            <div key={item.title} className="usecase-card" style={{ padding: '2.5rem' }}>
              <span className="tag">{item.tag}</span>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>{item.overview}</p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ef4444', marginBottom: '0.5rem' }}>Common Problem</p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{item.problem}</p>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--success)', marginBottom: '0.5rem' }}>Where Chief Agent AI Helps</p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{item.howHelps}</p>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '0.5rem' }}>Why Orchestration Matters</p>
                <p style={{ color: 'var(--text-secondary)' }}>{item.whyMatters}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="section" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>
          The More Complex Your AI, the More Valuable Orchestration Becomes
        </h2>
        <p className="section-sub" style={{ margin: '0 auto 2rem' }}>
          As your AI environment grows, Chief Agent AI becomes increasingly essential — 
          turning what could be chaos into a structured, commercially useful system.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="/contact" className="btn btn-primary">Book a Call</a>
          <a href="/faq" className="btn btn-secondary">View FAQ</a>
        </div>
      </section>
    </main>
  )
}
