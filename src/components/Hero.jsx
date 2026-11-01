import React from 'react';
import { ArrowRight, Terminal, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import EngineeringSpotlight from './EngineeringSpotlight';

export default function Hero({ onOpenTerminal }) {
  return (
    <section
      style={{
        paddingTop: '64px',
        paddingBottom: '88px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '54px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Bold Editorial Typography & CTA */}
          <div>
            {/* Availability Badge (matches reference image badge) */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                border: '1px solid var(--retro-border)',
                borderRadius: '4px',
                padding: '6px 14px',
                marginBottom: '26px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--ink-secondary)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-green)',
                  display: 'inline-block',
                }}
              />
              <span>{personalInfo.availability}</span>
            </div>

            {/* Massive Serif Editorial Headline (matching reference image typography) */}
            <h1
              style={{
                fontSize: 'clamp(3rem, 5.4vw, 4.6rem)',
                lineHeight: 1.06,
                letterSpacing: '-0.025em',
                fontFamily: 'var(--font-serif)',
                color: 'var(--ink-primary)',
                marginBottom: '24px',
                fontWeight: 600,
              }}
            >
              Systems that handle scale.
              <br />
              <span className="text-outline" style={{ marginRight: '10px' }}>
                Not just
              </span>
              <span>prototypes.</span>
            </h1>

            {/* Subhead / Engineer Bio */}
            <p
              style={{
                fontSize: '1.14rem',
                lineHeight: 1.65,
                color: 'var(--ink-secondary)',
                maxWidth: '560px',
                marginBottom: '36px',
                fontFamily: 'var(--font-sans)',
              }}
            >
              I'm <strong style={{ color: 'var(--ink-primary)', fontWeight: 700 }}>{personalInfo.name}</strong>, a{' '}
              <strong style={{ color: 'var(--ink-primary)', fontWeight: 600 }}>Computer Science & Engineering student</strong> based in{' '}
              <strong style={{ color: 'var(--ink-primary)' }}>{personalInfo.location}</strong>. Still learning every day and comfortable with full-stack web development, backend APIs, and responsive UI craft — focused on{' '}
              <strong style={{ color: 'var(--ink-primary)' }}>
                building real projects and available for internships as a fresher.
              </strong>
            </p>

            {/* Action Buttons matching reference image layout */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '46px',
              }}
            >
              <a href="#projects" className="btn-primary">
                Explore Projects ↓
              </a>

              <button onClick={onOpenTerminal} className="btn-secondary" type="button">
                <Terminal size={16} color="var(--accent-terra)" />
                <span>Interactive CLI</span>
              </button>

              <a href="#skills" className="btn-ghost">
                <span>View Tech Stack</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Trust / Tech Markers Bar (matching bottom bar in reference image) */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px 18px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: 'var(--ink-muted)',
                paddingTop: '22px',
                borderTop: '1px solid var(--retro-border)',
              }}
            >
              <span style={{ color: 'var(--ink-primary)', fontWeight: 600 }}>React & JavaScript</span>
              <span style={{ color: 'var(--retro-border)' }}>—</span>
              <span>Node.js & Express</span>
              <span style={{ color: 'var(--retro-border)' }}>—</span>
              <span style={{ color: 'var(--ink-primary)', fontWeight: 600 }}>PostgreSQL & MongoDB</span>
              <span style={{ color: 'var(--retro-border)' }}>—</span>
              <span>Git & GitHub</span>
            </div>
          </div>

          {/* Right Column: Obsidian Dark Card with Floating Badges */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <EngineeringSpotlight />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
}
