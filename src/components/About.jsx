import { motion } from 'framer-motion';
import { Zap, Radio, Users, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'ENERGIA',
      description: 'Muzyka i sztuka mogą wyzwalać potężną, być może nieskończoną energię działającą z wielkim pożytkiem dla Wszechświata.'
    },
    {
      icon: Radio,
      title: 'TRANSFORMACJA',
      description: 'Dźwięk jako narzędzie transformacji. Każda częstotliwość niesie potencjał zmiany i rozwoju.'
    },
    {
      icon: Users,
      title: 'SPOŁECZNOŚĆ',
      description: 'Ludzie jednoczą się w tańcu - szczerym i czystym sposobie wyrażania emocji, pozbawionym wad komunikacji werbalnej.'
    },
    {
      icon: Heart,
      title: 'PASJA',
      description: 'Muzyka daje nam siłę w podróży przez życie, zamienia troskę w uśmiech, kształtuje i rozwija naszą wrażliwość.'
    }
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-void" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyber-violet rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-toxic-green rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter mb-6">
            SOUNDSYSTEM / <span className="text-cyber-violet">ABOUT</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber-violet to-toxic-green mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="cyber-border bg-black/60 backdrop-blur-sm p-12">
            <h3 className="text-3xl font-display font-bold mb-6 text-center">
              MANIFEST
            </h3>
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                <span className="text-cyber-violet font-bold">SELEKTRONIKA</span> to polska inicjatywa łącząca słuchaczy i wykonawców zainteresowanych podziemną muzyką elektroniczną i kulturą RAVE.
              </p>
              <p>
                Zajmujemy się wspieraniem rozwoju i promocją artystów, koordynacją działań różnego rodzaju społeczności, a także organizacją wydarzeń muzycznych i imprez.
              </p>
              <p className="text-xl font-bold text-center py-6 border-y border-cyber-violet/30">
                Wierzymy, że muzyka i sztuka mogą wyzwalać potężną, być może nieskończoną energię.
              </p>
              <p>
                Energia ta może działać z wielkim pożytkiem dla Wszechświata i zamieszkujących go istot. Muzyka może dawać nam siłę w podróży przez życie, zamienia troskę w uśmiech.
              </p>
              <p>
                Kształtuje i rozwija naszą wrażliwość. Dla wielu staje się świetnym sposobem samodoskonalenia się i motorem do ciągłego poszerzania swej wiedzy.
              </p>
              <p className="text-toxic-green font-mono">
                Ludzie jednoczą się w tańcu który jest szczerym i czystym sposobem wyrażania i przekazywania emocji, pozbawionym wielu wad komunikacji werbalnej.
              </p>
              <p className="text-center text-xl font-bold mt-8">
                Chcielibyśmy, by nasza inicjatywa sprzyjała prawdziwemu porozumieniu między ludźmi.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cyber-border bg-black/40 backdrop-blur-sm p-8 text-center group hover:bg-black/60 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 mb-4 border-2 border-cyber-violet rounded-full group-hover:border-toxic-green transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={28} className="text-cyber-violet group-hover:text-toxic-green transition-colors" />
                </motion.div>
                <h4 className="text-xl font-display font-bold mb-3 tracking-wider">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="cyber-border bg-gradient-to-br from-ritual-red/10 to-cyber-violet/10 backdrop-blur-sm p-12 text-center mb-20"
        >
          <h3 className="text-3xl font-display font-bold mb-6">
            THE DANCE
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            We dance for laughter, we dance for tears, we dance for madness, we dance for fears, we dance for hopes, we dance for screams, we are the dancers, we create the dreams
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
            <span className="px-4 py-2 border border-ritual-red/50 bg-ritual-red/10">LAUGHTER</span>
            <span className="px-4 py-2 border border-cyber-violet/50 bg-cyber-violet/10">TEARS</span>
            <span className="px-4 py-2 border border-toxic-green/50 bg-toxic-green/10">MADNESS</span>
            <span className="px-4 py-2 border border-electric-blue/50 bg-electric-blue/10">FEARS</span>
            <span className="px-4 py-2 border border-ritual-red/50 bg-ritual-red/10">HOPES</span>
            <span className="px-4 py-2 border border-cyber-violet/50 bg-cyber-violet/10">SCREAMS</span>
            <span className="px-4 py-2 border border-toxic-green/50 bg-toxic-green/10">DANCERS</span>
            <span className="px-4 py-2 border border-electric-blue/50 bg-electric-blue/10">DREAMS</span>
          </div>
        </motion.div>

        <motion.div
          id="soundsystem"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="cyber-border bg-gradient-to-br from-cyber-violet/10 to-toxic-green/10 backdrop-blur-sm p-12 text-center"
        >
          <h3 className="text-3xl font-display font-bold mb-6">
            DIY SOUNDSYSTEM PHILOSOPHY
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Nasz soundsystem to więcej niż sprzęt - to narzędzie do tworzenia przestrzeni, gdzie muzyka staje się doświadczeniem fizycznym i duchowym. Budujemy go sami, dbamy o każdy detal, bo wierzymy w moc autentyczności i niezależności.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
            <span className="px-4 py-2 border border-cyber-violet/50 bg-cyber-violet/10">DIY ETHIC</span>
            <span className="px-4 py-2 border border-toxic-green/50 bg-toxic-green/10">COMMUNITY DRIVEN</span>
            <span className="px-4 py-2 border border-electric-blue/50 bg-electric-blue/10">UNDERGROUND SPIRIT</span>
            <span className="px-4 py-2 border border-ritual-red/50 bg-ritual-red/10">AUTHENTIC SOUND</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
