'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import { submitRSVP } from '@/app/actions';

interface RSVPModalProps {
  eventTitle: string;
  eventId: string;
  onClose: () => void;
}

export default function RSVPModal({ eventTitle, eventId, onClose }: RSVPModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append('eventId', eventId);
    formData.append('eventTitle', eventTitle);

    try {
      const response = await submitRSVP(formData);
      if (response.success) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('RSVP submission error:', error);
      alert('Failed to submit RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-950 border border-white/10 rounded-3xl w-full max-w-md shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
        >
          <X size={20} />
        </button>

        <div className="p-10">
          {isSuccess ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
              <div className="bg-blue-500/10 text-blue-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Access Granted</h3>
              <p className="text-slate-400 leading-relaxed">You've successfully secured your spot for <span className="text-blue-400 font-medium">{eventTitle}</span>.</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-white mb-3 tracking-tight leading-tight">Secure Your Spot</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">Join the conversation with industry leaders at {eventTitle}.</p>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="group">
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 mb-3 uppercase tracking-[0.2em] group-focus-within:text-blue-500 transition-colors">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 mb-3 uppercase tracking-[0.2em] group-focus-within:text-blue-500 transition-colors">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-2xl shadow-[0_10px_20px_-10px_rgba(37,99,235,0.4)] transition-all duration-300 disabled:opacity-50 active:scale-[0.98] mt-4"
                >
                  {isSubmitting ? 'Verifying...' : 'Confirm Registration'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
