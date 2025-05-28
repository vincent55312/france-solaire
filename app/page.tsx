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
        <main className="flex-grow overflow-hidden">
          {/* Animation fade-in immédiate pour le hero */}
          <div className="animate-fadeIn">
            <HeroSection />
          </div>
          
          {/* Animations d'apparition progressive avec délais */}
          <div className="animate-slideInUp animation-delay-200">
            <PrestationsSection />
          </div>
          
          <div className="animate-slideInLeft animation-delay-400">
            <SavoirFaireSection />
          </div>
          
          <div className="animate-slideInRight animation-delay-600">
            <GallerySection />
          </div>
          
          <div className="animate-slideInUp animation-delay-800">
            <TestimonialsSection />
          </div>
          
          <div className="animate-slideInLeft animation-delay-1000">
            <InterventionSection />
          </div>
          
          <div className="animate-fadeInScale animation-delay-1200">
            <ContactSection />
          </div>
        </main>
      </div>
      
      {/* Footer avec animation séparée */}
      <div className="animate-slideInUp animation-delay-1400">
        <Footer />
      </div>
    </>
  );
}
