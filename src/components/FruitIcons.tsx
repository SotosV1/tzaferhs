import type { SVGProps } from "react";

/* shared helpers */
const Highlight = ({ cx, cy, rx, ry, o = 0.28 }: { cx: number; cy: number; rx: number; ry: number; o?: number }) => (
  <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#fff" opacity={o} />
);

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
      <path d="M32 14c-2 0-3 1-3 3s1 3 1 5-2 2-6 4c-7 3-12 10-12 19 0 9 9 16 20 16s20-7 20-16c0-9-5-16-12-19-4-2-6-2-6-4s1-3 1-5-1-3-3-3z" fill="url(#plumG)" />
      <path d="M32 22c0-4 0-8 0-12" stroke="#3a2540" strokeWidth="1" opacity="0.5" fill="none" />
      <path d="M33 16c3-2 6-1 7 1-2 2-5 2-7-1z" fill="#5a8a3a" />
      <path d="M32 14v6" stroke="#3a5520" strokeWidth="1.5" strokeLinecap="round" />
      <Highlight cx={24} cy={28} rx={4} ry={6} />
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
      <Highlight cx={24} cy={30} rx={3} ry={5} o={0.2} />
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
      <Highlight cx={22} cy={32} rx={3} ry={8} />
    </svg>
  );
}

export function GrapesIcon(props: SVGProps<SVGSVGElement>) {
  const purple = [[27, 26],[22, 32],[32, 32],[17, 38],[27, 38],[37, 38],[22, 44],[32, 44],[27, 50]];
  const green = [[37, 26],[32, 32],[42, 32],[27, 38],[37, 38],[47, 38],[32, 44],[42, 44],[37, 50]];
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="grapePurple" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#b48ad6" />
          <stop offset="60%" stopColor="#6b3e8a" />
          <stop offset="100%" stopColor="#3d1f55" />
        </radialGradient>
        <radialGradient id="grapeGreen" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#d4f08a" />
          <stop offset="60%" stopColor="#8fb83a" />
          <stop offset="100%" stopColor="#4f6b1a" />
        </radialGradient>
      </defs>
      <path d="M32 24c-1-4 1-7 3-9" stroke="#5a3a1f" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M33 16c4-3 8-2 10 1-2 3-7 4-10 2z" fill="#5a8a3a" />
      {purple.map(([x, y], i) => <circle key={`p${i}`} cx={x} cy={y} r="5" fill="url(#grapePurple)" />)}
      {green.map(([x, y], i) => <circle key={`g${i}`} cx={x} cy={y} r="5" fill="url(#grapeGreen)" opacity="0.92" />)}
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
      <Highlight cx={24} cy={32} rx={4} ry={6} o={0.2} />
    </svg>
  );
}

/* ---- new icons ---- */

export function TomatoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="tomG" cx="38%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#ff6e5a" />
          <stop offset="60%" stopColor="#d83025" />
          <stop offset="100%" stopColor="#7a1410" />
        </radialGradient>
      </defs>
      <path d="M32 18c-13 0-22 8-22 19 0 11 10 17 22 17s22-6 22-17c0-11-9-19-22-19z" fill="url(#tomG)" />
      <path d="M32 18c-5-2-8-6-8-9 3 1 5 3 6 5 1-3 3-5 5-6 1 2 0 5-3 7 4-1 7 0 9 2-3 1-6 1-9 1z" fill="#3a6b2a" />
      <path d="M32 12v8" stroke="#2a5520" strokeWidth="1.5" strokeLinecap="round" />
      <Highlight cx={22} cy={30} rx={4} ry={7} />
    </svg>
  );
}

export function CucumberIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="cucG" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#a8d56b" />
          <stop offset="60%" stopColor="#3e7a2a" />
          <stop offset="100%" stopColor="#1f4a14" />
        </linearGradient>
      </defs>
      <path d="M14 50c-4-4-4-12 2-20l16-18c4-4 10-4 14 0s4 10 0 14l-18 16c-4 6-10 8-14 8z" fill="url(#cucG)" />
      <path d="M44 14c2-2 4-2 6 0s2 4 0 6" stroke="#2a5520" strokeWidth="1.5" fill="none" />
      <g fill="#1f4a14" opacity="0.6">
        <circle cx="20" cy="44" r="0.8" /><circle cx="26" cy="38" r="0.8" /><circle cx="32" cy="32" r="0.8" />
        <circle cx="38" cy="26" r="0.8" /><circle cx="44" cy="20" r="0.8" /><circle cx="24" cy="48" r="0.8" />
        <circle cx="30" cy="42" r="0.8" /><circle cx="36" cy="36" r="0.8" />
      </g>
      <path d="M16 46c-2 4-2 6 0 8" stroke="#fff" strokeWidth="1" opacity="0.3" fill="none" />
    </svg>
  );
}

export function PepperIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="pepG" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#5fb83a" />
          <stop offset="60%" stopColor="#2d7a1a" />
          <stop offset="100%" stopColor="#143d0a" />
        </linearGradient>
      </defs>
      <path d="M22 18c4 6 4 14-2 22-6 8-6 16 4 18 14 4 22-8 22-20 0-12-8-22-18-24-4 0-8 2-6 4z" fill="url(#pepG)" />
      <path d="M22 16c-1-3 1-6 4-6s5 3 4 6" stroke="#5a3a1f" strokeWidth="2" fill="none" strokeLinecap="round" />
      <Highlight cx={28} cy={28} rx={3} ry={6} />
    </svg>
  );
}

export function PotatoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="potG" cx="40%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#d8b878" />
          <stop offset="60%" stopColor="#a07a3a" />
          <stop offset="100%" stopColor="#5a4220" />
        </radialGradient>
      </defs>
      <path d="M14 32c0-10 8-18 20-18s18 6 20 14c2 8-2 18-12 22-12 4-22 0-26-6-2-4-2-8-2-12z" fill="url(#potG)" />
      <g fill="#5a4220" opacity="0.55">
        <ellipse cx="22" cy="28" rx="2" ry="1" />
        <ellipse cx="34" cy="22" rx="2" ry="1" />
        <ellipse cx="42" cy="34" rx="2" ry="1" />
        <ellipse cx="28" cy="40" rx="2" ry="1" />
        <ellipse cx="38" cy="44" rx="1.5" ry="1" />
      </g>
      <Highlight cx={26} cy={24} rx={5} ry={3} o={0.2} />
    </svg>
  );
}

export function OnionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="oniG" cx="40%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#f5e0a8" />
          <stop offset="60%" stopColor="#c89a4a" />
          <stop offset="100%" stopColor="#7a5220" />
        </radialGradient>
      </defs>
      <path d="M32 18c-12 0-20 8-20 18s9 18 20 18 20-8 20-18-8-18-20-18z" fill="url(#oniG)" />
      <path d="M32 18c-3-3-3-7-1-10M32 18c3-3 3-7 1-10" stroke="#5a8a3a" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M20 32c2 8 6 16 12 22M44 32c-2 8-6 16-12 22" stroke="#7a5220" strokeWidth="0.8" opacity="0.5" fill="none" />
      <path d="M32 18v36" stroke="#7a5220" strokeWidth="0.8" opacity="0.4" />
      <Highlight cx={24} cy={32} rx={3} ry={8} />
    </svg>
  );
}

export function CarrotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="carG" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffb04a" />
          <stop offset="60%" stopColor="#e8722a" />
          <stop offset="100%" stopColor="#8a3a10" />
        </linearGradient>
      </defs>
      <path d="M22 22l16 0 -8 32z" fill="url(#carG)" />
      <g stroke="#8a3a10" strokeWidth="0.8" opacity="0.55">
        <line x1="24" y1="28" x2="36" y2="28" /><line x1="25" y1="34" x2="35" y2="34" />
        <line x1="26" y1="40" x2="34" y2="40" /><line x1="28" y1="46" x2="32" y2="46" />
      </g>
      <path d="M22 22c-2-4-6-6-10-6 2 6 6 8 10 6zm8 0c-1-6 0-12 4-14 2 6 0 12-4 14zm8 0c4-2 8-2 12 2-4 4-8 4-12 0z" fill="#5a8a3a" />
      <path d="M30 22c-1-5 0-10 2-12M22 22c-2-3-5-5-8-5" stroke="#3a6b2a" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

export function OrangeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="orgG" cx="38%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#ffc266" />
          <stop offset="60%" stopColor="#ee7a1a" />
          <stop offset="100%" stopColor="#8a3a08" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="36" r="22" fill="url(#orgG)" />
      <circle cx="32" cy="36" r="22" fill="none" stroke="#8a3a08" strokeWidth="0.4" opacity="0.3" strokeDasharray="1 2" />
      <path d="M30 14c0-3 2-5 4-5s2 2 0 4c4-1 8 1 8 4-3 1-6 1-8-1-1 2-3 2-4 0z" fill="#3a6b2a" />
      <path d="M32 12v6" stroke="#2a5520" strokeWidth="1.5" strokeLinecap="round" />
      <Highlight cx={22} cy={30} rx={4} ry={6} />
    </svg>
  );
}

export function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="appG" cx="38%" cy="40%" r="62%">
          <stop offset="0%" stopColor="#ff7a6e" />
          <stop offset="55%" stopColor="#d4262a" />
          <stop offset="100%" stopColor="#6a0e10" />
        </radialGradient>
      </defs>
      <path d="M32 18c-3-2-8-2-13 0-7 4-9 14-5 22 4 9 11 14 18 14s14-5 18-14c4-8 2-18-5-22-5-2-10-2-13 0z" fill="url(#appG)" />
      <path d="M32 18c0-4 2-8 6-10 1 4-1 8-6 10z" fill="#5a8a3a" />
      <path d="M32 18c-1-3 0-7 2-9" stroke="#5a3a1f" strokeWidth="2" strokeLinecap="round" fill="none" />
      <Highlight cx={24} cy={28} rx={4} ry={7} />
    </svg>
  );
}

export function GreenAppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="gappG" cx="38%" cy="40%" r="62%">
          <stop offset="0%" stopColor="#d8f08a" />
          <stop offset="55%" stopColor="#7ab832" />
          <stop offset="100%" stopColor="#2f5a14" />
        </radialGradient>
      </defs>
      <path d="M32 18c-3-2-8-2-13 0-7 4-9 14-5 22 4 9 11 14 18 14s14-5 18-14c4-8 2-18-5-22-5-2-10-2-13 0z" fill="url(#gappG)" />
      <path d="M32 18c0-4 2-8 6-10 1 4-1 8-6 10z" fill="#3a6b2a" />
      <path d="M32 18c-1-3 0-7 2-9" stroke="#5a3a1f" strokeWidth="2" strokeLinecap="round" fill="none" />
      <Highlight cx={24} cy={28} rx={4} ry={7} />
    </svg>
  );
}

export function BananaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="banG" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff0a0" />
          <stop offset="50%" stopColor="#f5c842" />
          <stop offset="100%" stopColor="#a07a14" />
        </linearGradient>
      </defs>
      <path d="M14 18c0 2 0 6 2 12 4 14 16 22 28 22 6 0 8-2 8-4 0-1-2-2-4-2-10 0-22-8-26-22-2-6-2-8-4-8-2 0-4 0-4 2z" fill="url(#banG)" />
      <path d="M14 18c0-2 2-4 4-4 1 0 2 1 2 2" stroke="#5a4220" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M52 48c0 1-1 2-2 2" stroke="#5a4220" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M16 22c4 14 16 24 30 26" stroke="#fff" strokeWidth="1" opacity="0.4" fill="none" />
    </svg>
  );
}

export function WatermelonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="wmG" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ff8a8a" />
          <stop offset="100%" stopColor="#c82838" />
        </linearGradient>
      </defs>
      <path d="M8 44c0-2 24-30 48-30 2 0 2 2 2 4 0 14-12 30-30 30-14 0-20-2-20-4z" fill="url(#wmG)" />
      <path d="M8 44c2-3 6-7 12-12 8-7 18-14 26-16 6-2 12-2 12 0" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M6 44c2-3 4-5 6-7" stroke="#3a6b2a" strokeWidth="3" fill="none" strokeLinecap="round" />
      <g fill="#2a1010">
        <ellipse cx="22" cy="38" rx="1.2" ry="2" transform="rotate(-30 22 38)" />
        <ellipse cx="30" cy="34" rx="1.2" ry="2" transform="rotate(-30 30 34)" />
        <ellipse cx="38" cy="30" rx="1.2" ry="2" transform="rotate(-30 38 30)" />
        <ellipse cx="28" cy="42" rx="1.2" ry="2" transform="rotate(-30 28 42)" />
        <ellipse cx="36" cy="38" rx="1.2" ry="2" transform="rotate(-30 36 38)" />
        <ellipse cx="44" cy="34" rx="1.2" ry="2" transform="rotate(-30 44 34)" />
      </g>
    </svg>
  );
}

export function MelonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="melG" cx="40%" cy="40%" r="62%">
          <stop offset="0%" stopColor="#f0e8a8" />
          <stop offset="60%" stopColor="#c8b86a" />
          <stop offset="100%" stopColor="#7a6a28" />
        </radialGradient>
      </defs>
      <ellipse cx="32" cy="36" rx="22" ry="20" fill="url(#melG)" />
      <g stroke="#7a6a28" strokeWidth="0.5" fill="none" opacity="0.6">
        <path d="M14 30c4 2 8 4 18 4s14-2 18-4" /><path d="M12 36c4 2 10 4 20 4s16-2 20-4" />
        <path d="M14 42c4 2 8 4 18 4s14-2 18-4" /><path d="M22 22c2 4 4 8 10 8s8-4 10-8" />
        <path d="M22 50c2-4 4-8 10-8s8 4 10 8" />
      </g>
      <path d="M30 14c0-2 2-4 4-4 0 3-1 5-4 4z" fill="#5a8a3a" />
      <path d="M32 14v4" stroke="#5a3a1f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function LemonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="lemG" cx="38%" cy="40%" r="62%">
          <stop offset="0%" stopColor="#fff5a0" />
          <stop offset="60%" stopColor="#f0c828" />
          <stop offset="100%" stopColor="#8a6810" />
        </radialGradient>
      </defs>
      <path d="M14 36c0-12 8-20 18-20s18 8 18 20-8 20-18 20-18-8-18-20z" fill="url(#lemG)" transform="rotate(-20 32 36)" />
      <path d="M44 16c4-4 8-4 8-2-2 4-6 6-8 2z" fill="#5a8a3a" />
      <Highlight cx={22} cy={30} rx={4} ry={7} />
    </svg>
  );
}

export function StrawberryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="strG" cx="40%" cy="35%" r="62%">
          <stop offset="0%" stopColor="#ff7a7a" />
          <stop offset="60%" stopColor="#d8202a" />
          <stop offset="100%" stopColor="#6a0a14" />
        </radialGradient>
      </defs>
      <path d="M16 26c0-2 4-4 16-4s16 2 16 4c0 6-4 16-12 26-2 2-6 2-8 0-8-10-12-20-12-26z" fill="url(#strG)" />
      <path d="M14 22c2-4 6-6 10-6 1 2 0 4-2 6 4-2 8-2 10 0-2 4-6 4-10 4 4 0 8 2 10 4-4 2-8 0-12-2 4 4 6 6 6 8-4 0-8-4-10-6-2 2-2 6-4 6-2-4-2-10 2-14z" fill="#5a8a3a" />
      <g fill="#fff5a0">
        <ellipse cx="24" cy="32" rx="0.8" ry="1.4" transform="rotate(-20 24 32)" />
        <ellipse cx="32" cy="34" rx="0.8" ry="1.4" />
        <ellipse cx="40" cy="32" rx="0.8" ry="1.4" transform="rotate(20 40 32)" />
        <ellipse cx="28" cy="40" rx="0.8" ry="1.4" />
        <ellipse cx="36" cy="40" rx="0.8" ry="1.4" />
        <ellipse cx="32" cy="46" rx="0.8" ry="1.4" />
      </g>
    </svg>
  );
}

export function CherryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="chrG" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ff5a6a" />
          <stop offset="60%" stopColor="#b8121f" />
          <stop offset="100%" stopColor="#5a060a" />
        </radialGradient>
      </defs>
      <path d="M22 16c2 8 0 16-4 22M42 16c-2 8 0 16 4 22" stroke="#5a3a1f" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M22 16c4-4 16-4 20 0-2 2-8 2-10 0-2 2-8 2-10 0z" fill="#5a8a3a" />
      <circle cx="22" cy="44" r="10" fill="url(#chrG)" />
      <circle cx="42" cy="44" r="10" fill="url(#chrG)" />
      <Highlight cx={18} cy={40} rx={2} ry={3} />
      <Highlight cx={38} cy={40} rx={2} ry={3} />
    </svg>
  );
}

export function PeachIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="peaG" cx="35%" cy="35%" r="68%">
          <stop offset="0%" stopColor="#ffd0a0" />
          <stop offset="40%" stopColor="#ff9a6a" />
          <stop offset="80%" stopColor="#d8543a" />
          <stop offset="100%" stopColor="#7a2818" />
        </radialGradient>
      </defs>
      <path d="M32 18c-12 0-22 8-22 20s10 18 22 18 22-6 22-18-10-20-22-20z" fill="url(#peaG)" />
      <path d="M32 18c-2 8-2 28 0 38" stroke="#a04020" strokeWidth="0.8" opacity="0.4" fill="none" />
      <path d="M32 18c2-4 6-6 10-6-1 4-4 7-10 6z" fill="#5a8a3a" />
      <path d="M34 14c-1 1-2 3-2 4" stroke="#3a5d2a" strokeWidth="1" fill="none" />
      <Highlight cx={22} cy={28} rx={4} ry={6} />
    </svg>
  );
}

export function PearIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="perG" cx="40%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#e8f0a0" />
          <stop offset="60%" stopColor="#9ab438" />
          <stop offset="100%" stopColor="#4a5a14" />
        </radialGradient>
      </defs>
      <path d="M32 16c-4 0-6 4-6 8 0 3 1 5-2 8-6 4-10 10-10 16 0 8 8 14 18 14s18-6 18-14c0-6-4-12-10-16-3-3-2-5-2-8 0-4-2-8-6-8z" fill="url(#perG)" />
      <path d="M32 16c0-3 2-5 5-6" stroke="#5a3a1f" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M37 10c3-2 5-1 5 1-2 1-4 1-5-1z" fill="#5a8a3a" />
      <Highlight cx={24} cy={36} rx={4} ry={8} />
    </svg>
  );
}

export function ApricotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="aprG" cx="38%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#ffd07a" />
          <stop offset="60%" stopColor="#ee8a3a" />
          <stop offset="100%" stopColor="#7a3a10" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="36" r="20" fill="url(#aprG)" />
      <path d="M32 16c-2 8-2 32 0 40" stroke="#a04020" strokeWidth="0.8" opacity="0.45" fill="none" />
      <path d="M32 16c2-3 5-5 8-5-1 4-4 6-8 5z" fill="#5a8a3a" />
      <path d="M32 12v6" stroke="#5a3a1f" strokeWidth="1.5" strokeLinecap="round" />
      <Highlight cx={24} cy={30} rx={3} ry={5} />
    </svg>
  );
}

export function KiwiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="kiwG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0f5d8" />
          <stop offset="40%" stopColor="#a8c858" />
          <stop offset="100%" stopColor="#5a7a28" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="22" fill="#8a6a3a" />
      <circle cx="32" cy="32" r="20" fill="url(#kiwG)" />
      <circle cx="32" cy="32" r="6" fill="#f5f5e0" />
      <g fill="#2a1810">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          return <ellipse key={i} cx={32 + Math.cos(a) * 11} cy={32 + Math.sin(a) * 11} rx="0.7" ry="1.4" transform={`rotate(${(a * 180) / Math.PI + 90} ${32 + Math.cos(a) * 11} ${32 + Math.sin(a) * 11})`} />;
        })}
      </g>
      <g stroke="#f5f5e0" strokeWidth="0.4" opacity="0.7">
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 16;
          return <line key={i} x1={32 + Math.cos(a) * 6} y1={32 + Math.sin(a) * 6} x2={32 + Math.cos(a) * 18} y2={32 + Math.sin(a) * 18} />;
        })}
      </g>
    </svg>
  );
}

export function PineappleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="pinG" cx="40%" cy="40%" r="62%">
          <stop offset="0%" stopColor="#ffe07a" />
          <stop offset="60%" stopColor="#d8902a" />
          <stop offset="100%" stopColor="#6a3a08" />
        </radialGradient>
      </defs>
      <ellipse cx="32" cy="38" rx="14" ry="20" fill="url(#pinG)" />
      <g stroke="#6a3a08" strokeWidth="0.7" fill="none" opacity="0.7">
        <path d="M20 26l24 8M20 34l24 8M20 42l24 8M20 50l24 8" />
        <path d="M44 26l-24 8M44 34l-24 8M44 42l-24 8M44 50l-24 8" />
      </g>
      <path d="M32 18c-2-4-6-8-8-8 0 4 2 8 4 10-4-2-8-2-10 0 4 4 8 4 10 4-4 0-6 2-8 4 4 2 8 0 10-2-2 4-2 8 0 8 2-2 2-6 2-8 2 2 4 6 8 6 0-4-2-6-4-8 4 2 8 2 10 0-4-4-8-4-10-4 4 0 6-2 8-4-4-2-8 0-10 2 2-4 2-8 0-8-2 2-2 6-2 8z" fill="#5a8a3a" />
    </svg>
  );
}

export function MandarinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="manG" cx="38%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#ffc88a" />
          <stop offset="60%" stopColor="#ee5a1a" />
          <stop offset="100%" stopColor="#7a2008" />
        </radialGradient>
      </defs>
      <ellipse cx="32" cy="38" rx="22" ry="18" fill="url(#manG)" />
      <ellipse cx="32" cy="38" rx="22" ry="18" fill="none" stroke="#7a2008" strokeWidth="0.4" opacity="0.3" strokeDasharray="1 2" />
      <path d="M30 18c0-3 2-5 4-5s2 2 0 4c4-1 8 1 8 4-3 1-6 1-8-1-1 2-3 2-4 0z" fill="#3a6b2a" />
      <path d="M32 16v4" stroke="#2a5520" strokeWidth="1.5" strokeLinecap="round" />
      <Highlight cx={22} cy={32} rx={4} ry={5} />
    </svg>
  );
}

export function AvocadoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="avoG" cx="40%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#a8c878" />
          <stop offset="60%" stopColor="#4a6a28" />
          <stop offset="100%" stopColor="#1a2a0a" />
        </radialGradient>
        <radialGradient id="avoFlesh" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f5e8a8" />
          <stop offset="100%" stopColor="#c8b06a" />
        </radialGradient>
      </defs>
      <path d="M32 12c-4 0-8 4-8 10 0 4 2 6-2 10-4 4-8 10-8 18 0 8 8 14 18 14s18-6 18-14c0-8-4-14-8-18-4-4-2-6-2-10 0-6-4-10-8-10z" fill="url(#avoG)" />
      <ellipse cx="32" cy="42" rx="10" ry="14" fill="url(#avoFlesh)" opacity="0.85" />
      <circle cx="32" cy="42" r="5" fill="#7a4a1a" />
      <Highlight cx={26} cy={34} rx={2} ry={4} o={0.2} />
    </svg>
  );
}

export function ParsleyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="parG" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#7ab83a" />
          <stop offset="100%" stopColor="#2a5520" />
        </radialGradient>
      </defs>
      {[
        [32, 18, 0], [22, 22, -30], [42, 22, 30], [16, 30, -50], [48, 30, 50],
        [24, 32, -10], [40, 32, 10], [32, 28, 0], [20, 38, -20], [44, 38, 20],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`rotate(${r} ${x} ${y})`}>
          <path d={`M${x} ${y}c-3-1-5-3-5-6 4-1 6 1 7 4 1-3 3-5 7-4 0 3-2 5-5 6 3 1 5 3 5 6-4 1-6-1-7-4-1 3-3 5-7 4 0-3 2-5 5-6z`} fill="url(#parG)" opacity="0.92" />
        </g>
      ))}
      <path d="M28 36c2 6 2 14 4 18M36 36c-2 6-2 14-4 18M32 36v18" stroke="#5a8a3a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function SpinachIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="spiG" cx="40%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#6ab02a" />
          <stop offset="100%" stopColor="#1a3a0a" />
        </radialGradient>
      </defs>
      <path d="M16 36c-2-10 4-20 16-22 4 4 4 10 0 14 8-2 16 4 16 14-2 6-8 10-16 10-10 0-14-8-16-16z" fill="url(#spiG)" />
      <path d="M20 38c6 2 14 6 22 10M24 30c8 2 14 6 18 12M28 24c4 2 8 4 12 8" stroke="#1a3a0a" strokeWidth="0.7" opacity="0.55" fill="none" />
      <path d="M16 36c4-2 8-2 12 0M40 50c4-4 6-8 8-12" stroke="#fff" strokeWidth="0.6" opacity="0.25" fill="none" />
    </svg>
  );
}

export function DillIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 12v44" stroke="#3a6b2a" strokeWidth="1.5" strokeLinecap="round" />
      {[16, 22, 28, 34, 40, 46].map((y, i) => (
        <g key={i}>
          <path d={`M32 ${y}c-4-2-8-4-12-2 2 3 6 4 12 2zm0 0c4-2 8-4 12-2-2 3-6 4-12 2z`} fill="#7ab83a" opacity="0.9" />
          <g stroke="#5a8a3a" strokeWidth="0.5" opacity="0.7" fill="none">
            <path d={`M22 ${y - 1}c-2 0-4 1-5 2`} /><path d={`M42 ${y - 1}c2 0 4 1 5 2`} />
          </g>
        </g>
      ))}
      <circle cx="32" cy="14" r="1.5" fill="#3a6b2a" />
    </svg>
  );
}
