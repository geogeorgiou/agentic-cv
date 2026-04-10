import { useEffect, useState } from 'react';

export const SECTION_IDS = ['hero', 'experience', 'tech-stack'] as const;
export type SectionId = (typeof SECTION_IDS)[number];

const NAV_HEIGHT = 80;
// How far past the nav bottom a section top must be to become active.
const ACTIVATION_OFFSET = 120;

function getActiveSectionFromScroll(): SectionId {
  const threshold = window.scrollY + NAV_HEIGHT + ACTIVATION_OFFSET;
  let current: SectionId = SECTION_IDS[0];

  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= threshold) {
      current = id;
    }
  }

  return current;
}

export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>(SECTION_IDS[0]);

  useEffect(() => {
    const update = () => {
      const next = getActiveSectionFromScroll();
      setActive((prev) => (prev === next ? prev : next));
    };

    // Run immediately so a page refresh respects the current scroll position.
    update();

    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return active;
}
