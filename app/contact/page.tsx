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
    <main className="flex min-h-screen flex-col items-start px-8 py-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Contact</h1>
        <p className="text-gray-600 mb-16">Strategic enquiries only.</p>

        <form onSubmit={handleSubmit} className="space-y-6 mb-20">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:border-purple-500/60 focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:border-purple-500/60 focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Subject</label>
            <input
              id="subject"
              type="text"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full bg-transparent border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:border-purple-500/60 focus:outline-none transition-colors"
              placeholder="Optional"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:border-purple-500/60 focus:outline-none transition-colors resize-none"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="border border-gray-800 rounded-xl px-8 py-3 text-white font-medium hover:border-purple-500/40 hover:bg-gray-900/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending...' : 'Send'}
          </button>

          {status === 'sent' && (
            <p className="text-purple-400 text-sm mt-4">Message sent successfully.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm mt-4">Something went wrong. Try again.</p>
          )}
        </form>

        <div className="space-y-8 border-t border-gray-800/50 pt-12">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Direct</h3>
            <a href="https://wa.me/447944958815" target="_blank" rel="noopener noreferrer" className="inline-block border border-gray-800 rounded-xl px-6 py-3 text-white font-medium hover:border-purple-500/40 hover:bg-gray-900/30 transition-all duration-300">
              WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Email</h3>
            <a href="mailto:contact@ahhveedaa.com" className="text-gray-400 hover:text-purple-400 transition-colors">contact@ahhveedaa.com</a>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Proposals</h3>
            <a href="mailto:avidabuyombo1@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">avidabuyombo1@gmail.com</a>
          </div>
        </div>
      </div>
    </main>
  )
}