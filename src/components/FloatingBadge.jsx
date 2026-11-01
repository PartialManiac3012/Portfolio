import React from 'react';
import { Terminal, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function FloatingBadge({ onOpenTerminal }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      {/* Terminal Quick Button */}
      <button
        onClick={onOpenTerminal}
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--retro-border-bold)',
          borderRadius: '4px',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          fontWeight: 600,
          color: 'var(--ink-primary)',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-retro-sm)',
          transition: 'all 0.18s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translate(-1px, -1px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-retro)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translate(0, 0)';
          e.currentTarget.style.boxShadow = 'var(--shadow-retro-sm)';
        }}
        title="Open Developer Terminal (Ctrl/Cmd + ~)"
      >
        <Terminal size={14} color="var(--accent-terra)" />
        <span>Terminal</span>
      </button>

      {/* WhatsApp / Direct Chat floating button (matching reference image) */}
      <a
        href={personalInfo.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--retro-border-bold)',
          borderRadius: '4px',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.84rem',
          fontWeight: 600,
          color: 'var(--ink-primary)',
          textDecoration: 'none',
          boxShadow: 'var(--shadow-retro-sm)',
          transition: 'all 0.18s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translate(-1px, -1px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-retro)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translate(0, 0)';
          e.currentTarget.style.boxShadow = 'var(--shadow-retro-sm)';
        }}
      >
        <MessageSquare size={14} color="#25D366" />
        <span>WhatsApp Me</span>
      </a>
    </div>
  );
}
