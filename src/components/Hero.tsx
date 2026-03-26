import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian z-10 pointer-events-none" />
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/hero.jpg" 
          alt="Luxury architectural build" 
          className="w-full h-full object-cover monochrome-img opacity-60 pointer-events-none"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full h-full flex flex-col justify-end pb-24 px-6 md:px-12 max-w-7xl mx-auto"
      >
        {/* Removed redundant EH3 label */}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.9] font-light tracking-tighter text-parchment mb-8">
            Precision-Driven <br />
            <span className="italic text-gold">Construction.</span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 border border-gold/30 text-gold micro-label rounded-full">Veteran-Owned & Operated</span>
            </div>
            <p className="text-parchment/60 font-sans font-light max-w-md text-sm leading-relaxed">
              Precision-driven excavation, building, and outdoor solutions across Pima and Maricopa County. <span className="text-gold/80 block mt-2">Military Discounts Offered.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 border border-white/20 rounded-full hover:bg-parchment hover:text-obsidian transition-all duration-500">
              <span className="micro-label group-hover:text-obsidian transition-colors duration-500">Get a Quote</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
