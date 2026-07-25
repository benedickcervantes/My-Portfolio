'use client';

import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { APP_ACCENT_COLORS, useTheme } from '../contexts/ThemeContext';

function ThemeIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 3.75a8.25 8.25 0 0 0 0 16.5V3.75z" fill="currentColor" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function ThemeMenu() {
  const { theme, accentColor, setTheme, setAccentColor, resetToDefault, isDefault } =
    useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const [coords, setCoords] = useState(null);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const titleId = useId();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const sync = () => setIsNarrow(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useLayoutEffect(() => {
    if (!open || isNarrow) {
      setCoords(null);
      return;
    }
    const update = () => {
      const btn = buttonRef.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const panelWidth = Math.min(280, window.innerWidth - 24);
      let left = rect.right - panelWidth;
      left = Math.max(12, Math.min(left, window.innerWidth - panelWidth - 12));
      setCoords({ top: Math.min(rect.bottom + 10, window.innerHeight - 24), left });
    };
    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, true);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update, true);
    };
  }, [open, isNarrow]);

  useEffect(() => {
    if (!open) return;
    let active = false;
    const t = window.setTimeout(() => {
      active = true;
    }, 0);

    const onPointerDown = (event) => {
      if (!active) return;
      const target = event.target;
      if (!rootRef.current?.contains(target) && !panelRef.current?.contains(target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown, { passive: true });
    document.addEventListener('keydown', onKeyDown);
    const prev = document.body.style.overflow;
    if (isNarrow) document.body.style.overflow = 'hidden';

    return () => {
      window.clearTimeout(t);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, isNarrow]);

  const panel = (
    <div
      ref={panelRef}
      className={`theme-panel ${isNarrow ? 'theme-panel--mobile' : 'theme-panel--desktop'}`}
      role="dialog"
      aria-modal={isNarrow || undefined}
      aria-labelledby={titleId}
      style={!isNarrow && coords ? { top: coords.top, left: coords.left } : undefined}
    >
      <div className="theme-panel__head">
        <div className="theme-panel__head-row">
          <p className="theme-panel__title" id={titleId}>
            Theme
          </p>
          {isNarrow && (
            <button type="button" className="theme-panel__close" aria-label="Close" onClick={() => setOpen(false)}>
              ✕
            </button>
          )}
        </div>
        <p className="theme-panel__sub">Accent color and light/dark mode</p>
      </div>

      <p className="theme-panel__label">COLOR</p>
      <div className="theme-panel__colors">
        {APP_ACCENT_COLORS.map((color) => (
          <button
            key={color.id}
            type="button"
            className={`theme-panel__swatch ${
              accentColor.toLowerCase() === color.value.toLowerCase()
                ? 'theme-panel__swatch--active'
                : ''
            }`}
            style={{ backgroundColor: color.value }}
            aria-label={color.label}
            title={color.label}
            onClick={() => setAccentColor(color.value)}
          />
        ))}
      </div>

      <p className="theme-panel__label">MODE</p>
      <div className="theme-panel__modes">
        <button
          type="button"
          className={`theme-panel__mode ${theme === 'light' ? 'theme-panel__mode--active' : ''}`}
          onClick={() => setTheme('light')}
        >
          <SunIcon />
          Light
        </button>
        <button
          type="button"
          className={`theme-panel__mode ${theme === 'dark' ? 'theme-panel__mode--active' : ''}`}
          onClick={() => setTheme('dark')}
        >
          <MoonIcon />
          Dark
        </button>
      </div>

      <button type="button" className="theme-panel__reset" onClick={resetToDefault} disabled={isDefault}>
        Reset to system default
      </button>
    </div>
  );

  const portal =
    open && mounted
      ? createPortal(
          isNarrow ? (
            <div className="theme-layer theme-layer--mobile">
              <button
                type="button"
                className="theme-backdrop"
                aria-label="Close theme customizer"
                onClick={() => setOpen(false)}
              />
              {panel}
            </div>
          ) : coords ? (
            panel
          ) : null,
          document.body
        )
      : null;

  return (
    <div className="theme-menu" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className={`theme-icon-btn ${open ? 'theme-icon-btn--active' : ''}`}
        aria-label="Customize theme"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((v) => !v)}
      >
        <ThemeIcon />
      </button>
      {portal}
    </div>
  );
}
