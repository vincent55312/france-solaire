import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityMapWrapper from '@/components/CityMapWrapper';
import type { Metadata } from 'next';
import { getCityBySlug, departmentSlugs, departmentNames, generateCityStaticParams } from '@/lib/cities';

interface CityPageProps {
  params: Promise<{
    department: string;
    city: string;
  }>;
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { department, city } = await params;
  const result = getCityBySlug(department, city);
  
  if (!result) {
    return {
      title: 'Ville non trouvée | France Solaire'
    };
  }

  const { department: dept, city: cityData } = result;

  return {
    title: `${cityData.name} (${cityData.postal_code}) - Rénovation Énergétique | France Solaire`,
    description: `Spécialiste de la rénovation énergétique à ${cityData.name} dans le ${dept.name}. Pompe à chaleur, isolation, panneaux solaires. Devis gratuit et aides financières.`,
    keywords: `rénovation énergétique ${cityData.name}, pompe à chaleur ${cityData.name}, isolation ${cityData.name}, panneaux solaires ${dept.name}`,
    openGraph: {
      title: `Rénovation Énergétique à ${cityData.name} | France Solaire`,
      description: `Expert en rénovation énergétique à ${cityData.name}. Solutions complètes pour votre habitat.`,
      type: 'website',
    },
  };
}

// Génération des paramètres statiques pour toutes les villes
export async function generateStaticParams() {
  return generateCityStaticParams();
}

export default async function CityPage({ params }: CityPageProps) {
  const { department, city } = await params;
  const result = getCityBySlug(department, city);
  
  if (!result) {
    notFound();
  }

  const { department: dept, city: cityData } = result;
  const departmentCode = departmentSlugs[department];

  const services = [
    {
      title: "Panneaux Solaires Photovoltaïques",
      description: `Installation de panneaux solaires à ${cityData.name} pour réduire votre facture d'électricité jusqu'à 70%`,
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.25c-.75 0-1.5.75-1.5 1.5v1.5c0 .75.75 1.5 1.5 1.5s1.5-.75 1.5-1.5V3.75c0-.75-.75-1.5-1.5-1.5zM19.07 4.93c-.53-.53-1.39-.53-1.92 0l-1.06 1.06c-.53.53-.53 1.39 0 1.92s1.39.53 1.92 0l1.06-1.06c.53-.53.53-1.39 0-1.92zM4.93 4.93c-.53.53-.53 1.39 0 1.92l1.06 1.06c.53.53 1.39.53 1.92 0s.53-1.39 0-1.92L6.85 4.93c-.53-.53-1.39-.53-1.92 0zM12 7.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zM2.25 12c0-.75.75-1.5 1.5-1.5h1.5c.75 0 1.5.75 1.5 1.5s-.75 1.5-1.5 1.5h-1.5c-.75 0-1.5-.75-1.5-1.5zM17.25 12c0-.75.75-1.5 1.5-1.5h1.5c.75 0 1.5.75 1.5 1.5s-.75 1.5-1.5 1.5h-1.5c-.75 0-1.5-.75-1.5-1.5zM6.85 17.15c-.53-.53-1.39-.53-1.92 0s-.53 1.39 0 1.92l1.06 1.06c.53.53 1.39.53 1.92 0s.53-1.39 0-1.92l-1.06-1.06zM17.15 17.15c.53-.53 1.39-.53 1.92 0l1.06 1.06c.53.53.53 1.39 0 1.92s-1.39.53-1.92 0l-1.06-1.06c-.53-.53-.53-1.39 0-1.92zM12 17.25c.75 0 1.5.75 1.5 1.5v1.5c0 .75-.75 1.5-1.5 1.5s-1.5-.75-1.5-1.5v-1.5c0-.75.75-1.5 1.5-1.5z"/>
        </svg>
      ),
      benefits: ["Réduction facture électricité", "Revente surplus", "Crédit d'impôt"]
    },
    {
      title: "Isolation Thermique",
      description: `Isolation combles, murs et sols à ${cityData.name} pour améliorer votre confort et réduire vos dépenses énergétiques`,
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 9V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2a3 3 0 0 0 0 6v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a3 3 0 0 0 0-6zM5 8h14v1.17A3.001 3.001 0 0 0 19 12c0 1.66 1.34 3 3 3V16H2v-.83A3.001 3.001 0 0 0 2 12c0-1.66-1.34-3-3-3V8z"/>
          <path d="M8 10h8v4H8z"/>
        </svg>
      ),
      benefits: ["Confort thermique", "Économies chauffage", "Aide MaPrimeRénov'"]
    },
    {
      title: "Chauffage Performant",
      description: `Installation pompes à chaleur, chaudières et systèmes de chauffage écologiques à ${cityData.name}`,
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13.76 3.13 13.58 3.26 13.4 3.4C11.97 4.67 11.5 6.93 12.18 8.51C11.04 7.76 9.95 6.73 9.43 5.32C8.21 2.33 10.48 0.26 12.28 2C11.16 1.33 10.08 1.7 9.6 3.2C8.9 5.4 9.4 7.9 11.2 9.7C10.53 9.26 9.77 8.91 9.28 8.17C8.3 6.73 8.7 4.88 9.77 3.64C8.23 4.81 7.71 7.1 8.53 8.83C9.7 11.07 11.96 12.25 14.5 12.25C16.22 12.25 17.66 11.2 17.66 11.2Z"/>
        </svg>
      ),
      benefits: ["Rendement optimal", "Écologique", "Économies énergie"]
    },
    {
      title: "Menuiseries Haute Performance",
      description: `Fenêtres et portes isolantes à ${cityData.name} pour une meilleure performance énergétique de votre logement`,
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2 2h10v4H7V7zm0 6h4v4H7v-4zm6 0h4v4h-4v-4z"/>
        </svg>
      ),
      benefits: ["Isolation renforcée", "Sécurité", "Esthétique"]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <nav className="flex text-sm text-gray-500">
              <Link href="/zones" className="hover:text-green-600">
                Départements
              </Link>
              <span className="mx-2">/</span>
              <Link href={`/zones/${department}`} className="hover:text-green-600">
                {dept.name}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{cityData.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-3 md:mb-4">
                Rénovation Énergétique à {cityData.name}
              </h1>
              <p className="text-sm md:text-lg lg:text-xl text-gray-600 mb-4 md:mb-6 max-w-3xl mx-auto">
                France Solaire vous accompagne à {cityData.name} ({cityData.postal_code}) pour tous vos projets de 
                rénovation énergétique : panneaux solaires, isolation, chauffage et menuiseries.
              </p>
              <div className="flex items-center justify-center space-x-4 md:space-x-6 text-orange-600">
                <div className="flex items-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-xs md:text-sm">{dept.name}</span>
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

        {/* Carte de la ville */}
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              Localisation de {cityData.name}
            </h2>
            <div className="h-64 md:h-80 rounded-lg overflow-hidden">
              <CityMapWrapper
                cityName={cityData.name}
                coordinates={cityData.coordinates}
                departmentName={dept.name}
              />
            </div>
          </div>
        </div>

        {/* Section Services - Nouvelle mise en page */}
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Nos Services à {cityData.name}
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              France Solaire vous accompagne dans tous vos projets de rénovation énergétique à {cityData.name}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 md:p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 md:p-4 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span 
                          key={benefitIndex}
                          className="px-3 py-1 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 text-xs md:text-sm rounded-full font-medium border border-orange-200"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Informations de la ville - Section dédiée */}
        <div className="bg-gradient-to-br from-slate-50 to-gray-100 py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-center justify-center mb-6 md:mb-8">
                <div className="p-3 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full mr-4">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  Informations sur {cityData.name}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="flex items-center p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border border-orange-100">
                  <div className="p-2 bg-orange-100 rounded-lg mr-3">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium">Ville</span>
                    <span className="block text-sm md:text-base font-semibold text-gray-900">{cityData.name}</span>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg border border-yellow-100">
                  <div className="p-2 bg-yellow-100 rounded-lg mr-3">
                    <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium">Code postal</span>
                    <span className="block text-sm md:text-base font-semibold text-gray-900">{cityData.postal_code}</span>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-100">
                  <div className="p-2 bg-amber-100 rounded-lg mr-3">
                    <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium">Département</span>
                    <span className="block text-sm md:text-base font-semibold text-gray-900">{dept.name}</span>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100">
                  <div className="p-2 bg-green-100 rounded-lg mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium">Région</span>
                    <span className="block text-sm md:text-base font-semibold text-gray-900">Hauts-de-France</span>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd"/>
                      <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5V3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium">Code INSEE</span>
                    <span className="block text-sm md:text-base font-semibold text-gray-900">{cityData.insee_code}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Contact */}
        <div className="bg-gradient-to-br from-orange-600 to-yellow-600 py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM14.625 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                Votre Projet de Rénovation Énergétique à {cityData.name}
              </h2>
              <p className="text-sm md:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                Contactez nos experts certifiés RGE pour un devis gratuit et personnalisé
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8">
              <a 
                href="tel:0788066712"
                className="group inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
                </svg>
                07 88 06 67 12
              </a>
              
              <a 
                href="mailto:contact@france-solaire.fr"
                className="group inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                </svg>
                Email
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-xs md:text-sm opacity-75 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                Zone d'intervention : {cityData.name} et communes environnantes dans le {dept.name}
              </p>
            </div>
          </div>
        </div>

        {/* Pourquoi nous choisir - Version améliorée */}
        <div className="bg-white py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                Pourquoi choisir France Solaire à {cityData.name} ?
              </h2>
              <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez les avantages de faire appel à notre expertise certifiée RGE
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="group text-center p-4 md:p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.814 3.051 10.77 7.608 13.566a.75.75 0 00.784 0C15.199 20.52 18.25 15.564 18.25 9.75a12.74 12.74 0 00-.635-4.235.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08zm4.877 5.166a.75.75 0 10-1.06-1.06l-3.032 3.032-1.282-1.282a.75.75 0 00-1.06 1.06l1.813 1.813a.75.75 0 001.06 0l3.56-3.563z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Certifié RGE</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Qualification RGE pour bénéficier des aides d'État</p>
              </div>
              
              <div className="group text-center p-4 md:p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border border-yellow-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">Expertise Locale</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Connaissance parfaite du terrain local à {cityData.name}</p>
              </div>
              
              <div className="group text-center p-4 md:p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">Satisfaction Client</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">98% de clients satisfaits dans la région</p>
              </div>
              
              <div className="group text-center p-4 md:p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border border-red-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Garanties Solides</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Garanties matériel et main d'œuvre incluses</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 