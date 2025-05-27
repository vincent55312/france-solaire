import HeaderLanding from '@/components/HeaderLanding';
import HeroSection from '@/components/landing/HeroSection';
import SavoirFaireSection from '@/components/landing/SavoirFaireSection';
import InterventionSection from '@/components/landing/InterventionSection';
import GallerySection from '@/components/landing/GallerySection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
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
          <PrestationsSection />
          <SavoirFaireSection />
          <GallerySection />
          <TestimonialsSection />
          <InterventionSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
