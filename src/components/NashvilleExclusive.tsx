import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const REVIEWS = [
  "Flawless execution. The 3D measuring technology is incredible.",
  "Installed in under 3 hours. Absolutely transformed our home.",
  "The precision and craftsmanship are unmatched in Nashville.",
  "A seamless experience from design to installation.",
  "True master builders. The doors fit perfectly."
];

export function NashvilleExclusive() {
  return (
    <section id="nashville" className="relative py-32 border-b border-white/10 overflow-hidden bg-surface text-parchment">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-8 h-[1px] bg-gold" />
            <h2 className="micro-label text-gold">Nashville Exclusive</h2>
          </div>
          
          <h3 className="font-serif text-5xl md:text-6xl leading-tight mb-8 font-light">
            One Day Doors <br className="hidden md:block" /><span className="italic text-white/70">& Closets</span>
          </h3>
          
          <div className="space-y-6 text-parchment/80 font-sans font-light leading-relaxed max-w-md">
            <p>
              We bring revolutionary precision to Nashville. Utilizing proprietary 3D Measuring Technology, we capture the exact geometry of your space down to the millimeter.
            </p>
            <p>
              The result? Custom-milled doors and closets installed with zero construction mess in under 3 hours. A flawless fit, guaranteed.
            </p>
          </div>
          
          <Link to="/services" className="mt-12 group relative inline-flex items-center justify-center px-8 py-4 micro-label text-parchment overflow-hidden border border-white/20 hover:border-white/50 transition-colors duration-500 rounded-full">
            <span className="relative z-10 transition-colors duration-500">Discover The Tech</span>
            <div className="absolute inset-0 h-full w-full bg-white/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative aspect-square w-full max-w-lg mx-auto lg:ml-auto group overflow-hidden rounded-2xl"
        >
          <img 
            src="/Showcase6.jpg" 
            alt="Modern interior door installation" 
            className="w-full h-full object-cover monochrome-img"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -inset-4 border border-white/10 rounded-2xl -z-10" />
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="mt-32 border-t border-b border-white/10 py-6 overflow-hidden flex whitespace-nowrap bg-obsidian">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex space-x-16 px-8"
        >
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <div key={i} className="flex items-center space-x-4">
              <span className="text-gold">âââââ</span>
              <span className="font-serif italic text-lg tracking-wide">"{review}"</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
