import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Section principale */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Informations entreprise */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4 md:mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo.png" 
                alt="France Solaire Logo" 
                className="h-8 md:h-10 w-auto mr-3" 
              />
            </div>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
              Votre expert certifié RGE en rénovation énergétique dans les Hauts-de-France. 
              Panneaux solaires, isolation, chauffage et menuiseries.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-gray-900">Navigation</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-xs md:text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-xs md:text-sm">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-xs md:text-sm">
                  Nos Articles
                </Link>
              </li>
              <li>
                <Link href="/zones" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-xs md:text-sm">
                  Annuaire des villes
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-xs md:text-sm">
                  Galerie
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-xs md:text-sm">
                  Contact
                </a>
              </li>
              <li className="pt-2 border-t border-gray-200">
                <Link href="/mentions-legales" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-xs md:text-sm">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-xs md:text-sm">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-xs md:text-sm">
                  Conditions générales de vente
                </Link>
              </li>
              <li>
                <Link href="/plan-du-site" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-xs md:text-sm">
                  Plan du site
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-gray-900">Contact</h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="text-gray-900 text-xs md:text-sm font-medium">FRANCE SOLAIRE</p>
                  <p className="text-gray-500 text-xs">16 Allée des Alouettes</p>
                  <p className="text-gray-500 text-xs">59250 HALLUIN</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="text-gray-900 text-xs md:text-sm font-medium">Dirigeant</p>
                  <p className="text-gray-500 text-xs">Arthur ZEGHERS</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
                </svg>
                <a href="tel:0788066712" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-xs md:text-sm">
                  07 88 06 67 12
                </a>
              </div>
              
              <div className="flex items-center">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                </svg>
                <a href="mailto:contact@france-solaire.fr" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-xs md:text-sm">
                  contact@france-solaire.fr
                </a>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-gray-900">Certifications</h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.814 3.051 10.77 7.608 13.566a.75.75 0 00.784 0C15.199 20.52 18.25 15.564 18.25 9.75a12.74 12.74 0 00-.635-4.235.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08zm4.877 5.166a.75.75 0 10-1.06-1.06l-3.032 3.032-1.282-1.282a.75.75 0 00-1.06 1.06l1.813 1.813a.75.75 0 001.06 0l3.56-3.563z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-600 text-xs md:text-sm">Certifié RGE</span>
              </div>
              <div className="flex items-center">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-600 text-xs md:text-sm">SARL unipersonnelle</span>
              </div>
              <div className="flex items-center">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-600 text-xs md:text-sm">Assurance décennale</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section inférieure avec informations légales */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 items-center">
            
            {/* Informations légales */}
            <div className="text-xs text-gray-500 space-y-0.5 md:space-y-1 text-center lg:text-left">
              <div className="flex flex-wrap gap-x-2 md:gap-x-4 gap-y-0.5 md:gap-y-1 justify-center lg:justify-start">
                <span>Dirigeant: Arthur ZEGHERS</span>
              </div>
              <div className="flex flex-wrap gap-x-2 md:gap-x-4 gap-y-0.5 md:gap-y-1 justify-center lg:justify-start">
                <span>SIRET: 934 592 973 00010</span>
                <span>16 Allée des Alouettes, 59250 HALLUIN</span>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-xs md:text-sm text-gray-500">
                &copy; {new Date().getFullYear()} France Solaire. Tous droits réservés.
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Développé avec expertise par{" "}
                <a 
                  href="https://site-en-or.fr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  site-en-or.fr
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 