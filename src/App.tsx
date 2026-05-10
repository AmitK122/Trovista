/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trust from "./components/Trust";
import About from "./components/About";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import SocialFeed from "./components/SocialFeed";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 text-primary"
            >
              TROVISTA<span className="text-accent">.</span>
            </motion.div>
            
            <div className="w-48 h-[2px] bg-black/5 relative overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-accent shadow-[0_0_15px_rgba(0,200,150,0.3)]"
              />
            </div>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-[10px] uppercase tracking-[0.5em] font-bold text-primary/40"
            >
              Initializing Growth
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={loading ? "hidden" : "block transition-opacity duration-1000"}>
        <Navbar />
        <Hero />
        
        <Services />
        <Trust />
        <About />
        <Packages />
        <Testimonials />
        <SocialFeed />
        <ContactCTA />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </div>
  );
}
