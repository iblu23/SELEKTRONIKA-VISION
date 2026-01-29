import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const manifesto = [
    "MUZYKA JAKO ENERGIA",
    "DŹWIĘK JAKO TRANSFORMACJA",
    "TANIEC JAKO KOMUNIKACJA",
    "SPOŁECZNOŚĆ JAKO RYTUAŁ"
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void/95 to-void z-0" />
      
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, #9D00FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
        <motion.div
          className="w-full h-full border-2 border-cyber-violet rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute inset-0 w-full h-full border-2 border-toxic-green rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <motion.div
            className="inline-block mb-8"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
              <motion.circle
                cx="60"
                cy="60"
                r="50"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.circle
                cx="60"
                cy="60"
                r="35"
                stroke="#00FF41"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
              <motion.circle
                cx="60"
                cy="60"
                r="20"
                fill="#9D00FF"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9D00FF" />
                  <stop offset="50%" stopColor="#00D9FF" />
                  <stop offset="100%" stopColor="#00FF41" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter mb-6">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              SELEKT
            </motion.span>
            <motion.span
              className="inline-block text-cyber-violet"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              RONIKA
            </motion.span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl font-mono tracking-widest text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            UNDERGROUND ELECTRONIC MUSIC COLLECTIVE
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {manifesto.map((text, index) => (
            <motion.div
              key={index}
              className="cyber-border p-6 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: '#9D00FF' }}
            >
              <p className="text-sm font-mono tracking-wider text-center">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex justify-center"
        >
          <motion.a
            href="#news"
            className="group relative px-8 py-4 font-mono text-lg tracking-widest overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">ENTER THE FREQUENCY</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyber-violet via-electric-blue to-toxic-green"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 border-2 border-white/20 group-hover:border-white/40 transition-colors" />
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
