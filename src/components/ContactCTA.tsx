import { config } from '@/config';

export function ContactCTA() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8">
      <div className="bg-gradient-to-r from-surface-container-high to-surface-container rounded-[3rem] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface mb-4">
            Let&apos;s build something
            <br />
            exceptional together.
          </h2>
          <p className="text-on-surface-variant text-lg">
            I&apos;m always interested in architectural problems and challenges in the modern world.
          </p>
        </div>
        <div className="relative z-10 w-full md:w-auto">
          <a
            href={config.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-on-surface text-surface px-12 py-5 rounded-2xl font-bold text-xl hover:bg-primary transition-all shadow-xl active:scale-95 inline-flex items-center justify-center"
            aria-label="Connect on LinkedIn"
          >
            Let&apos;s connect!
          </a>
        </div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}
