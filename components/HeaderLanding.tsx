"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeaderLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white/10 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo et nom à gauche */}
          <div className="flex items-center space-x-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo.png" 
              alt="France Solaire Logo" 
              className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'} w-auto`}
            />
          </div>

          {/* Navigation au centre */}
          <div className="hidden lg:flex items-center space-x-8">
            <a 
              href="#hero" 
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-gray-800 hover:text-green-600'
              }`}
            >
              Accueil
            </a>
            <a 
              href="#prestations" 
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-gray-800 hover:text-green-600'
              }`}
            >
              Prestations
            </a>
            <a 
              href="#intervention" 
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-gray-800 hover:text-green-600'
              }`}
            >
              Zones d'intervention
            </a>
            <a 
              href="#contact" 
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-gray-800 hover:text-green-600'
              }`}
            >
              Contact
            </a>
          </div>

          {/* Bouton téléphone toujours vert - Desktop */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:0123456789"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>01 23 45 67 89</span>
            </a>
          </div>

          {/* Menu burger pour mobile avec bouton téléphone */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Bouton téléphone mobile - toujours vert */}
            <a 
              href="tel:0123456789"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2.5 rounded-full transition-all duration-300 flex items-center space-x-1 shadow-lg text-sm"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="hidden sm:inline">01 23 45 67 89</span>
              <span className="sm:hidden">Tel</span>
            </a>
            <button 
              type="button"
              className={`focus:outline-none transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-gray-800 hover:text-green-600'
              }`}
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu?.classList.toggle('hidden');
              }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Menu mobile */}
        <div id="mobile-menu" className={`hidden lg:hidden pb-4 border-t ${
          isScrolled ? 'border-gray-200' : 'border-white/20'
        }`}>
          <div className="flex flex-col space-y-3 pt-4">
            <a 
              href="#hero" 
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-gray-800 hover:text-green-600'
              }`}
            >
              Accueil
            </a>
            <a 
              href="#prestations" 
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-gray-800 hover:text-green-600'
              }`}
            >
              Prestations
            </a>
            <a 
              href="#intervention" 
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-gray-800 hover:text-green-600'
              }`}
            >
              Zones d'intervention
            </a>
            <a 
              href="#contact" 
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-gray-800 hover:text-green-600'
              }`}
            >
              Contact
            </a>
            <div className={`pt-3 border-t ${
              isScrolled ? 'border-gray-200' : 'border-white/20'
            }`}>
              <a 
                href="tel:0123456789"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg w-full"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Appeler : 01 23 45 67 89</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLanding; 