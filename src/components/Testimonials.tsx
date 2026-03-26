import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "These guys are awesome. Dug out a 150 ft trench and even helped shovel by hand. They definitely go the extra mile and I highly recommend them.",
    author: "Isaac Moon",
    location: "Tucson, AZ"
  },
  {
    id: 2,
    quote: "Emmanuel and his crew did a wonderful job on a big yard cleanup. Very happy with the results.",
    author: "Carrie Franz",
    location: "Pima County"
  },
  {
    id: 3,
    quote: "Small business — support local.",
    author: "Wyatt Works HVAC LLC",
    location: "Maricopa County"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/Low%20Opacity%20Background.jpg')] bg-cover bg-center mix-blend-overlay" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="micro-label text-gold mb-4">The EH3 Standard</h2>
          <p className="text-3xl md:text-4xl font-serif text-parchment font-light italic">Uncompromised Quality</p>
        </div>

        <div className="relative h-[400px] md:h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute text-center max-w-4xl mx-auto px-4"
            >
              <Quote className="w-12 h-12 text-gold/20 mx-auto mb-8" />
              <p className="text-2xl md:text-4xl font-serif text-parchment italic leading-relaxed mb-8 font-light">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="micro-label text-gold">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-parchment/50 text-xs mt-2 font-sans tracking-widest uppercase">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-gold w-8' : 'bg-parchment/20 hover:bg-parchment/40'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
