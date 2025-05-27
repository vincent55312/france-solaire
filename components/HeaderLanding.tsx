"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo.png" 
                alt="France Solaire Logo" 
                className={`transition-all duration-300 hover:opacity-80 cursor-pointer ${
                  isScrolled 
                    ? 'h-6 md:h-8' 
                    : 'h-7 md:h-10'
                } w-auto`}
              />
            </Link>
          </div>

          {/* Navigation au centre */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="#hero" 
              className={`transition-colors text-sm font-normal ${
                isScrolled 
                  ? 'text-gray-600 hover:text-green-600' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Accueil
            </a>
            <a 
              href="#prestations" 
              className={`transition-colors text-sm font-normal ${
                isScrolled 
                  ? 'text-gray-600 hover:text-green-600' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Prestations
            </a>
            <a 
              href="#savoir-faire" 
              className={`transition-colors text-sm font-normal ${
                isScrolled 
                  ? 'text-gray-600 hover:text-green-600' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Savoir-faire
            </a>
            <a 
              href="#gallery" 
              className={`transition-colors text-sm font-normal ${
                isScrolled 
                  ? 'text-gray-600 hover:text-green-600' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Réalisations
            </a>
            <a 
              href="#testimonials" 
              className={`transition-colors text-sm font-normal ${
                isScrolled 
                  ? 'text-gray-600 hover:text-green-600' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Avis clients
            </a>
            <a 
              href="#intervention" 
              className={`transition-colors text-sm font-normal ${
                isScrolled 
                  ? 'text-gray-600 hover:text-green-600' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Zones d'intervention
            </a>
            <a 
              href="#contact" 
              className={`transition-colors text-sm font-normal ${
                isScrolled 
                  ? 'text-gray-600 hover:text-green-600' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Contact
            </a>
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

          {/* Bouton téléphone - Mobile et Tablette */}
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
        </nav>
      </div>
    </header>
  );
};

export default HeaderLanding; 