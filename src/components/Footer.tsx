import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    try {
      const response = await fetch("https://formspree.io/f/mreognnj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email, subject: "New Newsletter Subscriber" })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error("Newsletter submission failed");
      }
    } catch (err) {
      console.error("Newsletter submission error", err);
    }
  };

  return (
    <footer className="py-24 px-6 md:px-12 max-w-7xl mx-auto mt-20">
      
      {/* Newsletter Signup */}
      <div className="mb-24 flex flex-col items-center justify-center text-center space-y-6">
        <h4 className="font-serif text-3xl md:text-4xl text-parchment font-light">Join the EH3 Legacy</h4>
        <p className="text-sm font-sans font-light text-parchment/60 max-w-md">
          Subscribe to our newsletter for exclusive structural insights, featured outdoor project reveals, and custom build inspiration.
        </p>
        <form className="flex w-full max-w-md mt-6 relative group" onSubmit={handleSubmit}>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={isSubmitted ? "Thanks for subscribing!" : "Enter your email address"} 
            className="w-full bg-transparent border-b border-white/20 px-2 py-3 text-parchment font-light text-sm focus:outline-none focus:border-gold transition-colors peer"
            required
            disabled={isSubmitted}
          />
          <button type="submit" disabled={isSubmitted} className="absolute right-0 top-0 h-full px-4 text-white/40 peer-focus:text-gold hover:!text-parchment transition-colors micro-label font-bold disabled:opacity-50">
            {isSubmitted ? "Done" : "Subscribe"}
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 border-t border-white/10 pt-16">
        
        {/* Brand */}
        <div className="flex flex-col justify-between h-full md:col-span-2">
          <div>
            <Link to="/" className="inline-block mb-8 group">
              <img 
                src="/Logo.png" 
                alt="EH3 Enterprises" 
                className="h-32 w-auto transition-all duration-700 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:drop-shadow-[0_0_35px_rgba(212,175,55,0.6)]" 
              />
            </Link>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 border border-gold/30 text-gold micro-label rounded-full">Veteran-Owned & Operated</span>
            </div>
            <p className="text-sm font-sans font-light text-parchment/60 max-w-md leading-relaxed mt-6">
              Veteran-owned, family-operated general contracting company serving Pima and Maricopa County, Arizona. Specializing in excavation, construction, and outdoor installations.
            </p>
            <p className="micro-label text-gold/60 mt-4 tracking-[0.2em] uppercase">Licensed • Bonded • Insured</p>
            <div className="mt-8">
              <img src="/Better-Business-Bureau-Symbol-300x169.png" alt="BBB Accredited Business" className="h-12 w-auto opacity-50 hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="mt-16 md:mt-auto micro-label text-white/30">
            © {new Date().getFullYear()} EH3 Enterprises, Inc. All Rights Reserved.
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h5 className="micro-label text-gold mb-8">Navigation</h5>
          <ul className="space-y-4 flex flex-col">
            <Link to="/" className="micro-label text-parchment/70 hover:text-gold transition-colors w-fit">Home</Link>
            <Link to="/legacy" className="micro-label text-parchment/70 hover:text-gold transition-colors w-fit">About Us</Link>
            <Link to="/services" className="micro-label text-parchment/70 hover:text-gold transition-colors w-fit">Services</Link>
            <Link to="/portfolio" className="micro-label text-parchment/70 hover:text-gold transition-colors w-fit">Portfolio</Link>
            <Link to="/contact" className="micro-label text-parchment/70 hover:text-gold transition-colors w-fit">Contact</Link>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="micro-label text-gold mb-8">Contact</h5>
          <ul className="space-y-4 font-sans font-light text-sm text-parchment/70 tracking-wide mb-12">
            <li>(520) 934-0747</li>
            <li>emmanuel@eh3enterprisesaz.com</li>
            <li className="pt-4 text-white/50 text-xs uppercase tracking-widest">
              Tucson, AZ<br/>
              Pima County<br/>
              Maricopa County
            </li>
          </ul>
          
          <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 border border-white/20 rounded-full hover:bg-parchment hover:text-obsidian transition-all duration-500 w-full">
            <span className="micro-label group-hover:text-obsidian transition-colors duration-500">Start Your Project</span>
          </Link>
        </div>

      </div>
    </footer>
  );
}
