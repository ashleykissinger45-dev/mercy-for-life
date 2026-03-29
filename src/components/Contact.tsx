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
      <section id="contact" className="py-20 bg-gradient-to-br from-primary-50/50 via-white to-primary-50/70 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-300/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-200/15 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 pt-4">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you have questions about our prayer vigils, want to get involved, 
              or need information about pro-life resources, we're here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="bg-primary-600 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email Us</h4>
                  <a
                    href="mailto:mercyforlife@staphx.org"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    mercyforlife@staphx.org
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 shadow-lg text-white">
                <h4 className="text-2xl font-bold mb-3">Join Our Email List</h4>
                <p className="mb-6 text-primary-50">
                  Stay updated on upcoming events, prayer opportunities, and ways to defend life in our community.
                </p>
                <a
                  href="#email-signup"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 hover:scale-105 transition-all shadow-md"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Sign Up Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
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
