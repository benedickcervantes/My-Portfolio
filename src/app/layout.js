import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Benedick Cervantes - Full Stack Developer Portfolio",
  description: "Benedick Cervantes - Full Stack Developer, UI/UX Designer, and IT Consultant. Explore my portfolio of modern web applications and digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true} // 👈 Add this
      >
        {children}
      </body>
    </html>
  );
}
