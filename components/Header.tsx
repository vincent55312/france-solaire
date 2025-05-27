'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo France Solaire à gauche */}
          <div className="flex items-center">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo.png" 
                alt="France Solaire Logo" 
                className="h-6 md:h-8 w-auto hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              />
            </Link>
          </div>

          {/* Boutons à droite */}
          <div className="flex items-center space-x-4">
            {/* Bouton retour accueil - Desktop */}
            <div className="hidden sm:block">
              <Link 
                href="/" 
                className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium rounded-lg transition-all duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Accueil</span>
              </Link>
            </div>

            {/* Bouton téléphone - Desktop */}
            <div className="hidden lg:block">
              <a 
                href="tel:0788066712"
                className="btn-phone-animated inline-flex items-center px-6 py-3 bg-white font-bold rounded-xl border-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-3 text-current" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-extrabold">07 88 06 67 12</span>
              </a>
            </div>

            {/* Boutons Mobile */}
            <div className="sm:hidden flex items-center space-x-3">
              {/* Bouton retour accueil - Mobile */}
              <Link 
                href="/" 
                className="inline-flex items-center justify-center w-10 h-10 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
                title="Retour à l'accueil"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </Link>

              {/* Bouton téléphone - Mobile */}
              <div className="lg:hidden">
                <a 
                  href="tel:0788066712"
                  className="btn-phone-animated inline-flex items-center px-2.5 sm:px-4 py-2 sm:py-2.5 bg-white font-bold rounded-lg sm:rounded-xl border-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-current" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-xs sm:text-sm font-extrabold">07 88 06 67 12</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 