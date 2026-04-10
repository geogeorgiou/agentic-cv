const STATS = [
  { value: '6+', label: 'Years of Experience' },
  { value: '3+', label: 'Certifications' },
  { value: '5+', label: 'Companies Worked With' },
];

export function Stats() {
  return (
    <section className="py-20 bg-surface flex items-center justify-center min-h-[30vh]">
      <div className="max-w-7xl w-full px-8 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full justify-items-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-headline font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-on-surface-variant font-label text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
