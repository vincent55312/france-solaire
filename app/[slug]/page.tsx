'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaArrowLeft, FaCheck, FaUsers, FaCertificate, FaTools, FaLightbulb, FaTrophy, FaShieldAlt, FaFileAlt } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceNavigation from '@/components/services/ServiceNavigation';
import servicesData from '@/data/services.json';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Service {
  slug: string;
  title: string;
  tags: string[];
  description: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ params }) => {
  const { slug } = React.use(params);
  
  // Trouver le service correspondant au slug
  const service = servicesData.services.find((s: Service) => s.slug === slug);
  
  // Si le service n'existe pas, retourner une 404
  if (!service) {
    notFound();
  }

  const advantages = [
    {
      icon: <FaTrophy className="w-5 h-5" />,
      title: "Expertise Certifiée RGE",
      description: "Artisan qualifié RGE pour bénéficier des aides financières maximales"
    },
    {
      icon: <FaShieldAlt className="w-5 h-5" />,
      title: "Garantie Décennale",
      description: "Tous nos travaux sont couverts par une garantie décennale"
    },
    {
      icon: <FaTools className="w-5 h-5" />,
      title: "Matériaux Premium",
      description: "Utilisation exclusive de matériaux certifiés et de haute qualité"
    },
    {
      icon: <FaLightbulb className="w-5 h-5" />,
      title: "Conseil Personnalisé",
      description: "Étude technique et conseils adaptés à votre projet spécifique"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Prise de contact",
      description: "Échange sur votre projet et planification d'une visite technique gratuite"
    },
    {
      step: "2", 
      title: "Étude technique",
      description: "Analyse de faisabilité et établissement d'un devis détaillé personnalisé"
    },
    {
      step: "3",
      title: "Validation du projet",
      description: "Signature du devis et planification des travaux selon vos disponibilités"
    },
    {
      step: "4",
      title: "Réalisation des travaux",
      description: "Exécution professionnelle avec respect des délais et normes en vigueur"
    },
    {
      step: "5",
      title: "Réception et suivi",
      description: "Contrôle qualité, remise des garanties et suivi après-vente personnalisé"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-yellow-100 text-sm mb-6">
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
                <span>/</span>
                <span className="text-white">{service.title}</span>
              </nav>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {service.title}
              </h1>
              
              <p className="text-lg md:text-xl text-yellow-100 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-yellow-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <FaFileAlt className="w-5 h-5 mr-3" />
                  <span>Devis gratuit</span>
                </a>
                <a 
                  href="tel:0788066712"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-amber-600 transition-all duration-200"
                >
                  <FaPhone className="w-5 h-5 mr-3" />
                  <span>07 88 06 67 12</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pourquoi choisir France Solaire ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre expertise et notre engagement qualité vous garantissent des travaux durables et performants
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processus Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Notre processus de travail
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Un accompagnement professionnel de A à Z pour la réussite de votre projet
              </p>
            </div>

            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-5 md:gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Ligne de connexion */}
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-yellow-200 z-0 transform translate-x-1/2"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 text-white rounded-full text-xl font-bold mb-4 shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-lg text-green-100 mb-8 leading-relaxed">
              Contactez-nous dès maintenant pour une étude personnalisée et gratuite de votre projet <strong>{service.title.toLowerCase()}</strong>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a 
                href="tel:0788066712"
                className="flex items-center justify-center px-6 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <FaPhone className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="text-sm text-gray-500">Appelez-nous</div>
                  <div>07 88 06 67 12</div>
                </div>
              </a>
              
              <a 
                href="mailto:contact@france-solaire.fr"
                className="flex items-center justify-center px-6 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-green-600 transition-all duration-200"
              >
                <FaFileAlt className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="text-sm text-green-100">Email</div>
                  <div>Demander un devis</div>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="flex items-center justify-center mb-4">
                <FaCheck className="w-5 h-5 mr-2" />
                <span className="font-semibold">Garanties incluses</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>✓ Devis gratuit</div>
                <div>✓ Étude technique</div>
                <div>✓ Certifié RGE</div>
                <div>✓ Garantie décennale</div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Section */}
        <section className="py-8 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link 
                href="/" 
                className="inline-flex items-center text-gray-600 hover:text-yellow-600 transition-colors"
              >
                <FaArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </Link>
              
              <Link 
                href="/services" 
                className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Voir tous nos services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ServiceNavigation currentSlug={slug} />

      <Footer />
    </div>
  );
};

export default ServicePage; 