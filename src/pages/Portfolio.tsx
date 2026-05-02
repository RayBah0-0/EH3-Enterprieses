import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MoveHorizontal, Hammer, Truck, Fence, Mountain, Layers } from 'lucide-react';

const showcases = [
  "/showcase.jpg",
  "/showcase1.jpg",
  "/showcaqse2.jpg",
  "/showcase3.jpg",
  "/showcase4.jpg",
  "/showcase5.jpg",
  "/showcase6.jpg",
];

const categories = [
  {
    id: "excavation",
    title: "Excavation & Trenching",
    icon: <Mountain className="w-5 h-5" />,
    description: "Precision groundwork and utility trenching for large-scale developments and custom residential builds.",
    images: [
      "/Excavation_trenching/IMG_1820.jpeg",
      "/Excavation_trenching/IMG_1827.jpeg",
      "/Excavation_trenching/IMG_1831.jpeg",
      "/Excavation_trenching/IMG_2454.jpeg",
      "/Excavation_trenching/IMG_3015.jpeg",
      "/Excavation_trenching/IMG_3016.jpeg",
    ]
  },
  {
    id: "hardscape",
    title: "Hardscapes & Masonry",
    icon: <Layers className="w-5 h-5" />,
    description: "Structural retaining walls, bespoke paver installations, and high-end outdoor environments.",
    images: [
      "/Hardscape/IMG_0142.jpeg",
      "/Hardscape/IMG_0143.jpeg",
      "/new photos/hardscapes &masonry1.jpeg",
      "/new photos/hardscapes &masonry2.jpeg",
      "/new photos/hardscapes &masonry3.jpeg",
      "/Hardscape/IMG_0490.jpeg",
    ] as (string | null)[]
  },
  {
    id: "skidsteer",
    title: "Heavy Equipment Operations",
    icon: <Truck className="w-5 h-5" />,
    description: "Specialized skid steer and mini-excavator work for tight-access sites and complex grading.",
    images: [
      "/new photos/heavy equipment operations1.jpeg",
      "/Skid steer work/IMG_0224.jpeg",
      "/new photos/heavy equipment operations2.jpeg",
      "/Skid steer work/IMG_0314.jpeg",
      "/new photos/heavy equipment operations3.jpeg",
      "/Skid steer work/IMG_1339.jpeg",
    ]
  },
  {
    id: "framing",
    title: "Structural Framing",
    icon: <Hammer className="w-5 h-5" />,
    description: "Rigid-frame construction and structural timber work for premium additions and custom builds.",
    images: [
      "/Framing/IMG_0689.jpeg",
      "/Framing/IMG_0690.jpeg",
      "/Framing/IMG_2164.jpeg",
      "/Framing/IMG_2167.jpeg",
      "/new photos/structural farming1.jpeg",
      "/Framing/IMG_2257.jpeg",
    ] as (string | null)[]
  },
  {
    id: "fencing",
    title: "Fencing & Boundaries",
    icon: <Fence className="w-5 h-5" />,
    description: "Custom boundary solutions combining security with architectural aesthetic.",
    images: [
      "/Fencing projects/IMG_2784.jpeg",
      "/Fencing projects/IMG_2785.jpeg",
      "/Fencing projects/IMG_2810.jpeg",
      "/Fencing projects/IMG_2847.jpeg",
      "/new photos/fencing1.jpeg",
      "/new photos/fencing2.jpeg",
    ]
  },
];

const beforeAfters = [
  { before: "/before and after/1B.jpeg", after: "/before and after/1A.jpeg", title: "Site Excavation & Clearing" },
  { before: "/before and after/2B.jpeg", after: "/before and after/2A.jpeg", title: "Precision Grading" },
  { before: "/before and after/3B.jpeg", after: "/before and after/3A.jpeg", title: "Structural Foundation" },
  { before: "/before and after/4B.jpeg", after: "/before and after/4A.jpeg", title: "Terrain Transformation" },
  { before: "/before and after/5B.jpeg", after: "/before and after/5A.JPG", title: "Development Groundwork" },
  { before: "/before and after/6B.jpg", after: "/before and after/6A.jpg", title: "Landscape Architecture" },
  { before: "/before and after/7B.jpeg", after: "/before and after/7A.jpg", title: "Infrastructure Prep" },
  { before: "/before and after/8B.jpeg", after: "/before and after/8A.JPG", title: "Earthwork Execution" },
  { before: "/before and after/9B.jpeg", after: "/before and after/9A.jpeg", title: "Property Enhancement" }
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
        className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden cursor-ew-resize select-none border border-white/5"
        onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
        onTouchMove={handleTouchMove}
      >
        <img src={after} alt="After" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <div className="absolute top-4 right-4 bg-gold text-white px-4 py-2 micro-label z-20 pointer-events-none">After</div>
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img src={before} alt="Before" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover monochrome-img" />
          <div className="absolute top-4 left-4 bg-obsidian/80 text-parchment px-4 py-2 micro-label z-20">Before</div>
        </div>
        <div 
          className="absolute top-0 bottom-0 w-px bg-white/50 cursor-ew-resize z-30"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center pointer-events-none">
            <MoveHorizontal className="w-4 h-4 text-obsidian" />
          </div>
        </div>
      </div>
      <h3 className="text-xl font-serif text-parchment mt-8 font-light italic">{title}</h3>
    </div>
  );
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories = activeCategory === "all" 
    ? categories 
    : categories.filter(c => c.id === activeCategory);

  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif text-parchment mb-6 tracking-tighter"
          >
            Portfolio
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px w-8 bg-gold/50" />
            <p className="micro-label text-gold uppercase tracking-[0.3em]">Built to Last</p>
            <div className="h-px w-8 bg-gold/50" />
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          <button 
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2 rounded-full border transition-all duration-500 micro-label ${
              activeCategory === "all" 
              ? "bg-gold border-gold text-obsidian" 
              : "bg-transparent border-white/10 text-parchment/60 hover:border-gold/50"
            }`}
          >
            All Work
          </button>
          {categories.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full border transition-all duration-500 micro-label flex items-center gap-2 ${
                activeCategory === cat.id 
                ? "bg-gold border-gold text-obsidian" 
                : "bg-transparent border-white/10 text-parchment/60 hover:border-gold/50"
              }`}
            >
              {cat.icon}
              {cat.title}
            </button>
          ))}
        </div>

        {/* Featured Transformations */}
        {activeCategory === "all" && (
          <div className="mb-40">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-3xl font-serif text-parchment mb-4 font-light italic">The EH3 Difference</h2>
              <p className="text-sm text-parchment/40 micro-label uppercase tracking-widest">Before & After</p>
            </div>
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
        )}

        {/* Categorized Galleries */}
        <div className="space-y-40">
          {filteredCategories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-32">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 border-b border-white/5 pb-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 text-gold mb-4">
                    {category.icon}
                    <span className="micro-label uppercase tracking-widest">{category.title}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-parchment mb-4 font-light">
                    {category.description}
                  </h3>
                </div>
                <div className="text-parchment/30 text-xs micro-label">
                  Project Gallery / {category.images.length} Shots
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((src, imgIndex) => (
                  <motion.div 
                    key={imgIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: imgIndex * 0.1 }}
                    className="aspect-square relative overflow-hidden group bg-white/5"
                  >
                    {src ? (
                      <>
                        <div className="absolute inset-0 bg-obsidian/40 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
                        <img 
                          src={src} 
                          alt={`${category.title} Project ${imgIndex + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-6">
                          <span className="micro-label text-gold text-xs">EH3 Signature Project</span>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center border border-dashed border-white/10">
                        <span className="micro-label text-white/20 text-xs uppercase tracking-widest">Coming Soon</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Legacy Archive */}
        {activeCategory === "all" && (
          <div className="mt-60 pt-40 border-t border-white/5">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-serif text-parchment mb-4 font-light">Project Archive</h2>
              <p className="text-sm text-parchment/40 micro-label">A collection of our foundational builds</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {showcases.map((src, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="aspect-video relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 opacity-40 hover:opacity-100"
                >
                  <img src={src} alt="Archive" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

