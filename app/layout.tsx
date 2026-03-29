import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chief Agent AI — The Orchestration Layer for Business AI Infrastructure',
  description: 'Chief Agent AI is the coordinating intelligence that helps run and organise AI agents, workflows, systems, automations, and connected business operations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <a href="/" className="nav-logo">
              Chief Agent <span>AI</span>
            </a>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/what-it-does">What It Does</a></li>
              <li><a href="/why-it-matters">Why It Matters</a></li>
              <li><a href="/use-cases">Use Cases</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="nav-cta">
              <a href="/contact" className="btn btn-secondary">Request a Review</a>
              <a href="/contact" className="btn btn-primary">Book a Call</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="footer-inner">
            <p>© 2026 Chief Agent AI. All rights reserved.</p>
            <p>Built for businesses ready to orchestrate their AI infrastructure.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
