import React, { useState, useEffect } from 'react';
import { Mail, Copy, Check, Send, Clock, MapPin, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Full-Time Role',
    message: '',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in IST
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ borderTop: '1px solid var(--retro-border)' }}>
      <div className="container">
        <div className="section-meta">TRANSMISSION // REACH OUT</div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '54px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Typography, Email Copy, Location Clock */}
          <div>
            <h2 className="section-title">
              Let's engineer something <span style={{ fontStyle: 'italic', fontWeight: 400 }}>durable.</span>
            </h2>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Whether you are hiring for a senior full-stack position, scaling a mission-critical backend service, or
              need architectural consultation — my inbox is open.
            </p>

            {/* Direct Copyable Email Box */}
            <div
              style={{
                backgroundColor: 'var(--paper-card)',
                border: '2px solid var(--retro-border-bold)',
                borderRadius: '6px',
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                marginBottom: '28px',
                boxShadow: 'var(--shadow-retro-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={20} color="var(--accent-terra)" />
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--ink-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Direct Email
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.96rem',
                      fontWeight: 600,
                      color: 'var(--ink-primary)',
                    }}
                  >
                    {personalInfo.email}
                  </span>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="btn-secondary"
                style={{ padding: '8px 14px', fontSize: '0.78rem' }}
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={14} color="var(--accent-green)" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Real-time Location & Clock Card */}
            <div
              style={{
                backgroundColor: 'var(--paper-subtle)',
                border: '1px solid var(--retro-border)',
                borderRadius: '6px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '32px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="var(--ink-muted)" />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--ink-primary)',
                  }}
                >
                  {personalInfo.location}
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: 'var(--ink-secondary)',
                }}
              >
                <Clock size={14} color="var(--accent-terra)" />
                <span>{currentTime || 'Loading...'} IST</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--ink-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                }}
              >
                PUBLIC KEYS & CODE CHANNELS:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                  style={{ fontSize: '0.82rem', padding: '8px 14px' }}
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                  style={{ fontSize: '0.82rem', padding: '8px 14px' }}
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                  style={{ fontSize: '0.82rem', padding: '8px 14px' }}
                >
                  <MessageSquare size={15} color="#25D366" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                  style={{ fontSize: '0.82rem', padding: '8px 14px' }}
                >
                  <TwitterIcon size={15} />
                  <span>X / Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Retro Interactive Transmission Form */}
          <div
            style={{
              backgroundColor: 'var(--paper-card)',
              border: '2px solid var(--retro-border-bold)',
              borderRadius: '8px',
              padding: '36px',
              boxShadow: 'var(--shadow-retro)',
            }}
          >
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(27, 122, 88, 0.1)',
                    border: '1px solid var(--accent-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 18px',
                  }}
                >
                  <Check size={26} color="var(--accent-green)" />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    color: 'var(--ink-primary)',
                    marginBottom: '8px',
                  }}
                >
                  Transmission Received.
                </h3>
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--ink-secondary)',
                    lineHeight: 1.6,
                    maxWidth: '420px',
                    margin: '0 auto 24px',
                  }}
                >
                  Thank you, <strong>{formData.name}</strong>. Your message has been logged. I typically respond within
                  12-24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', topic: 'Full-Time Role', message: '' });
                  }}
                  className="btn-secondary"
                  style={{ fontSize: '0.82rem' }}
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid var(--retro-border-subtle)',
                    paddingBottom: '12px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: 'var(--ink-primary)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    INQUIRY DISPATCH FORM
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--ink-muted)',
                    }}
                  >
                    TLS 1.3 ENCRYPTED
                  </span>
                </div>

                {/* Name */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: 'var(--ink-primary)',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Your Name / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Lin / Tech Lead at Acme"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      backgroundColor: 'var(--paper-subtle)',
                      border: '1px solid var(--retro-border)',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.92rem',
                      color: 'var(--ink-primary)',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--ink-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--retro-border)')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: 'var(--ink-primary)',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      backgroundColor: 'var(--paper-subtle)',
                      border: '1px solid var(--retro-border)',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.92rem',
                      color: 'var(--ink-primary)',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--ink-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--retro-border)')}
                  />
                </div>

                {/* Scope / Topic Pills */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: 'var(--ink-primary)',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Primary Focus
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['Full-Time Role', 'Contract / Systems', 'Arch Review', 'Other'].map((topic) => (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => setFormData({ ...formData, topic })}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          padding: '6px 12px',
                          borderRadius: '3px',
                          border: '1px solid',
                          borderColor: formData.topic === topic ? 'var(--ink-primary)' : 'var(--retro-border)',
                          backgroundColor: formData.topic === topic ? 'var(--ink-primary)' : 'var(--paper-subtle)',
                          color: formData.topic === topic ? '#FFFFFF' : 'var(--ink-secondary)',
                          cursor: 'pointer',
                        }}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: 'var(--ink-primary)',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Message / Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your product, team, timeline, or engineering challenge..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      backgroundColor: 'var(--paper-subtle)',
                      border: '1px solid var(--retro-border)',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.92rem',
                      color: 'var(--ink-primary)',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--ink-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--retro-border)')}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '0.94rem',
                  }}
                >
                  <span>Dispatch Transmission</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 920px) {
          .contact-grid {
            grid-template-columns: 1.1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
