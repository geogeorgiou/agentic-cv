import { useEffect, useRef, useState } from 'react';
import { useIsDesktop } from '@/hooks/useIsDesktop';

const BACKGROUND_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCs0ixmFlmQrCSwoBd__F_t89q-TTt9dISXB5kFcUIwfqZV9gIDKHJ3XgKG5o__rw0ICOAnhMvzFxDzuwaqrc9vr0Tr61p5zAn_dzC3mJ9CmbsMddjzagwaCKtpyEmZc7r29zA6Zxlw8oKAyY6bybwBFLr34mrSLHsAHzORLmihGS67lOcc_Zp-waBgZ3XFK_bA2jgu1leEo5evDbUTdyER_4bMq_SspzXomumg-YTvBloet_zabeeJxkVwjmXzu1okw9WLw6ueljNP';

const BACKEND_SKILLS = ['Node.js / NestJS', 'Java / Spring Boot', 'SQL', 'Hibernate'];
const FRONTEND_SKILLS = [
  'React / Next.js',
  'TypeScript / ESNext',
  'Redux / Zustand',
  'TanStack Query',
  'Tailwind / SCSS / CSS Modules',
  'Framer Motion',
  'Vitest / Jest / Playwright',
];
const PIPELINE_SKILLS = ['Docker / Kubernetes', 'GitHub / GitLab Actions'];

const FLIP_DURATION = 1300;

const CARD_CONFIG = [
  { flipDelay: 0, color: '#b5c4ff', icon: 'dns', iconColor: 'text-primary' },
  { flipDelay: 220, color: '#d0bcff', icon: 'devices', iconColor: 'text-secondary' },
  { flipDelay: 440, color: '#ffb59b', icon: 'rocket_launch', iconColor: 'text-tertiary' },
] as const;

// Shared SVG turbulence filter — same technique as the CodePen
function TurbulenceFilter() {
  return (
    <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
      <defs>
        <filter id="electric-turbulence" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
          <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
            <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
          <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
            <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
          <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
            <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
          <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
            <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>
          <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
          <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
          <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="combinedNoise"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
      </defs>
    </svg>
  );
}

// Shared border layers — used by both the post-flip animation and the hover state
function ElectricBorderLayers({ color }: { color: string }) {
  return (
    <>
      <div className="absolute inset-0 rounded-[2rem]" style={{ border: `2px solid ${color}55` }} />
      <div
        className="absolute rounded-[2rem]"
        style={{ inset: '-2px', border: `2px solid ${color}`, filter: 'url(#electric-turbulence)' }}
      />
      <div
        className="absolute inset-0 rounded-[2rem]"
        style={{ border: `2px solid ${color}99`, filter: 'blur(1px)' }}
      />
      <div className="absolute inset-0 rounded-[2rem]" style={{ border: `2px solid ${color}`, filter: 'blur(5px)' }} />
      <div
        className="absolute inset-0 rounded-[2rem]"
        style={{
          background: 'linear-gradient(-30deg, white, transparent 30%, transparent 70%, white)',
          filter: 'blur(10px)',
          transform: 'scale(1.1)',
          mixBlendMode: 'overlay',
          opacity: 0.5,
        }}
      />
      <div
        className="absolute rounded-[2rem] -z-10"
        style={{
          inset: '-4px',
          background: `linear-gradient(-30deg, ${color}, transparent, ${color})`,
          filter: 'blur(10px)',
          transform: 'scale(1.08)',
          opacity: 0.35,
        }}
      />
    </>
  );
}

// Animated version — fires after flip, runs one turbulence cycle then fades
function ElectricBorder({ color, appearDelay }: { color: string; appearDelay: number }) {
  return (
    <div
      className="absolute inset-0 rounded-[2rem] pointer-events-none z-10"
      style={{ animation: `electric-appear 5s ease-in-out ${appearDelay}ms both` }}
    >
      <ElectricBorderLayers color={color} />
    </div>
  );
}

interface PokerCardProps {
  index: number;
  visible: boolean;
  front: React.ReactNode;
  badge?: React.ReactNode;
}

function PokerCard({ index, visible, front, badge }: PokerCardProps) {
  const { flipDelay, color, icon, iconColor } = CARD_CONFIG[index];
  const electricDelay = flipDelay + FLIP_DURATION;
  const [hovered, setHovered] = useState(false);
  const isDesktop = useIsDesktop();

  // On mobile: show front immediately, no flip, no electric effects
  if (!isDesktop) {
    return (
      <div className="relative">
        {front}
        {badge}
      </div>
    );
  }

  return (
    <div
      className="relative [perspective:1200px] transition-transform duration-300"
      style={{ transform: hovered ? 'translateY(-8px)' : 'translateY(0)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card inner — rotates in 3D space */}
      <div
        className="relative [transform-style:preserve-3d]"
        style={{
          transform: visible ? undefined : 'rotateY(180deg)',
          animation: visible
            ? `poker-flip ${FLIP_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1) ${flipDelay}ms both`
            : 'none',
        }}
      >
        {/* ── Front face — full card content ── */}
        <div className="[backface-visibility:hidden]">{front}</div>

        {/* ── Back face — face-down, icon only ── */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div
            className="glass-card rounded-[2rem] h-full flex flex-col items-center justify-center border border-outline-variant/20 overflow-hidden"
            style={{ minHeight: '200px' }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, ${color} 0, ${color} 1px, transparent 0, transparent 50%)`,
                backgroundSize: '12px 12px',
              }}
            />
            <span className={`absolute top-4 left-4 material-symbols-outlined text-sm opacity-30 ${iconColor}`}>
              {icon}
            </span>
            <span
              className={`absolute bottom-4 right-4 material-symbols-outlined text-sm opacity-30 ${iconColor} rotate-180`}
            >
              {icon}
            </span>
            <div
              className="relative flex items-center justify-center w-20 h-20 rounded-2xl"
              style={{ background: `${color}18`, boxShadow: `0 0 30px 8px ${color}22` }}
            >
              <div className="absolute inset-0 rounded-2xl blur-xl" style={{ background: `${color}30` }} />
              <span
                className={`material-symbols-outlined text-5xl relative z-10 ${iconColor}`}
                style={{ fontVariationSettings: "'FILL' 1", filter: `drop-shadow(0 0 8px ${color}88)` }}
              >
                {icon}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Post-flip electric border — animated, one cycle */}
      {visible && <ElectricBorder color={color} appearDelay={electricDelay} />}

      {/* Hover electric border — CSS transition, stays while hovered */}
      <div
        className="absolute inset-0 rounded-[2rem] pointer-events-none z-10"
        style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease' }}
      >
        <ElectricBorderLayers color={color} />
      </div>

      {/* Badge — sits above the electric border for depth */}
      {badge}
    </div>
  );
}

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-x-hidden" id="tech-stack">
      <TurbulenceFilter />

      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <img className="w-full h-full object-cover" src={BACKGROUND_IMG} alt="" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6 tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-lg">
            Engineering toolkit optimized for performance, scalability, and developer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* ── Backend ── */}
          <PokerCard
            index={0}
            visible={visible}
            front={
              <div className="glass-card p-8 rounded-[2rem] flex flex-col border border-outline-variant/10 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">dns</span>
                  </div>
                  <h3 className="text-xl font-bold font-headline">Backend</h3>
                </div>
                <ul className="space-y-4">
                  {BACKEND_SKILLS.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-on-surface-variant">
                      <span
                        className="material-symbols-outlined text-primary text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="font-body">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />

          {/* ── Frontend ── */}
          <PokerCard
            index={1}
            visible={visible}
            badge={
              <div className="absolute -top-4 right-7 z-20 bg-primary text-on-primary px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-lg">
                Mastery
              </div>
            }
            front={
              <div className="glass-card p-8 rounded-[2rem] flex flex-col border border-outline-variant/10 transition-transform duration-300">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-secondary">devices</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-headline">Frontend</h3>
                    <p className="text-on-surface-variant text-sm font-label uppercase tracking-widest mt-1">
                      Core Specialization
                    </p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {FRONTEND_SKILLS.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-on-surface-variant">
                      <span
                        className="material-symbols-outlined text-secondary text-base"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="font-body font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />

          {/* ── Pipelines ── */}
          <PokerCard
            index={2}
            visible={visible}
            front={
              <div className="glass-card p-8 rounded-[2rem] flex flex-col border border-outline-variant/10 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary">rocket_launch</span>
                  </div>
                  <h3 className="text-xl font-bold font-headline">Pipelines</h3>
                </div>
                <ul className="space-y-4">
                  {PIPELINE_SKILLS.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-on-surface-variant">
                      <span
                        className="material-symbols-outlined text-tertiary text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="font-body">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
