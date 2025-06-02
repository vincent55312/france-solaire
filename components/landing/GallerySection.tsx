'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Photo {
  id: number;
  src: string;
  alt: string;
  filename: string;
}

const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Récupérer les photos depuis l'API
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/photos');
        const data = await response.json();
        
        if (data.photos && data.photos.length > 0) {
          setPhotos(data.photos);
          setError(null);
        } else {
          setError('Aucune photo trouvée dans le dossier photos');
        }
      } catch (err) {
        console.error('Erreur lors du chargement des photos:', err);
        setError('Erreur lors du chargement des photos');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  // Gérer le responsive
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Desktop: 3 photos
      } else {
        setItemsPerView(1); // Mobile/Tablet: 1 photo
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-scroll en boucle infinie
  useEffect(() => {
    if (photos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (itemsPerView === 1) {
          // Mode mobile : boucle simple
          return (prevIndex + 1) % photos.length;
        } else {
          // Mode desktop : boucle par groupe de 3
          const maxIndex = Math.max(0, photos.length - itemsPerView);
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        }
      });
    }, 4000); // Change toutes les 4 secondes

    return () => clearInterval(interval);
  }, [photos.length, itemsPerView]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (itemsPerView === 1) {
        return (prevIndex - 1 + photos.length) % photos.length;
      } else {
        const maxIndex = Math.max(0, photos.length - itemsPerView);
        return prevIndex <= 0 ? maxIndex : prevIndex - 1;
      }
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (itemsPerView === 1) {
        return (prevIndex + 1) % photos.length;
      } else {
        const maxIndex = Math.max(0, photos.length - itemsPerView);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      }
    });
  };

  // État de chargement
  if (loading) {
    return (
      <section id="gallery" className="relative py-16 bg-gradient-to-br from-stone-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-stone-500 rounded-full shadow-lg mb-3 md:mb-4">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Nos Réalisations Récentes
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
                Explorez quelques-unes de nos installations solaires et projets de rénovation énergétique dans les Hauts-de-France.
              </p>
              <p className="text-xs md:text-sm text-gray-500 italic">
                Chaque projet est unique et reflète notre engagement envers la qualité et la satisfaction client depuis notre création.
              </p>
            </div>
          </div>

          <div className="relative mb-10">
            <div className="h-64 md:h-80 bg-gray-200 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="flex items-center space-x-2 text-gray-500">
                <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Chargement des photos...</span>
              </div>
            </div>
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
              d="M0,60 C300,20 300,40 600,30 C900,20 900,40 1200,30 L1200,60 Z" 
              fill="currentColor" 
              className="text-stone-500"
            />
            <path 
              d="M0,55 C250,25 350,35 600,25 C850,15 950,35 1200,25 L1200,60 Z" 
              fill="currentColor" 
              className="text-slate-400 opacity-70"
            />
          </svg>
        </div>
      </section>
    );
  }

  // État d'erreur
  if (error || photos.length === 0) {
    return (
      <section id="gallery" className="relative py-16 bg-gradient-to-br from-stone-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-stone-500 rounded-full shadow-lg mb-3 md:mb-4">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Nos Réalisations
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos derniers projets de rénovation énergétique et d'installation de panneaux solaires dans les Hauts-de-France.
            </p>
          </div>

          <div className="relative mb-10">
            <div className="h-64 md:h-80 bg-gray-100 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-lg font-semibold mb-2">Aucune photo disponible</p>
                <p className="text-sm">{error || 'Ajoutez des images dans le dossier public/photos'}</p>
              </div>
            </div>
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
              d="M0,60 C300,20 300,40 600,30 C900,20 900,40 1200,30 L1200,60 Z" 
              fill="currentColor" 
              className="text-stone-500"
            />
            <path 
              d="M0,55 C250,25 350,35 600,25 C850,15 950,35 1200,25 L1200,60 Z" 
              fill="currentColor" 
              className="text-slate-400 opacity-70"
            />
          </svg>
        </div>
      </section>
    );
  }

  const maxIndex = itemsPerView === 1 ? photos.length - 1 : Math.max(0, photos.length - itemsPerView);

  return (
    <section id="gallery" className="relative py-16 bg-gradient-to-br from-stone-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-stone-500 rounded-full shadow-lg mb-3 md:mb-4">
            <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Nos Réalisations Récentes
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
              Explorez quelques-unes de nos installations solaires et projets de rénovation énergétique dans les Hauts-de-France.
            </p>
            <p className="text-xs md:text-sm text-gray-500 italic">
              Chaque projet est unique et reflète notre engagement envers la qualité et la satisfaction client depuis notre création.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: itemsPerView === 1 
                  ? `translateX(-${currentIndex * 100}%)` 
                  : `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {photos.map((photo, index) => (
                <div 
                  key={photo.id} 
                  className={`h-64 md:h-80 flex-shrink-0 relative ${
                    itemsPerView === 1 
                      ? 'w-full' 
                      : 'w-1/3'
                  }`}
                  style={{ 
                    paddingLeft: itemsPerView > 1 && index > 0 ? '8px' : '0',
                    paddingRight: itemsPerView > 1 && index < photos.length - 1 ? '8px' : '0'
                  }}
                >
                  <div className="w-full h-full relative rounded-lg overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes={itemsPerView === 1 ? "100vw" : "33vw"}
                      onError={(e) => {
                        console.error(`Erreur de chargement pour: ${photo.src}`);
                      }}
                    />
                    {/* Overlay pour améliorer la lisibilité */}
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flèches de navigation */}
          {photos.length > itemsPerView && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-700 p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl z-10 border border-gray-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-700 p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl z-10 border border-gray-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Navigation simple et robuste */}
          {photos.length > itemsPerView && (
            <div className="flex justify-center items-center mb-8 space-x-4">
              {/* Compteur simple */}
              <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200">
                <span className="text-sm font-medium text-gray-700">
                  {itemsPerView === 1 
                    ? `${currentIndex + 1} / ${photos.length}`
                    : `${currentIndex + 1}-${Math.min(currentIndex + itemsPerView, photos.length)} / ${photos.length}`
                  }
                </span>
              </div>
              
              {/* Barre de progression */}
              <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg border border-gray-200">
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-stone-600 rounded-full transition-all duration-500 ease-out"
                    style={{ 
                      width: `${((currentIndex + 1) / (itemsPerView === 1 ? photos.length : maxIndex + 1)) * 100}%` 
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bouton pour voir toute la galerie */}
        <div className="text-center mb-8">
          <Link 
            href="/galerie"
            className="inline-flex items-center px-8 py-3 bg-stone-600 hover:bg-stone-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Découvrir tous nos projets
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
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
            d="M0,60 C300,20 300,40 600,30 C900,20 900,40 1200,30 L1200,60 Z" 
            fill="currentColor" 
            className="text-stone-500"
          />
          <path 
            d="M0,55 C250,25 350,35 600,25 C850,15 950,35 1200,25 L1200,60 Z" 
            fill="currentColor" 
            className="text-slate-400 opacity-70"
          />
        </svg>
      </div>
    </section>
  );
};

export default GallerySection; 