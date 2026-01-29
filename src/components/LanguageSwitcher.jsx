import { motion } from 'framer-motion';
import { useTranslation } from '../contexts/TranslationContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useTranslation();

  return (
    <div className="fixed top-24 right-4 z-40 flex flex-col gap-2">
      <motion.button
        onClick={() => changeLanguage('pl')}
        className={`px-3 py-2 text-xs font-mono tracking-widest border transition-all ${
          language === 'pl' 
            ? 'bg-cyber-violet/20 border-cyber-violet text-cyber-violet' 
            : 'bg-black/60 border-white/20 text-white/60 hover:border-white/40 hover:text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        PL
      </motion.button>
      
      <motion.button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-2 text-xs font-mono tracking-widest border transition-all ${
          language === 'en' 
            ? 'bg-electric-blue/20 border-electric-blue text-electric-blue' 
            : 'bg-black/60 border-white/20 text-white/60 hover:border-white/40 hover:text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
    </div>
  );
};

export default LanguageSwitcher;
