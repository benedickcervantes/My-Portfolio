'use client';
import { Syne, Source_Sans_3 } from "next/font/google";
import { useState, useEffect } from 'react';
import "./globals.css";
import LoadingScreen from './components/LoadingScreen';

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2100);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <title>Benedick Cervantes - Full Stack Developer Portfolio</title>
        <meta name="description" content="Benedick Cervantes - Full Stack Developer, UI/UX Designer, and IT Consultant. Explore my portfolio of modern web applications and digital solutions." />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=14" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png?v=14" />
        <link rel="icon" href="/favicon.ico?v=14" sizes="any" />
        <link rel="icon" href="/icon.svg?v=14" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=14" />
        <link rel="shortcut icon" href="/favicon.ico?v=14" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2C98A0" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var root = document.documentElement;
                  var theme = localStorage.getItem('portfolio-theme');
                  if (theme !== 'light' && theme !== 'dark') {
                    var legacy = localStorage.getItem('darkMode');
                    theme = legacy !== null && JSON.parse(legacy) === false ? 'light' : 'dark';
                  }
                  if (theme === 'dark') root.classList.add('dark');
                  else root.classList.remove('dark');

                  var accent = localStorage.getItem('portfolio-accent') || '#2C98A0';
                  var isDefault = accent.toLowerCase() === '#2c98a0';
                  if (isDefault && theme === 'dark') {
                    root.style.setProperty('--primary', '#4CC8A3');
                    root.style.setProperty('--primary-mid', '#38B2A3');
                    root.style.setProperty('--primary-light', '#2C98A0');
                    root.style.setProperty('--primary-rgb', '76, 200, 163');
                    root.style.setProperty('--primary-foreground', '#0a1214');
                    root.style.setProperty('--accent', '#1a3a3f');
                    root.style.setProperty('--ring', '#4CC8A3');
                  } else if (isDefault) {
                    root.style.setProperty('--primary', '#2C98A0');
                    root.style.setProperty('--primary-mid', '#38B2A3');
                    root.style.setProperty('--primary-light', '#4CC8A3');
                    root.style.setProperty('--primary-rgb', '44, 152, 160');
                    root.style.setProperty('--primary-foreground', '#ffffff');
                    root.style.setProperty('--accent', '#e6f7f5');
                    root.style.setProperty('--ring', '#2C98A0');
                  } else if (/^#[0-9a-fA-F]{6}$/.test(accent)) {
                    root.style.setProperty('--primary', accent);
                    root.style.setProperty('--ring', accent);
                    root.style.setProperty('--primary-mid', 'color-mix(in srgb, ' + accent + ' 72%, white)');
                    root.style.setProperty('--primary-light', 'color-mix(in srgb, ' + accent + ' 52%, white)');
                    root.style.setProperty('--primary-rgb', parseInt(accent.slice(1,3),16) + ', ' + parseInt(accent.slice(3,5),16) + ', ' + parseInt(accent.slice(5,7),16));
                    root.style.setProperty('--accent', 'color-mix(in srgb, ' + accent + ' 20%, ' + (theme === 'dark' ? '#1a2a2e' : '#e8f0f2') + ')');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://linkedin.com" />
        <link rel="preconnect" href="https://facebook.com" />
        
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//facebook.com" />
      </head>
      <body
        className={`${syne.variable} ${sourceSans.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <LoadingScreen isLoading={isLoading} onComplete={handleLoadingComplete} />
        
        {!isLoading && (
          <div className="animate-fadeIn">
            {children}
          </div>
        )}
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  var isLocalDev = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

                  if (isLocalDev) {
                    navigator.serviceWorker.getRegistrations().then(function(registrations) {
                      registrations.forEach(function(registration) {
                        registration.unregister();
                      });
                    });
                    if ('caches' in window) {
                      caches.keys().then(function(names) {
                        names.forEach(function(name) {
                          caches.delete(name);
                        });
                      });
                    }
                    return;
                  }

                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}
