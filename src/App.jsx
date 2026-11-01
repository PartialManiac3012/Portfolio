import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Principles from './components/Principles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveTerminal from './components/InteractiveTerminal';
import FloatingBadge from './components/FloatingBadge';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Global key listener for ~ or ` key to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      // If pressing ` or ~ outside an input or textarea
      if (
        (e.key === '`' || e.key === '~') &&
        e.target.tagName !== 'INPUT' &&
        e.target.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <Projects />
        <ArchitectureDiagram />
        <TechStack />
        <Experience />
        <Principles />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Interactive Developer Terminal Modal */}
      <InteractiveTerminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

      {/* Floating Bottom-Right Quick Action Badge */}
      <FloatingBadge onOpenTerminal={() => setTerminalOpen(true)} />
    </div>
  );
}
