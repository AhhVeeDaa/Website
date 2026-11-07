'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="page-shell py-20 sm:py-28">
      <header className="mb-14 max-w-3xl">
        <p className="eyebrow mb-5">Contact / Enquiries</p>
        <h1 className="text-5xl font-medium sm:text-7xl">Start a conversation.</h1>
        <p className="mt-6 text-base leading-7 text-muted sm:text-lg">For creative, media and technology enquiries, use the form or reach out directly.</p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,.85fr)]">
        <form onSubmit={handleSubmit} className="glass-panel space-y-6 rounded-2xl p-6 sm:p-8">
          <div>
            <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-white/55">Name</label>
            <input id="name" type="text" autoComplete="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/25 transition-colors focus:border-violet-300/50 focus:outline-none" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-white/55">Email</label>
            <input id="email" type="email" autoComplete="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/25 transition-colors focus:border-violet-300/50 focus:outline-none" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block text-xs uppercase tracking-widest text-white/55">Subject <span className="normal-case tracking-normal text-white/35">(optional)</span></label>
            <input id="subject" type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/25 transition-colors focus:border-violet-300/50 focus:outline-none" placeholder="What would you like to discuss?" />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-white/55">Message</label>
            <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/25 transition-colors focus:border-violet-300/50 focus:outline-none" placeholder="Your message" />
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button type="submit" disabled={status === 'sending'} className="min-h-12 rounded-full bg-white px-7 text-sm font-medium text-black transition-colors hover:bg-violet-200 disabled:cursor-not-allowed disabled:opacity-50">
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'sent' && <p role="status" className="text-sm text-teal-200">Message sent successfully.</p>}
            {status === 'error' && <p role="alert" className="text-sm text-red-300">Something went wrong. Try again.</p>}
          </div>
        </form>

        <aside className="space-y-4">
          <div className="glass-panel rounded-2xl p-6">
            <p className="eyebrow mb-5">Direct contact</p>
            <p className="mb-4 text-sm leading-6 text-muted">Reach out via WhatsApp.</p>
            <a href="https://wa.me/447944958815" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 text-sm text-white transition-colors hover:border-violet-300/40 hover:bg-violet-300/10">WhatsApp ↗</a>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <p className="eyebrow mb-5">Email</p>
            <p className="mb-4 text-sm leading-6 text-muted">Choose an address for direct correspondence.</p>
            <div className="space-y-3 text-sm">
              <a href="mailto:avidabuyombo1@gmail.com" className="block text-white/75 transition-colors hover:text-white">avidabuyombo1@gmail.com</a>
              <a href="mailto:Avida@ahhveedaa.com" className="block text-white/75 transition-colors hover:text-white">Avida@ahhveedaa.com</a>
            </div>
          </div>
          <p className="px-2 text-xs leading-5 text-white/40">The contact form continues to use the existing email delivery endpoint.</p>
        </aside>
      </div>
    </main>
  )
}