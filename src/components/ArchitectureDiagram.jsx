import React, { useState } from 'react';
import { ArrowRight, Server, Database, Globe, Cpu, ShieldCheck, Activity, Layers } from 'lucide-react';

export default function ArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState('gateway');

  const nodes = {
    client: {
      title: 'Client Layer // Edge',
      icon: Globe,
      tech: 'Next.js 15 SSR • React 19 • Cloudflare CDN',
      detail:
        'Static assets, prerendered HTML, and optimized bundles cached globally across 300+ PoPs with Brotli compression and HTTP/3.',
      benchmark: '< 80ms TTFB worldwide',
    },
    gateway: {
      title: 'Ingress & API Gateway',
      icon: ShieldCheck,
      tech: 'Envoy / NGINX • Rate Limiter • JWT Authenticator',
      detail:
        'Unified ingress handling SSL termination, distributed rate-limiting via Redis token buckets, request correlation IDs, and mTLS verification.',
      benchmark: 'Handles 50,000 req/sec with < 2ms overhead',
    },
    services: {
      title: 'Service Mesh & Core Logic',
      icon: Cpu,
      tech: 'Go Microservices • Node.js Fastify • gRPC & Protobuf',
      detail:
        'Decoupled domain services communicating via high-speed gRPC over HTTP/2. Auto-scaled horizontally across Kubernetes pods based on CPU/memory load.',
      benchmark: 'P99 RPC response time < 6ms',
    },
    eventbus: {
      title: 'Distributed Event Bus & Queue',
      icon: Activity,
      tech: 'Apache Kafka • Redis Streams • Dead Letter Queues',
      detail:
        'Asynchronous event-driven pipeline for non-blocking task processing, audit logging, webhook notifications, and eventual consistency sync.',
      benchmark: 'Zero event loss with at-least-once delivery',
    },
    data: {
      title: 'Persistence & Data Tier',
      icon: Database,
      tech: 'PostgreSQL Primary/Replica • Redis Cluster • ClickHouse',
      detail:
        'ACID-compliant relational transactions on Postgres with read-replicas, multi-tier in-memory caching with Redis, and columnar OLAP analytics on ClickHouse.',
      benchmark: '99.999% data durability & connection pooling',
    },
  };

  const selected = nodes[activeNode];

  return (
    <section id="architecture" className="section-padding" style={{ borderTop: '1px solid var(--retro-border)' }}>
      <div className="container">
        <div className="section-meta">SYSTEM DESIGN BLUEPRINT</div>
        <h2 className="section-title">
          How I architect for <span style={{ fontStyle: 'italic', fontWeight: 400 }}>high-concurrency.</span>
        </h2>
        <p className="section-desc" style={{ marginBottom: '42px' }}>
          An interactive blueprint of a modern full-stack production topology. Click any tier below to inspect its
          specifications, design choices, and latency benchmarks.
        </p>

        {/* Interactive Architecture Flow Ribbon */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            marginBottom: '28px',
          }}
        >
          {Object.entries(nodes).map(([key, item]) => {
            const Icon = item.icon;
            const isActive = activeNode === key;
            return (
              <button
                key={key}
                onClick={() => setActiveNode(key)}
                style={{
                  backgroundColor: isActive ? 'var(--ink-primary)' : 'var(--paper-card)',
                  color: isActive ? '#FFFFFF' : 'var(--ink-primary)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--ink-primary)' : 'var(--retro-border)',
                  borderRadius: '6px',
                  padding: '16px 14px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                  boxShadow: isActive ? 'var(--shadow-retro-sm)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Icon size={18} color={isActive ? '#38BDF8' : 'var(--accent-terra)'} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.08em',
                      opacity: isActive ? 0.9 : 0.7,
                      textTransform: 'uppercase',
                    }}
                  >
                    Tier {key === 'client' ? '01' : key === 'gateway' ? '02' : key === 'services' ? '03' : key === 'eventbus' ? '04' : '05'}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    lineHeight: 1.25,
                  }}
                >
                  {item.title.split('//')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Tier Deep-Dive Panel */}
        <div
          style={{
            backgroundColor: 'var(--paper-card)',
            border: '2px solid var(--retro-border-bold)',
            borderRadius: '8px',
            padding: '32px',
            boxShadow: 'var(--shadow-retro-sm)',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}
          className="arch-detail-grid"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  backgroundColor: 'var(--paper-subtle)',
                  border: '1px solid var(--retro-border)',
                  padding: '3px 8px',
                  borderRadius: '3px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--accent-terra)',
                }}
              >
                SELECTED TIER SPECIFICATION
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--ink-muted)',
                }}
              >
                {selected.tech}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.9rem',
                color: 'var(--ink-primary)',
              }}
            >
              {selected.title}
            </h3>

            <p
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.65,
                color: 'var(--ink-secondary)',
                maxWidth: '820px',
              }}
            >
              {selected.detail}
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--dark-card-bg)',
              color: 'var(--dark-card-text)',
              borderRadius: '6px',
              padding: '20px 24px',
              border: '1px solid var(--dark-card-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: '#38BDF8',
                letterSpacing: '0.1em',
                marginBottom: '6px',
                textTransform: 'uppercase',
              }}
            >
              ENGINEERING BENCHMARK / SLA
            </div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: 600,
                color: '#FFFFFF',
              }}
            >
              {selected.benchmark}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .arch-detail-grid {
            grid-template-columns: 1.6fr 1fr !important;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
