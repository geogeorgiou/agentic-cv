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

export function TechStack() {
  return (
    <section className="py-32 relative overflow-hidden" id="tech-stack">
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
          <div className="glass-card p-8 rounded-[2rem] flex flex-col border border-outline-variant/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_5px_rgba(181,196,255,0.2)]">
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

          <div className="glass-card p-8 rounded-[2rem] flex flex-col border border-outline-variant/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_5px_rgba(181,196,255,0.2)]">
            <div className="absolute -top-4 right-7 bg-primary text-on-primary px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-lg">
              Mastery
            </div>
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
            <div>
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
          </div>

          <div className="glass-card p-8 rounded-[2rem] flex flex-col border border-outline-variant/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_5px_rgba(181,196,255,0.2)]">
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
        </div>
      </div>
    </section>
  );
}
