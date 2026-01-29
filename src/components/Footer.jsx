import { motion } from 'framer-motion';
import { Facebook, Youtube, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: 'mailto:contact@selektronika.pl', label: 'Email' },
  ];

  return (
    <footer id="contact" className="relative py-12 md:py-20 px-4 overflow-hidden bg-black border-t border-white/10">
      <div className="absolute inset-0 grain" />
      
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyber-violet to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-black tracking-tighter mb-4">
              SELEKTRONIKA
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Polska inicjatywa łącząca słuchaczy i wykonawców zainteresowanych podziemną muzyką elektroniczną i kulturą RAVE.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-mono tracking-widest mb-4 text-cyber-violet">
              NAWIGACJA
            </h4>
            <nav className="space-y-2">
              {['START', 'NEWS', 'EVENTS', 'ARTISTS', 'ABOUT'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm text-gray-400 hover:text-white hover:translate-x-2 transition-all font-mono"
                >
                  &gt; {item}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-mono tracking-widest mb-4 text-toxic-green">
              KONTAKT
            </h4>
            <div className="space-y-3 mb-6">
              <p className="text-sm text-gray-400 font-mono">
                contact@selektronika.pl
              </p>
              <p className="text-sm text-gray-400 font-mono">
                Polska / Poland
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-cyber-violet hover:bg-cyber-violet/10 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <motion.div
                className="w-16 h-16 border border-white/20 flex items-center justify-center font-mono text-xs"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center">
                  <div>QR</div>
                  <div className="text-[8px]">CODE</div>
                </div>
              </motion.div>
              <div className="text-xs text-gray-500 font-mono">
                <p>SCAN TO CONNECT</p>
                <p className="text-cyber-violet">FREQUENCY: 432Hz</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-xs text-gray-500 font-mono mb-1">
                © 2026 SELEKTRONIKA. ALL RIGHTS RESERVED.
              </p>
              <p className="text-xs text-gray-600 font-mono">
                BUILT WITH <span className="text-ritual-red">♥</span> FOR THE UNDERGROUND
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-xs text-gray-700 font-mono tracking-widest">
            [ CYBER RITUAL · DIGITAL SHAMANISM · RAVE UNDERGROUND ]
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
