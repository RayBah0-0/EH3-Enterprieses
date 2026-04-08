import { motion } from 'motion/react';
import { Shield, Clock, MapPin, Award } from 'lucide-react';

export function Legacy() {
  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-parchment mb-6"
          >
            Veteran-Owned, Precision-Driven
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="micro-label text-gold"
          >
            Father & Son Operations
          </motion.p>
        </div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
            <img 
              src="/showcase5.jpg" 
              alt="Our Heritage" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover monochrome-img transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-parchment leading-tight">
              Built on Integrity. Driven by Results.
            </h2>
            <div className="space-y-6 text-parchment/70 text-lg leading-relaxed font-light">
              <p>
                EH3 Enterprises, Inc. is a veteran-owned, family-operated general contracting company serving Pima and Maricopa County, Arizona. We don't just build; we deliver disciplined execution, clear communication, and high-quality results from start to finish.
              </p>
              <p>
                When a father and son team lead your project, uncompromised standards aren't just a marketing phrase—they are in our blood. From heavy equipment and site work to full-scale residential construction, we bring precision and structural integrity to every job.
              </p>
              <p>
                We are a full-service contractor. From ground-work to final build, it's done right. We stand by our work and pride ourselves on clean, professional execution.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-4xl font-serif text-gold mb-2 font-light">100%</p>
                <p className="micro-label text-parchment/50">Commitment</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-gold mb-2 font-light">Veteran</p>
                <p className="micro-label text-parchment/50">Owned & Operated</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Secondary Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-parchment leading-tight">
              A Tradition of Service.
            </h2>
            <div className="space-y-6 text-parchment/70 text-lg leading-relaxed font-light">
              <p>
                Our commitment to excellence extends beyond the structures we build. It's rooted in a deep-seated tradition of service and community, built on years of serving our country and our local neighbors.
              </p>
              <p>
                From our military roots to our dedicated team of employees, we believe that true craftsmanship is a reflection of character. Every project we undertake is a testament to the core values of discipline and integrity.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 lg:order-1"
          >
            <div className="aspect-[3/4] relative overflow-hidden group mt-12">
              <div className="absolute inset-0 bg-obsidian/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
              <img 
                src="/showcase6.jpg" 
                alt="Military Heritage" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover monochrome-img transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="aspect-[3/4] relative overflow-hidden group">
              <div className="absolute inset-0 bg-obsidian/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
              <img 
                src="/showcaqse2.jpg" 
                alt="Our Team" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover monochrome-img transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Regional Offices */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-y border-white/10 py-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-2xl font-serif text-parchment mb-4 font-light italic">Regional Authority</h3>
            <p className="micro-label text-gold">Operating Across Arizona</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <MapPin className="w-8 h-8 text-gold mx-auto opacity-50" />
              <h4 className="text-xl font-serif text-parchment font-light">Tucson</h4>
              <p className="micro-label text-parchment/40">Arizona</p>
            </div>
            <div className="space-y-4">
              <MapPin className="w-8 h-8 text-gold mx-auto opacity-50" />
              <h4 className="text-xl font-serif text-parchment font-light">Pima</h4>
              <p className="micro-label text-parchment/40">County</p>
            </div>
            <div className="space-y-4">
              <MapPin className="w-8 h-8 text-gold mx-auto opacity-50" />
              <h4 className="text-xl font-serif text-parchment font-light">Maricopa</h4>
              <p className="micro-label text-parchment/40">County</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
