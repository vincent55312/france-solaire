import HeaderLanding from '@/components/HeaderLanding';
import HeroSection from '@/components/landing/HeroSection';
import SavoirFaireSection from '@/components/landing/SavoirFaireSection';
import InterventionSection from '@/components/landing/InterventionSection';
import ContactSection from '@/components/landing/ContactSection';
import PrestationsSection from '@/components/landing/PrestationsSection';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <HeaderLanding />
        <main className="flex-grow">
          <HeroSection />
          <SavoirFaireSection />
          <PrestationsSection />
          <InterventionSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
