import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Départements des Hauts-de-France | France Solaire - Rénovation Énergétique',
  description: 'Découvrez nos services de rénovation énergétique dans les Hauts-de-France : Nord (59), Pas-de-Calais (62), Seine-Maritime (76) et Somme (80). Panneaux solaires, isolation, chauffage certifiés RGE.',
  keywords: 'rénovation énergétique, Hauts-de-France, Nord, Pas-de-Calais, Seine-Maritime, Somme, panneaux solaires, isolation, chauffage, RGE',
  openGraph: {
    title: 'Départements des Hauts-de-France | France Solaire',
    description: 'Services de rénovation énergétique certifiés RGE dans les Hauts-de-France',
    type: 'website',
  },
};

const departments = [
  {
    code: "59",
    name: "Nord",
    slug: "nord",
    description: "Rénovation énergétique dans le Nord - Panneaux solaires, isolation, chauffage",
    cities_count: "648 villes",
    main_cities: ["Lille", "Valenciennes", "Douai", "Tourcoing", "Roubaix"]
  },
  {
    code: "62",
    name: "Pas-de-Calais", 
    slug: "pas-de-calais",
    description: "Expert en rénovation énergétique dans le Pas-de-Calais",
    cities_count: "895 villes",
    main_cities: ["Arras", "Calais", "Boulogne-sur-Mer", "Lens", "Liévin"]
  },
  {
    code: "76",
    name: "Seine-Maritime",
    slug: "seine-maritime", 
    description: "Solutions énergétiques certifiées RGE en Seine-Maritime",
    cities_count: "708 villes",
    main_cities: ["Rouen", "Le Havre", "Dieppe", "Sotteville-lès-Rouen", "Saint-Étienne-du-Rouvray"]
  },
  {
    code: "80",
    name: "Somme",
    slug: "somme",
    description: "Spécialiste rénovation énergétique dans la Somme", 
    cities_count: "772 villes",
    main_cities: ["Amiens", "Abbeville", "Montdidier", "Péronne", "Albert"]
  }
];

export default function DepartementsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-3 md:mb-4">
                Rénovation Énergétique Hauts-de-France
              </h1>
              <p className="text-sm md:text-lg lg:text-xl text-gray-600 mb-4 md:mb-6 max-w-3xl mx-auto">
                France Solaire intervient dans tous les départements des Hauts-de-France pour vos projets de 
                panneaux solaires, isolation, chauffage et menuiseries. Solutions certifiées RGE.
              </p>
              <div className="flex items-center justify-center space-x-4 md:space-x-6 text-orange-600">
                <div className="flex items-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-xs md:text-sm">4 départements</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.814 3.051 10.77 7.608 13.566a.75.75 0 00.784 0C15.199 20.52 18.25 15.564 18.25 9.75a12.74 12.74 0 00-.635-4.235.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08zm4.877 5.166a.75.75 0 10-1.06-1.06l-3.032 3.032-1.282-1.282a.75.75 0 00-1.06 1.06l1.813 1.813a.75.75 0 001.06 0l3.56-3.563z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-xs md:text-sm">Certifié RGE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Départements Grid */}
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Choisissez votre département
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {departments.map((dept) => (
              <Link 
                key={dept.code}
                href={`/zones/${dept.slug}`}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-4 md:p-6 border border-gray-200 hover:border-orange-300"
              >
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mr-3 md:mr-4">
                    <span className="text-orange-600 font-bold text-sm md:text-lg">{dept.code}</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{dept.name}</h3>
                    <p className="text-xs md:text-sm text-gray-500">Département {dept.code}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3 md:mb-4 line-clamp-3 text-sm md:text-base">
                  {dept.description}
                </p>
                
                <div className="flex items-center justify-between text-xs md:text-sm">
                  <div className="flex items-center text-orange-600">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">Voir toutes les villes</span>
                  </div>
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              Nos Services de Rénovation Énergétique
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.25c-.75 0-1.5.75-1.5 1.5v1.5c0 .75.75 1.5 1.5 1.5s1.5-.75 1.5-1.5V3.75c0-.75-.75-1.5-1.5-1.5zM19.07 4.93c-.53-.53-1.39-.53-1.92 0l-1.06 1.06c-.53.53-.53 1.39 0 1.92s1.39.53 1.92 0l1.06-1.06c.53-.53.53-1.39 0-1.92zM4.93 4.93c-.53.53-.53 1.39 0 1.92l1.06 1.06c.53.53 1.39.53 1.92 0s.53-1.39 0-1.92L6.85 4.93c-.53-.53-1.39-.53-1.92 0zM12 7.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zM2.25 12c0-.75.75-1.5 1.5-1.5h1.5c.75 0 1.5.75 1.5 1.5s-.75 1.5-1.5 1.5h-1.5c-.75 0-1.5-.75-1.5-1.5zM17.25 12c0-.75.75-1.5 1.5-1.5h1.5c.75 0 1.5.75 1.5 1.5s-.75 1.5-1.5 1.5h-1.5c-.75 0-1.5-.75-1.5-1.5zM6.85 17.15c-.53-.53-1.39-.53-1.92 0s-.53 1.39 0 1.92l1.06 1.06c.53.53 1.39.53 1.92 0s.53-1.39 0-1.92l-1.06-1.06zM17.15 17.15c.53-.53 1.39-.53 1.92 0l1.06 1.06c.53.53.53 1.39 0 1.92s-1.39.53-1.92 0l-1.06-1.06c-.53-.53-.53-1.39 0-1.92zM12 17.25c.75 0 1.5.75 1.5 1.5v1.5c0 .75-.75 1.5-1.5 1.5s-1.5-.75-1.5-1.5v-1.5c0-.75.75-1.5 1.5-1.5z"/>
                  </svg>
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Panneaux Solaires</h3>
                <p className="text-gray-600 text-xs md:text-sm">Installation photovoltaïque pour réduire vos factures</p>
              </div>
              
              <div className="text-center p-4 md:p-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 9V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2a3 3 0 0 0 0 6v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a3 3 0 0 0 0-6zM5 8h14v1.17A3.001 3.001 0 0 0 19 12c0 1.66 1.34 3 3 3V16H2v-.83A3.001 3.001 0 0 0 2 12c0-1.66-1.34-3-3-3V8z"/>
                    <path d="M8 10h8v4H8z"/>
                  </svg>
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Isolation</h3>
                <p className="text-gray-600 text-xs md:text-sm">Isolation thermique pour un confort optimal</p>
              </div>
              
              <div className="text-center p-4 md:p-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13.76 3.13 13.58 3.26 13.4 3.4C11.97 4.67 11.5 6.93 12.18 8.51C11.04 7.76 9.95 6.73 9.43 5.32C8.21 2.33 10.48 0.26 12.28 2C11.16 1.33 10.08 1.7 9.6 3.2C8.9 5.4 9.4 7.9 11.2 9.7C10.53 9.26 9.77 8.91 9.28 8.17C8.3 6.73 8.7 4.88 9.77 3.64C8.23 4.81 7.71 7.1 8.53 8.83C9.7 11.07 11.96 12.25 14.5 12.25C16.22 12.25 17.66 11.2 17.66 11.2Z"/>
                  </svg>
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Chauffage</h3>
                <p className="text-gray-600 text-xs md:text-sm">Systèmes de chauffage performants et économiques</p>
              </div>
              
              <div className="text-center p-4 md:p-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2 2h10v4H7V7zm0 6h4v4H7v-4zm6 0h4v4h-4v-4z"/>
                  </svg>
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Menuiseries</h3>
                <p className="text-gray-600 text-xs md:text-sm">Fenêtres et portes haute performance énergétique</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="bg-gradient-to-br from-orange-600 to-yellow-600 py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Besoin d'un devis pour votre projet ?
            </h2>
            <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 opacity-90">
              Nos experts certifiés RGE vous accompagnent dans votre projet de rénovation énergétique
            </p>
            <a 
              href="tel:0788066712"
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"/>
              </svg>
              <span className="text-sm md:text-base">Appeler</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 