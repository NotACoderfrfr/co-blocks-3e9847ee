import ParticlesBackground from '@/components/ui/particles-background';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Stats from '@/components/landing/Stats';
import Features from '@/components/landing/Features';
import Templates from '@/components/landing/Templates';
import Testimonials from '@/components/landing/Testimonials';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

const Landing = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Templates />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Landing;
