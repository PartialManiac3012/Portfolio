import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ borderTop: '1px solid var(--retro-border)' }}>
      <div className="container">
        <div className="section-meta">TRACK RECORD & IMPACT</div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          <div>
            <h2 className="section-title">
              Engineering <span style={{ fontStyle: 'italic', fontWeight: 400 }}>experience.</span>
            </h2>
            <p className="section-desc">
              Proven track record delivering mission-critical features, scaling infrastructure, and collaborating
              across cross-functional product and engineering teams.
            </p>
          </div>

          <a
            href="mailto:aditya.kumar.dev@pm.me?subject=Full-Stack%20Role%20Inquiry"
            className="btn-secondary"
            style={{ fontSize: '0.84rem' }}
          >
            <span>Request Full Resume (PDF)</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Timeline List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {experienceTimeline.map((item, index) => (
            <div
              key={item.company}
              style={{
                backgroundColor: 'var(--paper-card)',
                border: '1px solid var(--retro-border-bold)',
                borderRadius: '6px',
                padding: '32px',
                boxShadow: 'var(--shadow-retro-sm)',
                position: 'relative',
              }}
            >
              {/* Top Row: Role, Company, Period */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '12px',
                  marginBottom: '16px',
                  borderBottom: '1px solid var(--retro-border-subtle)',
                  paddingBottom: '14px',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: 'var(--ink-primary)',
                      marginBottom: '4px',
                    }}
                  >
                    {item.role}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.02rem',
                      fontWeight: 600,
                      color: 'var(--accent-terra)',
                    }}
                  >
                    {item.company}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--ink-muted)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={13} /> {item.period}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={13} /> {item.location}
                  </span>
                </div>
              </div>

              {/* Highlights List */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {item.highlights.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '0.94rem',
                      lineHeight: 1.6,
                      color: 'var(--ink-secondary)',
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      color="var(--accent-green)"
                      style={{ flexShrink: 0, marginTop: '4px' }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
