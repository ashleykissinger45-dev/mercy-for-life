'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
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
          message: formData.message,
          _subject: 'New Contact Form Message - Mercy for Life',
        }),
      });
      
      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for reaching out! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        
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
      <section id="contact" className="py-24 relative" style={{ backgroundImage: 'url(/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-neutral-400 mb-3">
              Reach Out
            </p>
            <h3 className="font-serif text-3xl md:text-[2.5rem] font-light text-neutral-900 mb-6 leading-tight">
              Get in Touch
            </h3>
            <p className="text-[15px] text-neutral-500 mb-10 leading-relaxed">
              Whether you have questions about our prayer vigils, want to get involved, 
              or need information about pro-life resources, we&apos;re here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-neutral-400 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm mb-1">Email Us</h4>
                  <a
                    href="mailto:mercyforlife@staphx.org"
                    className="text-[#005999] hover:text-[#004C82] transition-colors text-sm"
                  >
                    mercyforlife@staphx.org
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-neutral-100/60 p-6">
                <h4 className="font-semibold text-neutral-900 text-sm mb-2">Join Our Email List</h4>
                <p className="mb-4 text-neutral-500 text-sm leading-relaxed">
                  Stay updated on upcoming events, prayer opportunities, and ways to defend life.
                </p>
                <a
                  href="/get-involved"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-[#005999] text-white font-medium rounded-md hover:bg-[#004C82] transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Sign Up Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-100/60 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-50/70 rounded-md border border-neutral-200 focus:border-[#005999]/40 focus:ring-0 outline-none transition-colors text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-50/70 rounded-md border border-neutral-200 focus:border-[#005999]/40 focus:ring-0 outline-none transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-50/70 rounded-md border border-neutral-200 focus:border-[#005999]/40 focus:ring-0 outline-none transition-colors resize-none text-sm"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center bg-[#005999] text-white font-medium py-3 rounded-md hover:bg-[#004C82] transition-colors text-sm"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-green-800 text-sm">{message}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 text-sm">{message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
