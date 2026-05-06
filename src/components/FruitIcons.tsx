import type { SVGProps } from "react";

export function PlumIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="plumG" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#a06ac4" />
          <stop offset="60%" stopColor="#6b3e8a" />
          <stop offset="100%" stopColor="#3d1f55" />
        </radialGradient>
      </defs>
      <path d="M32 12c-2 0-3 1-3 3s1 3 1 5-2 2-6 4c-7 3-12 10-12 19 0 9 9 16 20 16s20-7 20-16c0-9-5-16-12-19-4-2-6-2-6-4s1-3 1-5-1-3-3-3z" fill="url(#plumG)" />
      <path d="M32 14c-1 2 0 4 0 6" stroke="#3a5d2a" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M33 16c3-2 6-1 7 1-2 2-5 2-7-1z" fill="#5a8a3a" />
      <ellipse cx="24" cy="28" rx="4" ry="6" fill="#fff" opacity="0.25" />
    </svg>
  );
}

export function FigIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="figG" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#9a6c8a" />
          <stop offset="70%" stopColor="#6a3a5e" />
          <stop offset="100%" stopColor="#3e1f38" />
        </radialGradient>
      </defs>
      <path d="M32 16c-3 0-5-2-5-2s-2 2-2 4c-8 2-13 9-13 17 0 11 9 17 20 17s20-6 20-17c0-8-5-15-13-17 0-2-2-4-2-4s-2 2-5 2z" fill="url(#figG)" />
      <path d="M27 14c1-3 3-5 5-5s4 2 5 5c-2 1-3 2-5 2s-3-1-5-2z" fill="#4a6b2a" />
      <path d="M32 9v5" stroke="#3a5520" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="24" cy="30" rx="3" ry="5" fill="#fff" opacity="0.2" />
    </svg>
  );
}

export function PomegranateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="pomG" cx="40%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#e8616a" />
          <stop offset="60%" stopColor="#b8323c" />
          <stop offset="100%" stopColor="#6b1820" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="36" r="22" fill="url(#pomG)" />
      <path d="M28 10h8v6c0 2-1 3-2 3h-1v3h-2v-3h-1c-1 0-2-1-2-3v-6z" fill="#7a2228" />
      <path d="M26 12c-1-1-3-1-4 0 1 2 3 3 5 2-1-1-1-2-1-2zm12 0c1-1 3-1 4 0-1 2-3 3-5 2 1-1 1-2 1-2z" fill="#5a8a3a" />
      <ellipse cx="24" cy="32" rx="4" ry="6" fill="#fff" opacity="0.2" />
    </svg>
  );
}
