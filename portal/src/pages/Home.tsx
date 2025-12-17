import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { NewsSection } from '../components/sections/NewsSection';
import { ConsortiumSection } from '../components/sections/ConsortiumSection';
import { ErasmusSection } from '../components/sections/ErasmusSection';

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <NewsSection />
        <ConsortiumSection />
        <ErasmusSection />
      </main>
      <Footer />
    </div>
  );
};

