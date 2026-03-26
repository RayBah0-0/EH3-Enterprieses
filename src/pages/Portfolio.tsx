import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MoveHorizontal } from 'lucide-react';

const showcases = [
  "/showcase.jpg",
  "/showcase1.jpg",
  "/showcaqse2.jpg",
  "/showcase3.jpg",
  "/showcase4.jpg",
  "/showcase5.jpg",
  "/showcase6.jpg",
];

const beforeAfters = [
  { before: "/before.jpg", after: "/after.jpg", title: "Site Excavation" },
  { before: "/before1.jpg", after: "/after2.jpg", title: "Project Transformation" }
];

function BeforeAfterSlider({ before, after, title }: { before: string, after: string, title: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto mb-24">
      <div 
        ref={containerRef}
        className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden cursor-ew-resize select-none"
        onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <div className="absolute top-4 right-4 bg-gold text-white px-4 py-2 micro-label z-20 pointer-events-none">After</div>

        {/* Before Image (Foreground/Clipped) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover monochrome-img" />
          <div className="absolute top-4 left-4 bg-obsidian/80 text-parchment px-4 py-2 micro-label z-20">Before</div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none">
            <MoveHorizontal className="w-4 h-4 text-obsidian" />
          </div>
        </div>
      </div>
      <h3 className="text-xl font-serif text-parchment mt-8 font-light italic">{title}</h3>
    </div>
  );
}

export function Portfolio() {
  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-parchment mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="micro-label text-gold"
          >
            Precision-Driven Execution
          </motion.p>
        </div>

        {/* Before & After Section */}
        <div className="mb-32">
          <h2 className="text-3xl font-serif text-parchment mb-16 text-center font-light">Transformations</h2>
          <div className="space-y-12">
            {beforeAfters.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <BeforeAfterSlider before={item.before} after={item.after} title={item.title} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div>
          <h2 className="text-3xl font-serif text-parchment mb-12 text-center font-light">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcases.map((src, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-obsidian/40 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
                <img 
                  src={src} 
                  alt={`Project Showcase ${index + 1}`} 
                  className="w-full h-full object-cover monochrome-img"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
