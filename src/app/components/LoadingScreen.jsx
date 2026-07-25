'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CODE_SNIPPET = `const portfolio = {
  name: "Ben",
  role: "Full Stack Developer",
  stack: ["React", "Next.js", "Node"],
  status: "ready"
};`;

const LoadingScreen = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isLoading || !isClient) return;

    const start = performance.now();
    const duration = 1800;
    let frame;

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased * 100);
      setTypedLength(Math.floor(eased * CODE_SNIPPET.length));

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => onComplete(), 250);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isLoading, onComplete, isClient]);

  if (!isClient) return null;

  const typedCode = CODE_SNIPPET.slice(0, typedLength);
  const statusLabel =
    progress < 35
      ? 'compiling modules...'
      : progress < 70
        ? 'bundling assets...'
        : progress < 95
          ? 'optimizing build...'
          : 'deploy ready';

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a1214] overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(rgba(44,152,160,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(44,152,160,0.07) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage: 'radial-gradient(ellipse 70% 55% at 50% 45%, black, transparent)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 55% 40% at 50% 40%, rgba(44,152,160,0.22), transparent 70%)',
            }}
          />

          <div className="relative z-10 w-full max-w-md px-4 sm:px-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-center mb-5 sm:mb-6"
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                Ben<span className="text-[#4CC8A3]">.</span>
              </p>
              <p className="mt-2 text-[10px] sm:text-xs tracking-[0.22em] uppercase text-[#4CC8A3]/80 font-mono">
                full-stack developer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-xl border border-[#2C98A0]/25 bg-slate-950/80 backdrop-blur-sm shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 border-b border-[#2C98A0]/20 bg-slate-900/80">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">portfolio.js</span>
                <span className="ml-auto flex items-center gap-1.5 text-[10px] font-mono text-[#4CC8A3]/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CC8A3] animate-pulse" />
                  LIVE
                </span>
              </div>

              <pre className="px-3 sm:px-4 py-3 sm:py-4 text-left font-mono text-[10px] sm:text-xs leading-relaxed min-h-[132px] sm:min-h-[148px] whitespace-pre-wrap overflow-x-auto">
                <code>
                  {typedCode.split('\n').map((line, i) => (
                    <span key={i} className="block">
                      <span className="text-slate-600 select-none mr-2 sm:mr-3">
                        {String(i + 1).padStart(2, ' ')}
                      </span>
                      <span>{highlightLine(line)}</span>
                    </span>
                  ))}
                  <span className="inline-block w-1.5 h-3.5 ml-0.5 align-middle bg-[#4CC8A3] animate-pulse" />
                </code>
              </pre>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 sm:mt-5 space-y-2"
            >
              <div className="flex justify-between items-center font-mono text-[11px] sm:text-xs gap-3">
                <span className="text-slate-400 truncate">$ {statusLabel}</span>
                <span className="text-[#4CC8A3] font-semibold shrink-0">{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#2C98A0] to-[#4CC8A3] transition-[width] duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function highlightLine(line) {
  if (!line) return line;

  const parts = [];
  const regex =
    /(\bconst\b|\bname\b|\brole\b|\bstack\b|\bstatus\b)|("[^"]*")|([{}\[\]:,])/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <span key={`t-${lastIndex}`} className="text-slate-300">
          {line.slice(lastIndex, match.index)}
        </span>
      );
    }
    if (match[1]) {
      parts.push(
        <span key={`k-${match.index}`} className="text-[#4CC8A3]">
          {match[1]}
        </span>
      );
    } else if (match[2]) {
      parts.push(
        <span key={`s-${match.index}`} className="text-[#38B2A3]">
          {match[2]}
        </span>
      );
    } else {
      parts.push(
        <span key={`p-${match.index}`} className="text-slate-500">
          {match[3]}
        </span>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < line.length) {
    parts.push(
      <span key={`e-${lastIndex}`} className="text-slate-300">
        {line.slice(lastIndex)}
      </span>
    );
  }

  return parts.length ? parts : line;
}

export default LoadingScreen;
