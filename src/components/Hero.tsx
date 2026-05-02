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
        className="relative z-20 w-full h-full flex items-center px-4 md:px-8 lg:px-16 max-w-[100rem] mx-auto pt-20"
      >
        <div className="w-full md:w-[50%] flex flex-col items-start gap-8 z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="font-serif text-[12vw] md:text-[7vw] lg:text-[6.5vw] leading-[0.9] font-light tracking-tighter text-parchment">
              Precision-Driven <br />
              <span className="italic text-gold">Construction.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 border border-gold/30 text-gold micro-label rounded-full">Veteran-Owned & Operated</span>
            </div>
            <p className="text-parchment/60 font-sans font-light max-w-md text-sm leading-relaxed">
              Precision-driven excavation, building, and outdoor solutions across Pima and Maricopa County. <span className="text-gold/80 block mt-2">Military Discounts Offered.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-4"
          >
            <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 border border-gold/50 rounded-full hover:bg-gold hover:text-obsidian transition-all duration-500">
              <span className="micro-label group-hover:text-obsidian text-gold transition-colors duration-500">Get a Quote</span>
            </Link>
          </motion.div>
        </div>

        {/* Big Glowing Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="hidden md:flex absolute right-[-5%] lg:right-0 top-1/2 -translate-y-1/2 w-[55%] max-w-[800px] items-center justify-center pointer-events-none z-10"
        >
          <img 
            src="/2026 logo.png" 
            alt="EH3 Logo Large"
            className="w-full h-auto object-contain opacity-100 drop-shadow-[0_0_80px_rgba(212,175,55,0.9)] filter brightness-110"
          />
        </motion.div>
      </motion.div>

    </section>
  );
}
