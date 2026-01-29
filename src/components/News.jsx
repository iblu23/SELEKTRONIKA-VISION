import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      date: '2026.01.25',
      title: 'NOWA ERA PODZIEMNEJ ELEKTRONIKI',
      category: 'ANNOUNCEMENT',
      excerpt: 'Rozpoczynamy nowy rozdział w historii polskiej sceny underground. Przygotowujemy serię wydarzeń, które zmienią sposób, w jaki doświadczamy muzyki elektronicznej.',
      color: 'cyber-violet'
    },
    {
      id: 2,
      date: '2026.01.20',
      title: 'DARK PSY GATHERING - RELACJA',
      category: 'EVENT RECAP',
      excerpt: 'Ponad 500 dusz zjednoczyło się w rytuale dźwięku. Energia była niesamowita, a soundsystem pokazał swoją prawdziwą moc.',
      color: 'toxic-green'
    },
    {
      id: 3,
      date: '2026.01.15',
      title: 'NOWI ARTYŚCI W KOLEKTYWIE',
      category: 'ARTISTS',
      excerpt: 'Witamy trzech nowych producentów w rodzinie SELEKTRONIKA. Ich brzmienie wniesie świeżą energię do naszego soundsystemu.',
      color: 'electric-blue'
    },
    {
      id: 4,
      date: '2026.01.10',
      title: 'MANIFEST CYFROWEGO SZAMANIZMU',
      category: 'PHILOSOPHY',
      excerpt: 'Muzyka jako portal do wyższych stanów świadomości. Taniec jako forma medytacji. Społeczność jako organizm.',
      color: 'ritual-red'
    }
  ];

  return (
    <section id="news" className="relative py-32 px-4 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-black/50 to-void" />
      
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-cyber-violet/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
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
            <span className="text-glitch" data-text="NEWS">NEWS</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber-violet via-toxic-green to-electric-blue" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative cyber-border bg-black/60 backdrop-blur-sm p-8 cursor-pointer overflow-hidden"
            >
              <motion.div
                className={`absolute inset-0 bg-${item.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono tracking-widest text-${item.color} border border-${item.color}/30 px-3 py-1`}>
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-mono">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-cyber-violet transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 font-grotesk leading-relaxed mb-6">
                  {item.excerpt}
                </p>

                <div className="flex items-center gap-2 text-sm font-mono tracking-wider text-cyber-violet group-hover:gap-4 transition-all">
                  <span>CZYTAJ WIĘCEJ</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyber-violet via-toxic-green to-electric-blue"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.button
            className="px-8 py-4 font-mono tracking-widest border-2 border-white/20 hover:border-cyber-violet hover:bg-cyber-violet/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            WIĘCEJ WIADOMOŚCI
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
