import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Music } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      name: 'RITUAL FREQUENCY',
      date: '2026.02.15',
      time: '22:00',
      location: '███████████',
      lineup: ['DARK PROPHET', 'BASS SHAMAN', 'VOID WALKER', 'FREQUENCY WITCH'],
      status: 'upcoming',
      description: 'Nocny rytuał dźwięku i energii. Przygotuj się na podróż przez ciemne przestrzenie psychodelicznej elektroniki.',
    },
    {
      id: 2,
      name: 'UNDERGROUND GATHERING',
      date: '2026.03.01',
      time: '23:00',
      location: 'WAREHOUSE X',
      lineup: ['TECHNO MONK', 'ACID PRIEST', 'INDUSTRIAL SOUL'],
      status: 'upcoming',
      description: 'Surowy techno i industrial w opuszczonym magazynie. Tylko dla prawdziwych wyznawców.',
    },
    {
      id: 3,
      name: 'CYBER RAVE CEREMONY',
      date: '2026.03.20',
      time: '20:00',
      location: 'TBA',
      lineup: ['TBA'],
      status: 'announced',
      description: 'Szczegóły wkrótce. Przygotuj się na coś wyjątkowego.',
    }
  ];

  const pastEvents = [
    {
      id: 4,
      name: 'DARK PSY GATHERING',
      date: '2026.01.20',
      attendees: '500+',
    },
    {
      id: 5,
      name: 'TECHNO RITUAL',
      date: '2025.12.31',
      attendees: '300+',
    }
  ];

  return (
    <section id="events" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-void" />
      
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-toxic-green/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-4">
            EVENTS / <span className="text-toxic-green">RAVES</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-toxic-green to-electric-blue" />
        </motion.div>

        <div className="mb-20">
          <h3 className="text-2xl font-mono tracking-widest mb-8 text-toxic-green">
            &gt; UPCOMING_EVENTS
          </h3>
          
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="cyber-border bg-black/80 backdrop-blur-sm p-8 hover:bg-black/90 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-3xl font-display font-bold group-hover:text-toxic-green transition-colors">
                          {event.name}
                        </h3>
                        {event.status === 'announced' && (
                          <span className="text-xs font-mono tracking-widest text-electric-blue border border-electric-blue/30 px-3 py-1 animate-pulse">
                            SOON
                          </span>
                        )}
                      </div>

                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-3 text-sm font-mono">
                          <Clock size={16} className="text-toxic-green" />
                          <div>
                            <div className="text-gray-500">DATA</div>
                            <div>{event.date}</div>
                            <div className="text-gray-400">{event.time}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-sm font-mono">
                          <MapPin size={16} className="text-toxic-green" />
                          <div>
                            <div className="text-gray-500">LOKALIZACJA</div>
                            <div className="font-bold">{event.location}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-sm font-mono">
                          <Music size={16} className="text-toxic-green" />
                          <div>
                            <div className="text-gray-500">LINE-UP</div>
                            <div>{event.lineup.length} ARTISTS</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {event.lineup.map((artist, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono tracking-wider bg-toxic-green/10 border border-toxic-green/30 px-3 py-1 hover:bg-toxic-green/20 transition-colors"
                          >
                            {artist}
                          </span>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      className="lg:self-center px-6 py-3 font-mono tracking-widest bg-toxic-green/10 border-2 border-toxic-green hover:bg-toxic-green hover:text-black transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      WIĘCEJ INFO
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-mono tracking-widest mb-8 text-gray-500">
            &gt; PAST_EVENTS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cyber-border bg-black/40 p-6 hover:bg-black/60 transition-all cursor-pointer"
              >
                <h4 className="text-xl font-display font-bold mb-2">{event.name}</h4>
                <div className="flex items-center justify-between text-sm font-mono text-gray-500">
                  <span>{event.date}</span>
                  <div className="flex items-center gap-2">
                    <Users size={14} />
                    <span>{event.attendees}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
