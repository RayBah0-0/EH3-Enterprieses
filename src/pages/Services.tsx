import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Heavy Equipment & Site Work",
    description: "Excavation, grading, trenching, demolition, site preparation, and skid steer & mini excavator work.",
    image: "/Excavation_trenching/IMG_1820.jpeg"
  },
  {
    title: "Residential Construction",
    description: "Ground-up home construction, home additions, and structural build-outs engineered with precision.",
    image: "/new photos/residential construction.jpg"
  },
  {
    title: "Concrete, Masonry & Hardscapes",
    description: "Driveways, patios, walkways, retaining walls, foundations, slabs, and paver installations.",
    image: "/new photos/comcrete, masonry, hardscapes.jpg"
  },
  {
    title: "Artificial Turf Installation",
    description: "Full turf installs, base prep & drainage, and low-maintenance landscaping for beautiful outdoor spaces.",
    image: "/new photos/artificial turf.jpeg"
  }
];

export function Services() {
  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-parchment mb-6"
          >
            Our Expertise
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="micro-label text-gold"
          >
            The EH3 Standard
          </motion.p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`aspect-[4/3] relative overflow-hidden group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 bg-obsidian/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover monochrome-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className={`space-y-8 ${index % 2 !== 0 ? 'lg:order-1 lg:pr-16' : 'lg:pl-16'}`}>
                <h2 className="text-3xl md:text-4xl font-serif text-parchment font-light">
                  {service.title}
                </h2>
                <p className="text-parchment/70 text-lg leading-relaxed font-light">
                  {service.description}
                </p>
                <Link to="/contact" className="group flex items-center gap-4 micro-label text-gold hover:text-parchment transition-colors w-fit">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
