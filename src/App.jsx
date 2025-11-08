import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ProblemSection, SolutionSection, DemoSection, ImpactSection, GalleryContactSection } from './components/Sections';

function App() {
  // Determine language from pathname: /en or /id. Default to EN.
  const path = typeof window !== 'undefined' ? window.location.pathname : '/en';
  const lang = path.startsWith('/id') ? 'id' : 'en';

  return (
    <div className="font-sans text-slate-800">
      <Navbar lang={lang} />
      <main>
        <Hero lang={lang} />
        <ProblemSection lang={lang} />
        <SolutionSection lang={lang} />
        <DemoSection lang={lang} />
        <ImpactSection lang={lang} />
        <GalleryContactSection lang={lang} />
      </main>
    </div>
  );
}

export default App;
