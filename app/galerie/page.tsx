'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaPhone, FaFileAlt, FaArrowLeft, FaArrowRight, FaTimes, FaImages, FaExclamationTriangle } from 'react-icons/fa';

interface Photo {
  id: number;
  src: string;
  alt: string;
  filename: string;
}

// Composant Skeleton Loader
const PhotoSkeleton = () => (
  <div className="group relative overflow-hidden bg-gray-200 animate-pulse rounded-2xl aspect-square">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
    <div className="absolute bottom-4 left-4 right-4">
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-2/3"></div>
    </div>
  </div>
);

const GalleryPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
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

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  const nextPhoto = () => {
    if (selectedPhoto && photos.length > 0) {
      const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);
      const nextIndex = (currentIndex + 1) % photos.length;
      setSelectedPhoto(photos[nextIndex]);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto && photos.length > 0) {
      const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);
      const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
      setSelectedPhoto(photos[prevIndex]);
    }
  };

  // Gestion des touches du clavier
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedPhoto) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhoto, photos]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      {/* Main Content avec padding-top pour compenser le header fixe */}
      <main className="pt-16">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                <FaImages className="w-6 h-6" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Galerie Photos
              </h1>
              <p className="text-lg md:text-xl text-green-100 mb-6 leading-relaxed">
                Découvrez nos photos de rénovation énergétique dans les Hauts-de-France
              </p>
              {!loading && photos.length > 0 && (
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <FaImages className="w-4 h-4 mr-2" />
                  <span className="font-medium text-sm">
                    {photos.length} photo{photos.length > 1 ? 's' : ''} disponible{photos.length > 1 ? 's' : ''}
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* État de chargement avec skeleton */}
            {loading && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center space-x-3 text-gray-600 bg-white rounded-full px-6 py-3 shadow-lg">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
                    <span className="font-medium">Chargement des photos...</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <PhotoSkeleton key={index} />
                  ))}
                </div>
              </div>
            )}

            {/* État d'erreur */}
            {(error || (!loading && photos.length === 0)) && (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaExclamationTriangle className="w-8 h-8 text-orange-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Aucune photo disponible
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {error || 'Nos photos arrivent bientôt ! En attendant, contactez-nous pour découvrir nos projets.'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link 
                      href="/"
                      className="inline-flex items-center px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <FaArrowLeft className="w-4 h-4 mr-2" />
                      Retour à l'accueil
                    </Link>
                    <Link 
                      href="/#contact"
                      className="inline-flex items-center px-5 py-2.5 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold rounded-xl transition-all duration-200"
                    >
                      <FaFileAlt className="w-4 h-4 mr-2" />
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Galerie */}
            {!loading && photos.length > 0 && (
              <div className="space-y-6">
                {/* Statistiques */}
                <div className="text-center">
                  <div className="inline-flex items-center bg-white rounded-full px-5 py-2.5 shadow-lg border border-gray-100">
                    <FaImages className="w-4 h-4 text-green-600 mr-2" />
                    <span className="font-medium text-gray-700 text-sm">
                      {photos.length} photo{photos.length > 1 ? 's' : ''} dans notre galerie
                    </span>
                  </div>
                </div>

                {/* Grid de photos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {photos.map((photo, index) => (
                    <div 
                      key={photo.id}
                      className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02]"
                      onClick={() => openModal(photo)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold text-sm mb-1">Photo #{photo.id}</h3>
                                <p className="text-xs opacity-90">Cliquez pour agrandir</p>
                              </div>
                              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <FaImages className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div className="relative max-w-7xl max-h-full w-full" onClick={(e) => e.stopPropagation()}>
              
              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
                />
              </div>
              
              {/* Controls */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={closeModal}
                  className="w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              {photos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                  >
                    <FaArrowLeft className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                  >
                    <FaArrowRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Indicateur de position */}
              {photos.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  {photos.findIndex(p => p.id === selectedPhoto.id) + 1} / {photos.length}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Section contact CTA */}
        <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Votre projet vous ressemble ?
              </h2>
              <p className="text-lg text-green-100 mb-8 leading-relaxed">
                Comme nos clients satisfaits, bénéficiez d'une étude personnalisée et gratuite pour votre projet de rénovation énergétique.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <a 
                  href="tel:0788066712"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-bold rounded-xl hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <FaPhone className="w-4 h-4 mr-2" />
                  <span>07 88 06 67 12</span>
                </a>
                <Link 
                  href="/#contact"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-green-600 transition-all duration-200"
                >
                  <FaFileAlt className="w-4 h-4 mr-2" />
                  <span>Devis gratuit</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GalleryPage; 