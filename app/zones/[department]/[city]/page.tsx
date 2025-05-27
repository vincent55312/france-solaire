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
        <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                Rénovation Énergétique à {cityData.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                France Solaire, votre expert en rénovation énergétique à {cityData.name} ({cityData.postal_code}) dans le {dept.name}. 
                Panneaux solaires, isolation, chauffage et menuiseries certifiés RGE.
              </p>
              <div className="flex items-center justify-center space-x-6 text-orange-600 flex-wrap gap-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold">{cityData.name} - {cityData.postal_code}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.814 3.051 10.77 7.608 13.566a.75.75 0 00.784 0C15.199 20.52 18.25 15.564 18.25 9.75a12.74 12.74 0 00-.635-4.235.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08zm4.877 5.166a.75.75 0 10-1.06-1.06l-3.032 3.032-1.282-1.282a.75.75 0 00-1.06 1.06l1.813 1.813a.75.75 0 001.06 0l3.56-3.563z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold">Certifié RGE</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold">Devis Gratuit</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Carte */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Localisation de {cityData.name}
              </h2>
              <CityMapWrapper 
                cityName={cityData.name}
                coordinates={cityData.coordinates}
                departmentName={dept.name}
              />
              
              {/* Informations de la ville */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  </svg>
                  Informations sur {cityData.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Ville :</span>
                    <span className="ml-2 text-gray-600">{cityData.name}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Code postal :</span>
                    <span className="ml-2 text-gray-600">{cityData.postal_code}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Département :</span>
                    <span className="ml-2 text-gray-600">{dept.name}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Région :</span>
                    <span className="ml-2 text-gray-600">Hauts-de-France</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Code INSEE :</span>
                    <span className="ml-2 text-gray-600">{cityData.insee_code}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nos Services à {cityData.name}
              </h2>
              
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="p-3 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl mr-4">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <span 
                              key={benefitIndex}
                              className="px-3 py-1 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 text-sm rounded-full font-medium"
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
          </div>
        </div>

        {/* Section Contact */}
        <div className="bg-gradient-to-br from-orange-600 to-yellow-600 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Votre Projet de Rénovation Énergétique à {cityData.name}
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Contactez nos experts certifiés RGE pour un devis gratuit et personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:0788066712"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
                </svg>
                07 88 06 67 12
              </a>
              
              <a 
                href="mailto:contact@france-solaire.fr"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                </svg>
                Email
              </a>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm opacity-75">
                Zone d'intervention : {cityData.name} et communes environnantes dans le {dept.name}
              </p>
            </div>
          </div>
        </div>

        {/* Pourquoi nous choisir */}
        <div className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Pourquoi choisir France Solaire à {cityData.name} ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.814 3.051 10.77 7.608 13.566a.75.75 0 00.784 0C15.199 20.52 18.25 15.564 18.25 9.75a12.74 12.74 0 00-.635-4.235.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08zm4.877 5.166a.75.75 0 10-1.06-1.06l-3.032 3.032-1.282-1.282a.75.75 0 00-1.06 1.06l1.813 1.813a.75.75 0 001.06 0l3.56-3.563z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Certifié RGE</h3>
                <p className="text-gray-600 text-sm">Qualification RGE pour bénéficier des aides d'État</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expertise Locale</h3>
                <p className="text-gray-600 text-sm">Connaissance parfaite du terrain local à {cityData.name}</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfaction Client</h3>
                <p className="text-gray-600 text-sm">98% de clients satisfaits dans la région</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Garanties Solides</h3>
                <p className="text-gray-600 text-sm">Garanties matériel et main d'œuvre incluses</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 