import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { personalInfo, projects, skillsData, coreMetrics } from '../data/portfolioData';

export default function InteractiveTerminal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `Aditya Kumar [SWE Environment v2.6.4 - x86_64-linux-gnu]
Type "help" to see available commands or click shortcuts below.`,
    },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCommandHistory((prev) => [rawCmd, ...prev]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'input', text: `$ ${rawCmd}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  about         Show summary bio & engineering background
  skills        Display breakdown of frontend, backend, data, & devops
  projects      List featured software engineering projects
  metrics       Show live production uptime & latency stats
  curl resume   Fetch plain-text resume overview
  contact       Display direct email, GitHub, and social channels
  clear         Clear the terminal screen
  exit          Close the terminal window`,
        });
        break;

      case 'about':
      case 'bio':
        newHistory.push({
          type: 'output',
          text: `NAME: ${personalInfo.name}
ROLE: ${personalInfo.title}
LOCATION: ${personalInfo.location} (${personalInfo.timezone})
STATUS: ${personalInfo.availability}
FOCUS: Full-Stack Web Development, React, Node.js, Express, Databases & Core CS.
MOTTO: "Strong CS fundamentals first. Code that solves real problems."`,
        });
        break;

      case 'skills':
      case 'stack':
        newHistory.push({
          type: 'output',
          text: `TECH STACK MATRIX:
[Frontend]   React • JavaScript (ES6+) • TypeScript • Responsive HTML5/CSS3 • WebSockets
[Backend]    Node.js • Express.js • REST APIs • CRUD Architecture • JWT Auth
[Databases]  PostgreSQL • MongoDB • Redis Basics • Schema Design
[CS Core]    Data Structures & Algorithms • Git/GitHub • Linux/Bash • OOP • OS`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `FEATURED ENGINEERING WORK (GitHub: ${personalInfo.githubUsername}):
1. NexusQueue      - Task queue & scheduling service (Node.js & Redis)
2. PulseMetrics    - Full-stack web analytics dashboard (React & Express)
3. Synapse Canvas  - Real-time collaborative whiteboard (WebSockets & Canvas)
4. DevMonitor      - Full-stack service monitoring & alert tool (Node & React)`,
        });
        break;

      case 'metrics':
      case 'stats':
        newHistory.push({
          type: 'output',
          text: `CURRENT MILESTONES:
- Focus:               ${personalInfo.title}
- Web Development:     React, Node.js, Express & REST APIs
- Problem Solving:     100+ DSA & CS concept practice
- Status:              ${personalInfo.availability}`,
        });
        break;

      case 'curl resume':
      case 'resume':
        newHistory.push({
          type: 'output',
          text: `================ RESUME SUMMARY: ADITYA KUMAR ================
CURRENT ROLE:
* Computer Science & Engineering Undergraduate (2024 - Present)
  - Core Studies: Data Structures, Algorithms, DBMS, OS, Computer Networks.
  - Active Full-Stack Developer: React, Node.js, Express, PostgreSQL, MongoDB.
  - Seeking Summer/Fall Software Engineering & Web Development Internships.
PROJECTS:
* NexusQueue: Background task queue service with Redis & Node.js.
* PulseMetrics: Responsive analytics dashboard with custom SVG visualization.
* Synapse Workspace: Real-time collaborative whiteboard using WebSockets.
CONTACT & PROFILES:
* GitHub:   ${personalInfo.github}
* LinkedIn: ${personalInfo.linkedin}
* Email:    ${personalInfo.email}
* WhatsApp: ${personalInfo.phoneFormatted}
==============================================================`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `DIRECT CONTACT:
Email:    ${personalInfo.email}
WhatsApp: ${personalInfo.phoneFormatted} (${personalInfo.whatsappUrl})
GitHub:   ${personalInfo.github} (@${personalInfo.githubUsername})
LinkedIn: ${personalInfo.linkedin}
Twitter:  ${personalInfo.twitter} (${personalInfo.twitterHandle})
Location: ${personalInfo.location}`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `command not found: "${rawCmd}". Type "help" for a list of valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const nextIdx = historyIndex + 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(14, 19, 31, 0.7)',
        backdropFilter: 'blur(4px)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMaximized ? '0' : '20px',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: isMaximized ? '100vw' : '780px',
          height: isMaximized ? '100vh' : '520px',
          backgroundColor: '#0A0E17',
          border: '1px solid #232E42',
          borderRadius: isMaximized ? '0' : '8px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.75)',
          overflow: 'hidden',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {/* Terminal Titlebar */}
        <div
          style={{
            height: '42px',
            backgroundColor: '#111723',
            borderBottom: '1px solid #232E42',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 14px',
            userSelect: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '11px',
                height: '11px',
                borderRadius: '50%',
                backgroundColor: '#FF5F56',
                display: 'inline-block',
                cursor: 'pointer',
              }}
              onClick={onClose}
            />
            <span
              style={{
                width: '11px',
                height: '11px',
                borderRadius: '50%',
                backgroundColor: '#FFBD2E',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                width: '11px',
                height: '11px',
                borderRadius: '50%',
                backgroundColor: '#27C93F',
                display: 'inline-block',
                cursor: 'pointer',
              }}
              onClick={() => setIsMaximized(!isMaximized)}
            />
            <span
              style={{
                marginLeft: '12px',
                fontSize: '0.78rem',
                color: '#8A99AD',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <TerminalIcon size={13} color="var(--accent-terra)" />
              aditya@engine: ~ (bash)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              style={{
                background: 'none',
                border: 'none',
                color: '#8A99AD',
                cursor: 'pointer',
                padding: '4px',
              }}
              aria-label="Toggle full screen"
            >
              {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: '#8A99AD',
                cursor: 'pointer',
                padding: '4px',
              }}
              aria-label="Close terminal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div
          style={{
            backgroundColor: '#0F1522',
            borderBottom: '1px solid #1C2638',
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
          }}
        >
          <span style={{ fontSize: '0.68rem', color: '#66768F' }}>Quick:</span>
          {['help', 'about', 'skills', 'projects', 'metrics', 'curl resume', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              style={{
                backgroundColor: '#182133',
                border: '1px solid #283750',
                color: '#CBD5E1',
                padding: '2px 8px',
                borderRadius: '3px',
                fontSize: '0.68rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div
          style={{
            flex: 1,
            padding: '16px',
            overflowY: 'auto',
            fontSize: '0.84rem',
            lineHeight: 1.55,
            color: '#E2E8F0',
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '10px', whiteSpace: 'pre-wrap' }}>
              {item.type === 'input' && <span style={{ color: '#F87171', fontWeight: 600 }}>{item.text}</span>}
              {item.type === 'system' && <span style={{ color: '#38BDF8' }}>{item.text}</span>}
              {item.type === 'output' && <span style={{ color: '#E2E8F0' }}>{item.text}</span>}
              {item.type === 'error' && <span style={{ color: '#F43F5E' }}>{item.text}</span>}
            </div>
          ))}

          {/* Active Input Line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
            <span style={{ color: '#34D399', fontWeight: 600 }}>aditya@cluster:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#FFFFFF',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.84rem',
                caretColor: '#38BDF8',
              }}
              placeholder="type a command..."
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
