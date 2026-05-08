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

export function BellPepperIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="bellG" cx="40%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="60%" stopColor="#d62828" />
          <stop offset="100%" stopColor="#7a1414" />
        </radialGradient>
      </defs>
      <path d="M16 28c0-6 4-10 8-10 2 0 3 1 4 2 1-1 2-2 4-2s3 1 4 2c1-1 2-2 4-2 4 0 8 4 8 10 0 4 2 6 2 12 0 9-7 16-18 16s-18-7-18-16c0-6 2-8 2-12z" fill="url(#bellG)" />
      <path d="M30 14c-1-3 0-5 2-5s3 2 2 5c2 0 3 1 3 3 0 2-2 3-5 3s-5-1-5-3c0-2 1-3 3-3z" fill="#3a6b2a" />
      <path d="M32 6v6" stroke="#2a5520" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 24c-1 6-1 14 1 22M40 24c1 6 1 14-1 22" stroke="#7a1414" strokeWidth="1.5" fill="none" opacity="0.5" />
      <ellipse cx="22" cy="32" rx="3" ry="8" fill="#fff" opacity="0.25" />
    </svg>
  );
}

export function GrapesIcon(props: SVGProps<SVGSVGElement>) {
  const purple = [
    [32, 24], [26, 30], [38, 30], [22, 36], [32, 36], [42, 36],
    [26, 42], [38, 42], [32, 48],
  ];
  const green = [
    [40, 22], [34, 28], [46, 28], [30, 34], [40, 34], [50, 34],
    [34, 40], [46, 40], [40, 46],
  ];
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="grapePurple" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#b48ad6" />
          <stop offset="60%" stopColor="#6b3e8a" />
          <stop offset="100%" stopColor="#3d1f55" />
        </radialGradient>
        <radialGradient id="grapeGreen" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#d4f08a" />
          <stop offset="60%" stopColor="#8fb83a" />
          <stop offset="100%" stopColor="#4f6b1a" />
        </radialGradient>
      </defs>
      {/* stems */}
      <path d="M32 22c-1-4 1-7 4-9M40 20c-1-4 1-7 4-9" stroke="#5a3a1f" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* leaf */}
      <path d="M36 11c4-3 9-2 11 1-2 4-7 5-11 2z" fill="#5a8a3a" />
      <path d="M36 11c1 1 3 2 6 2" stroke="#3a5d2a" strokeWidth="1" fill="none" />
      {/* purple bunch (back) */}
      {purple.map(([x, y], i) => (
        <circle key={`p${i}`} cx={x} cy={y} r="5" fill="url(#grapePurple)" stroke="#2d1640" strokeWidth="0.5" />
      ))}
      {/* green bunch (front, offset) */}
      {green.map(([x, y], i) => (
        <circle key={`g${i}`} cx={x} cy={y} r="5" fill="url(#grapeGreen)" stroke="#3a5520" strokeWidth="0.5" opacity="0.95" />
      ))}
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
