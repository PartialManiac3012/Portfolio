import React, { useState } from 'react';
import { Server, Layout, Database, Cpu, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Server,
  Layout,
  Database,
  Cpu,
};

export default function TechStack() {
  const [selectedCat, setSelectedCat] = useState(0);

  return (
    <section id="skills" className="section-padding" style={{ borderTop: '1px solid var(--retro-border)' }}>
      <div className="container">
        <div className="section-meta">TECHNICAL COMPETENCY</div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '20px',
            marginBottom: '46px',
          }}
        >
          <div>
            <h2 className="section-title">
              Engineered with <span style={{ fontStyle: 'italic', fontWeight: 400 }}>depth.</span>
            </h2>
            <p className="section-desc">
              Tools and technologies I've wielded in production environments under high load. Grounded in solid computer
              science fundamentals rather than fleeting framework trends.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div
            style={{
              backgroundColor: 'var(--paper-card)',
              border: '1px solid var(--retro-border-bold)',
              padding: '10px 18px',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--ink-primary)',
              boxShadow: 'var(--shadow-retro-sm)',
            }}
          >
            <span style={{ fontWeight: 700, color: 'var(--accent-terra)' }}>24+</span> Production Technologies
          </div>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            marginBottom: '32px',
          }}
        >
          {skillsData.categories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Server;
            const isSelected = selectedCat === index;
            return (
              <button
                key={category.title}
                onClick={() => setSelectedCat(index)}
                style={{
                  backgroundColor: isSelected ? 'var(--ink-primary)' : 'var(--paper-card)',
                  color: isSelected ? '#FFFFFF' : 'var(--ink-primary)',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--ink-primary)' : 'var(--retro-border)',
                  borderRadius: '4px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: isSelected ? 'var(--shadow-retro-sm)' : 'none',
                  transition: 'all 0.18s ease',
                }}
              >
                <IconComponent size={20} color={isSelected ? '#38BDF8' : 'var(--accent-terra)'} />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                  }}
                >
                  {category.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <div
          style={{
            backgroundColor: 'var(--paper-card)',
            border: '2px solid var(--retro-border-bold)',
            borderRadius: '6px',
            padding: '36px 32px',
            boxShadow: 'var(--shadow-retro-sm)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '28px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--retro-border-subtle)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                color: 'var(--ink-primary)',
              }}
            >
              {skillsData.categories[selectedCat].title}
            </h3>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--ink-muted)',
              }}
            >
              LAYER 0{selectedCat + 1} // VERIFIED IN PROD
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            {skillsData.categories[selectedCat].skills.map((skill) => (
              <div
                key={skill.name}
                style={{
                  backgroundColor: 'var(--paper-subtle)',
                  border: '1px solid var(--retro-border)',
                  borderRadius: '4px',
                  padding: '16px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--ink-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--retro-border)')}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.94rem',
                      fontWeight: 600,
                      color: 'var(--ink-primary)',
                      marginBottom: '4px',
                    }}
                  >
                    {skill.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--ink-muted)',
                    }}
                  >
                    Experience: {skill.exp}
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--retro-border)',
                    padding: '3px 8px',
                    borderRadius: '3px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: skill.level === 'Expert' ? 'var(--accent-terra)' : 'var(--ink-primary)',
                  }}
                >
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
