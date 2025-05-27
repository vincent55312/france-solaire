import React from 'react';
import InterventionMap from './InterventionMap';

const InterventionSection = () => {
  return (
    <section id="intervention" className="relative py-10 md:py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
            <svg className="w-7 h-7 md:w-8 md:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Installation Panneaux Solaires Hauts-de-France
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Installateur expert RGE de panneaux solaires photovoltaïques, pompes à chaleur et isolation thermique dans le Nord (59), Pas-de-Calais (62), Somme (80) et Seine-Maritime (76). Devis gratuit et éligibilité aux aides financières MaPrimeRénov'.
            </p>
          </div>
        </div>

        {/* Carte interactive */}
        <div className="mb-6 md:mb-8">
          <InterventionMap />
        </div>
      </div>

      {/* Divider Brush Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-6 md:h-8" 
          viewBox="0 0 1200 60" 
          preserveAspectRatio="none"
          fill="none"
        >
          <path 
            d="M0,60 C150,15 300,45 450,30 C600,15 750,45 900,35 C1050,25 1150,40 1200,30 L1200,60 Z" 
            fill="currentColor" 
            className="text-orange-400"
          />
          <path 
            d="M0,55 C200,20 400,40 600,25 C800,10 1000,35 1200,25 L1200,60 Z" 
            fill="currentColor" 
            className="text-yellow-300 opacity-70"
          />
        </svg>
      </div>
    </section>
  );
};

export default InterventionSection; 