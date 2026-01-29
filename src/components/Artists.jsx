import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

const Artists = () => {
  const artists = [
    {
      id: 1,
      name: 'DARK PROPHET',
      genre: 'Dark Psy / Forest',
      bio: 'Podróżnik przez ciemne przestrzenie psychodeliki. Tworzy hipnotyczne krajobrazy dźwiękowe.',
      soundcloud: '#',
      image: 'https://via.placeholder.com/400x400/0A0A0A/9D00FF?text=DARK+PROPHET'
    },
    {
      id: 2,
      name: 'BASS SHAMAN',
      genre: 'Experimental Bass',
      bio: 'Szaman niskich częstotliwości. Jego sety to rytuały transformacji przez dźwięk.',
      soundcloud: '#',
      image: 'https://via.placeholder.com/400x400/0A0A0A/00FF41?text=BASS+SHAMAN'
    },
    {
      id: 3,
      name: 'VOID WALKER',
      genre: 'Dark Techno',
      bio: 'Wędrowiec pustki. Surowy, industrialny techno z głębi undergroundu.',
      soundcloud: '#',
      image: 'https://via.placeholder.com/400x400/0A0A0A/00D9FF?text=VOID+WALKER'
    },
    {
      id: 4,
      name: 'FREQUENCY WITCH',
      genre: 'Acid / Trance',
      bio: 'Czarownica częstotliwości. Kwasowe linie i transoweloopy prowadzą w trans.',
      soundcloud: '#',
      image: 'https://via.placeholder.com/400x400/0A0A0A/FF0055?text=FREQUENCY+WITCH'
    },
    {
      id: 5,
      name: 'TECHNO MONK',
      genre: 'Minimal Techno',
      bio: 'Mnich techno. Minimalistyczne, medytacyjne struktury rytmiczne.',
      soundcloud: '#',
      image: 'https://via.placeholder.com/400x400/0A0A0A/9D00FF?text=TECHNO+MONK'
    },
    {
      id: 6,
      name: 'ACID PRIEST',
      genre: 'Acid Techno',
      bio: 'Kapłan kwasu. 303 to jego narzędzie do otwierania umysłów.',
      soundcloud: '#',
      image: 'https://via.placeholder.com/400x400/0A0A0A/00FF41?text=ACID+PRIEST'
    }
  ];

  return (
    <section id="artists" className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-black/50 to-void" />
      
      <motion.div
        className="absolute bottom-1/4 right-0 w-48 h-48 md:w-96 md:h-96 bg-electric-blue/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter mb-4">
            <span className="text-electric-blue">ARTISTS</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-electric-blue to-cyber-violet" />
          <p className="mt-6 text-lg md:text-xl text-gray-400 font-mono max-w-2xl">
            Nasi artyści to przewodnicy przez różne wymiary elektronicznej muzyki
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cyber-border bg-black/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <motion.button
                    className="w-16 h-16 rounded-full bg-electric-blue/20 backdrop-blur-md border-2 border-electric-blue flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play size={24} className="text-electric-blue ml-1" />
                  </motion.button>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-electric-blue transition-colors">
                  {artist.name}
                </h3>
                
                <div className="text-xs font-mono tracking-widest text-electric-blue mb-4 border border-electric-blue/30 inline-block px-3 py-1">
                  {artist.genre}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {artist.bio}
                </p>

                <motion.a
                  href={artist.soundcloud}
                  className="inline-flex items-center gap-2 text-sm font-mono tracking-wider text-electric-blue hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <span>SOUNDCLOUD</span>
                  <ExternalLink size={14} />
                </motion.a>
              </div>

              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-electric-blue"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 font-mono mb-6">
            Chcesz dołączyć do kolektywu?
          </p>
          <motion.button
            className="px-8 py-4 font-mono tracking-widest border-2 border-electric-blue hover:bg-electric-blue hover:text-black transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            WYŚLIJ DEMO
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Artists;
