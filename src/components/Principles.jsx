import React from 'react';
import { engineeringPrinciples } from '../data/portfolioData';

export default function Principles() {
  return (
    <section id="principles" className="section-padding" style={{ borderTop: '1px solid var(--retro-border)' }}>
      <div className="container">
        <div className="section-meta">CORE PHILOSOPHY</div>
        <h2 className="section-title">
          Engineering principles I <span style={{ fontStyle: 'italic', fontWeight: 400 }}>build by.</span>
        </h2>
        <p className="section-desc" style={{ marginBottom: '48px' }}>
          Software is an engineering discipline, not guesswork. These are the four pillars that guide how I design,
          write, review, and maintain production codebases.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {engineeringPrinciples.map((principle) => (
            <div
              key={principle.number}
              style={{
                backgroundColor: 'var(--paper-card)',
                border: '1px solid var(--retro-border-bold)',
                borderRadius: '6px',
                padding: '32px 26px',
                boxShadow: 'var(--shadow-retro-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.4rem',
                    fontWeight: 700,
                    color: 'var(--ink-primary)',
                    opacity: 0.25,
                    lineHeight: 1,
                    marginBottom: '14px',
                  }}
                >
                  {principle.number}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--ink-primary)',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}
                >
                  {principle.title}
                </h3>
              </div>
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  color: 'var(--ink-secondary)',
                  borderTop: '1px solid var(--retro-border-subtle)',
                  paddingTop: '14px',
                }}
              >
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
