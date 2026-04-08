import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 'heavy-equipment',
    title: 'Heavy Equipment & Site Work',
    image: '/Excavation_trenching/IMG_1820.jpeg'
  },
  {
    id: 'residential',
    title: 'Residential Construction',
    image: '/Framing/IMG_2164.jpeg'
  },
  {
    id: 'concrete',
    title: 'Concrete, Masonry & Hardscapes',
    image: '/Hardscape/IMG_0377.jpeg'
  },
  {
    id: 'artificial-turf',
    title: 'Artificial Turf Installation',
    image: '/Hardscape/IMG_0490.jpeg'
  }
];

export function ServiceNexus() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-32 border-b border-white/10 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <h2 className="micro-label text-gold mb-16">Core Disciplines</h2>
        
        <div className="flex flex-col">
          {SERVICES.map((service, index) => (
            <Link 
              to="/services"
              key={service.id}
              className="group border-t border-white/10 last:border-b relative py-8 md:py-12 cursor-pointer block"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex items-baseline space-x-8">
                <span className="font-sans text-sm font-light text-white/30 group-hover:text-gold transition-colors duration-300">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-parchment/40 group-hover:text-parchment smooth-tilt">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center opacity-0 md:opacity-100">
        {SERVICES.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: hoveredService === service.id ? 0.4 : 0, 
              scale: hoveredService === service.id ? 1 : 0.95,
              zIndex: hoveredService === service.id ? 10 : 0
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute w-[600px] h-[400px]"
          >
            <img 
              src={service.image} 
              alt={`${service.title} preview`} 
              className="w-full h-full object-cover rounded-sm transition-opacity duration-500"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
