'use client';

import { Calendar, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import RSVPModal from './RSVPModal';

interface EventProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export default function EventCard({ event }: { event: EventProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      
      <h3 className="relative text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{event.title}</h3>
      <p className="relative text-slate-400 mb-6 line-clamp-3 leading-relaxed">{event.description}</p>
      
      <div className="relative space-y-3 mb-8 text-sm text-slate-500 font-medium">
        <div className="flex items-center gap-3">
          <Calendar size={18} className="text-blue-500/80" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock size={18} className="text-blue-500/80" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin size={18} className="text-blue-500/80" />
          <span>{event.location}</span>
        </div>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="relative w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-95 shadow-xl shadow-white/5"
      >
        RSVP Now
      </button>

      {isModalOpen && (
        <RSVPModal 
          eventTitle={event.title} 
          eventId={event.id}
          eventDate={event.date}
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
}
