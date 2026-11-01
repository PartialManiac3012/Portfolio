import React from 'react';
import { ArrowUp, Terminal, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenTerminal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '2px solid var(--retro-border-bold)',
        backgroundColor: 'var(--paper-subtle)',
        paddingTop: '64px',
        paddingBottom: '48px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '36px',
            marginBottom: '48px',
          }}
        >
          {/* Logo & Bio Column */}
          <div style={{ maxWidth: '420px' }}>
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'baseline',
                gap: '8px',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.55rem',
                color: 'var(--ink-primary)',
                marginBottom: '12px',
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
                }}
              >
                DEV
              </span>
            </a>
            <p
              style={{
                fontSize: '0.9rem',
                lineHeight: 1.6,
                color: 'var(--ink-secondary)',
                marginBottom: '16px',
              }}
            >
              Computer Science & Engineering student building modern full-stack web applications, backend APIs, and
              responsive interactive interfaces.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--ink-muted)',
              }}
            >
              DEHRADUN / PATNA, INDIA // UTC+5:30
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--ink-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '14px',
                fontWeight: 600,
              }}
            >
              INDEX
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
              }}
            >
              <li>
                <a href="#projects" style={{ color: 'var(--ink-secondary)' }}>
                  // Case Studies & Code
                </a>
              </li>
              <li>
                <a href="#architecture" style={{ color: 'var(--ink-secondary)' }}>
                  // System Design & SLAs
                </a>
              </li>
              <li>
                <a href="#skills" style={{ color: 'var(--ink-secondary)' }}>
                  // Skills Matrix
                </a>
              </li>
              <li>
                <a href="#experience" style={{ color: 'var(--ink-secondary)' }}>
                  // Experience & Track Record
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenTerminal}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    color: 'var(--accent-terra)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Terminal size={12} /> // Launch Terminal CLI
                </button>
              </li>
            </ul>
          </div>

          {/* Back To Top Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{
                fontSize: '0.78rem',
                padding: '9px 14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--retro-border)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '14px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--ink-muted)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Aditya Kumar. Built with React & Vite. Retro Typography Theme.
          </div>
          <div>No gradients. No AI fluff. Pure engineering craft.</div>
        </div>
      </div>
    </footer>
  );
}
