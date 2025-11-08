import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = ({ lang = 'en', onDiscover }) => {
  const isEN = lang === 'en';
  return (
    <section id="home" className="relative w-full min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 via-white to-amber-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800"
        >
          {isEN ? 'Every time a language dies, a piece of humanity is lost.' : 'Setiap kali sebuah bahasa punah, sebagian kemanusiaan ikut hilang.'}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-lg md:text-2xl text-slate-700"
        >
          {isEN ? 'Let AI bring it back to life.' : 'Biarkan AI menghidupkannya kembali.'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8"
        >
          <a
            href="#problem"
            onClick={onDiscover}
            className="inline-block px-6 py-3 rounded-full bg-sky-600 text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            {isEN ? 'Discover How' : 'Cari Tahu'}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
