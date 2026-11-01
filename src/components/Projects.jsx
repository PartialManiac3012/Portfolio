import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Layers, Cpu, Database, Check, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'DISTRIBUTED SYSTEMS', 'FULL-STACK', 'FRONTEND & WEBSOCKETS', 'DEVOPS'];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'ALL') return true;
    return p.category.includes(activeFilter);
  });

  return (
    <section id="projects" className="section-padding" style={{ borderTop: '1px solid var(--retro-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '48px',
          }}
        >
          <div className="section-meta">ENGINEERING CASE STUDIES</div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '20px',
            }}
          >
            <div>
              <h2 className="section-title">
                Featured software <span style={{ fontStyle: 'italic', fontWeight: 400 }}>systems.</span>
              </h2>
              <p className="section-desc">
                Production-grade applications and distributed services. Engineered with an obsession for resilience,
                performance profiling, and zero-downtime scalability.
              </p>
            </div>

            {/* Filter Chips */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    border: '1px solid',
                    borderColor: activeFilter === f ? 'var(--ink-primary)' : 'var(--retro-border)',
                    backgroundColor: activeFilter === f ? 'var(--ink-primary)' : 'var(--paper-card)',
                    color: activeFilter === f ? '#FFFFFF' : 'var(--ink-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              style={{
                backgroundColor: 'var(--paper-card)',
                border: '1px solid var(--retro-border-bold)',
                borderRadius: '6px',
                padding: '36px 32px',
                boxShadow: 'var(--shadow-retro-sm)',
                transition: 'all 0.2s ease',
                position: 'relative',
              }}
              className="project-card"
            >
              {/* Card Top Meta */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '18px',
                  borderBottom: '1px solid var(--retro-border-subtle)',
                  paddingBottom: '14px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: 'var(--accent-terra)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {project.category}
                  </span>
                  <span style={{ color: 'var(--retro-border)' }}>/</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: 'var(--ink-muted)',
                    }}
                  >
                    {project.year}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: 'none',
                      border: '1px dashed var(--retro-border)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--ink-secondary)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--ink-primary)';
                      e.currentTarget.style.color = 'var(--ink-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--retro-border)';
                      e.currentTarget.style.color = 'var(--ink-secondary)';
                    }}
                  >
                    <Layers size={13} />
                    <span>View Architecture</span>
                  </button>
                </div>
              </div>

              {/* Title & Tagline */}
              <div style={{ marginBottom: '16px' }}>
                <h3
                  style={{
                    fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 600,
                    color: 'var(--ink-primary)',
                    marginBottom: '8px',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '1.02rem',
                    color: 'var(--ink-muted)',
                    fontFamily: 'var(--font-sans)',
                    maxWidth: '820px',
                  }}
                >
                  {project.tagline}
                </p>
              </div>

              {/* Engineering Metrics Highlight Bar */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '12px',
                  backgroundColor: 'var(--paper-subtle)',
                  border: '1px solid var(--retro-border)',
                  borderRadius: '4px',
                  padding: '14px 18px',
                  margin: '22px 0',
                }}
              >
                {project.metrics.map((m, mIdx) => (
                  <div key={mIdx}>
                    <div
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.28rem',
                        fontWeight: 600,
                        color: 'var(--ink-primary)',
                      }}
                    >
                      {m.val}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--ink-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description Paragraph */}
              <p
                style={{
                  fontSize: '0.94rem',
                  lineHeight: 1.65,
                  color: 'var(--ink-secondary)',
                  marginBottom: '24px',
                  maxWidth: '880px',
                }}
              >
                {project.description}
              </p>

              {/* Card Footer: Tech Tags & Links */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--retro-border-subtle)',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.architecture.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--retro-border)',
                        color: 'var(--ink-primary)',
                        padding: '3px 8px',
                        borderRadius: '3px',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--ink-primary)',
                      padding: '6px 12px',
                      backgroundColor: 'var(--paper-subtle)',
                      border: '1px solid var(--retro-border)',
                      borderRadius: '4px',
                    }}
                  >
                    <GithubIcon size={14} />
                    <span>Source</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      backgroundColor: 'var(--ink-primary)',
                      padding: '6px 14px',
                      borderRadius: '4px',
                    }}
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Project Architecture Deep-Dive Modal */}
        {selectedProject && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(14, 19, 31, 0.75)',
              backdropFilter: 'blur(4px)',
              zIndex: 998,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProject(null);
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '680px',
                backgroundColor: 'var(--paper-card)',
                border: '2px solid var(--ink-primary)',
                borderRadius: '8px',
                padding: '32px',
                boxShadow: 'var(--shadow-retro)',
                maxHeight: '90vh',
                overflowY: 'auto',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '20px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--accent-terra)',
                      letterSpacing: '0.08em',
                      fontWeight: 600,
                      marginBottom: '4px',
                    }}
                  >
                    ARCHITECTURE BREAKDOWN // {selectedProject.category}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.8rem',
                      color: 'var(--ink-primary)',
                    }}
                  >
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: 'none',
                    border: '1px solid var(--retro-border)',
                    padding: '6px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    color: 'var(--ink-primary)',
                  }}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Problem / Bottleneck */}
              <div style={{ marginBottom: '20px' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--ink-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '6px',
                  }}
                >
                  The Engineering Bottleneck:
                </h4>
                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    color: 'var(--ink-secondary)',
                    backgroundColor: 'var(--paper-subtle)',
                    padding: '12px 14px',
                    borderRadius: '4px',
                    borderLeft: '3px solid #EF4444',
                  }}
                >
                  {selectedProject.architecture.problem}
                </p>
              </div>

              {/* Solution / Architecture Decision */}
              <div style={{ marginBottom: '24px' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--ink-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '6px',
                  }}
                >
                  Architectural Solution & Design:
                </h4>
                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    color: 'var(--ink-secondary)',
                    backgroundColor: 'var(--paper-subtle)',
                    padding: '12px 14px',
                    borderRadius: '4px',
                    borderLeft: '3px solid var(--accent-green)',
                  }}
                >
                  {selectedProject.architecture.solution}
                </p>
              </div>

              {/* Technologies Applied */}
              <div style={{ marginBottom: '24px' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--ink-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '8px',
                  }}
                >
                  Stack Components:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {selectedProject.architecture.stack.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--retro-border-bold)',
                        padding: '4px 10px',
                        borderRadius: '3px',
                        fontWeight: 600,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Buttons */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '10px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--retro-border)',
                }}
              >
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.82rem', padding: '9px 16px' }}
                >
                  <GithubIcon size={14} /> View Code
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.82rem', padding: '9px 18px' }}
                >
                  Launch Demo <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .project-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-retro) !important;
        }
      `}</style>
    </section>
  );
}
