import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Experience } from '@/components/Experience';
import { TechStack } from '@/components/TechStack';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <TechStack />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
