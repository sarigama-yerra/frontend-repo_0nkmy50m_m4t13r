import React from 'react'

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-700 text-lg">{subtitle}</p>}
    </div>
  )
}

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
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#results" className="hover:text-blue-600 transition-colors">Results</a>
            <a href="#process" className="hover:text-blue-600 transition-colors">Process</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#faqs" className="hover:text-blue-600 transition-colors">FAQs</a>
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
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Freelance Growth Partner
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight">
              Digital marketing that turns clicks into clients
            </h1>
            <p className="mt-5 text-lg text-gray-700 max-w-xl">
              I help startups and service brands grow faster with conversion‑focused SEO, paid campaigns, and landing pages engineered to perform. Strategy first. Results always. You’ll get clear plans, clean execution, and reporting that tells the story behind the numbers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                Book a 15‑min intro call
              </a>
              <a href="#results" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition-colors">
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

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div className="prose prose-lg max-w-none">
            <SectionHeading
              eyebrow="About"
              title="A senior generalist who ships outcomes, not deliverables"
              subtitle="I combine strategy, copy, design, and analytics to build marketing systems that compound."
            />
            <div className="mt-6 text-gray-800 leading-relaxed space-y-5">
              <p>
                Great marketing is more than isolated tactics. It’s the choreography of clear positioning, relevant creative, and a frictionless path to action. I partner with founders and marketing leaders to architect that experience end‑to‑end—translating business goals into focused experiments that drive measurable outcomes.
              </p>
              <p>
                My background spans B2B SaaS, e‑commerce, and local services. I’ve worked on seven‑figure ad budgets, built editorial machines from the ground up, and redesigned landing experiences that changed the trajectory of sales pipelines. I’m fluent in the languages that matter: audience research, offer craft, UX writing, technical SEO, paid social, search intent, and product‑led storytelling.
              </p>
              <p>
                What clients value most is the signal‑to‑noise ratio. You’ll never sift through vanity metrics or bloated presentations. Instead, you’ll get straight talk, defensible strategy, and a weekly rhythm of execution, insights, and decisions. If something isn’t working, we’ll know quickly and correct with precision. If it is working, we scale it with equal discipline.
              </p>
              <p>
                I operate with the bias that speed and quality can coexist. That’s why I design lean systems, templatize what can be repeatable, and automate reporting so we’re always looking at the same source of truth. The result is a calm, confident marketing engine that ships often and learns constantly.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <img className="rounded-2xl w-full h-72 object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1706894075115-f140b40493cb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXb3Jrc3BhY2UlMjB3aXRoJTIwc3RyYXRlZ3klMjBub3Rlc3xlbnwwfDB8fHwxNzYzMTE5OTg0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Workspace with strategy notes" />
            <img className="rounded-2xl w-full h-72 object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop" alt="Creative review on mobile" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Services"
            title="Services that compound growth"
            subtitle="Targeted, measurable, and built to scale with your business."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="group bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
              <div className="h-12 w-12 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <h3 className="font-bold text-lg">SEO & Content Strategy</h3>
              <p className="mt-2 text-sm text-gray-700">Technical audits, keyword maps, and editorial systems that build authority and drive compounding organic traffic.</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-600 list-disc pl-5">
                <li>Technical & on‑page optimization</li>
                <li>Topic clusters and search‑intent briefs</li>
                <li>Editorial calendar and content ops</li>
                <li>Link acquisition roadmap</li>
              </ul>
              <p className="mt-4 text-sm text-gray-700">I build pragmatic SEO that serves the buyer first. We identify where you deserve to rank, create content that actually answers the query, and make your site fast, clear, and crawlable. The goal: capture intent and convert it.</p>
            </div>
            <div className="group bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
              <div className="h-12 w-12 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3 className="font-bold text-lg">Paid Social & Search</h3>
              <p className="mt-2 text-sm text-gray-700">Full‑funnel campaigns across Google, Meta, and LinkedIn with creative testing frameworks and ROAS tracking.</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-600 list-disc pl-5">
                <li>Offer and audience development</li>
                <li>Creative testing sprints</li>
                <li>Daily optimization & reporting</li>
                <li>Attribution you can trust</li>
              </ul>
              <p className="mt-4 text-sm text-gray-700">We craft offers that resonate, pair them with scroll‑stopping creative, and measure what matters. Expect lean tests, fast feedback, and a cadence that builds confidence in your CAC.</p>
            </div>
            <div className="group bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
              <div className="h-12 w-12 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v14H3z"></path><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>
              </div>
              <h3 className="font-bold text-lg">Conversion‑Driven Landing Pages</h3>
              <p className="mt-2 text-sm text-gray-700">Fast, persuasive pages engineered to turn attention into action with clean UX, sharp copy, and analytics baked in.</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-600 list-disc pl-5">
                <li>Messaging & wireframing</li>
                <li>High‑speed implementation</li>
                <li>Analytics & heatmaps</li>
                <li>A/B testing plan</li>
              </ul>
              <p className="mt-4 text-sm text-gray-700">Every element earns its place. We remove friction, clarify the value prop, and nudge intent to decision with proof, structure, and pace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Case Studies */}
      <section id="results" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Results"
            title="Selected projects and measurable outcomes"
            subtitle="A snapshot of engagements that moved the needle—backed by hard metrics and clear narratives."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'B2B SaaS SEO program',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
                stat: '+268% qualified demos',
                copy: 'Over six months, rebuilt the information architecture, established topic clusters around high‑intent queries, and published 40 net‑new pages tied to product capabilities. Consolidated duplicate posts, fixed thin content, and earned links from five category‑leading publications. Result: a reliable stream of qualified demo requests with lower variance week‑to‑week.'
              },
              {
                title: 'E‑commerce Paid Social scale',
                img: 'https://images.unsplash.com/photo-1555529771-35a38c1062a3?q=80&w=1600&auto=format&fit=crop',
                stat: '3.1x blended ROAS',
                copy: 'Designed a creative testing system that refreshed ads every 10 days. Mapped audiences by awareness level and aligned offers accordingly. Introduced post‑purchase surveys and refined attribution to identify true channel lift. Scaled spend 2.4x while maintaining profitable unit economics.'
              },
              {
                title: 'Local services lead gen',
                img: 'https://images.unsplash.com/photo-1520975922284-9d124b0764d1?q=80&w=1600&auto=format&fit=crop',
                stat: '-42% cost per lead',
                copy: 'Rewrote the offer, rebuilt landing pages with social proof above the fold, and introduced call‑only campaigns during peak hours. Implemented call tracking and CRM integration to optimize toward closed‑won revenue, not just raw lead volume. Net result: more qualified bookings at a lower cost.'
              },
            ].map((card, i) => (
              <article key={i} className="group overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-sm hover:shadow-md transition flex flex-col">
                <img src={card.img} alt={card.title} className="h-48 w-full object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold">{card.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{card.copy}</p>
                  <p className="mt-4 text-sm font-semibold text-blue-700">{card.stat}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
            <img className="rounded-2xl w-full h-80 object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop" alt="Team reviewing marketing dashboards" />
            <div className="text-gray-800 space-y-4 leading-relaxed">
              <p>
                Beyond topline metrics, I care about compounding effects: how an improved onboarding flow lowers refund rates, how a more precise value proposition lifts referral quality, or how a faster page speed amplifies every acquisition channel. We design for these second‑order impacts and measure them with the same rigor as primary KPIs.
              </p>
              <p>
                Each engagement culminates in a clear narrative: what we believed, what we tested, what worked, and how we’ll scale it. That clarity helps teams align, stakeholders make confident decisions, and budgets get allocated where they generate real return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Process"
            title="A calm, confident process"
            subtitle="No guesswork. Every engagement follows a structured playbook with clear milestones."
          />
          <ol className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'We align on goals, audience, constraints, and economics to define a sharp success metric. Brief, not a novel.'
              },
              {
                step: '02',
                title: 'Strategy',
                desc: 'Map the funnel, prioritize hypotheses, choose channels, and design experiments that de‑risk decisions.'
              },
              {
                step: '03',
                title: 'Execution',
                desc: 'Ship creative, targeting, and landing pages fast with tight feedback loops and source‑of‑truth reporting.'
              },
              {
                step: '04',
                title: 'Scale',
                desc: 'Double down on winners, automate reporting, expand audiences, and institutionalize learnings.'
              },
            ].map((p, i) => (
              <li key={i} className="bg-white rounded-2xl p-6 ring-1 ring-gray-200">
                <span className="text-xs font-semibold text-blue-700">{p.step}</span>
                <h3 className="mt-2 font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{p.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-gray-800 leading-relaxed space-y-4">
            <p>
              The throughline is clarity. We keep the plan small enough to execute quickly and flexible enough to adapt as we learn. We don’t chase every shiny object, and we don’t confuse activity with progress. The scoreboard is simple: fewer steps to yes, healthier unit economics, stronger retention.
            </p>
            <p>
              Communication is intentionally lightweight: a weekly update that summarizes outcomes, decisions, blockers, and next actions. You’ll always know what we did, what we learned, and what’s next.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Pricing"
            title="Engagement models that fit the work"
            subtitle="Transparent pricing, clear deliverables, and flexible options as needs evolve."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[{
              name:'Audit & Roadmap', price:'$2,500', desc:'Two‑week engagement to diagnose constraints and deliver a prioritized 90‑day plan with quick wins.', points:['Site & analytics audit','Channel opportunity map','Prioritized 90‑day plan','KPI & dashboard setup']
            },{
              name:'Growth Sprints', price:'$3,500/mo', desc:'Month‑to‑month execution focused on a small set of high‑leverage initiatives with weekly shipping.', points:['SEO or paid focus','Creative testing cadence','Landing page iterations','Weekly reporting & standups']
            },{
              name:'Fractional Lead', price:'Custom', desc:'Hands‑on leadership across channels, vendors, and analytics. Ideal for teams bridging a hiring gap.', points:['Cross‑functional leadership','Forecasts & operating rhythm','Vendor oversight','Hiring support']
            }].map((tier, i)=> (
              <div key={i} className="bg-white rounded-2xl p-8 ring-1 ring-gray-200 shadow-sm">
                <h3 className="font-bold text-lg">{tier.name}</h3>
                <p className="mt-1 text-3xl font-extrabold text-gray-900">{tier.price}</p>
                <p className="mt-2 text-sm text-gray-700">{tier.desc}</p>
                <ul className="mt-4 space-y-1 text-sm text-gray-700 list-disc pl-5">
                  {tier.points.map((pt, idx)=> <li key={idx}>{pt}</li>)}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">Start here</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="FAQs"
            title="Common questions, straight answers"
            subtitle="If it matters to execution, it’s covered here."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[{
              q:'How quickly can we start?',
              a:'Typically within one to two weeks. I begin with a focused discovery to validate goals, align on KPIs, and gather the assets we need. For audits, the timeline is often faster; for fractional roles, we plan a deeper onboarding.'
            },{
              q:'What tools do you work with?',
              a:'Google Analytics, Looker Studio, Search Console, Ahrefs, SEMrush, Surfer, Hotjar, Meta, Google Ads, LinkedIn, Klaviyo, and a simple stack for landing pages and testing. I choose tools for clarity and speed, not novelty.'
            },{
              q:'How do you report results?',
              a:'A single source‑of‑truth dashboard and a short weekly memo: what shipped, what changed, what we learned, and what’s next. No vanity metrics; we track KPIs that inform decisions.'
            },{
              q:'Do you work on performance‑only deals?',
              a:'In rare cases, with aligned incentives and clear attribution. Most engagements blend a base fee with goals that define success.'
            }].map((item, i)=> (
              <div key={i} className="bg-white rounded-2xl p-6 ring-1 ring-gray-200">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say"
            subtitle="Real feedback from founders and marketing leaders."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Cut our CPA in half in 60 days and built a repeatable testing engine. The reporting made decisions obvious.',
                name: 'Maya K.', role: 'VP Growth, Fintech'
              },
              {
                quote: 'Our content now ranks and converts. The strategy and execution were flawless and collaborative.',
                name: 'Zach L.', role: 'CEO, B2B SaaS'
              },
              {
                quote: 'Clear communication, strong creative instincts, and measurable results. We shipped faster and learned more.',
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
                <p className="mt-3 text-blue-100">Tell me about your goals and I’ll send a tailored mini‑plan with quick wins and a transparent roadmap. If it’s not a fit, I’ll point you in a useful direction—no pressure, no fluff.</p>
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
            <a href="#results" className="text-gray-600 hover:text-blue-600">Results</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
