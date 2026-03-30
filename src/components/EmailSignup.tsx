'use client';

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
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
      <section id="email-signup" className="py-20 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Mail className="h-10 w-10 text-primary-300 mx-auto mb-4" />
          <h2 className="text-3xl font-serif font-light text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Receive updates about prayer times, events, and ways to make a difference
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
            <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-lg focus:ring-2 focus:ring-primary-400 outline-none transition-all shadow-sm"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-lg focus:ring-2 focus:ring-primary-400 outline-none transition-all shadow-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary">
              Join Our Email List
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy. Your information will never be shared with third parties.
            </p>

            {status === 'success' && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-green-800">{message}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">{message}</p>
              </div>
            )}
          </div>
        </form>
      </div>
      </section>
    </ScrollReveal>
  );
}
