function TechPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-label bg-surface-container border border-outline-variant/30 text-on-surface-variant">
      {label}
    </span>
  );
}

function CardHeader({
  href,
  name,
  badge,
  badgeColor,
  period,
  periodColor,
}: {
  href: string;
  name: string;
  badge: string;
  badgeColor: string;
  period: string;
  periodColor: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-6">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-surface-container-lowest rounded-xl flex items-center justify-center shrink-0"
          aria-label={`Visit ${name} website`}
        >
          <img
            height="18"
            width="18"
            src={`http://www.google.com/s2/favicons?domain=${href}`}
            alt={`${name} favicon`}
          />
        </a>
        <div>
          <h3 className="text-2xl font-headline font-bold text-on-surface">{name}</h3>
          <span className={`${badgeColor} font-label text-xs uppercase tracking-widest`}>{badge}</span>
        </div>
      </div>
      <div className="text-right">
        <span className={`${periodColor} font-bold text-sm`}>{period}</span>
      </div>
    </div>
  );
}

const cardClass =
  'glass-card p-10 rounded-2xl group border transition-transform duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.02] hover:-translate-y-1';

const contentRevealClass =
  'max-h-0 group-hover:max-h-[600px] opacity-0 group-hover:opacity-100 overflow-hidden group-hover:overflow-y-auto mt-0 group-hover:mt-6 pr-3 transition-[max-height,opacity,margin-top] duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]';

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

        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {/* ── AgileActors ── */}
          <div className={`${cardClass} border-outline-variant/20`}>
            <CardHeader
              href="https://www.agileactors.com/"
              name="AgileActors"
              badge="IT Professionals Acting for Businesses"
              badgeColor="text-primary"
              period="May 2022 — present"
              periodColor="text-primary"
            />

            <div className={contentRevealClass}>
              <p className="text-secondary font-label text-sm mb-6 uppercase tracking-widest">
                Senior Software Engineer / Tech Lead
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-on-surface font-body font-semibold mb-2">Sportion</p>
                  <p className="text-on-surface-variant font-body leading-relaxed mb-4">
                    <ul className="list-disc ml-6">
                      <li>
                        Established a structured, feature-based development approach to improve scalability and
                        maintainability.
                      </li>
                      <li>Integrated unit testing at the pipeline level to enhance code quality and reliability.</li>
                      <li>
                        Implemented consistent structured logging, improved authentication workflows and centralized
                        error handling across Backoffice products.
                      </li>
                      <li>
                        Resolved expired OKTA authentication configuration issues restoring and securing DEV
                        environments.
                      </li>
                      <li>
                        Initiated a long-term transition plan to replace an unscalable and unmaintainable role based
                        grouping system. (CASL)
                      </li>
                      <li>
                        Facilitated team discussions to encourage and document frontend innovations and best practices.
                      </li>
                      <li>
                        Produced detailed technical documentation and established a standardized onboarding template for
                        new team members.
                      </li>
                      <li>
                        Refactored key application pages, increasing maintainability and establishing credibility with
                        business stakeholders.
                      </li>
                      <li>
                        Identified and remediated security vulnerabilities across multiple application layers (React,
                        Next.js, Node).
                      </li>
                      <li>
                        Launched a dedicated payment ecosystem communication channel to streamline collaboration among
                        technical leads.
                      </li>
                      <li>
                        Introduced testing branches to efficiently aggregate and validate feature sets, optimizing the
                        Dev-QA process.
                      </li>
                      <li>
                        Collaborated with QA and DevOps to resolve complex cross-team configuration issues, ensuring
                        reliable CI/CD delivery.
                      </li>
                      <li>
                        Optimized Docker image build processes, reducing image sizes by approximately 60% via
                        multi-stage builds.
                      </li>
                    </ul>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Next.JS App Router / Pages Router',
                      'TypeScript',
                      'React Query v5',
                      'React Hook Form',
                      'axios',
                      'Tailwind CSS',
                      'Vite',
                      'Vitest',
                      'OKTA',
                      'Zod',
                      'Storybook',
                    ].map((t) => (
                      <TechPill key={t} label={t} />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-on-surface font-body font-semibold mb-2">
                    Allwyn Lottery Solutions — NextJS Engineer
                  </p>
                  <p className="text-on-surface-variant font-body leading-relaxed mb-4">
                    Migrated a legacy application to the latest App Router Next.JS stack, taking ownership of
                    abstracting and modularizing existing logic. Implemented comprehensive unit and integration tests,
                    developed a centralised re-usable error-handling solution and designed an RBAC layer covering both
                    client and server. Collaborated closely with PO and TL on sprint planning, commitment and blocker
                    identification.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Next.JS App Router',
                      'TypeScript',
                      'React Query v5',
                      'React Hook Form',
                      'axios',
                      'Vitest',
                      'Keycloak JS',
                      'Yup',
                    ].map((t) => (
                      <TechPill key={t} label={t} />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-on-surface font-body font-semibold mb-2">
                    Newcross Healthcare — React FE Engineer
                  </p>
                  <p className="text-on-surface-variant font-body leading-relaxed mb-4">
                    Migrated and refactored a JavaScript codebase to TypeScript while in production. Guided a scrum team
                    to deliver an MVP React product tested at both unit and E2E level. Contributed to a company-wide
                    Component Design System and built the new HR system spanning both React frontend and Java backend.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React TS',
                      'React Query v5',
                      'React Hook Form',
                      'axios',
                      'Zustand',
                      'Playwright',
                      'Jest',
                      'Keycloak JS',
                      'Yup',
                      'Sentry',
                      'MSW',
                      'KafkaJS',
                      'Styled Components',
                      'Vite',
                    ].map((t) => (
                      <TechPill key={t} label={t} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Netu ── */}
          <div className={`${cardClass} border-outline-variant/20`}>
            <CardHeader
              href="https://www.netugroup.com/"
              name="Netu"
              badge="ERP, CRM software, Systems Integration, Business and Technology"
              badgeColor="text-secondary"
              period="March 2021 — May 2022"
              periodColor="text-secondary"
            />

            <div className={contentRevealClass}>
              <p className="text-secondary font-label text-sm mb-4 uppercase tracking-widest">Fullstack Developer</p>
              <p className="text-on-surface-variant font-body leading-relaxed mb-4">
                Worked as a consultant on the new eJustice product for the Greek Police, migrating a legacy backend MVC
                codebase to a modern REST architecture while simultaneously building the frontend.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React TS', 'MUI', 'Java Spring Boot', 'JBoss', 'Oracle DB'].map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Dataverse ── */}
          <div className={`${cardClass} border-primary/20`}>
            <CardHeader
              href="https://www.dataverse.gr/"
              name="Dataverse Ltd."
              badge="Management platform of digital and printed documents"
              badgeColor="text-primary"
              period="Feb 2020 — March 2021"
              periodColor="text-primary"
            />

            <div className={contentRevealClass}>
              <p className="text-secondary font-label text-sm mb-4 uppercase tracking-widest">
                Junior Software Engineer
              </p>
              <p className="text-on-surface-variant font-body leading-relaxed mb-4">
                Delivered fullstack solutions in small agile teams for public sector clients including EVEA and AADE.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React JS', 'Java Spring Boot', 'JSP', 'Hibernate', 'MariaDB', 'Oracle DB'].map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
