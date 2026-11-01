import React, { useState } from 'react';
import { ShieldCheck, Cpu, Database, Activity, CheckCircle2 } from 'lucide-react';
import { coreMetrics } from '../data/portfolioData';

export default function EngineeringSpotlight() {
  const [activeTab, setActiveTab] = useState('scalability');

  const tabData = {
    scalability: {
      tag: 'FULL-STACK WEB // CORE COMPETENCY',
      bigNumber: '100%',
      bigLabel: 'Commitment to Clean Code & Rapid Learning',
      stats: [
        { value: 'Full-Stack', label: 'Web Development', desc: 'React, Node.js & Express' },
        { value: '100+', label: 'Problem Solving', desc: 'DSA & Algorithms practice' },
        { value: '< 35ms', label: 'P95 API Latency', desc: 'Optimized REST queries' },
        { value: '2026', label: 'Internship Ready', desc: 'Available for fresher roles' },
      ],
      floatingBadgeTop: {
        code: 'CSE',
        title: 'Computer Science',
        subtitle: 'Algorithms & Core Fundamentals',
      },
      floatingBadgeBottom: {
        code: 'WEB',
        title: 'Full-Stack Ready',
        subtitle: 'Modern React & RESTful APIs',
      },
    },
    performance: {
      tag: 'FRONTEND CRAFT // WEB VITALS',
      bigNumber: '100/100',
      bigLabel: 'Lighthouse Performance & Mobile Optimization',
      stats: [
        { value: '0.4s', label: 'First Contentful Paint', desc: 'Fast client-side rendering' },
        { value: 'Git/Hub', label: 'Version Control', desc: '@PartialManiac3012' },
        { value: '60 FPS', label: 'Smooth Interactions', desc: 'Modern CSS & clean components' },
        { value: 'REST', label: 'API Architecture', desc: 'CRUD & JSON data endpoints' },
      ],
      floatingBadgeTop: {
        code: 'UI',
        title: 'Sub-second Loads',
        subtitle: 'Instant client navigation',
      },
      floatingBadgeBottom: {
        code: 'PERF',
        title: 'Zero Jank',
        subtitle: 'GPU-accelerated animations',
      },
    },
  };

  const current = tabData[activeTab];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto',
      }}
    >
      {/* Floating Badge Top-Right (inspired by WhatsApp CTAs tag in reference image) */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-16px',
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--retro-border-bold)',
          borderRadius: '6px',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: 'var(--shadow-retro-sm)',
          zIndex: 2,
          animation: 'floatSlow 4s ease-in-out infinite',
        }}
      >
        <div
          style={{
            backgroundColor: 'var(--paper-subtle)',
            border: '1px solid var(--retro-border)',
            padding: '4px 7px',
            borderRadius: '4px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            fontWeight: 700,
            color: 'var(--ink-primary)',
          }}
        >
          {current.floatingBadgeTop.code}
        </div>
        <div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--ink-primary)',
              lineHeight: 1.2,
            }}
          >
            {current.floatingBadgeTop.title}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              color: 'var(--ink-muted)',
            }}
          >
            {current.floatingBadgeTop.subtitle}
          </div>
        </div>
      </div>

      {/* Main Dark Obsidian Spotlight Card */}
      <div
        style={{
          backgroundColor: 'var(--dark-card-bg)',
          borderRadius: '12px',
          border: '1px solid var(--dark-card-border)',
          padding: '38px 34px 34px',
          color: 'var(--dark-card-text)',
          boxShadow: '0 24px 48px -12px rgba(12, 18, 29, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Watermark Arc in Card Background (as in reference image) */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(42, 91, 215, 0.12) 0%, rgba(12, 18, 29, 0) 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Tab Toggle Switchers */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--dark-card-border)',
            paddingBottom: '16px',
            marginBottom: '26px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.14em',
              color: 'var(--dark-card-muted)',
              fontWeight: 600,
            }}
          >
            {current.tag}
          </span>

          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              onClick={() => setActiveTab('scalability')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                padding: '4px 8px',
                borderRadius: '3px',
                border: activeTab === 'scalability' ? '1px solid #4B5E80' : '1px solid transparent',
                backgroundColor: activeTab === 'scalability' ? 'var(--dark-card-surface)' : 'transparent',
                color: activeTab === 'scalability' ? '#FFFFFF' : 'var(--dark-card-muted)',
                cursor: 'pointer',
              }}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                padding: '4px 8px',
                borderRadius: '3px',
                border: activeTab === 'performance' ? '1px solid #4B5E80' : '1px solid transparent',
                backgroundColor: activeTab === 'performance' ? 'var(--dark-card-surface)' : 'transparent',
                color: activeTab === 'performance' ? '#FFFFFF' : 'var(--dark-card-muted)',
                cursor: 'pointer',
              }}
            >
              Frontend
            </button>
          </div>
        </div>

        {/* Big Spotlight Headline Metric (matching 340% in reference image) */}
        <div style={{ marginBottom: '32px' }}>
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3.4rem, 6vw, 4.2rem)',
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              marginBottom: '8px',
            }}
          >
            {current.bigNumber}
          </div>
          <div
            style={{
              fontSize: '0.88rem',
              color: 'var(--dark-card-muted)',
              fontFamily: 'var(--font-sans)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <CheckCircle2 size={15} color="var(--accent-terra)" />
            <span>{current.bigLabel}</span>
          </div>
        </div>

        {/* 2x2 Grid Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px 20px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {current.stats.map((stat, idx) => (
            <div key={idx}>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.9rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--dark-card-muted)',
                  lineHeight: 1.3,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--dark-card-subtle)',
                  marginTop: '2px',
                }}
              >
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Quick Status Footer */}
        <div
          style={{
            marginTop: '28px',
            paddingTop: '16px',
            borderTop: '1px dashed rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--dark-card-muted)',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#22C55E',
                display: 'inline-block',
                boxShadow: '0 0 8px #22C55E',
              }}
            />
            All systems nominal
          </span>
          <span style={{ color: '#687790' }}>cluster: ap-south-1</span>
        </div>
      </div>

      {/* Floating Badge Bottom-Left (inspired by Mobile-first tag in reference image) */}
      <div
        style={{
          position: 'absolute',
          bottom: '-18px',
          left: '-16px',
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--retro-border-bold)',
          borderRadius: '6px',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: 'var(--shadow-retro-sm)',
          zIndex: 2,
        }}
      >
        <div
          style={{
            backgroundColor: 'var(--paper-subtle)',
            border: '1px solid var(--retro-border)',
            padding: '4px 7px',
            borderRadius: '4px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            fontWeight: 700,
            color: 'var(--ink-primary)',
          }}
        >
          {current.floatingBadgeBottom.code}
        </div>
        <div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--ink-primary)',
              lineHeight: 1.2,
            }}
          >
            {current.floatingBadgeBottom.title}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              color: 'var(--ink-muted)',
            }}
          >
            {current.floatingBadgeBottom.subtitle}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
}
