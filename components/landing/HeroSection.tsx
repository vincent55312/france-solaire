import React from 'react';
import { FaMoneyBillWave, FaChartLine, FaStar } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen md:min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden" style={{ minHeight: 'calc(100vh)' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-3 md:px-4 py-20 md:py-20" style={{ paddingTop: 'max(5rem, calc(80px + env(safe-area-inset-top)))', paddingBottom: 'max(5rem, env(safe-area-inset-bottom))' }}>
        <div className="text-center md:max-w-5xl mx-auto h-full flex flex-col justify-center">
          {/* Badges container */}
          <div className="flex flex-row items-center justify-center gap-2 md:gap-3 mb-8 md:mb-8">
            {/* Badge RGE */}
            <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-green-100 text-green-800 rounded-full text-xs md:text-sm font-medium border border-green-200">
              <svg className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.498 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd"/>
              </svg>
              <span className="hidden sm:inline">Entreprise certifiée RGE • Hauts-de-France</span>
              <span className="sm:hidden">Certifié RGE</span>
            </div>

            {/* Badge Google */}
            <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-white text-gray-800 rounded-full text-xs md:text-sm font-medium border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="flex items-center mr-1 md:mr-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 ${i < 4 || (i === 4 && 0.9 > 0.5) ? 'text-yellow-400' : 'text-gray-300'} group-hover:scale-110 transition-transform duration-200`}
                    style={{ 
                      animationDelay: `${i * 100}ms`,
                      ...(i === 4 && { 
                        background: 'linear-gradient(90deg, #fbbf24 90%, #d1d5db 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      })
                    }}
                  />
                ))}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-gray-900 leading-none text-xs md:text-sm">4.9/5</span>
                <span className="text-[10px] md:text-xs text-blue-600 leading-none">Google</span>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-4 leading-tight px-2">
            Votre Expert en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Rénovation Énergétique
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-10 max-w-none md:max-w-3xl mx-auto leading-relaxed px-2">
            Panneaux solaires, isolation, chauffage et menuiseries dans les Hauts-de-France. 
            Investissez dans votre patrimoine et économisez jusqu'à 70% sur vos factures d'énergie avec nos solutions certifiées RGE.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-2 md:gap-4 justify-center items-center mb-10 md:mb-12 px-2">
            <a 
              href="#contact" 
              className="flex-1 md:w-auto inline-flex items-center justify-center px-4 py-4 md:px-6 md:py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"/>
                <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"/>
              </svg>
              <span className="hidden sm:inline">Devis gratuit en 48h</span>
              <span className="sm:hidden">Devis gratuit</span>
            </a>
            <a 
              href="tel:+33788066712" 
              className="flex-1 md:w-auto inline-flex items-center justify-center px-4 py-4 md:px-6 md:py-3 bg-white text-green-600 font-bold rounded-xl border-2 border-green-600 hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
              </svg>
              07 88 06 67 12
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 max-w-none md:max-w-3xl mx-auto px-2">
            <div className="flex items-center justify-center space-x-3 p-4 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 md:w-6 md:h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.814 3.051 10.77 7.608 13.566a.75.75 0 00.784 0C15.199 20.52 18.25 15.564 18.25 9.75a12.74 12.74 0 00-.635-4.235.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08zm4.877 5.166a.75.75 0 10-1.06-1.06l-3.032 3.032-1.282-1.282a.75.75 0 00-1.06 1.06l1.813 1.813a.75.75 0 001.06 0l3.56-3.563z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-sm md:text-sm">Certifié RGE</div>
                <div className="text-xs text-gray-600">Qualifications officielles</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100">
              <div className="flex-shrink-0">
                <FaChartLine className="w-6 h-6 md:w-6 md:h-6 text-green-600" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-sm md:text-sm">Augmentez la valeur de votre maison</div>
                <div className="text-xs text-gray-600">Valorisation immobilière</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100">
              <div className="flex-shrink-0">
                <FaMoneyBillWave className="w-6 h-6 md:w-6 md:h-6 text-green-600" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-sm md:text-sm">Jusqu'à 70% d'économies</div>
                <div className="text-xs text-gray-600">Retour sur investissement</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile for space */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
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
            className="text-blue-400"
          />
          <path 
            d="M0,55 C200,20 400,40 600,25 C800,10 1000,35 1200,25 L1200,60 Z" 
            fill="currentColor" 
            className="text-green-400 opacity-70"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 