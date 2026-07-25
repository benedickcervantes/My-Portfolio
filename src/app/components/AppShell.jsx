'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

export default function AppShell({ children }) {
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
    <>
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
          `,
        }}
      />
    </>
  );
}
