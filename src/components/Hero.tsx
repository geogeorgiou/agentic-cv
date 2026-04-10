import { config } from '@/config';

const AVATAR_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAJLzsc1utgxC5ZaGQqQk4aWamnFW8Lr9ZNLtj5m23TNNjSIvbbODVFDF9EUFJY-zYWH4NKr5GYz5WQtkfZaAAhff-SQjfNBowgfjc4raHN1LJAy-xndA3caeLY1Qw-Ew3TTbeAb6f0swO0XqV9ivm1N9kPy5EclYXj7K5NcFhYdkK8GnC7BeS2OBlbt6TVysm3HYyOh6XDbVxbhhDZtx_X9-vnaTK-mqLEQdKVLhlOGCYAzmFognMQ663-uzEXN4mJzxkJ4C8qVrmp';

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden hero-glow"
      id="hero"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Avatar */}
        <div className="relative inline-block mb-10">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-110" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full p-1 bg-gradient-to-tr from-primary/50 to-secondary/50 avatar-glow">
            <img
              alt="Georgios Georgiou"
              className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-4 border-surface"
              src={AVATAR_URL}
            />
          </div>
        </div>

        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-surface-container-highest/50 backdrop-blur-md border border-outline-variant/20 text-secondary text-sm font-medium tracking-wider uppercase">
          Available for Architecture &amp; Consulting
        </div>

        <h1 className="text-6xl md:text-8xl font-headline font-bold text-on-surface tracking-tighter mb-6 leading-tight">
          Georgios{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">
            Georgiou
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-on-surface-variant font-body font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Software Engineer / Tech Lead specialized in building high-performance User Interfaces minimizing user
          friction with modern technologies of JS ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={config.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_10px_30px_rgba(45,98,228,0.3)] transition-all active:scale-95 inline-flex items-center justify-center"
          >
            View Projects
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-label tracking-widest uppercase text-outline">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
