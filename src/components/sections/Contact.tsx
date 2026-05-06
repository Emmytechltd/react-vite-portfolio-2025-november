import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMessageCircle, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { portfolioData } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-20 md:py-32 relative" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Let's Build Together" 
          subtitle="Ready to transform your ideas into reality? Drop a message."
          className="items-center text-center md:items-start md:text-left"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a 
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Me</p>
                  <p className="text-lg font-medium text-white">{portfolioData.contact.email}</p>
                </div>
              </a>

              <a 
                href={`https://wa.me/${portfolioData.contact.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-500/20 text-secondary-400 flex items-center justify-center group-hover:bg-secondary-500 group-hover:text-white transition-colors">
                  <FiMessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-lg font-medium text-white">{portfolioData.contact.whatsapp}</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="How can I help you?"
                    required
                    disabled={status === 'loading'}
                  ></textarea>
                </div>
                
                {status === 'success' && (
                  <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                    <FiCheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                    <FiAlertCircle size={20} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <Button type="submit" className="w-full group" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                  {status !== 'loading' && <FiSend className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
