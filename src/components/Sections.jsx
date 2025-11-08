import React, { useEffect, useRef } from 'react';
import { ExternalLink, Brain, Mic, Bot, Globe2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const FadeIn = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export const ProblemSection = ({ lang = 'en' }) => {
  const isEN = lang === 'en';
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                {isEN ? 'The Silent Extinction of Human Languages' : 'Kepunahan Sunyi Bahasa Manusia'}
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                {isEN
                  ? 'Over 40% of the world\'s languages are endangered. When a language fades, unique knowledge, identity, and worldviews disappear.'
                  : 'Lebih dari 40% bahasa di dunia terancam punah. Ketika bahasa memudar, pengetahuan, identitas, dan cara pandang unik ikut hilang.'}
              </p>
              <a
                href="https://www.unesco.org/en/articles/unesco-sounds-alarm-over-loss-linguistic-diversity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-sky-700 hover:text-sky-900"
              >
                <ExternalLink className="w-4 h-4" /> {isEN ? 'View Source' : 'Lihat Sumber'}
              </a>
            </div>
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border bg-gradient-to-br from-amber-50 to-sky-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe2 className="w-24 h-24 text-sky-600 opacity-70" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=1600&auto=format&fit=crop"
                alt="Ancient map"
                className="w-full h-full object-cover mix-blend-multiply opacity-80 hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export const SolutionSection = ({ lang = 'en' }) => {
  const isEN = lang === 'en';
  const cards = [
    {
      icon: Brain,
      title: isEN ? 'AI Text Analysis' : 'Analisis Teks AI',
      desc: isEN
        ? 'Reading ancient manuscripts and extracting linguistic patterns.'
        : 'Membaca naskah kuno dan mengekstrak pola linguistik.',
      img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    },
    {
      icon: Mic,
      title: isEN ? 'Voice Reconstruction' : 'Rekonstruksi Suara',
      desc: isEN
        ? 'Training AI to mimic historical pronunciations.'
        : 'Melatih AI meniru pengucapan lama.',
      img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop',
    },
    {
      icon: Bot,
      title: isEN ? 'Interactive Chatbot' : 'Chatbot Interaktif',
      desc: isEN
        ? 'Helping learners practice endangered languages.'
        : 'Membantu pembelajar mempraktikkan bahasa yang terancam.',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-white to-sky-50/60">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center">
            {isEN ? 'How AI Can Bring Languages Back to Life' : 'Bagaimana AI Menghidupkan Kembali Bahasa'}
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {cards.map((c, idx) => (
              <div
                key={idx}
                className="group rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sky-700">
                    <c.icon className="w-5 h-5" />
                    <h3 className="font-semibold">{c.title}</h3>
                  </div>
                  <p className="mt-2 text-slate-600">{c.desc}</p>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-sky-400 via-amber-300 to-sky-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export const DemoSection = ({ lang = 'en' }) => {
  const isEN = lang === 'en';

  const playAudio = () => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(440, ctx.currentTime);
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    // Create a small ancient-like trill
    g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.1);
    o.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.25);
    o.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.5);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
    o.stop(ctx.currentTime + 0.65);
  };

  const showWord = () => {
    const el = document.getElementById('ancient-word');
    if (el) {
      el.classList.remove('opacity-0', 'scale-95');
      el.classList.add('opacity-100', 'scale-100');
      setTimeout(() => {
        el.classList.add('opacity-0', 'scale-95');
        el.classList.remove('opacity-100', 'scale-100');
      }, 2000);
    }
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              {isEN ? 'Try It Yourself' : 'Coba Sendiri'}
            </h2>
            <p className="mt-3 text-slate-600">
              {isEN
                ? 'Hear a simulated ancient tone and reveal a reconstructed word.'
                : 'Dengarkan nada kuno simulasi dan lihat kata yang direkonstruksi.'}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={playAudio}
                className="px-5 py-2.5 rounded-full bg-sky-600 text-white shadow hover:bg-sky-700 active:scale-95 transition"
              >
                {isEN ? 'Hear Ancient Tone' : 'Dengar Nada Kuno'}
              </button>
              <button
                onClick={showWord}
                className="px-5 py-2.5 rounded-full bg-amber-500 text-white shadow hover:bg-amber-600 active:scale-95 transition"
              >
                {isEN ? 'Reveal Word' : 'Tampilkan Kata'}
              </button>
            </div>
            <div className="mt-8 h-16 flex items-center justify-center">
              <span id="ancient-word" className="inline-block text-2xl font-semibold text-slate-800 transition-all duration-500 opacity-0 scale-95">
                {isEN ? 'Ṛta' : 'Ṛta'}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export const ImpactSection = ({ lang = 'en' }) => {
  const isEN = lang === 'en';
  const items = [
    {
      img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600&auto=format&fit=crop',
      title: isEN ? 'Indigenous Communities' : 'Komunitas Adat',
      desc: isEN
        ? 'Reviving language strengthens identity and keeps oral histories alive.'
        : 'Kebangkitan bahasa memperkuat identitas dan menjaga sejarah lisan.',
    },
    {
      img: 'https://images.unsplash.com/photo-1495420378468-78588a508652?q=80&w=1600&auto=format&fit=crop',
      title: isEN ? 'Students & Researchers' : 'Pelajar & Peneliti',
      desc: isEN
        ? 'Open datasets and tools for linguistic exploration.'
        : 'Dataset terbuka dan alat untuk eksplorasi linguistik.',
    },
    {
      img: 'https://images.unsplash.com/photo-1548791868-6c6b65d0d1ee?q=80&w=1600&auto=format&fit=crop',
      title: isEN ? 'Global Culture' : 'Budaya Global',
      desc: isEN
        ? 'Preserving diversity enriches our shared human future.'
        : 'Menjaga keberagaman memperkaya masa depan manusia bersama.',
    },
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-amber-50/60 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center">
            {isEN ? 'Cultural Impact' : 'Dampak Kultural'}
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {items.map((it, idx) => (
              <article key={idx} className="group rounded-xl overflow-hidden border bg-white shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-800">{it.title}</h3>
                  <p className="mt-2 text-slate-600">{it.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export const GalleryContactSection = ({ lang = 'en' }) => {
  const isEN = lang === 'en';
  const gallery = [
    'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975922203-b5e906d2f492?q=80&w=1600&auto=format&fit=crop',
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center">{isEN ? 'Gallery' : 'Galeri'}</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {gallery.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt={`gallery-${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div id="contact" className="mt-16 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-800 text-center">{isEN ? 'Get in Touch' : 'Hubungi Kami'}</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(isEN ? 'Thank you! We will get back to you soon.' : 'Terima kasih! Kami akan segera menghubungi Anda.');
              }}
              className="mt-6 grid gap-4"
            >
              <input type="text" required placeholder={isEN ? 'Name' : 'Nama'} className="w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <input type="email" required placeholder="Email" className="w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <textarea required placeholder={isEN ? 'Message' : 'Pesan'} rows="4" className="w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <button type="submit" className="justify-self-center px-6 py-2.5 rounded-full bg-sky-600 text-white font-medium shadow hover:bg-sky-700 hover:scale-105 transition">
                {isEN ? 'Send Message' : 'Kirim Pesan'}
              </button>
            </form>
          </div>
        </FadeIn>

        <FadeIn>
          <footer className="mt-20 text-center text-slate-600">
            <p className="text-sm">
              {isEN
                ? 'An educational initiative exploring how AI can help revive endangered languages.'
                : 'Inisiatif edukatif menjelajahi bagaimana AI membantu menghidupkan kembali bahasa yang terancam.'}
            </p>
            <div className="mt-3 flex items-center justify-center gap-5 text-sky-700">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
            </div>
            <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} AI for Lost Languages Revival</p>
          </footer>
        </FadeIn>
      </div>
    </section>
  );
};
