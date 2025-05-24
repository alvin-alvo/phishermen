import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Terminal({ onClose }) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    'PHISHERMEN TERMINAL v2.0',
    'Type "help" for available commands',
    ''
  ]);
  const [pixelate, setPixelate] = useState(false);
  const inputRef = useRef(null);
  const endRef = useRef(null);
  const navigate = useNavigate();

  // Available commands with responses
  const commands = {
    help: () => [
      'COMMANDS:',
      'clear - Reset terminal',
      'ls - List directory',
      'cd <dir> - Change directory',
      'hack - Initiate breach protocol',
      'sudo <cmd> - Elevate privileges',
      'events - View upcoming events',
      'exit - Close terminal',
      ''
    ],
    clear: () => [],
    ls: () => [
      'DIRECTORY LISTING:',
      'blog/    - Security articles',
      'events/  - CTF challenges',
      'src/     - Source code',
      'dist/    - Build output',
      'node_modules/ - Dependencies',
      ''
    ],
    cd: (args) => {
      if (!args[0]) return ['cd: missing argument'];
      if (['blog', 'events', 'src', 'dist', 'node_modules'].includes(args[0])) {
        return [`Entering ${args[0]} directory...`, ''];
      }
      return [`cd: ${args[0]}: No such directory`, ''];
    },
    hack: () => [
      'Initializing breach protocol...',
      'Scanning network vulnerabilities...',
      'Found 3 potential entry points',
      'Access level: LOW',
      'Try "sudo hack" for root access',
      ''
    ],
    sudo: (args) => {
      if (args[0] === 'hack') {
        return [
          'ROOT ACCESS GRANTED',
          'Bypassing firewall...',
          'Injecting payload...',
          '██████████████ 100%',
          'SYSTEM COMPROMISED',
          'You: 1 | Security: 0',
          ''
        ];
      }
      return [`sudo: ${args[0]}: command not found`, ''];
    },
    events: () => {
      navigate('/events');
      onClose();
      return ['Redirecting to events page...'];
    },
    exit: () => {
      onClose();
      return ['Terminal session ended'];
    },
    self_destruct: () => {
      setPixelate(true);
      setTimeout(() => {
        setPixelate(false);
        window.location.href = 'https://thispagedoesnotexist.com/404';
      }, 2000);
      return [
        '!!! SELF DESTRUCT SEQUENCE INITIATED !!!',
        'Deleting terminal...'
      ];
    }
  };

  // Easter eggs
  const easterEggs = {
    'make me a sandwich': () => ['What? Make it yourself', ''],
    'sudo make me a sandwich': () => ['Okay.', '*poof*', 'You\'re a sandwich', ''],
    'rm -rf /': () => ['Nice try. Security protocols engaged.', '']
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOutput = [...output, `> ${input}`];
    const [command, ...args] = input.split(' ');

    // Rickroll Easter egg: hi/hey followed by anything
    if (/^(hi|hey)\b/i.test(input.trim())) {
      setOutput([
        ...newOutput,
        'Never gonna give you up... 🎵',
        <img src="https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif" alt="Rickroll" style={{maxWidth:'300px',borderRadius:'8px',margin:'1em auto'}} key={Date.now()} />,
        ''
      ]);
    }
    // Check easter eggs first
    else if (easterEggs[input.toLowerCase()]) {
      setOutput([...newOutput, ...easterEggs[input.toLowerCase()]()]);
    } 
    // Check valid commands
    else if (commands[command]) {
      setOutput([...newOutput, ...commands[command](args)]);
    } 
    // Invalid command
    else {
      setOutput([...newOutput, `${command}: command not found`, '']);
    }

    setInput('');
  };

  // Auto-scroll to bottom
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 ${pixelate ? 'pixelate flicker' : ''}`}
    >
      <div className="w-full max-w-3xl h-[80vh] bg-gray-900 rounded-lg overflow-hidden border border-green-500 shadow-lg shadow-green-500/20 relative flex flex-col">
        {/* Terminal header */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-green-500 sticky top-0 z-10">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-green-400 font-mono text-sm">root@phishermen:~</span>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Terminal body */}
        <div className="flex-grow overflow-y-auto mb-2 bg-black/80 neon-border p-4 rounded-lg shadow-inner shadow-hacker-green/10">
          {output.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap glitch drop-shadow-glow">{line}</div>
          ))}
          <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <span className="text-hacker-green mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow bg-transparent border-none outline-none text-hacker-green caret-hacker-blue font-mono text-lg"
              autoFocus
            />
          </form>
          <div ref={endRef} />
        </div>
      </div>
    </motion.div>
  );
}

