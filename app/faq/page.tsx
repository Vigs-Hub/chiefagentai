'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What is Chief Agent AI?',
    a: 'Chief Agent AI is the orchestration layer for your business AI infrastructure. It sits above your AI agents, tools, workflows, and automations — coordinating how they work together as one connected system, rather than fragmented parts.'
  },
  {
    q: 'What does it mean to orchestrate AI infrastructure?',
    a: 'AI orchestration means managing the flow of tasks, data, and decisions across multiple AI agents, tools, and workflows. It ensures the right information reaches the right place at the right time, with the right logic applied — creating a coordinated system rather than isolated tools.'
  },
  {
    q: 'Is this the same as an AI chatbot?',
    a: 'No. A chatbot is a single interface for talking to one AI model. Chief Agent AI is a coordination layer that manages multiple AI systems, agents, workflows, and automations simultaneously — making them work as one integrated infrastructure.'
  },
  {
    q: 'Who is this best suited for?',
    a: 'Chief Agent AI is best suited for businesses that are using or building multiple AI tools, agents, and automations — and need them to work together as a coordinated system. This includes multi-agent businesses, operations teams, AI-enabled service businesses, and companies scaling their AI infrastructure.'
  },
  {
    q: 'Why do businesses need an orchestration layer?',
    a: 'As businesses add more AI tools, agents, and workflows, the complexity grows exponentially. Without orchestration, systems become fragmented — agents duplicate work, workflows break, and there\'s no single layer controlling the flow. Orchestration brings structure, reliability, and commercial value to the AI infrastructure.'
  },
  {
    q: 'Can Chief Agent AI sit above multiple AI tools and agents?',
    a: 'Yes. That\'s exactly what it\'s designed for. Chief Agent AI operates as the coordination layer above whatever AI infrastructure you already have — bringing agents, tools, and workflows into one orchestrated system.'
  },
  {
    q: 'What happens when AI workflows break or become fragmented?',
    a: 'Without orchestration, broken workflows create cascading failures — tasks get missed, data becomes inconsistent, and teams spend more time firefighting than delivering. Chief Agent AI identifies these issues and brings structure to prevent them.'
  },
  {
    q: 'Is this suitable for existing businesses, not just AI-native ones?',
    a: 'Absolutely. Many existing businesses are adopting AI tools without a coordination strategy, which creates more problems than it solves. Chief Agent AI is designed to bring structure to any business building AI infrastructure — regardless of how long the business has been around.'
  },
  {
    q: 'How do we know if we need this?',
    a: 'If your business is using more than one AI tool, agent, or automation — and they\'re not working together as one coordinated system — you need orchestration. Signs include: agents duplicating work, workflows breaking, poor visibility across AI operations, and AI creating more overhead than value.'
  },
  {
    q: 'How do we get started?',
    a: 'The easiest first step is a conversation. Book a call and we\'ll review your current AI setup, identify the coordination gaps, and show you exactly how Chief Agent AI would bring structure to your infrastructure.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <main>
      <section className="page-hero">
        <p className="section-label">FAQ</p>
        <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Frequently Asked Questions
        </h1>
        <p className="section-sub" style={{ margin: '1rem auto 0', textAlign: 'center' }}>
          Answers to the practical questions business owners and operators have about 
          AI orchestration and Chief Agent AI.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0, maxWidth: '800px', margin: '0 auto' }}>
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {faq.q}
              <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)', transition: 'transform 0.2s', transform: openIndex === i ? 'rotate(45deg)' : 'none' }}>+</span>
            </button>
            {openIndex === i && (
              <div className="faq-answer">
                {faq.a}
              </div>
            )}
          </div>
        ))}

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p className="section-sub" style={{ marginBottom: '1.5rem' }}>
            Still have questions? Let\'s talk.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="/contact" className="btn btn-primary">Book a Call</a>
            <a href="/contact" className="btn btn-secondary">Request a Review</a>
          </div>
        </div>
      </section>
    </main>
  )
}
