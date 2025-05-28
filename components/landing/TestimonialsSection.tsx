'use client';

import React, { useState, useEffect } from 'react';
import testimonialsData from '../../data/testimonials.json';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  comment: string;
  project: string;
  date: string;
  reviews: string;
  photos: string | null;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  
  // Utiliser les vrais avis depuis le fichier JSON
  const testimonials: Testimonial[] = testimonialsData.testimonials;

  // Gérer le responsive
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Desktop: 3 avis
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // Tablet: 2 avis
      } else {
        setItemsPerView(1); // Mobile: 1 avis
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-scroll en boucle infinie
  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerView);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, [testimonials.length, itemsPerView]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonials.length - itemsPerView);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonials.length - itemsPerView);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  return (
    <section id="testimonials" className="relative py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-blue-500 rounded-full shadow-lg mb-3 md:mb-4">
            <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Avis Google de nos Clients
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
              Découvrez les témoignages authentiques de nos clients satisfaits dans les Hauts-de-France.
            </p>
            <p className="text-xs md:text-sm text-gray-500 italic">
              Jeune entreprise ambitieuse, nous construisons notre réputation projet après projet avec un seul objectif : votre satisfaction.
            </p>
          </div>
        </div>

        {/* Carousel d'avis */}
        <div className="relative mb-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 px-2 ${
                    itemsPerView === 1 ? 'w-full' : 
                    itemsPerView === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <div className="bg-white rounded-xl p-4 md:p-5 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100 h-full">
                    {/* Header avec étoiles et badge Google */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Google
                      </div>
                    </div>

                    {/* Informations utilisateur */}
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-semibold text-sm">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          {testimonial.location === "Local Guide" && (
                            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full mr-2 text-xs">
                              Local Guide
                            </span>
                          )}
                          <span>{testimonial.reviews}</span>
                          {testimonial.photos && (
                            <span className="ml-1">• {testimonial.photos}</span>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">{testimonial.date}</span>
                    </div>
                    
                    {/* Commentaire */}
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    
                    {/* Badge projet */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {testimonial.project}
                      </span>
                      {/* Icône Google vérifié */}
                      <div className="flex items-center text-xs text-green-600">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Vérifié
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flèches de navigation */}
          {testimonials.length > itemsPerView && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots indicateurs */}
          {testimonials.length > itemsPerView && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {Array.from({ 
                length: maxIndex + 1 
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-blue-600 shadow-lg' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Section CTA améliorée */}
        <div className="text-center mb-6 md:mb-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50/90 to-indigo-50/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-200 shadow-xl">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Des résultats qui parlent d'eux-mêmes !
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Nos clients témoignent de leur satisfaction après leurs travaux de rénovation énergétique.
                <br className="hidden md:inline" />
                <span className="font-medium text-blue-700">À votre tour de bénéficier de notre expertise reconnue.</span>
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
              {/* Bouton principal - Devis */}
              <a 
                href="#contact" 
                className="w-full lg:w-auto inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Lancer mon projet maintenant
              </a>

              {/* Séparateur avec texte */}
              <div className="flex items-center lg:mx-4">
                <div className="h-px bg-gray-300 w-8 lg:w-4"></div>
                <span className="px-3 text-sm text-gray-500 font-medium">ou</span>
                <div className="h-px bg-gray-300 w-8 lg:w-4"></div>
              </div>

              {/* Bouton secondaire - Téléphone */}
              <a 
                href="tel:0788066712" 
                className="w-full lg:w-auto inline-flex items-center justify-center px-6 py-4 bg-white hover:bg-blue-50 text-blue-700 font-semibold rounded-xl border-2 border-blue-300 hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-left">
                  <div className="font-bold">07 88 06 67 12</div>
                  <div className="text-xs text-blue-500">Réponse immédiate</div>
                </div>
              </a>
            </div>

            {/* Badge de satisfaction */}
            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium border border-blue-200">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"/>
                </svg>
                100% de clients satisfaits • Note moyenne 4.9/5
              </div>
            </div>
          </div>
        </div>

        {/* Bouton voir tous les avis */}
        <div className="text-center mb-8">
          <a 
            href="https://www.google.com/maps/place/FRANCE+SOLAIRE/@50.7729246,3.1362875,647m/data=!3m1!1e3!4m8!3m7!1s0x47c32f171ec31051:0x823bd63a814d5d53!8m2!3d50.7729212!4d3.1388624!9m1!1b1!16s%2Fg%2F11wn08wmtw!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"/>
            </svg>
            Consulter tous les avis clients
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
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
            d="M0,40 C120,60 240,10 360,45 C480,60 600,15 720,35 C840,50 960,20 1080,45 C1140,25 1170,35 1200,30 L1200,60 L0,60 Z" 
            fill="currentColor" 
            className="text-blue-400"
          />
          <path 
            d="M0,35 C180,50 300,20 420,40 C540,55 660,10 780,30 C900,45 1020,15 1140,40 C1170,30 1185,35 1200,25 L1200,60 L0,60 Z" 
            fill="currentColor" 
            className="text-indigo-300 opacity-70"
          />
        </svg>
      </div>
    </section>
  );
};

export default TestimonialsSection; 