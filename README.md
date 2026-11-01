# ⚡ Aditya Kumar — Full-Stack Developer Portfolio

<div align="center">

  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=26&pause=1000&color=0E131F&center=true&vCenter=true&width=650&lines=Hi%2C+I'm+Aditya+Kumar+%E2%9A%A1;Full-Stack+Web+Developer;CSE+Student+%26+Aspiring+Software+Engineer;Building+clean%2C+scalable+web+software" alt="Typing SVG" />

  <p align="center">
    <b>An editorial, typography-first developer portfolio engineered with React 19, Vite, and interactive retro-modern terminal experiences.</b>
  </p>

  <p align="center">
    <a href="https://github.com/PartialManiac3012"><img src="https://img.shields.io/badge/GitHub-PartialManiac3012-0E131F?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile" /></a>
    <a href="https://www.linkedin.com/in/aditya30122006/"><img src="https://img.shields.io/badge/LinkedIn-Aditya%20Kumar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
    <a href="https://x.com/Scalper957196"><img src="https://img.shields.io/badge/Twitter-@Scalper957196-000000?style=for-the-badge&logo=x&logoColor=white" alt="Twitter" /></a>
    <a href="mailto:kumar.aditya30122006@gmail.com"><img src="https://img.shields.io/badge/Email-kumar.aditya30122006%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19.3-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node" />
    <img src="https://img.shields.io/badge/Linter-Oxlint-orange?style=flat-square" alt="Oxlint" />
    <img src="https://img.shields.io/badge/Status-Internship%20Ready-1B7A58?style=flat-square" alt="Internship Ready" />
    <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License MIT" />
  </p>

  <br />

  <p align="center">
    <a href="#-key-features"><b>Key Features</b></a> •
    <a href="#-interactive-developer-terminal"><b>Interactive Terminal</b></a> •
    <a href="#-system-architecture"><b>Architecture</b></a> •
    <a href="#-projects-showcased"><b>Projects</b></a> •
    <a href="#-tech-stack"><b>Tech Stack</b></a> •
    <a href="#-quick-start"><b>Quick Start</b></a> •
    <a href="#-connect-with-me"><b>Contact</b></a>
  </p>

</div>

---

## 📖 Overview

This repository houses the source code for the personal engineering portfolio of **Aditya Kumar** — Computer Science & Engineering undergraduate and Full-Stack Web Developer.

Designed around a distinctive **editorial retro-tech aesthetic**, the portfolio eschews generic template layouts in favor of warm tactile paper backgrounds (`#F8F5EE`), refined serif headings (`Newsreader` & `Playfair Display`), monospaced code elements (`JetBrains Mono`), dark slate spotlight cards, and a fully interactive Quake-style Unix terminal emulator.

---

## ✨ Key Features

- 🖥️ **Interactive Quake Terminal Emulator**:
  - Global hotkey listener: press <kbd>`</kbd> or <kbd>~</kbd> anywhere on the site to slide open a retro Linux terminal.
  - Custom shell parsing supporting `help`, `about`, `skills`, `projects`, `metrics`, `curl resume`, `contact`, `clear`, and `exit`.
  - Maximizable shell window with command history navigation (Up/Down arrow keys) and quick action shortcut chips.

- 📐 **Interactive System Architecture Visualizer**:
  - Real-time animated architecture canvas illustrating modern full-stack workflows:
    - Client React Tier $\to$ Decoupled REST/WebSocket Gateway $\to$ In-Memory Redis Queues $\to$ Background Workers $\to$ Relational & Document Persistence.
  - Interactive stage highlighting detailing bottlenecks, telemetry, and distributed reliability concepts.

- 📰 **Retro-Modern Editorial Design System**:
  - Warm parchment base (`#F8F5EE`) paired with tactile neo-brutalist ink shadows (`3px 3px 0px #0E131F`).
  - Dark Mode Engineering Spotlight card with glowing status indicator and real-time metric counters.
  - Clean typographic hierarchy combining `Newsreader`, `Playfair Display`, `JetBrains Mono`, and `Plus Jakarta Sans`.

- ⚡ **Cutting-Edge Lightweight Frontend**:
  - Built with **React 19** and bundled with **Vite 8** for instantaneous HMR and featherweight production bundles.
  - Zero heavy animation bloat — smooth, native CSS transitions maintaining an unbroken 60 FPS.
  - Fully responsive across mobile, tablet, and ultra-wide desktop viewports.

- 📬 **Direct Recruiter Channels**:
  - Direct WhatsApp link pre-filled with an introductory message.
  - One-click email compose and GitHub/LinkedIn connection cards.

---

## 💻 Interactive Developer Terminal

Visitors can interact with an embedded terminal simulator without leaving the browser:

```
Aditya Kumar [SWE Environment v2.6.4 - x86_64-linux-gnu]
Type "help" to see available commands or click shortcuts below.
```

| Command | Action |
|:---|:---|
| `help` | Prints the directory of all supported terminal instructions |
| `about` / `bio` | Displays candidate background, academic focus, and philosophy |
| `skills` / `stack` | Outputs categorized matrix of frontend, backend, databases, and core CS |
| `projects` | Lists featured software engineering projects with tech stacks |
| `metrics` | Shows live technical uptime, problem-solving stats, and availability |
| `curl resume` | Prints plain-text resume summary directly in the terminal |
| `contact` | Displays direct email, phone, GitHub, LinkedIn, and Twitter links |
| `clear` | Clears terminal history |
| `exit` / `quit` | Closes the modal terminal window |

> **Pro Tip:** Toggle the terminal from anywhere on the page by pressing the <kbd>`</kbd> (backtick) or <kbd>~</kbd> (tilde) key!

---

## 🏗️ System Architecture

The portfolio application is engineered with a modular, component-driven React architecture:

```
┌──────────────────────────────────────────────────────────┐
│                   Vite 8 + React 19                      │
└────────────────────────────┬─────────────────────────────┘
                             │
            ┌────────────────┴────────────────┐
            │                                 │
     [Static View Layer]            [Interactive Layer]
     • Navbar                       • InteractiveTerminal (Global Hotkey ` / ~)
     • Hero + EngineeringSpotlight  • ArchitectureDiagram (Stateful tabs)
     • Featured Projects            • FloatingBadge (Quick trigger)
     • TechStack Matrix             • Dynamic Contact Modals
     • Experience & Timeline
     • Core CS Principles
     • Footer
            │                                 │
            └────────────────┬────────────────┘
                             │
            ┌────────────────▼────────────────┐
            │     portfolioData.js Data Store │
            │  (Single source of truth for    │
            │   bio, projects, skills & stats)│
            └─────────────────────────────────┘
```

---

## 🛠️ Tech Stack

<div align="center">

| Domain | Technologies & Libraries |
|:---|:---|
| **Frontend Core** | ![React 19](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![JavaScript ES6+](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) |
| **Tooling & Build** | ![Vite 8](https://img.shields.io/badge/Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white) ![Oxlint](https://img.shields.io/badge/Oxlint-3c873a?style=flat-square) ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white) |
| **Icons & Typography** | ![Lucide](https://img.shields.io/badge/Lucide_Icons-F56565?style=flat-square) `JetBrains Mono` • `Newsreader` • `Playfair Display` • `Plus Jakarta Sans` |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white) |

</div>

---

## 🚀 Projects Showcased

The portfolio spotlights the following software engineering projects:

### 1. ⚡ NexusQueue
- **Focus:** Systems & Backend (Node.js & Redis)
- **Tagline:** Lightweight background task queue & job broker with exponential backoff retries.
- **Key Metrics:** `<12ms` execution latency • Priority queues • Real-time status monitoring.
- **Stack:** Node.js, Express, Redis, TypeScript, Docker.

### 2. 📊 PulseMetrics Dashboard
- **Focus:** Full-Stack Web Application (React & Express)
- **Tagline:** Interactive web telemetry dashboard with custom SVG data visualizations.
- **Key Metrics:** `60 FPS` smooth UI rendering • `<35ms` P95 API latency.
- **Stack:** React, JavaScript, Node.js, Express, PostgreSQL, CSS Modules.

### 3. 🎨 Synapse Workspace
- **Focus:** Real-Time Collaborative Canvas (WebSockets & HTML5 Canvas)
- **Tagline:** Multi-user whiteboard and system diagramming tool for engineering teams.
- **Key Metrics:** `Sub-20ms` sync latency • Throttled broadcast events with delta compression.
- **Stack:** React, WebSockets, HTML5 Canvas, Node.js.

### 4. 🛡️ DevMonitor Portal
- **Focus:** Developer Operations & Alerting (Node.js, SQLite/Postgres)
- **Tagline:** Full-stack developer service monitoring tool tracking API status and response health.
- **Key Metrics:** Automated 60s health pings • 30-day uptime history • Instant webhook notifications.
- **Stack:** JavaScript, Express, SQLite/PostgreSQL, React, Nodemailer.

---

## 📂 Repository Structure

```
demo-project/
├── public/                 # Static assets & favicon
├── src/
│   ├── assets/             # Vector graphics & hero illustrations
│   ├── components/         # Modular React UI components
│   │   ├── ArchitectureDiagram.jsx  # Interactive system workflow diagram
│   │   ├── Contact.jsx              # Direct reachout form & social cards
│   │   ├── EngineeringSpotlight.jsx # Hero technical badge & live stats
│   │   ├── Experience.jsx           # Timeline of education & projects
│   │   ├── FloatingBadge.jsx        # Bottom-right quick terminal trigger
│   │   ├── Footer.jsx               # Editorial footer with terminal trigger
│   │   ├── Hero.jsx                 # Editorial headline & CTA section
│   │   ├── Icons.jsx                # Custom SVGs & social branding icons
│   │   ├── InteractiveTerminal.jsx  # Linux Quake terminal emulator
│   │   ├── Navbar.jsx               # Responsive navigation & terminal pill
│   │   ├── Principles.jsx           # Core engineering principles
│   │   ├── Projects.jsx             # Filterable portfolio project showcase
│   │   └── TechStack.jsx            # Categorized skills & competencies
│   ├── data/
│   │   └── portfolioData.js         # Unified single-source-of-truth data
│   ├── App.css             # Component-level styles
│   ├── App.jsx             # Main application layout & keyboard shortcuts
│   ├── index.css           # Retro theme design tokens & global CSS
│   └── main.jsx            # Application mount point
├── .gitignore              # Git ignore rules
├── .oxlintrc.json          # Oxlint configuration
├── index.html              # HTML entry point with web fonts preloaded
├── package.json            # Project dependencies & scripts
├── README.md               # Repository documentation
└── vite.config.js          # Vite build configuration
```

---

## ⚡ Quick Start

Follow these steps to run the portfolio locally on your machine:

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn** / **pnpm**

### 2. Clone the Repository
```bash
git clone https://github.com/PartialManiac3012/demo-project.git
cd demo-project
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to view the live site.

### 5. Production Build
To create an optimized production bundle:
```bash
npm run build
```
To preview the generated production build locally:
```bash
npm run preview
```

### 6. Linting
Run Oxlint to check code quality:
```bash
npm run lint
```

---

## 🤝 Connect with Me

I am actively seeking **Summer / Fall Software Engineering & Web Development Internships**. Let's talk about building fast, reliable, and scalable web software!

<div align="center">

<a href="https://github.com/PartialManiac3012">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
</a>
&nbsp;
<a href="https://www.linkedin.com/in/aditya30122006/">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
</a>
&nbsp;
<a href="https://x.com/Scalper957196">
  <img src="https://img.shields.io/badge/Twitter/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="Twitter" />
</a>
&nbsp;
<a href="https://wa.me/919508931272?text=Hi%20Aditya%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20internship%20opportunity.">
  <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" />
</a>
&nbsp;
<a href="mailto:kumar.aditya30122006@gmail.com">
  <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
</a>

<br /><br />

📍 **Location:** Dehradun / Patna, India &nbsp;|&nbsp; 🕒 **Timezone:** IST (UTC+5:30)

</div>

---

<div align="center">
  <sub>Designed & engineered with ❤️ by <a href="https://github.com/PartialManiac3012">Aditya Kumar</a>. Released under the MIT License.</sub>
</div>
