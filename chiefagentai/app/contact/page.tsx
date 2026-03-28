'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    currentSetup: '',
    needsHelp: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <main>
      <section className="page-hero">
        <p className="section-label">Contact</p>
        <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Talk to Chief Agent AI
        </h1>
        <p className="section-sub" style={{ margin: '1rem auto 0', textAlign: 'center' }}>
          If your business is building AI systems, workflows, agents, and automations 
          and needs one orchestration layer to coordinate the wider infrastructure, we can help.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '1100px', margin: '0 auto' }}>
          {/* Form */}
          <div>
            {submitted ? (
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Message Received</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Thanks for reaching out. We\'ll review your current setup and be in touch within 1 business day to arrange a time to talk.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Get in Touch</h2>
                
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="business">Business Name</label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Acme Pty Ltd"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@acme.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+61 400 000 000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="currentSetup">Current AI Setup</label>
                  <select
                    id="currentSetup"
                    name="currentSetup"
                    value={form.currentSetup}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="single-tool">Just starting with AI tools</option>
                    <option value="multiple-tools">Using multiple AI tools separately</option>
                    <option value="automations">Have automations set up</option>
                    <option value="multi-agent">Multiple AI agents running</option>
                    <option value="complex">Complex AI infrastructure</option>
                    <option value="not-sure">Not sure where we are</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="needsHelp">What Do You Need Help Coordinating?</label>
                  <textarea
                    id="needsHelp"
                    name="needsHelp"
                    value={form.needsHelp}
                    onChange={handleChange}
                    placeholder="Tell us about your current AI setup and what you'd like help coordinating..."
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.875rem' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              What We Help Coordinate
            </h2>
            <div className="card-grid" style={{ gridTemplateColumns: '1fr' }}>
              {[
                'AI agents across business functions',
                'AI-enabled workflows and task sequences',
                'Automations and triggers',
                'Connected systems and integrations',
                'Task routing and decision flows',
                'Full AI infrastructure coordination',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.875rem 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>◆</span>
                  <span style={{ fontSize: '0.9rem' }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.75rem' }}>Ready to Talk?</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
                If you'd prefer a direct conversation, book a call and we'll review your setup together.
              </p>
              <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Book a Call</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
