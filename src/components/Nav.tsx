import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { type SectionId, useActiveSection } from '@/hooks/useActiveSection';

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'hero', label: 'Hero' },
  { id: 'experience', label: 'Experience' },
  { id: 'tech-stack', label: 'Tech Stack' },
];

interface Pill {
  left: number;
  width: number;
}

export function Nav() {
  const active = useActiveSection();
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Partial<Record<SectionId, HTMLAnchorElement>>>({});
  const [pill, setPill] = useState<Pill | null>(null);

  const measurePill = useCallback(() => {
    const el = linkRefs.current[active];
    const container = containerRef.current;
    if (!el || !container) return;

    const { left: elLeft, width } = el.getBoundingClientRect();
    const { left: cLeft } = container.getBoundingClientRect();
    setPill({ left: elLeft - cLeft, width });
  }, [active]);

  // Sync immediately after DOM paint to avoid a flash of wrong position.
  useLayoutEffect(() => {
    measurePill();
  }, [measurePill]);

  // Recalculate on resize so the pill stays aligned.
  useEffect(() => {
    window.addEventListener('resize', measurePill, { passive: true });
    return () => window.removeEventListener('resize', measurePill);
  }, [measurePill]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-xl font-headline font-bold tracking-tighter text-on-surface">
          Georgios{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">
            Georgiou
          </span>
        </div>

        <div ref={containerRef} className="hidden md:flex items-center gap-8 relative">
          {pill && (
            <span
              className="absolute -bottom-1 h-[2px] rounded-full bg-blue-400"
              style={{
                left: pill.left,
                width: pill.width,
                transition: 'left 280ms cubic-bezier(0.4, 0, 0.2, 1), width 280ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          )}

          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              ref={(el) => {
                linkRefs.current[id] = el ?? undefined;
              }}
              href={`#${id}`}
              className={`font-headline tracking-tighter py-1 transition-colors duration-300 ${
                active === id ? 'text-blue-400 font-bold' : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="https://www.linkedin.com/in/geo-georgiou"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-xl font-bold hover:shadow-[0_10px_30px_rgba(45,98,228,0.3)] transition-all shadow-xl active:scale-95 inline-flex items-center"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}
