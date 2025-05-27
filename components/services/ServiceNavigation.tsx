'use client';

import React from 'react';
import Link from 'next/link';
import { FaSolarPanel, FaHome, FaLeaf, FaShieldAlt, FaWrench, FaLightbulb } from 'react-icons/fa';
import servicesData from '@/data/services.json';

interface Service {
  slug: string;
  title: string;
  tags: string[];
  description: string;
}

interface ServiceNavigationProps {
  currentSlug?: string;
}

const getServiceIcon = (tags: string[]) => {
  if (tags.some(tag => tag.toLowerCase().includes('solaire') || tag.toLowerCase().includes('photovoltaïque'))) {
    return <FaSolarPanel className="w-5 h-5" />;
  }
  if (tags.some(tag => tag.toLowerCase().includes('isolation') || tag.toLowerCase().includes('thermique'))) {
    return <FaHome className="w-5 h-5" />;
  }
  if (tags.some(tag => tag.toLowerCase().includes('pompe') || tag.toLowerCase().includes('chauffage'))) {
    return <FaLeaf className="w-5 h-5" />;
  }
  if (tags.some(tag => tag.toLowerCase().includes('sécurité') || tag.toLowerCase().includes('alarme'))) {
    return <FaShieldAlt className="w-5 h-5" />;
  }
  if (tags.some(tag => tag.toLowerCase().includes('maintenance') || tag.toLowerCase().includes('entretien'))) {
    return <FaWrench className="w-5 h-5" />;
  }
  return <FaLightbulb className="w-5 h-5" />;
};

const ServiceNavigation: React.FC<ServiceNavigationProps> = ({ currentSlug }) => {
  const services = servicesData.services as Service[];

  return (
    <div className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Découvrez Tous Nos Services
          </h2>
          <p className="text-gray-600">
            Solutions complètes pour votre transition énergétique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className={`group p-4 rounded-lg border transition-all duration-300 hover:shadow-lg ${
                currentSlug === service.slug
                  ? 'bg-orange-50 border-orange-300 shadow-md'
                  : 'bg-white border-gray-200 hover:border-orange-300'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`flex-shrink-0 p-2 rounded-lg ${
                  currentSlug === service.slug
                    ? 'bg-orange-100 text-orange-600'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600'
                } transition-colors duration-300`}>
                  {getServiceIcon(service.tags)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-semibold ${
                    currentSlug === service.slug
                      ? 'text-orange-900'
                      : 'text-gray-900 group-hover:text-orange-900'
                  } transition-colors duration-300 line-clamp-2`}>
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {service.description.substring(0, 80)}...
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {service.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {service.tags.length > 2 && (
                      <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                        +{service.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/#contact"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Demander un Devis Gratuit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceNavigation; 