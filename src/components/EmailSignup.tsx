'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function EmailSignup() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setStatus('idle');
      
      const response = await fetch('https://formspree.io/f/xanykorv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: 'New Email List Signup - Mercy for Life',
        }),
      });
      
      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for joining our mission! Check your email for confirmation.');
        setFormData({ name: '', email: '' });
        
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <ScrollReveal>
      <section id="email-signup" className="pt-24 pb-12 relative" style={{ backgroundImage: 'url(/pic2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/[0.93]" />
        <div className="max-w-xl mx-auto px-6 lg:px-8 text-center relative">
        <div className="bg-white rounded-xl shadow-sm border border-neutral-100/60 p-8 md:p-10">
        <div className="mb-8 text-center">
          <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-neutral-400 mb-3">
            Newsletter
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 mb-3">
            Stay Connected
          </h2>
          <p className="text-neutral-500 text-sm">
            Receive updates about prayer times, events, and ways to make a difference.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-50/70 rounded-md border border-neutral-200 focus:border-[#005999]/40 focus:ring-0 outline-none transition-colors text-sm"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-50/70 rounded-md border border-neutral-200 focus:border-[#005999]/40 focus:ring-0 outline-none transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#005999] text-white font-medium py-3 rounded-md hover:bg-[#004C82] transition-colors text-sm"
            >
              Join Our Email List
            </button>

            <p className="text-xs text-neutral-400 mt-4">
              We respect your privacy. Your information will never be shared.
            </p>

            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-green-800 text-sm">{message}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800 text-sm">{message}</p>
              </div>
            )}
        </form>
        </div>
      </div>
      </section>
    </ScrollReveal>
  );
}
