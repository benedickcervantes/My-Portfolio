import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Benedick Cervantes - Full Stack Developer Portfolio",
  description: "Benedick Cervantes - Full Stack Developer, UI/UX Designer, and IT Consultant. Explore my portfolio of modern web applications and digital solutions. Specializing in React, Next.js, Node.js, and enterprise solutions.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "UI/UX Designer",
    "IT Consultant",
    "Web Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Benedick Cervantes",
    "Philippines Developer",
    "Enterprise Solutions",
    "Custom Software Development"
  ],
  authors: [{ name: "Benedick Cervantes" }],
  creator: "Benedick Cervantes",
  publisher: "Benedick Cervantes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://benedickcervantes.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Benedick Cervantes - Full Stack Developer Portfolio",
    description: "Full Stack Developer, UI/UX Designer, and IT Consultant specializing in modern web applications and enterprise solutions.",
    url: 'https://benedickcervantes.dev',
    siteName: 'Benedick Cervantes Portfolio',
    images: [
      {
        url: '/images/developer-photo.png',
        width: 1200,
        height: 630,
        alt: 'Benedick Cervantes - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Benedick Cervantes - Full Stack Developer Portfolio",
    description: "Full Stack Developer, UI/UX Designer, and IT Consultant specializing in modern web applications and enterprise solutions.",
    images: ['/images/developer-photo.png'],
    creator: '@benedickcervantes',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2C98A0" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://linkedin.com" />
        <link rel="preconnect" href="https://facebook.com" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//facebook.com" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Benedick Cervantes",
              "jobTitle": "Full Stack Developer",
              "description": "Full Stack Developer, UI/UX Designer, and IT Consultant specializing in modern web applications and enterprise solutions.",
              "url": "https://benedickcervantes.dev",
              "image": "https://benedickcervantes.dev/images/developer-photo.png",
              "sameAs": [
                "https://github.com/benedickcervantes",
                "https://linkedin.com/in/benedick-cervantes-1375a9111/",
                "https://facebook.com/Benedick.Cervantes/"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Juan City",
                "addressCountry": "Philippines"
              },
              "email": "benedickcervantes@gmail.com",
              "telephone": "+63-917-843-2759",
              "knowsAbout": [
                "Full Stack Development",
                "React.js",
                "Next.js",
                "Node.js",
                "UI/UX Design",
                "IT Consulting",
                "Web Development",
                "JavaScript",
                "TypeScript",
                "Firebase",
                "MongoDB"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Developer",
                "description": "Developing modern web applications and providing IT consulting services"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
        
        {/* Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                    }
                  }, 0);
                });
              }
              
              // Service Worker registration for PWA capabilities
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
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
