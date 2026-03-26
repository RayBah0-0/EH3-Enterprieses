import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Legacy() {
  return (
    <section id="legacy" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Vertical Accent */}
        <div className="md:col-span-1 hidden md:flex justify-center h-full items-start pt-12">
          <span className="vertical-text micro-label text-white/30">BUILT ON INTEGRITY</span>
        </div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <h2 className="micro-label text-gold mb-8">Our Heritage</h2>
          <h3 className="font-serif text-5xl md:text-6xl font-light leading-tight text-parchment mb-8">
            Disciplined execution, <br />
            <span className="italic text-white/50">built into every foundation.</span>
          </h3>
          <p className="text-parchment/60 font-sans font-light text-sm leading-relaxed mb-12 max-w-md">
            EH3 Enterprises is a veteran-owned, family-operated general contracting company serving Arizona. We deliver dependable, high-quality construction with clear communication and a relentless focus on customer satisfaction. Check out our services.
          </p>
          <Link to="/legacy" className="micro-label border-b border-gold pb-1 hover:text-gold transition-colors">
            Read Our Story
          </Link>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-6 relative aspect-[4/5] w-full mt-12 md:mt-0 group overflow-hidden rounded-sm"
        >
          <img 
            src="/showcase5.jpg" 
            alt="Family-owned legacy" 
            className="w-full h-full object-cover monochrome-img"
            referrerPolicy="no-referrer"
          />
          {/* Decorative border */}
          <div className="absolute -inset-4 border border-white/10 -z-10" />
        </motion.div>

      </div>
    </section>
  );
}
