'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const DEFAULT_ACCENT = '#2C98A0';
export const DEFAULT_THEME = 'dark';

export const APP_ACCENT_COLORS = [
  { id: 'default', value: DEFAULT_ACCENT, label: 'Teal' },
  { id: 'emerald', value: '#10b981', label: 'Emerald' },
  { id: 'blue', value: '#2563eb', label: 'Blue' },
  { id: 'cyan', value: '#06b6d4', label: 'Cyan' },
  { id: 'indigo', value: '#6366f1', label: 'Indigo' },
  { id: 'purple', value: '#8b5cf6', label: 'Purple' },
  { id: 'pink', value: '#ec4899', label: 'Pink' },
  { id: 'orange', value: '#f97316', label: 'Orange' },
  { id: 'yellow', value: '#eab308', label: 'Yellow' },
  { id: 'slate', value: '#1e293b', label: 'Slate' },
];

const THEME_KEY = 'portfolio-theme';
const ACCENT_KEY = 'portfolio-accent';

const ThemeContext = createContext(null);

function parseHex(hex) {
  const match = /^#([0-9a-f]{6})$/i.exec((hex || '').trim());
  if (!match) return null;
  const v = match[1];
  return [
    Number.parseInt(v.slice(0, 2), 16),
    Number.parseInt(v.slice(2, 4), 16),
    Number.parseInt(v.slice(4, 6), 16),
  ];
}

function luminance(r, g, b) {
  const c = (n) => {
    const s = n / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * c(r) + 0.7152 * c(g) + 0.0722 * c(b);
}

function onPrimary(hex) {
  const rgb = parseHex(hex);
  if (!rgb) return '#ffffff';
  return luminance(...rgb) > 0.55 ? '#0f172a' : '#ffffff';
}

function boostDarkAccent(hex, theme) {
  if (theme !== 'dark') return hex;
  const rgb = parseHex(hex);
  if (!rgb) return hex;
  if (luminance(...rgb) < 0.22) {
    return `color-mix(in srgb, ${hex} 40%, #cbd5e1)`;
  }
  return hex;
}

function isDefaultAccent(hex) {
  return (hex || '').toLowerCase() === DEFAULT_ACCENT.toLowerCase();
}

/** Build CSS vars for accent + mode. Default teal keeps classic light/dark shades. */
export function buildBrandTokens(accentHex, theme) {
  if (isDefaultAccent(accentHex) && theme === 'dark') {
    return {
      '--primary': '#4CC8A3',
      '--primary-mid': '#38B2A3',
      '--primary-light': '#2C98A0',
      '--primary-rgb': '76, 200, 163',
      '--primary-foreground': '#0a1214',
      '--accent': '#1a3a3f',
      '--ring': '#4CC8A3',
    };
  }

  if (isDefaultAccent(accentHex)) {
    return {
      '--primary': '#2C98A0',
      '--primary-mid': '#38B2A3',
      '--primary-light': '#4CC8A3',
      '--primary-rgb': '44, 152, 160',
      '--primary-foreground': '#ffffff',
      '--accent': '#e6f7f5',
      '--ring': '#2C98A0',
    };
  }

  const display = boostDarkAccent(accentHex, theme);
  const rgb = parseHex(accentHex) || [44, 152, 160];
  const softBase = theme === 'dark' ? '#1a2a2e' : '#e8f0f2';

  return {
    '--primary': display,
    '--primary-mid': `color-mix(in srgb, ${accentHex} 72%, white)`,
    '--primary-light': `color-mix(in srgb, ${accentHex} 52%, white)`,
    '--primary-rgb': `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`,
    '--primary-foreground': onPrimary(accentHex),
    '--accent': `color-mix(in srgb, ${accentHex} 20%, ${softBase})`,
    '--ring': display,
  };
}

function applyTokens(tokens) {
  const root = document.documentElement;
  Object.entries(tokens).forEach(([key, value]) => {
    if (typeof value === 'string') root.style.setProperty(key, value);
  });
}

function applyModeClass(theme) {
  const root = document.documentElement;
  if (theme === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
}

function readTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    const legacy = localStorage.getItem('darkMode');
    if (legacy !== null) return JSON.parse(legacy) ? 'dark' : 'light';
  } catch {
    /* ignore */
  }
  return DEFAULT_THEME;
}

function readAccent() {
  try {
    const stored = localStorage.getItem(ACCENT_KEY);
    if (stored && /^#[0-9a-f]{6}$/i.test(stored)) return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_ACCENT;
}

function syncDocument(theme, accent) {
  applyModeClass(theme);
  applyTokens(buildBrandTokens(accent, theme));
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(null);
  const [accentColor, setAccentState] = useState(DEFAULT_ACCENT);

  useEffect(() => {
    const nextTheme = readTheme();
    const nextAccent = readAccent();
    setThemeState(nextTheme);
    setAccentState(nextAccent);
    syncDocument(nextTheme, nextAccent);
  }, []);

  const setTheme = useCallback(
    (next) => {
      setThemeState(next);
      localStorage.setItem(THEME_KEY, next);
      localStorage.setItem('darkMode', JSON.stringify(next === 'dark'));
      syncDocument(next, accentColor);
    },
    [accentColor]
  );

  const setAccentColor = useCallback(
    (color) => {
      setAccentState(color);
      localStorage.setItem(ACCENT_KEY, color);
      syncDocument(theme || DEFAULT_THEME, color);
    },
    [theme]
  );

  const resetToDefault = useCallback(() => {
    setThemeState(DEFAULT_THEME);
    setAccentState(DEFAULT_ACCENT);
    localStorage.setItem(THEME_KEY, DEFAULT_THEME);
    localStorage.setItem(ACCENT_KEY, DEFAULT_ACCENT);
    localStorage.setItem('darkMode', 'true');
    syncDocument(DEFAULT_THEME, DEFAULT_ACCENT);
  }, []);

  const isDefault =
    (theme || DEFAULT_THEME) === DEFAULT_THEME && isDefaultAccent(accentColor);

  const value = useMemo(
    () => ({
      theme: theme || DEFAULT_THEME,
      darkMode: (theme || DEFAULT_THEME) === 'dark',
      accentColor,
      setTheme,
      setAccentColor,
      resetToDefault,
      isDefault,
      ready: theme !== null,
    }),
    [accentColor, isDefault, resetToDefault, setAccentColor, setTheme, theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
