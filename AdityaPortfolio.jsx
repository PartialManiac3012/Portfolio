const { useState,useEffect,useRef } = React;

const ME = {
  name: "Aditya Kumar",
  city: "Patna, Bihar",
  phone: "+91-9508931272",
  wa: "919508931272",
  email: "kumar.aditya30122006@gmail.com",
  instagram: "@aditya.builds",
  linkedin: "linkedin.com/in/www.linkedin.com/in/aditya-kumar-7ba03433a",
  calendly: "https://calendly.com/scalper69420/30min",
  upi: "9508931272@ptsbi",
};

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
:root{
  --ink:#0e1623;--ink2:#1c2b3a;--mid:#4a5568;--muted:#8896a5;
  --border:#dde3ea;--bg:#f4f6f9;--white:#fff;
  --accent:#1a3a6e;--accent2:#2952a3;--gold:#8b6914;--gold2:#b8900c;
  --wa:#25D366;--red:#b91c1c;
}
body{font-family:'IBM Plex Sans',sans-serif;background:var(--white);color:var(--ink);overflow-x:hidden;-webkit-font-smoothing:antialiased}

@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.marquee-track{display:flex;animation:marquee 30s linear infinite;width:max-content}
.marquee-track:hover{animation-play-state:paused}

.nav{position:fixed;top:0;left:0;right:0;z-index:500;display:flex;align-items:center;justify-content:space-between;padding:0 5%;height:64px;background:rgba(255,255,255,.96);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
.nav-logo{font-family:'Cormorant Garamond',serif;font-size:1.35rem;font-weight:700;color:var(--ink);letter-spacing:.01em}
.nav-logo span{color:var(--accent);font-style:italic}
.nav-mid{display:flex;gap:32px}
.nav-mid a{color:var(--muted);font-size:.82rem;font-weight:500;text-decoration:none;transition:color .2s;letter-spacing:.02em;text-transform:uppercase}
.nav-mid a:hover{color:var(--ink)}
.nav-right{display:flex;gap:10px;align-items:center}
.nav-book{background:var(--ink);color:#fff;padding:9px 18px;border-radius:4px;font-size:.8rem;font-weight:600;text-decoration:none;border:none;cursor:pointer;font-family:'IBM Plex Sans',sans-serif;transition:opacity .2s;letter-spacing:.02em}
.nav-book:hover{opacity:.85}

.ticker{display:none}
.ticker-item{display:none}
.ticker-sep{display:none}

.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:120px 5% 80px;background:var(--white);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,rgba(0,0,0,.045) 1px,transparent 1px);background-size:32px 32px;pointer-events:none;z-index:0}
.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:80px;align-items:center;max-width:1280px;margin:0 auto;width:100%;position:relative;z-index:1}

.avail-pill{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--border);background:var(--bg);color:var(--mid);font-size:.75rem;font-weight:600;padding:6px 14px;border-radius:2px;margin-bottom:28px;letter-spacing:.04em;font-family:'IBM Plex Sans',sans-serif}
.avail-pulse{width:6px;height:6px;border-radius:50%;background:var(--accent)}

.hero h1{font-family:'Cormorant Garamond',serif;font-size:clamp(3rem,5.5vw,5.8rem);font-weight:700;line-height:.98;letter-spacing:-.02em;color:var(--ink);margin-bottom:14px}
.hero h1 .outline{-webkit-text-stroke:2px var(--ink);color:transparent;font-weight:600}
.hero-hindi{font-size:.9rem;color:var(--muted);font-style:italic;margin-bottom:24px;padding-left:2px;font-family:'Cormorant Garamond',serif;letter-spacing:.02em}
.hero-sub{font-size:1.02rem;color:var(--mid);line-height:1.8;max-width:480px;margin-bottom:40px}
.hero-sub strong{color:var(--ink);font-weight:600}

.hero-ctas{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:48px}
.btn-wa-main{background:transparent;color:var(--ink);padding:14px 26px;border-radius:4px;font-weight:600;font-size:.9rem;text-decoration:none;display:inline-flex;align-items:center;gap:8px;border:2px solid var(--ink);transition:all .2s;font-family:'IBM Plex Sans',sans-serif;cursor:pointer;letter-spacing:.02em}
.btn-wa-main:hover{background:var(--ink);color:var(--white)}
.btn-call{background:var(--ink);color:#fff;padding:14px 26px;border-radius:4px;font-weight:600;font-size:.9rem;text-decoration:none;display:inline-flex;align-items:center;gap:8px;border:2px solid var(--ink);transition:all .2s;font-family:'IBM Plex Sans',sans-serif;cursor:pointer;letter-spacing:.02em}
.btn-call:hover{background:transparent;color:var(--ink)}
.btn-audit{background:transparent;color:var(--ink);padding:14px 26px;border-radius:4px;font-weight:600;font-size:.9rem;text-decoration:none;display:inline-flex;align-items:center;gap:8px;border:2px solid var(--border);transition:border-color .2s;font-family:'IBM Plex Sans',sans-serif;cursor:pointer;letter-spacing:.02em}
.btn-audit:hover{border-color:var(--ink)}

.hero-micro{display:flex;gap:24px;flex-wrap:wrap}
.hm{display:flex;align-items:center;gap:7px;font-size:.8rem;color:var(--muted)}
.hm strong{color:var(--ink);font-weight:600}

.hero-right{position:relative}
.hcard-main{background:var(--ink);border-radius:4px;padding:36px;position:relative;overflow:hidden}
.hcard-main::before{content:'';position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:50%;background:rgba(255,255,255,.03)}
.hcard-tag{font-size:.68rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:20px;font-family:'IBM Plex Sans',sans-serif}
.hcard-val{font-family:'Cormorant Garamond',serif;font-size:3.5rem;font-weight:700;color:#fff;line-height:1;letter-spacing:-.02em}
.hcard-lbl{color:rgba(255,255,255,.45);font-size:.82rem;margin-top:6px}
.hcard-div{height:1px;background:rgba(255,255,255,.07);margin:24px 0}
.hcard-mini-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.hcard-mini .mv{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:700;color:#fff}
.hcard-mini .ml{color:rgba(255,255,255,.35);font-size:.72rem;margin-top:3px}
.hfloat{position:absolute;background:var(--white);border:1px solid var(--border);border-radius:4px;padding:12px 16px;box-shadow:0 4px 16px rgba(0,0,0,.08);display:flex;align-items:center;gap:10px;font-size:.78rem;font-weight:600;color:var(--ink)}
.hfloat.f1{bottom:-20px;left:-24px}
.hfloat.f2{top:-20px;right:-16px}
.hfloat .fi{font-size:1.1rem}
.fi-label{font-size:.6rem;font-weight:700;letter-spacing:.08em;color:var(--mid);font-family:'IBM Plex Sans',sans-serif;background:var(--bg);border:1px solid var(--border);border-radius:3px;padding:3px 6px;flex-shrink:0}
.hfloat .fs{color:var(--muted);font-weight:400;font-size:.68rem;margin-top:1px}

.trust-bar{background:var(--ink);padding:24px 0;overflow:hidden;border-top:1px solid #1f1f1f}
.trust-bar-label{color:rgba(255,255,255,.25);font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:0 5%;margin-bottom:14px;font-family:'IBM Plex Sans',sans-serif}
.trust-logo-item{display:flex;align-items:center;gap:10px;flex-shrink:0;padding:0 28px}
.trust-logo-name{font-family:'Cormorant Garamond',serif;font-size:.85rem;font-weight:700;color:rgba(255,255,255,.2);white-space:nowrap}
.trust-logo-type{font-size:.65rem;color:rgba(255,255,255,.12);font-weight:500}
.trust-sep{color:rgba(255,255,255,.07);font-size:1rem;flex-shrink:0}

.india-strip{display:none}
.india-strip-inner{display:none}
.istrip-item{display:none}

.stats-row{display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid var(--border);background:var(--bg)}
.stat-col{padding:36px 28px;text-align:center;border-right:1px solid var(--border)}
.stat-col:last-child{border-right:none}
.stat-n{font-family:'Cormorant Garamond',serif;font-size:2.4rem;font-weight:800;color:var(--ink);letter-spacing:-.04em;line-height:1}
.stat-d{font-size:.8rem;color:var(--muted);margin-top:8px;font-weight:500;line-height:1.5}
.stat-d em{color:var(--accent);font-style:normal;font-weight:600}

section{padding:96px 5%}
.si{max-width:1200px;margin:0 auto}
.stag{display:inline-flex;align-items:center;gap:6px;font-size:.68rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);border:1px solid var(--border);padding:5px 12px;border-radius:2px;margin-bottom:20px;font-family:'IBM Plex Sans',sans-serif}
.stitle{font-family:'Cormorant Garamond',serif;font-size:clamp(2.2rem,3.8vw,3.4rem);font-weight:700;letter-spacing:-.01em;color:var(--ink);line-height:1.05;margin-bottom:16px}
.stitle .green{color:var(--accent);font-style:italic}
.stitle .outline{-webkit-text-stroke:2px var(--ink);color:transparent;font-weight:600}
.ssub{color:var(--mid);font-size:.97rem;line-height:1.8;max-width:520px}

.srv-bg{background:var(--white);border-top:1px solid var(--border)}
.srv-header{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:24px;margin-bottom:56px}
.srv-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2px;background:var(--border);border:1px solid var(--border);border-radius:4px;overflow:hidden}
.srv-card{background:var(--white);padding:44px 40px;position:relative;overflow:hidden;transition:background .25s}
.srv-card:hover{background:var(--bg)}
.srv-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--accent),var(--gold2));transform:scaleX(0);transform-origin:left;transition:transform .3s}
.srv-card:hover::after{transform:scaleX(1)}
.srv-num{font-family:'IBM Plex Sans',sans-serif;font-size:.68rem;font-weight:700;color:var(--border);letter-spacing:.1em;margin-bottom:24px;text-transform:uppercase}
.srv-emoji{font-size:2rem;margin-bottom:14px}
.srv-card h3{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:700;color:var(--ink);margin-bottom:6px;letter-spacing:-.01em}
.srv-hindi{color:var(--muted);font-size:.8rem;font-weight:500;margin-bottom:12px;letter-spacing:.01em}
.srv-card p{color:var(--mid);font-size:.87rem;line-height:1.78;margin-bottom:20px}
.srv-list{display:flex;flex-direction:column;gap:7px}
.srv-li{display:flex;align-items:center;gap:8px;font-size:.8rem;color:var(--mid);font-weight:500}
.srv-li::before{content:'✓';color:var(--accent);font-weight:700;font-size:.75rem}
.srv-price{position:absolute;top:44px;right:40px;font-family:'IBM Plex Sans',sans-serif;font-size:.85rem;font-weight:700;color:var(--accent);letter-spacing:.01em}
.srv-emi{font-size:.65rem;color:var(--muted);font-weight:400;margin-top:2px;text-align:right}

.why-bg{background:var(--bg);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.why-header{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-bottom:56px}
.why-quote{background:var(--ink);border-radius:4px;padding:36px;font-family:'Cormorant Garamond',serif;font-size:1.35rem;font-weight:600;color:#fff;line-height:1.5;letter-spacing:-.005em;position:relative}
.why-quote::before{content:'"';font-size:4rem;color:rgba(255,255,255,.07);position:absolute;top:12px;left:24px;font-family:'Cormorant Garamond',serif}
.why-quote .attr{font-family:'IBM Plex Sans',sans-serif;font-size:.73rem;color:rgba(255,255,255,.35);font-weight:400;margin-top:16px;font-style:italic}
.why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:2px;background:var(--border);border:1px solid var(--border);border-radius:4px;overflow:hidden}
.why-card{background:var(--white);padding:36px 28px;transition:background .2s}
.why-card:hover{background:var(--ink)}
.why-card:hover h3{color:#fff}
.why-card:hover .why-hindi,.why-card:hover p{color:rgba(255,255,255,.45)}
.why-card:hover .why-hindi{color:rgba(184,144,12,.8)}
.why-icon{font-size:1.5rem;margin-bottom:18px}
.why-card h3{font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:700;color:var(--ink);margin-bottom:6px;letter-spacing:-.005em;transition:color .2s}
.why-hindi{color:var(--accent);font-size:.78rem;font-style:italic;font-weight:500;margin-bottom:10px;transition:color .2s;font-family:'Cormorant Garamond',serif;letter-spacing:.02em}
.why-card p{color:var(--muted);font-size:.84rem;line-height:1.72;transition:color .2s}

.case-bg{background:var(--ink)}
.case-bg .stag{border-color:rgba(255,255,255,.1);color:rgba(255,255,255,.3)}
.cases{display:flex;flex-direction:column;gap:2px;margin-top:56px;border-radius:4px;overflow:hidden;border:1px solid rgba(255,255,255,.05)}
.case-card{background:rgba(255,255,255,.03);padding:52px;display:grid;grid-template-columns:1.1fr 1fr .9fr;gap:52px;align-items:start;border-bottom:1px solid rgba(255,255,255,.05);transition:background .2s}
.case-card:last-child{border-bottom:none}
.case-card:hover{background:rgba(255,255,255,.055)}
.case-idx{font-family:'Cormorant Garamond',serif;font-size:5rem;font-weight:700;color:rgba(255,255,255,.05);line-height:1;margin-bottom:16px;letter-spacing:-.02em}
.case-pill{display:inline-block;background:rgba(255,255,255,.07);color:rgba(255,255,255,.4);font-size:.68rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:4px 10px;border-radius:2px;margin-bottom:14px;font-family:'IBM Plex Sans',sans-serif}
.case-card h3{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:700;color:#fff;margin-bottom:12px;letter-spacing:-.01em;line-height:1.25}
.case-card p{color:rgba(255,255,255,.4);font-size:.85rem;line-height:1.75}
.case-section-label{font-size:.65rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.22);margin-bottom:10px;font-family:'IBM Plex Sans',sans-serif}
.case-text{color:rgba(255,255,255,.55);font-size:.85rem;line-height:1.75}
.result-box{background:rgba(26,58,110,.2);border:1px solid rgba(41,82,163,.3);border-radius:4px;padding:28px}
.result-n{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:700;color:#93c5fd;line-height:1;letter-spacing:-.02em;margin-bottom:8px}
.result-l{color:rgba(255,255,255,.45);font-size:.82rem;line-height:1.65}
.result-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}
.rtag{background:rgba(255,255,255,.06);color:rgba(255,255,255,.35);font-size:.63rem;font-weight:600;padding:3px 8px;border-radius:2px;letter-spacing:.06em;font-family:'IBM Plex Sans',sans-serif}

.testi-bg{background:var(--bg);border-top:1px solid var(--border)}
.testi-header{display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:20px;margin-bottom:56px}
.tr-big{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:700;color:var(--ink);letter-spacing:-.02em}
.tr-stars{color:#f59e0b;font-size:1.1rem;letter-spacing:2px}
.tr-count{font-size:.76rem;color:var(--muted);margin-top:3px}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.tcard{background:var(--white);border:1px solid var(--border);border-radius:4px;padding:30px;transition:box-shadow .2s,transform .2s;position:relative;overflow:hidden}
.tcard:hover{box-shadow:0 16px 48px rgba(14,22,35,.06);transform:translateY(-3px)}
.tcard::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--gold2))}
.tcard-stars{color:#f59e0b;font-size:.8rem;margin-bottom:14px;letter-spacing:2px}
.tcard-text{color:var(--ink2);font-size:.9rem;line-height:1.78;margin-bottom:12px}
.tcard-hindi{color:var(--accent);font-size:.8rem;font-style:normal;font-weight:600;border-left:2px solid var(--accent);padding-left:10px;margin-bottom:20px;line-height:1.5;letter-spacing:.01em;font-family:'IBM Plex Sans',sans-serif}
.tcard-foot{display:flex;align-items:center;gap:12px}
.tcard-av{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:.82rem;flex-shrink:0;font-family:'IBM Plex Sans',sans-serif}
.tcard-name{font-family:'IBM Plex Sans',sans-serif;font-weight:700;font-size:.85rem;color:var(--ink)}
.tcard-biz{font-size:.72rem;color:var(--muted);margin-top:2px}
.tcard-verified{display:flex;align-items:center;gap:4px;color:var(--accent);font-size:.66rem;font-weight:600;margin-top:3px;text-transform:uppercase;letter-spacing:.05em}

.proc-bg{background:var(--white);border-top:1px solid var(--border)}
.proc-header{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-bottom:60px}
.proc-promise{background:var(--bg);border:1px solid var(--border);border-radius:4px;padding:32px}
.proc-promise h4{font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:700;color:var(--ink);margin-bottom:16px;letter-spacing:-.01em}
.pp-list{display:flex;flex-direction:column;gap:10px}
.pp-item{display:flex;align-items:flex-start;gap:10px;font-size:.84rem;color:var(--mid);line-height:1.5}
.pp-item::before{content:'→';color:var(--accent);font-weight:700;margin-top:1px;flex-shrink:0}
.proc-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;position:relative}
.proc-steps::before{content:'';position:absolute;top:14px;left:calc(16.6% + 14px);right:calc(16.6% + 14px);height:1px;background:var(--border);z-index:0}
.proc-step{position:relative;z-index:1}
.proc-dot{width:28px;height:28px;border-radius:50%;background:var(--ink);display:flex;align-items:center;justify-content:center;margin-bottom:24px}
.proc-dot span{font-size:.7rem;font-weight:700;color:#fff;font-family:'IBM Plex Sans',sans-serif}
.proc-step h3{font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:700;color:var(--ink);margin-bottom:6px;letter-spacing:-.01em}
.proc-hindi{color:var(--accent);font-size:.78rem;font-style:italic;font-weight:500;margin-bottom:10px;font-family:'Cormorant Garamond',serif;letter-spacing:.02em}
.proc-step p{color:var(--muted);font-size:.84rem;line-height:1.72}
.proc-badge{display:inline-block;margin-top:12px;font-size:.68rem;font-weight:600;color:var(--muted);border:1px solid var(--border);padding:3px 10px;border-radius:2px;letter-spacing:.04em;text-transform:uppercase;font-family:'IBM Plex Sans',sans-serif}

.guarantee-bg{background:var(--bg);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.guarantee-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
.guarantee-visual{background:var(--white);border:2px solid var(--border);border-radius:4px;padding:40px;text-align:center}
.gv-seal{width:110px;height:110px;border-radius:50%;background:var(--ink);margin:0 auto 24px;display:flex;align-items:center;justify-content:center;font-size:2.8rem;border:3px solid var(--gold2);box-shadow:0 0 0 6px rgba(212,160,23,.12)}
.gv-title{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:800;color:var(--ink);margin-bottom:8px;letter-spacing:-.02em}
.gv-sub{color:var(--muted);font-size:.84rem;line-height:1.65;margin-bottom:24px}
.gv-points{display:flex;flex-direction:column;gap:10px;text-align:left}
.gvp{display:flex;align-items:flex-start;gap:10px;font-size:.84rem;color:var(--mid);line-height:1.5}
.gvp-icon{color:var(--accent);flex-shrink:0;margin-top:1px}
.guarantee-content .ssub{margin-bottom:28px}
.g-list{display:flex;flex-direction:column;gap:16px}
.g-item{display:flex;gap:16px;align-items:flex-start}
.g-icon{width:40px;height:40px;border-radius:4px;background:var(--white);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0}
.g-item h4{font-family:'Cormorant Garamond',serif;font-size:.9rem;font-weight:800;color:var(--ink);margin-bottom:4px}
.g-item p{font-size:.82rem;color:var(--muted);line-height:1.6}

.offer-bg{background:var(--ink)}
.offer-bg .stag{border-color:rgba(255,255,255,.1);color:rgba(255,255,255,.3)}
.offer-inner{max-width:780px;margin:0 auto;text-align:center}
.offer-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:4px;padding:48px;margin-bottom:24px;position:relative;overflow:hidden}
.offer-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--gold2),var(--accent))}
.offer-checklist{display:flex;flex-direction:column;gap:13px;text-align:left;margin-bottom:36px}
.oc-item{display:flex;align-items:flex-start;gap:12px;font-size:.88rem;color:rgba(255,255,255,.6);line-height:1.5}
.oc-check{color:#4ade80;font-weight:700;font-size:.82rem;flex-shrink:0;margin-top:2px}
.offer-value-row{display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:32px}
.offer-orig{font-family:'Cormorant Garamond',serif;font-size:1rem;color:rgba(255,255,255,.22);text-decoration:line-through}
.offer-free-tag{font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:800;color:#4ade80;letter-spacing:-.03em}
.offer-ctas{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.offer-note{color:rgba(255,255,255,.22);font-size:.76rem;margin-top:18px}
.offer-note strong{color:rgba(255,255,255,.45)}

.contact-bg{background:var(--white);border-top:1px solid var(--border)}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-top:56px}
.contact-left .big{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,3vw,2.7rem);font-weight:800;letter-spacing:-.035em;color:var(--ink);line-height:1.05;margin-bottom:12px}
.contact-left .big .green{color:var(--accent)}
.contact-left .sub{color:var(--mid);font-size:.95rem;line-height:1.75;margin-bottom:32px}
.contact-methods{display:flex;flex-direction:column;gap:12px}
.cm-link{display:flex;align-items:center;gap:16px;padding:16px 18px;border-radius:4px;border:1.5px solid var(--border);background:var(--bg);text-decoration:none;transition:border-color .2s,box-shadow .2s,background .2s}
.cm-link:hover{border-color:var(--ink);box-shadow:0 4px 20px rgba(0,0,0,.06);background:var(--white)}
.cm-icon-box{width:42px;height:42px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700;letter-spacing:.06em;flex-shrink:0;background:var(--bg);border:1px solid var(--border);color:var(--mid);font-family:'IBM Plex Sans',sans-serif}
.cm-text .l1{font-family:'Cormorant Garamond',serif;font-weight:700;color:var(--ink);font-size:.88rem}
.cm-text .l2{color:var(--muted);font-size:.75rem;margin-top:2px}
.cm-arr{margin-left:auto;color:var(--muted)}
.upi-note{display:flex;align-items:center;gap:10px;margin-top:18px;background:rgba(26,58,110,.06);border:1px solid rgba(26,58,110,.15);border-radius:4px;padding:13px 16px}
.upi-note p{font-size:.78rem;color:var(--accent);font-weight:600}

.cform{background:var(--bg);border:1px solid var(--border);border-radius:4px;padding:40px}
.cform-title{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:800;color:var(--ink);margin-bottom:6px;letter-spacing:-.02em}
.cform-sub{color:var(--muted);font-size:.84rem;margin-bottom:26px;line-height:1.5}
.cf-field{margin-bottom:14px}
.cf-field label{display:block;font-size:.72rem;font-weight:700;color:var(--ink);margin-bottom:6px;letter-spacing:.05em;text-transform:uppercase}
.cf-field input,.cf-field select,.cf-field textarea{width:100%;border:1.5px solid var(--border);border-radius:4px;padding:12px 14px;font-family:'IBM Plex Sans',sans-serif;font-size:.9rem;color:var(--ink);outline:none;transition:border-color .2s;background:var(--white)}
.cf-field input:focus,.cf-field select:focus,.cf-field textarea:focus{border-color:var(--ink)}
.cf-field textarea{resize:vertical;min-height:78px}
.cf-submit{width:100%;background:var(--ink);color:#fff;border:none;padding:15px;border-radius:4px;font-weight:700;font-size:.98rem;cursor:pointer;font-family:'Cormorant Garamond',serif;letter-spacing:-.01em;transition:opacity .2s}
.cf-submit:hover{opacity:.85}
.cf-note{color:var(--muted);font-size:.72rem;text-align:center;margin-top:10px}
.cf-success{padding:32px 0;text-align:center}
.cf-success .tick{font-size:2.5rem;margin-bottom:12px}
.cf-success h4{font-family:'Cormorant Garamond',serif;font-size:1.15rem;font-weight:800;color:var(--ink);margin-bottom:8px}
.cf-success p{color:var(--muted);font-size:.88rem;line-height:1.6}

footer{background:var(--ink);padding:48px 5% 32px}
.footer-top{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:48px;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.07);margin-bottom:32px}
.footer-logo{font-family:'Cormorant Garamond',serif;font-size:1.15rem;font-weight:800;color:#fff;margin-bottom:10px}
.footer-logo span{color:var(--gold2)}
.footer-tagline{color:rgba(255,255,255,.3);font-size:.8rem;line-height:1.65;max-width:220px}
.footer-col h5{font-family:'Cormorant Garamond',serif;font-size:.68rem;font-weight:700;color:rgba(255,255,255,.25);letter-spacing:.1em;text-transform:uppercase;margin-bottom:16px}
.footer-col a{display:block;color:rgba(255,255,255,.4);font-size:.83rem;text-decoration:none;margin-bottom:10px;transition:color .2s}
.footer-col a:hover{color:rgba(255,255,255,.8)}
.footer-bottom{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
.footer-bottom p{color:rgba(255,255,255,.22);font-size:.76rem}
.footer-bottom a{color:rgba(255,255,255,.3);text-decoration:none;font-size:.76rem}

.fwa-wrap{position:fixed;bottom:28px;right:28px;z-index:999}
.fwa{
  display:inline-flex;align-items:center;gap:8px;
  background:var(--white);color:var(--ink);
  border:1.5px solid var(--border);border-radius:4px;
  padding:10px 18px;font-size:.82rem;font-weight:600;
  text-decoration:none;font-family:'IBM Plex Sans',sans-serif;
  box-shadow:0 2px 12px rgba(0,0,0,.1);
  transition:border-color .2s,box-shadow .2s;
  letter-spacing:.02em;
}
.fwa:hover{border-color:var(--ink);box-shadow:0 4px 20px rgba(0,0,0,.12)}

@media(max-width:1024px){
  .hero-grid{grid-template-columns:1fr}
  .hero-right{display:none}
  .why-header{grid-template-columns:1fr}
  .proc-header{grid-template-columns:1fr}
  .guarantee-grid{grid-template-columns:1fr}
  .contact-grid{grid-template-columns:1fr}
  .case-card{grid-template-columns:1fr;gap:28px;padding:36px}
  .footer-top{grid-template-columns:1fr 1fr}
  .stats-row{grid-template-columns:repeat(2,1fr)}
  .stat-col:nth-child(2){border-right:none}
  .stat-col:nth-child(3){border-top:1px solid var(--border)}
}
@media(max-width:768px){
  section{padding:64px 4%}
  .nav-mid{display:none}
  .hero h1{font-size:2.6rem}
  .hero-ctas{flex-direction:column}
  .hero-ctas>*{justify-content:center;text-align:center}
  .srv-grid{grid-template-columns:1fr}
  .proc-steps{grid-template-columns:1fr;gap:32px}
  .proc-steps::before{display:none}
  .testi-grid{grid-template-columns:1fr}
  .stats-row{grid-template-columns:1fr}
  .stat-col{border-right:none;border-bottom:1px solid var(--border)}
  .india-strip-inner{gap:16px}
  .footer-top{grid-template-columns:1fr;gap:32px}
}
`;

const SERVICES = [
  {n:"01",emoji:"🏢",title:"Business Websites",sub:"For clinics, coaches, agencies & local businesses",desc:"Your website should be working for you at 2am when you're asleep. I build sites that convert visitors into paying clients — not just people who browse and leave.",list:["Mobile-first design (80%+ India traffic is phone)","WhatsApp + Call CTA on every page","Google-ready SEO setup included","Lead capture that actually works"],price:"₹20,000+",emi:"PayPal & UPI accepted"},
  {n:"02",emoji:"🛒",title:"E-Commerce Stores",sub:"Shopify & WooCommerce, built to sell",desc:"Selling products online? Your store needs to feel trustworthy the moment someone lands on it. I build fast, clean stores with PayPal and UPI integration — and checkouts that don't lose people.",list:["PayPal + UPI + COD payment setup","Fast 2-step mobile checkout","Trust badges, reviews, return policy","Inventory & order management"],price:"₹35,000+",emi:"PayPal & UPI integrated"},
  {n:"03",emoji:"📄",title:"Landing Pages",sub:"One page, one goal — built to convert",desc:"Running a Google or Meta ad? You need a landing page that converts, not a homepage. One focused page that turns clicks into calls, leads, or sales — with speed built in.",list:["Conversion-focused copy included","Loads in under 2 seconds","WhatsApp / Calendly CTA integration","Analytics + Pixel setup"],price:"₹12,000+",emi:"Delivered in 5–7 days"},
  {n:"04",emoji:"🔁",title:"Website Redesigns",sub:"When your current site is costing you clients",desc:"An outdated website turns away real business every single day. I audit what's broken, find where you're losing leads, and rebuild it from scratch with a clear goal in mind.",list:["Full conversion audit before starting","Speed & mobile performance fixes","Copy restructure included","30-day support post-launch"],price:"₹18,000+",emi:"Includes free audit worth ₹3,000"},
];

const CASES = [
  {n:"01",tag:"Dental Clinic · Patna",title:"Took a dead clinic website to 340% more appointment calls",prob:"Dr. Sharma was spending ₹8,000/month on Google Ads with nothing to show. His website had no WhatsApp button, loaded in 9 seconds on mobile, and had zero call to action. Burning money.",what:"Rebuilt the site mobile-first with a floating WhatsApp CTA, a free check-up lead magnet, trust badges, and 3 clear service pages. Cut load time from 9s to 1.8s. Added Google My Business.",result:"340%",rlabel:"more appointment calls in 60 days. Ad ROI went from unmeasurable to 6×. He stopped paid ads and still gets leads organically.",tags:["Mobile-First","WhatsApp CTA","Lead Gen","Google Ads"]},
  {n:"02",tag:"D2C Skincare · Mumbai",title:"₹40K/month store scaled to ₹1.8L in 3 months",prob:"Riya had great products but an off-the-shelf Shopify theme. 85% of visitors bounced at the product page. No upsells, no trust signals, bad mobile UX. She was losing customers she'd paid to acquire.",what:"Redesigned product pages with ingredient storytelling, before/after sections, customer reviews front and centre. Added bundle discount, 2-step checkout, PayPal + UPI + COD.",result:"4.5×",rlabel:"revenue in 90 days. Cart abandonment dropped from 78% to 31%. Average order value up ₹640 per transaction.",tags:["PayPal","UPI","CRO","Mobile UX"]},
  {n:"03",tag:"Business Coach · Delhi",title:"22 discovery calls booked in first 30 days of launch",prob:"Neha had 11K Instagram followers and no website. Warm leads were Googling her, finding nothing, and moving on. She was losing clients she'd already warmed up through content.",what:"Built a personal brand site with sharp positioning, client case studies, a free PDF lead magnet, and Calendly booking flow. Wrote all copy based on her client testimonials and call recordings.",result:"22",rlabel:"booked discovery calls in first 30 days. 6 converted to paid clients at ₹25,000 each. Site now runs like a silent salesperson.",tags:["Personal Brand","Lead Magnet","Calendly","Copy"]},
];

const TESTIMONIALS = [
  {text:"I was very skeptical. I'd hired two developers before who disappeared after taking advance. Aditya sent me daily Loom updates and delivered 2 days early. My clinic calls went up almost immediately.",highlight:"Delivered early. Results followed.",name:"Dr. Rohit Sharma",biz:"Dental Clinic, Patna",init:"RS",color:"#1a472a"},
  {text:"He asked about my customers before he asked about my design preferences. That's rare. The website felt like it was written by someone who actually understood skincare buyers, not just CSS.",highlight:"He got the business — not just the brief.",name:"Riya Kapoor",biz:"Skincare Brand, Mumbai",init:"RK",color:"#b8860b"},
  {text:"Three quotes before Aditya. He was the only one who sent a strategy document before starting. Transparent pricing, no hidden charges, delivered exactly on time. Exactly what you want.",highlight:"Strategy first. No surprises.",name:"Neha Joshi",biz:"Business Coach, Delhi",init:"NJ",color:"#1a3a6e"},
  {text:"My old website was 4 years old and had given me maybe 10 total inquiries. New one went live — 8 inquiries in the first week alone. I don't know what he changed but whatever it was, it worked.",highlight:"4 years of nothing. One week of results.",name:"Sunita Agarwal",biz:"Interior Designer, Lucknow",init:"SA",color:"#7c3aed"},
  {text:"Fast communication, honest about timelines, genuinely understands what makes a business website different from a portfolio. If you want results not a pretty website, this is the person.",highlight:"Results-focused. No fluff.",name:"Arjun Singh",biz:"Fitness Studio, Kanpur",init:"AS",color:"#c0392b"},
];

const WHY = [
  {icon:"🧠",title:"Business first, design second",sub:"Strategy before Figma",desc:"I study your customers and your conversion funnel before I touch any design tool. Layout, copy placement, button colour — all decisions backed by business logic, not personal taste."},
  {icon:"⚡",title:"10–18 day delivery, guaranteed",sub:"Clear timelines, no chasing",desc:"I work in focused sprints with daily Loom video updates. You always know what's done, what's next, and what decisions you need to make. No ghosting, no vague timelines."},
  {icon:"📱",title:"Mobile-first — always",sub:"Designed for how India actually browses",desc:"Over 80% of your visitors are on phones. I design for small screens first, then scale up — not the other way around. Your site works on budget Android phones and iPhones equally."},
  {icon:"💬",title:"WhatsApp-native CTAs built in",sub:"Because Indian clients don't fill forms",desc:"Every site I build has prominent WhatsApp CTAs, pre-filled message templates, and click-to-call buttons placed exactly where visitors expect to find them."},
  {icon:"💰",title:"Flexible payment — PayPal & UPI",sub:"50% upfront, 50% on delivery",desc:"Pay via PayPal, UPI, or bank transfer. No full advance required. I work with businesses investing for the first time and I make it straightforward to get started."},
];

function ContactForm() {
  const [done, setDone] = useState(false);
  const formRef = useRef(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    
    try {
      const response = await fetch('https://formspree.io/f/xpqynvgl', {
        method: 'POST',
        body: formData,
        headers: { 
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      });
      
      if (response.ok) {
        setDone(true);
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Error sending. Please try again.');
    }
  };
  
  if (done) return (
    <div className="cf-success">
      <div className="tick">✓</div>
      <h4>Got it — I'll reach out within 24 hours.</h4>
      <p>Usually much faster. If urgent, WhatsApp me directly at {ME.phone} — I'm quick to respond.</p>
    </div>
  );
  
  return (
    <form className="cform" ref={formRef} onSubmit={handleSubmit}>
      <div className="cform-title">Tell me about your project</div>
      <p className="cform-sub">No sales pitch. Just a real conversation about what you need and whether I can help.</p>
      <div className="cf-field"><label>Your Name *</label><input type="text" name="name" required placeholder="e.g. Priya Mehta" /></div>
      <div className="cf-field"><label>WhatsApp / Phone *</label><input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" /></div>
      <div className="cf-field"><label>Your Business</label><input type="text" name="business" placeholder="e.g. Yoga Studio, Mumbai / yourwebsite.com" /></div>
      <div className="cf-field"><label>What Do You Need?</label>
        <select name="service">
          <option value="">Choose a service</option>
          {SERVICES.map(s=><option key={s.title}>{s.title}</option>)}
          <option>Free Website Audit</option>
          <option>Not sure — want to discuss</option>
        </select>
      </div>
      <div className="cf-field"><label>Rough Budget</label>
        <select name="budget">
          <option value="">Select a range</option>
          <option>₹10,000 – ₹20,000</option>
          <option>₹20,000 – ₹40,000</option>
          <option>₹40,000 – ₹80,000</option>
          <option>₹80,000+</option>
        </select>
      </div>
      <button type="submit" className="cf-submit">Send Message — I Reply Fast →</button>
      <p className="cf-note">Your info stays private. Replied within 24 hours — usually much faster.</p>
    </form>
  );
}

function App() {
  const go = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth'});

  const openCalendly = e => {
    e.preventDefault();
    window.open(
      ME.calendly,
      'calendly',
      'width=500,height=700,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no'
    );
  };

  const LOGOS = [
    {name:"SmileCare Clinic",type:"Dental · Patna"},
    {name:"NourishSkin Co.",type:"Skincare · Mumbai"},
    {name:"FitZone Studio",type:"Fitness · Kanpur"},
    {name:"Neha Joshi Coaching",type:"Coach · Delhi"},
    {name:"LegalEdge Advocates",type:"Law Firm · Lucknow"},
    {name:"RiyaGlow",type:"Beauty · Pune"},
    {name:"Patel Interiors",type:"Design · Ahmedabad"},
    {name:"VikramFit Pro",type:"Gym · Bangalore"},
  ];
  const doubled = [...LOGOS,...LOGOS];

  const TICKERS = ["Available for New Projects","Patna-based · Works Pan-India","WhatsApp: Fast Response","PayPal & UPI Accepted","10–18 Day Delivery","30-Day Post-Launch Support","Mobile-First Development","Free Website Audit"];

  return (
    <>
      <style>{CSS}</style>

      {/* NAV */}
      <nav className="nav">        <div className="nav-logo">Aditya <span>Kumar</span></div>
        <div className="nav-mid">
          {[["Services","services"],["Work","work"],["Process","process"],["Contact","contact"]].map(([l,id])=>(
            <a key={id} href={`#${id}`} onClick={e=>{e.preventDefault();go(id)}}>{l}</a>
          ))}
        </div>
        <div className="nav-right">
          <a href={ME.calendly} onClick={openCalendly} className="nav-book" rel="noreferrer">Book a Call</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="avail-pill"><span className="avail-pulse" style={{marginRight:4}}/>Available — 2 project slots left this month</div>
            <h1>Websites that get you <span className="outline">clients.</span><br/>Not just clicks.</h1>
            <p className="hero-sub">I'm <strong>Aditya Kumar</strong>, a freelance web developer from <strong>Patna, Bihar</strong>. I build business websites, e-commerce stores, and landing pages for small businesses across India — focused on one thing: <strong>more leads and sales for you.</strong></p>
            <div className="hero-ctas">
              <a href={ME.calendly} onClick={openCalendly} className="btn-call" rel="noreferrer">Book a Free Call</a>
              <a href={`https://wa.me/${ME.wa}?text=Hi Aditya, I want to discuss a website project`} className="btn-wa-main" target="_blank" rel="noreferrer">WhatsApp Me</a>
              <a href="#contact" className="btn-audit" onClick={e=>{e.preventDefault();go('contact')}}>Get Free Audit →</a>
            </div>
            <div className="hero-micro">
              <div className="hm"><strong>PayPal & UPI</strong></div>
              <div className="hm" style={{color:'var(--border)'}}>—</div>
              <div className="hm">Delivered in <strong style={{marginLeft:4}}>10–18 days</strong></div>
              <div className="hm" style={{color:'var(--border)'}}>—</div>
              <div className="hm"><strong>Pan-India</strong><span style={{marginLeft:4}}>clients</span></div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hcard-main">
              <div className="hcard-tag">Latest Project Result</div>
              <div className="hcard-val">340%</div>
              <div className="hcard-lbl">More appointment inquiries — Dental Clinic, Patna</div>
              <div className="hcard-div"/>
              <div className="hcard-mini-grid">
                <div className="hcard-mini"><div className="mv">4.5×</div><div className="ml">Revenue — D2C brand</div></div>
                <div className="hcard-mini"><div className="mv">22</div><div className="ml">Calls booked — Coach</div></div>
                <div className="hcard-mini"><div className="mv">12d</div><div className="ml">Avg. delivery</div></div>
                <div className="hcard-mini"><div className="mv">100%</div><div className="ml">Would refer me</div></div>
              </div>
            </div>
            <div className="hfloat f1"><div className="fi-label">MOB</div><div><div>Mobile-first</div><div className="fs">80%+ India traffic is mobile</div></div></div>
            <div className="hfloat f2"><div className="fi-label">WA</div><div><div>WhatsApp CTAs</div><div className="fs">Built in on every page</div></div></div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-row">
        {[["30+","Projects delivered","across India"],["12 days","Average delivery","no compromises"],["3×","Average lead increase","for clients"],["₹20K+","Starting price","serious results only"]].map(([n,d,sub])=>(
          <div className="stat-col" key={n}>
            <div className="stat-n">{n}</div>
            <div className="stat-d">{d}<br/><em>{sub}</em></div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section className="srv-bg" id="services">
        <div className="si">
          <div className="srv-header">
            <div><div className="stag">Services</div><h2 className="stitle">What I build — and<br/><span className="green">what it does for you</span></h2></div>
            <p className="ssub" style={{maxWidth:300}}>Every service scoped around a business outcome. Not deliverables — results.</p>
          </div>
          <div className="srv-grid">
            {SERVICES.map(s=>(
              <div className="srv-card" key={s.n}>
                <div className="srv-num">{s.n}</div>
                <div className="srv-price">{s.price}<div className="srv-emi">{s.emi}</div></div>
                <div className="srv-emoji">{s.emoji}</div>
                <h3>{s.title}</h3>
                <div className="srv-hindi">{s.sub}</div>
                <p>{s.desc}</p>
                <div className="srv-list">{s.list.map(l=><div className="srv-li" key={l}>{l}</div>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className="why-bg">
        <div className="si">
          <div className="why-header">
            <div>
              <div className="stag">Why Aditya</div>
              <h2 className="stitle">Why Indian businesses<br/>choose me over agencies</h2>
              <p className="ssub" style={{marginTop:16}}>Agencies charge 3× more and give you a junior developer. Cheap freelancers disappear after advance. Here's the difference.</p>
            </div>
            <div className="why-quote">
              "I have the budget but not the time to figure this out myself. I need someone who understands my business and builds a website that actually works — not just one that looks good in a screenshot."
              <div className="attr">— What most Indian business owners actually need (and rarely find)</div>
            </div>
          </div>
          <div className="why-grid">
            {WHY.map(w=>(
              <div className="why-card" key={w.title}>
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <div className="why-hindi">{w.sub}</div>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="case-bg" id="work">
        <div className="si">
          <div className="stag">Case Studies</div>
          <h2 className="stitle" style={{color:'#fff',marginBottom:8}}>Real Indian businesses.<br/><span style={{color:'rgba(255,255,255,.25)',fontWeight:400}}>Real results.</span></h2>
          <p className="ssub">Not agency fluff. Actual outcomes — with the problem, what I did, and what happened.</p>
          <div className="cases">
            {CASES.map(c=>(
              <div className="case-card" key={c.n}>
                <div>
                  <div className="case-idx">{c.n}</div>
                  <div className="case-pill">{c.tag}</div>
                  <h3>{c.title}</h3>
                  <p>{c.prob}</p>
                </div>
                <div>
                  <div className="case-section-label">What I did</div>
                  <div className="case-text">{c.what}</div>
                </div>
                <div>
                  <div className="case-section-label">The result</div>
                  <div className="result-box">
                    <div className="result-n">{c.result}</div>
                    <div className="result-l">{c.rlabel}</div>
                    <div className="result-tags">{c.tags.map(t=><span className="rtag" key={t}>{t}</span>)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi-bg">
        <div className="si">
          <div className="testi-header">
            <div><div className="stag">Client Words</div><h2 className="stitle">What clients <span className="green">actually</span> say</h2></div>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <div className="tr-big">4.9</div>
              <div><div className="tr-stars">★★★★★</div><div className="tr-count">Avg. rating across all clients</div></div>
            </div>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map(t=>(
              <div className="tcard" key={t.name}>
                <div className="tcard-stars">★★★★★</div>
                <div className="tcard-text">"{t.text}"</div>
                <div className="tcard-hindi">{t.highlight}</div>
                <div className="tcard-foot">
                  <div className="tcard-av" style={{background:t.color}}>{t.init}</div>
                  <div><div className="tcard-name">{t.name}</div><div className="tcard-biz">{t.biz}</div><div className="tcard-verified">✓ Verified Client</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="proc-bg" id="process">
        <div className="si">
          <div className="proc-header">
            <div>
              <div className="stag">How It Works</div>
              <h2 className="stitle">Simple process.<br/><span className="green">Zero surprises.</span></h2>
              <p className="ssub">From first WhatsApp to live website — exactly what happens and when.</p>
            </div>
            <div className="proc-promise">
              <h4>My Promise to You</h4>
              <div className="pp-list">
                {["50% advance to start, 50% on delivery","Daily progress updates via WhatsApp or Loom","You own 100% of the website — no lock-in, ever","3 rounds of revisions included in every project","30-day post-launch support included"].map(p=><div className="pp-item" key={p}>{p}</div>)}
              </div>
            </div>
          </div>
          <div className="proc-steps">
            {[
              ["1","Strategy Call","Understand first, build second","Free 30-min call. I ask about your business, customers, competitors, and goals. You leave with clarity. I leave with a clear plan. No commitment required.","Day 1"],
              ["2","Design & Build","See it before it's built","I design in Figma first so you can approve before any code is written. Once approved I build fast, with daily Loom updates. You're never guessing.","Day 2–14"],
              ["3","Launch & Handover","Live — and fully yours","I handle domain setup, live testing on all devices, WhatsApp CTA setup, analytics. Full Loom walkthrough so you can manage everything yourself.","Day 14–16"],
            ].map(([n,h,hi,p,d])=>(
              <div className="proc-step" key={n}>
                <div className="proc-dot"><span>{n}</span></div>
                <h3>{h}</h3>
                <div className="proc-hindi">{hi}</div>
                <p>{p}</p>
                <span className="proc-badge">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="guarantee-bg">
        <div className="si">
          <div className="guarantee-grid">
            <div className="guarantee-visual">
              <div className="gv-seal"><span style={{fontFamily:"'IBM Plex Sans',sans-serif",fontSize:"1rem",fontWeight:"700",color:"rgba(255,255,255,.6)",letterSpacing:".05em"}}>AK</span></div>
              <div className="gv-title">How I Work</div>
              <div className="gv-sub">A clear structure from day one — so both sides know exactly what to expect at every stage.</div>
              <div className="gv-points">
                {[
                  "50% advance to start, 50% on delivery",
                  "Scope defined in writing before work begins",
                  "3 revision rounds included per project",
                  "Full source code handed over — you own it",
                  "No monthly fees. No lock-in.",
                ].map(p=><div className="gvp" key={p}><span className="gvp-icon">✓</span><span>{p}</span></div>)}
              </div>
            </div>
            <div className="guarantee-content">
              <div className="stag">Transparency</div>
              <h2 className="stitle">What working with me<br/>actually <span className="green">looks like</span></h2>
              <p className="ssub">Clear scope, structured payments, and daily communication. No ambiguity, no moving goalposts — just a professional working relationship.</p>
              <div className="g-list">
                {[
                  {icon:"📋",title:"Scope document before we start",desc:"Every project begins with a written scope covering deliverables, timeline, revision rounds, and payment schedule. Agreed and signed by both sides."},
                  {icon:"📹",title:"Daily Loom video updates",desc:"Each working day I send a short screen recording of what was completed. You're never left guessing where the project stands."},
                  {icon:"💬",title:"Direct access throughout",desc:"You have my number and email. I respond during business hours. No support tickets, no middlemen — direct communication at every stage."},
                  {icon:"🗂",title:"Structured handover on completion",desc:"Final delivery includes all source files, login credentials, and a walkthrough video. Everything you need to manage the site independently."},
                ].map(g=>(
                  <div className="g-item" key={g.title}>
                    <div className="g-icon">{g.icon}</div>
                    <div><h4>{g.title}</h4><p>{g.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="offer-bg">
        <div className="si">
          <div className="offer-inner">
            <div className="stag">Free Offer</div>
            <h2 className="stitle" style={{color:'#fff',marginBottom:12}}>Free website audit —<br/><span style={{color:'rgba(255,255,255,.28)',fontWeight:400}}>no strings attached</span></h2>
            <p className="ssub" style={{margin:'0 auto 40px',color:'rgba(255,255,255,.45)'}}>Send me your website. I'll record a 10-minute Loom breaking down what's costing you leads and what to fix first. No pitch at the end.</p>
            <div className="offer-card">
              <div className="offer-checklist">
                {["Mobile experience review — how it looks on a ₹8,000 Android phone","Speed test — slow sites lose 53% of visitors before they load","WhatsApp & Call CTA audit — are your contact buttons where Indian users expect?","Conversion analysis — where visitors drop off and why","Top 3 fixes you can do yourself — even without a developer"].map(i=><div className="oc-item" key={i}><span className="oc-check">✓</span><span>{i}</span></div>)}
              </div>
              <div className="offer-value-row">
                <span className="offer-orig">Worth ₹3,000</span>
                <span style={{color:'rgba(255,255,255,.15)',fontSize:'1.5rem'}}>→</span>
                <span className="offer-free-tag">Completely Free</span>
              </div>
              <div className="offer-ctas">
                <a href={`https://wa.me/${ME.wa}?text=Hi Aditya, I would like a free website audit`} className="btn-wa-main" target="_blank" rel="noreferrer">Request on WhatsApp</a>
                <a href={`mailto:${ME.email}?subject=Free Website Audit`} className="btn-audit" style={{borderColor:'rgba(255,255,255,.2)',color:'rgba(255,255,255,.55)'}}>Send by Email</a>
              </div>
            </div>
            <p className="offer-note">Limited to <strong>5 audits per month</strong> so they're genuinely useful — not rushed. Slots go fast.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-bg" id="contact">
        <div className="si">
          <div className="stag">Let's Talk</div>
          <div className="contact-grid">
            <div className="contact-left">
              <div className="big">Let's build something<br/>that <span className="green">gets you clients.</span></div>
              <p className="sub">Pick the most comfortable way to reach me. Fast to respond, zero pressure to commit, happy to give honest advice even if you don't hire me.</p>
              <div className="contact-methods">
                <a href={`https://wa.me/${ME.wa}?text=Hi Aditya, I would like to discuss a website project`} className="cm-link" target="_blank" rel="noreferrer">
                  <div className="cm-icon-box">WA</div>
                  <div className="cm-text"><div className="l1">WhatsApp — {ME.phone}</div><div className="l2">Usually replied within 2 hours</div></div>
                  <div className="cm-arr">→</div>
                </a>
                <a href={ME.calendly} onClick={openCalendly} className="cm-link" rel="noreferrer">
                  <div className="cm-icon-box">CAL</div>
                  <div className="cm-text"><div className="l1">Book a Free 30-min Strategy Call</div><div className="l2">No pitch — honest advice about your website</div></div>
                  <div className="cm-arr">→</div>
                </a>
                <a href={`mailto:${ME.email}`} className="cm-link">
                  <div className="cm-icon-box">EM</div>
                  <div className="cm-text"><div className="l1">Email — {ME.email}</div><div className="l2">For detailed project briefs — I read everything</div></div>
                  <div className="cm-arr">→</div>
                </a>
                <a href={`https://instagram.com/aditya.builds`} className="cm-link" target="_blank" rel="noreferrer">
                  <div className="cm-icon-box">IG</div>
                  <div className="cm-text"><div className="l1">Instagram — {ME.instagram}</div><div className="l2">Work previews, tips, behind-the-scenes</div></div>
                  <div className="cm-arr">→</div>
                </a>
              </div>
              <div className="upi-note">
                <span style={{fontSize:'.7rem',fontWeight:'700',letterSpacing:'.06em',color:'var(--accent)'}}>UPI</span>
                <p>Payments via PayPal, UPI ({ME.upi}), or Bank Transfer.</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div>
            <div className="footer-logo">Aditya <span>Kumar</span></div>
            <div className="footer-tagline">Freelance web developer building result-focused websites for Indian businesses. Based in Patna, works pan-India.</div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            {SERVICES.map(s=><a key={s.title} href="#services" onClick={e=>{e.preventDefault();go('services')}}>{s.title}</a>)}
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <a href="#work" onClick={e=>{e.preventDefault();go('work')}}>Case Studies</a>
            <a href="#process" onClick={e=>{e.preventDefault();go('process')}}>Process</a>
            <a href="#contact" onClick={e=>{e.preventDefault();go('contact')}}>Free Audit</a>
            <a href={ME.calendly} onClick={openCalendly} rel="noreferrer">Book a Call</a>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <a href={`https://wa.me/${ME.wa}`} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={`mailto:${ME.email}`}>Email</a>
            <a href={`https://instagram.com/aditya.builds`} target="_blank" rel="noreferrer">Instagram</a>
            <a href={`https://${ME.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Aditya Kumar · Patna, Bihar · Freelance Web Developer</p>
          <a href={`https://wa.me/${ME.wa}`} target="_blank" rel="noreferrer">Built to convert — not just impress.</a>
        </div>
      </footer>

      {/* FLOATING CONTACT */}
      <div className="fwa-wrap">
        <a href={`https://wa.me/${ME.wa}?text=Hi Aditya, I would like to discuss a project`} className="fwa" target="_blank" rel="noreferrer">WhatsApp Me</a>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
