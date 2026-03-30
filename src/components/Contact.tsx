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
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">
              Get in Touch
            </h3>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Whether you have questions about our prayer vigils, want to get involved, 
              or need information about pro-life resources, we're here to help.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-neutral-50 rounded-lg p-5">
                <div className="bg-primary-600 p-3 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Email Us</h4>
                  <a
                    href="mailto:mercyforlife@staphx.org"
                    className="text-primary-300 hover:text-primary-200 transition-colors"
                  >
                    mercyforlife@staphx.org
                  </a>
                </div>
              </div>

              <div className="bg-[#0A1628] rounded-lg p-8 text-white">
                <h4 className="text-xl font-bold mb-3">Join Our Email List</h4>
                <p className="mb-6 text-neutral-300 text-sm leading-relaxed">
                  Stay updated on upcoming events, prayer opportunities, and ways to defend life in our community.
                </p>
                <a
                  href="/get-involved"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-neutral-900 font-semibold rounded-lg hover:bg-neutral-100 transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Sign Up Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-lg focus:ring-2 focus:ring-primary-400 outline-none transition-all shadow-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-lg focus:ring-2 focus:ring-primary-400 outline-none transition-all shadow-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-lg focus:ring-2 focus:ring-primary-400 outline-none transition-all resize-none shadow-sm"
                  placeholder="How can we help you?"
                />
              </div>

              <button type="submit" className="w-full btn-primary flex items-center justify-center">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-green-800">{message}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">{message}</p>
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
