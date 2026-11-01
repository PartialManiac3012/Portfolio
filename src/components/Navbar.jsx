import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#projects' },
    { label: 'ARCHITECTURE', href: '#architecture' },
    { label: 'STACK & SKILLS', href: '#skills' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PHILOSOPHY', href: '#principles' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(248, 245, 238, 0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--retro-border)' : '1px solid transparent',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '78px',
        }}
      >
        {/* Monogram / Logo - strictly Aditya as requested */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '8px',
            fontFamily: 'var(--font-serif)',
            fontSize: '1.55rem',
            color: 'var(--ink-primary)',
            letterSpacing: '-0.01em',
          }}
        >
          <span style={{ fontWeight: 700 }}>Aditya</span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--ink-muted)',
              border: '1px solid var(--retro-border)',
              padding: '2px 6px',
              borderRadius: '3px',
              letterSpacing: '0.04em',
            }}
          >
            DEV
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                letterSpacing: '0.12em',
                fontWeight: 500,
                color: 'var(--ink-secondary)',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-terra)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Quick Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            aria-label="Open developer terminal"
            title="Open Interactive CLI Terminal"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'var(--paper-card)',
              color: 'var(--ink-primary)',
              padding: '8px 12px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              border: '1px solid var(--retro-border)',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--ink-primary)';
              e.currentTarget.style.backgroundColor = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--retro-border)';
              e.currentTarget.style.backgroundColor = 'var(--paper-card)';
            }}
          >
            <Terminal size={14} color="var(--accent-terra)" />
            <span style={{ display: 'none' }} className="terminal-btn-text">
              CLI
            </span>
            <span
              style={{
                background: 'var(--paper-subtle)',
                padding: '1px 5px',
                borderRadius: '3px',
                fontSize: '0.7rem',
              }}
            >
              ~
            </span>
          </button>

          {/* Book / Contact CTA Button matching reference image */}
          <a
            href="#contact"
            className="btn-primary"
            style={{
              padding: '10px 18px',
              fontSize: '0.84rem',
              letterSpacing: '0.02em',
            }}
          >
            Get in Touch
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid var(--retro-border)',
              padding: '8px',
              borderRadius: '4px',
              cursor: 'pointer',
              color: 'var(--ink-primary)',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--paper-card)',
            borderBottom: '2px solid var(--ink-primary)',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                color: 'var(--ink-primary)',
                padding: '6px 0',
                borderBottom: '1px solid var(--retro-border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={16} />
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTerminal();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px',
              backgroundColor: 'var(--paper-subtle)',
              border: '1px solid var(--retro-border)',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              marginTop: '8px',
            }}
          >
            <Terminal size={16} /> Launch Interactive Terminal
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .terminal-btn-text {
            display: inline !important;
          }
        }
        @media (max-width: 859px) {
          .mobile-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
