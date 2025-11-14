import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-block h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500" />
            <span className="font-extrabold tracking-tight text-xl">BlueSpark Digital</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
            <a href="#process" className="hover:text-blue-600 transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
            Get a Proposal
          </a>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200" aria-label="Open menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Proven freelance partner
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight">
              Digital marketing that turns clicks into clients
            </h1>
            <p className="mt-5 text-lg text-gray-700 max-w-xl">
              I help startups and service brands grow faster with conversion-focused SEO, paid campaigns, and landing pages engineered to perform. Strategy first. Results always.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                Book a 15‑min intro call
              </a>
              <a href="#work" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition-colors">
                View recent results
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md text-center">
              <div>
                <p className="text-3xl font-extrabold text-gray-900">+312%</p>
                <p className="text-xs text-gray-600">Organic traffic</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">2.8x</p>
                <p className="text-xs text-gray-600">ROAS on paid</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">+41%</p>
                <p className="text-xs text-gray-600">Lead conversion</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-200/60 to-indigo-200/60 blur-2xl rounded-3xl" />
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-gray-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
                alt="Marketing dashboard analytics on laptop"
                className="w-full h-[360px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-80">
          {[
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1520975922284-9d124b0764d1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502882705085-c8ff1f36f681?q=80&w=800&auto=format&fit=crop',
          ].map((src, i) => (
            <img key={i} src={src} alt="Client logo placeholder" className="w-full h-8 object-cover rounded" />
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold">Services that compound growth</h2>
            <p className="mt-3 text-gray-700">Targeted, measurable, and built to scale with your business.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="group bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
              <div className="h-12 w-12 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <h3 className="font-bold text-lg">SEO & Content Strategy</h3>
              <p className="mt-2 text-sm text-gray-700">Technical audits, keyword maps, and editorial systems that build authority and drive compounding organic traffic.</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-600 list-disc pl-5">
                <li>Technical & on-page optimization</li>
                <li>Content strategy & briefs</li>
                <li>Link acquisition roadmap</li>
              </ul>
            </div>
            <div className="group bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
              <div className="h-12 w-12 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3 className="font-bold text-lg">Paid Social & Search</h3>
              <p className="mt-2 text-sm text-gray-700">Full-funnel campaigns across Google, Meta, and LinkedIn with creative testing frameworks and ROAS tracking.</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-600 list-disc pl-5">
                <li>Offer and audience development</li>
                <li>Creative testing sprints</li>
                <li>Daily optimization & reporting</li>
              </ul>
            </div>
            <div className="group bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
              <div className="h-12 w-12 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v14H3z"></path><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>
              </div>
              <h3 className="font-bold text-lg">Conversion-Driven Landing Pages</h3>
              <p className="mt-2 text-sm text-gray-700">Fast, persuasive pages engineered to turn attention into action with clean UX, sharp copy, and analytics baked in.</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-600 list-disc pl-5">
                <li>Messaging & wireframing</li>
                <li>High-speed implementation</li>
                <li>Analytics & heatmaps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold">Selected results</h2>
            <p className="mt-3 text-gray-700">A snapshot of recent projects and measurable outcomes.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'B2B SaaS SEO',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
                stat: '+268% qualified demos',
              },
              {
                title: 'E‑commerce Paid Social',
                img: 'https://images.unsplash.com/photo-1555529771-35a38c1062a3?q=80&w=1600&auto=format&fit=crop',
                stat: '3.1x blended ROAS',
              },
              {
                title: 'Local Services Lead Gen',
                img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
                stat: '-42% cost per lead',
              },
            ].map((card, i) => (
              <article key={i} className="group overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-sm hover:shadow-md transition">
                <img src={card.img} alt={card.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-bold">{card.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{card.stat}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold">A clean, confident process</h2>
            <p className="mt-3 text-gray-700">No guesswork. Every engagement follows a structured playbook with clear milestones.</p>
          </div>
          <ol className="mt-12 grid md:grid-cols-4 gap-6 counter-reset">
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'We align on goals, audience, and economics to define a sharp success metric.'
              },
              {
                step: '02',
                title: 'Strategy',
                desc: 'I map the funnel, select channels, and design experiments to validate quickly.'
              },
              {
                step: '03',
                title: 'Execution',
                desc: 'Creative, targeting, and landing pages shipped fast with tight feedback loops.'
              },
              {
                step: '04',
                title: 'Scale',
                desc: 'Double down on winners, automate reporting, and extend into new audiences.'
              },
            ].map((p, i) => (
              <li key={i} className="bg-white rounded-2xl p-6 ring-1 ring-gray-200">
                <span className="text-xs font-semibold text-blue-700">{p.step}</span>
                <h3 className="mt-2 font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold">What clients say</h2>
            <p className="mt-3 text-gray-700">Real feedback from founders and marketing leaders.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Cut our CPA in half in 60 days and built a repeatable testing engine.',
                name: 'Maya K.', role: 'VP Growth, Fintech'
              },
              {
                quote: 'Our content now ranks and converts. The strategy and execution were flawless.',
                name: 'Zach L.', role: 'CEO, B2B SaaS'
              },
              {
                quote: 'Clear communication, strong creative instincts, and measurable results.',
                name: 'Ivy R.', role: 'Founder, DTC'
              },
            ].map((t, i) => (
              <figure key={i} className="bg-white rounded-2xl p-6 ring-1 ring-gray-200 shadow-sm">
                <blockquote className="text-sm text-gray-800">“{t.quote}”</blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 11}`}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-600">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700" />
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/10 backdrop-blur rounded-3xl p-10 ring-1 ring-white/20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-white text-3xl md:text-4xl font-extrabold">Ready to accelerate growth?</h2>
                <p className="mt-3 text-blue-100">Tell me about your goals and I’ll send a tailored mini‑plan with quick wins and a transparent roadmap.</p>
                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-blue-100">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white" /> 15‑minute intro call</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white" /> No obligation</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white" /> Clear pricing</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white" /> Actionable insights</li>
                </ul>
              </div>
              <form className="bg-white rounded-2xl p-6 space-y-4">
                <div>
                  <label className="text-sm font-semibold">Name</label>
                  <input type="text" placeholder="Your full name" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div>
                  <label className="text-sm font-semibold">Email</label>
                  <input type="email" placeholder="you@company.com" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div>
                  <label className="text-sm font-semibold">Project goal</label>
                  <textarea rows="4" placeholder="Tell me about your goals or current bottlenecks" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                </div>
                <button type="button" className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                  Request proposal
                </button>
                <p className="text-xs text-gray-500 text-center">I’ll reply within one business day.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} BlueSpark Digital — Freelance Growth Marketing</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#work" className="text-gray-600 hover:text-blue-600">Work</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
