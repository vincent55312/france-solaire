import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaSolarPanel, FaHome, FaLeaf, FaShieldAlt, FaWrench, FaLightbulb, FaArrowRight } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import servicesData from '@/data/services.json';

export const metadata: Metadata = {
  title: 'Nos Services - France Solaire | Solutions Énergétiques RGE Hauts-de-France',
  description: 'Découvrez tous nos services : installation solaire, isolation thermique, pompes à chaleur, et plus. Expert RGE certifié dans les Hauts-de-France.',
  keywords: 'services énergétiques, installation solaire, isolation thermique, pompe à chaleur, RGE, Hauts-de-France',
  openGraph: {
    title: 'Nos Services - France Solaire',
    description: 'Solutions complètes pour votre transition énergétique dans les Hauts-de-France',
    type: 'website',
  },
};

interface Service {
  slug: string;
  title: string;
  tags: string[];
  description: string;
}

// Mapping des services vers leurs images
const serviceImages: Record<string, string> = {
  'installation-panneaux-solaires-photovoltaiques': '/sections/panneaux_solaire.png',
  'isolation-thermique-complete': '/sections/isolation.png',
  'chauffage-climatisation-performant': '/sections/climatisation.png',
  'renovation-traitement-toiture': '/sections/renovation_toiture.png',
  'menuiseries-pvc-aluminium': '/sections/fenetre.jpeg',
  'renovation-energetique-globale': '/sections/bilan.png'
};

const getServiceIcon = (tags: string[]) => {
  if (tags.some(tag => tag.toLowerCase().includes('solaire') || tag.toLowerCase().includes('photovoltaïque'))) {
    return <FaSolarPanel className="w-6 h-6 md:w-8 md:h-8" />;
  }
  if (tags.some(tag => tag.toLowerCase().includes('isolation') || tag.toLowerCase().includes('thermique'))) {
    return <FaHome className="w-6 h-6 md:w-8 md:h-8" />;
  }
  if (tags.some(tag => tag.toLowerCase().includes('pompe') || tag.toLowerCase().includes('chauffage'))) {
    return <FaLeaf className="w-6 h-6 md:w-8 md:h-8" />;
  }
  if (tags.some(tag => tag.toLowerCase().includes('sécurité') || tag.toLowerCase().includes('alarme'))) {
    return <FaShieldAlt className="w-6 h-6 md:w-8 md:h-8" />;
  }
  if (tags.some(tag => tag.toLowerCase().includes('maintenance') || tag.toLowerCase().includes('entretien'))) {
    return <FaWrench className="w-6 h-6 md:w-8 md:h-8" />;
  }
  return <FaLightbulb className="w-6 h-6 md:w-8 md:h-8" />;
};

const getServiceCategory = (tags: string[]) => {
  if (tags.some(tag => tag.toLowerCase().includes('solaire') || tag.toLowerCase().includes('photovoltaïque'))) {
    return 'Énergie Solaire';
  }
  if (tags.some(tag => tag.toLowerCase().includes('isolation') || tag.toLowerCase().includes('thermique'))) {
    return 'Isolation & Rénovation';
  }
  if (tags.some(tag => tag.toLowerCase().includes('pompe') || tag.toLowerCase().includes('chauffage'))) {
    return 'Chauffage & Climatisation';
  }
  if (tags.some(tag => tag.toLowerCase().includes('sécurité') || tag.toLowerCase().includes('alarme'))) {
    return 'Sécurité & Domotique';
  }
  if (tags.some(tag => tag.toLowerCase().includes('maintenance') || tag.toLowerCase().includes('entretien'))) {
    return 'Maintenance & Entretien';
  }
  return 'Autres Services';
};

export default function ServicesPage() {
  const services = servicesData.services as Service[];

  // Grouper les services par catégorie
  const servicesByCategory = services.reduce((acc, service) => {
    const category = getServiceCategory(service.tags);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sections/panneaux_solaire.png"
              alt="Services énergétiques"
              fill
              className="object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-yellow-50/40 to-amber-50/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4 md:mb-6">
                Nos Services Énergétiques
              </h1>
              <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-600 max-w-3xl mx-auto">
                Solutions complètes pour votre transition énergétique dans les Hauts-de-France
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-yellow-700 transition-all duration-300 shadow-lg"
                >
                  Demander un Devis Gratuit
                </Link>
                <Link
                  href="tel:0788066712"
                  className="inline-flex items-center px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-300"
                >
                  Nous Appeler
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services par Catégorie */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
              <div key={category} className="mb-12 md:mb-16">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                  {categoryServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-orange-300"
                    >
                      {/* Image de fond */}
                      {serviceImages[service.slug] && (
                        <div className="absolute inset-0 z-0">
                          <Image
                            src={serviceImages[service.slug]}
                            alt={service.title}
                            fill
                            className="object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/30" />
                        </div>
                      )}

                      <div className="relative z-10 p-4 md:p-6 bg-white/90 backdrop-blur-sm">
                        <div className="flex items-center mb-3 md:mb-4">
                          <div className="flex-shrink-0 p-2 md:p-3 bg-gradient-to-br from-orange-100 to-yellow-100 text-orange-600 rounded-lg group-hover:bg-gradient-to-br group-hover:from-orange-600 group-hover:to-yellow-600 group-hover:text-white transition-all duration-300">
                            {getServiceIcon(service.tags)}
                          </div>
                          <div className="ml-3 md:ml-4 flex-1">
                            <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-3 md:mb-4 line-clamp-3">
                          {service.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                          {service.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="inline-block px-3 py-1 text-xs bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                          {service.tags.length > 3 && (
                            <span className="inline-block px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                              +{service.tags.length - 3}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center text-orange-600 font-semibold text-sm group-hover:text-orange-700 transition-colors duration-300">
                          En savoir plus
                          <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-br from-orange-600 to-yellow-600 text-white py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sections/bilan.png"
              alt="Contactez-nous"
              fill
              className="object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/60 to-yellow-600/60" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Prêt à Commencer Votre Projet ?
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90">
              Nos experts RGE vous accompagnent de A à Z dans votre transition énergétique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Demander un Devis Gratuit
              </Link>
              <Link
                href="/"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                Retour à l'Accueil
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 