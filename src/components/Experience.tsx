import './Experience.css';

const JOBS = [
  {
    id: 'agileactors',
    name: 'AgileActors',
    icon: 'groups',
    iconColor: 'text-primary',
    badgeText: 'Foundation',
    badgeColor: 'text-primary',
    period: 'May 2022 — present',
    periodColor: 'text-primary',
    borderClass: 'border-outline-variant/20',
    role: 'Senior Software Engineer / Tech Lead',
    description:
      'Allwyn Lottery Solutions Client – NextJS Engineer\n\
Migrating old legacy application into latest App Router Next.JS app\n\
Took ownership of abstracting and modularizing existing logic and functionality\n\
Implemented comprehensive unit and integration tests using Vitest testing lib\n\
Developed centralized, re-usable error handling solution for app consistency\n\
Designed and integrated RBAC solution for both client and server layer\n\
Collaborated with PO, TL for sprint planning, commitment and blocker identification\n\
Tech: - App Router NextJS TS, React Query v5, React Hook Form, axios, Vitest, Keycloak\n\
JS, Yup\n\
Newcross Healthcare Client – React FE Engineer\n\
Migrated and refactored old JS into TS code while also in Prod\n\
Guided a scrum team to build an MVP React product with TS tested on both unit and\n\
E2E level.\n\
Worked on a Component Design System to be re-used on wider company scale.\n\
Provided value by developing the new HR system working both on React and Java BE.\n\
Tech: - React TS, React Query v5, React Hook Form, axios, Zustand, Playwright, Jest,\n\
Keycloak JS, Yup, Sentry, Mailosaur, MSW, Kafkajs, Styled Components, Faker, Vite',
    link: 'https://www.agileactors.com/',
  },
  {
    id: 'netu',
    name: 'Netu',
    icon: 'lan',
    iconColor: 'text-secondary',
    badgeText: 'Enterprise Systems',
    badgeColor: 'text-secondary',
    period: 'March 2021 — May 2022',
    periodColor: 'text-secondary',
    borderClass: 'border-outline-variant/20',
    role: 'Fullstack Developer',
    description:
      'Worked as consultant for new eJustice product for Greek Police and migrated code from old legacy backend MVC code to REST while also writing frontend.\n\nTech: - React, Java Spring Boot, Maria DB, Oracle DB',
    link: 'https://www.netugroup.com/',
  },
  {
    id: 'dataverse',
    name: 'Dataverse Ltd.',
    icon: 'database',
    iconColor: 'text-primary',
    badgeText: 'Active Partner',
    badgeColor: 'text-primary',
    period: 'Feb 2020 — March 2021',
    periodColor: 'text-primary',
    borderClass: 'border-primary/20',
    role: 'Junior Software Engineer',
    description:
      'Implemented fullstack solutions while in small agile dev teams at public sector projects for customers like EVEA and AADE.\n\nTech: - React, Java Spring Boot, Maria DB, Oracle DB',
    link: 'https://www.dataverse.gr/',
  },
];

export function Experience() {
  return (
    <section className="py-32 bg-surface-container-low relative" id="experience">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tight mb-4">
              Professional Journey
            </h2>
            <div className="h-1.5 w-24 bg-primary rounded-full" />
          </div>
          <p className="text-on-surface-variant text-lg font-body max-w-sm">
            Experience spanning both public and private sectors, delivering solutions across diverse business domains.
          </p>
        </div>

        <div className="experience-deck max-w-4xl mx-auto">
          {JOBS.map((job) => (
            <div key={job.id} className={`deck-card glass-card p-10 rounded-2xl group border ${job.borderClass}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-surface-container-lowest rounded-xl flex items-center justify-center"
                    aria-label={`Visit ${job.name} website`}
                  >
                    <span className="material-symbols-outlined text-3xl">
                      <img
                        height="18"
                        width="18"
                        src={`http://www.google.com/s2/favicons?domain=${job.link}`}
                        alt={`${job.name} favicon`}
                      />
                    </span>
                  </a>

                  <div>
                    <h3 className="text-2xl font-headline font-bold text-on-surface">{job.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`${job.badgeColor} font-label text-xs uppercase tracking-widest`}>
                        {job.badgeText}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`${job.periodColor} font-bold text-sm`}>{job.period}</span>
                </div>
              </div>

              <div className="card-content-reveal">
                <p className="text-secondary font-label text-sm mb-4 uppercase tracking-widest">{job.role}</p>
                <p className="text-on-surface-variant font-body leading-relaxed max-w-2xl">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
