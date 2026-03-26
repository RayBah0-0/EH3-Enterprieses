import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: 'Excavation & Site Work',
    details: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.details.trim()) newErrors.details = 'Project details are required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      try {
        const response = await fetch("https://formspree.io/f/xlgodrrd", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            ...formData,
            subject: `New Request from ${formData.firstName} ${formData.lastName}`
          })
        });

        if (response.ok) {
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ firstName: '', lastName: '', email: '', projectType: 'Excavation & Site Work', details: '' });
          }, 3000);
        } else {
          console.error("Form submission failed");
          alert("Something went wrong. Please try again or contact us directly.");
        }
      } catch (err) {
        console.error("Form submission error", err);
        alert("Something went wrong. Please check your connection and try again.");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-parchment mb-6"
          >
            Start Your Project
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="micro-label text-gold"
          >
            Connect With EH3 Enterprises
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-serif text-parchment mb-6 font-light">Let's Build Something Extraordinary.</h2>
              <p className="text-parchment/70 text-lg leading-relaxed font-light">
                Whether you're looking for excavation work, a new build, or outdoor installations, our team is ready to bring your vision to life with uncompromised standards.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="micro-label text-parchment mb-2">Service Areas</h3>
                  <p className="text-parchment/60 font-light">Tucson, AZ</p>
                  <p className="text-parchment/60 font-light">Pima County</p>
                  <p className="text-parchment/60 font-light">Maricopa County</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-gold shrink-0" />
                <div>
                  <h3 className="micro-label text-parchment mb-1">Call Us</h3>
                  <p className="text-parchment/60 font-light">(520) 934-0747</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-gold shrink-0" />
                <div>
                  <h3 className="micro-label text-parchment mb-1">Email</h3>
                  <p className="text-parchment/60 font-light">emmanuel@eh3enterprisesaz.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-12 border border-white/10"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <ArrowRight className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-serif text-parchment">Inquiry Received</h3>
                <p className="text-parchment/70">We will be in touch shortly to discuss your project.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="micro-label text-parchment/60">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b pb-2 text-parchment focus:outline-none transition-colors ${errors.firstName ? 'border-red-500' : 'border-white/20 focus:border-gold'}`}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="micro-label text-parchment/60">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b pb-2 text-parchment focus:outline-none transition-colors ${errors.lastName ? 'border-red-500' : 'border-white/20 focus:border-gold'}`}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="micro-label text-parchment/60">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b pb-2 text-parchment focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-white/20 focus:border-gold'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label className="micro-label text-parchment/60">Project Type</label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-parchment focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option value="Excavation & Site Work" className="bg-obsidian">Excavation & Site Work</option>
                    <option value="Residential Construction" className="bg-obsidian">Residential Construction</option>
                    <option value="Hardscapes & Concrete" className="bg-obsidian">Hardscapes & Concrete</option>
                    <option value="Artificial Turf" className="bg-obsidian">Artificial Turf</option>
                    <option value="Other" className="bg-obsidian">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="micro-label text-parchment/60">Project Details</label>
                  <textarea 
                    rows={4}
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b pb-2 text-parchment focus:outline-none transition-colors resize-none ${errors.details ? 'border-red-500' : 'border-white/20 focus:border-gold'}`}
                  ></textarea>
                  {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details}</p>}
                </div>

                <button type="submit" className="w-full bg-gold text-white py-4 micro-label hover:bg-parchment hover:text-obsidian transition-colors flex items-center justify-center gap-2 group mt-8 rounded-full">
                  Submit Inquiry
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
