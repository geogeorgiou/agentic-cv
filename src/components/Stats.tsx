import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: '6+', label: 'Years of Experience' },
  { value: '3+', label: 'Certifications' },
  { value: '5+', label: 'Companies Worked With' },
];

const DELAYS = ['delay-0', 'delay-150', 'delay-300'] as const;

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-surface flex items-center justify-center min-h-[30vh]">
      <div className="max-w-7xl w-full px-8 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full justify-items-center">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center flex flex-col items-center">
              <div
                className={`text-4xl md:text-5xl font-headline font-bold text-primary mb-2 transition-all duration-700 ease-out ${DELAYS[i]} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                {stat.value}
              </div>
              <div className="text-on-surface-variant font-label text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
