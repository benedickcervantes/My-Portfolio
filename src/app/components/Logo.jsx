'use client';
import { useId } from 'react';

/** Inline Code B mark — stays sharp at any display size. */
const Logo = ({ className = 'h-10 w-10', title = 'Ben' }) => {
  const gradId = useId().replace(/:/g, '');

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={`block shrink-0 ${className}`}
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="20"
          y1="10"
          x2="52"
          y2="54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2C98A0" />
          <stop offset="1" stopColor="#4CC8A3" />
        </linearGradient>
      </defs>
      <path
        fill="none"
        stroke="currentColor"
        className="text-[var(--primary)]"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 22L6 32l8 10"
      />
      <path
        fill={`url(#${gradId})`}
        fillRule="evenodd"
        d="M24 12h14.2c6.8 0 11.2 3.5 11.2 9 0 3.4-1.7 6-4.5 7.4 3.7 1.4 6 4.4 6 8.6 0 6-4.7 10-11.8 10H24V12zm6.5 5.8v8.2h7.6c3.1 0 4.9-1.5 4.9-4.1s-1.8-4.1-4.9-4.1h-7.6zm0 13.6v9.6h8.4c3.6 0 5.7-1.9 5.7-5s-2.1-4.6-5.7-4.6h-8.4z"
      />
    </svg>
  );
};

export default Logo;
