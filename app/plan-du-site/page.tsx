import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import servicesData from '@/data/services.json';
import articlesData from '@/data/articles.json';
import { getHautsDeFranceDepartments, getCitiesByDepartment, createCitySlug, generateAllCityParams } from '@/lib/cities';

export const metadata = {
  title: 'Plan du Site | France Solaire',
  description: 'Plan du site France Solaire - Accédez facilement à toutes nos pages et services de rénovation énergétique dans les Hauts-de-France.',
};

export default function PlanDuSite() {
  // Obtenir toutes les données dynamiques
  const departments = getHautsDeFranceDepartments();
  const allCityParams = generateAllCityParams();
  
  // Calculer les statistiques par département
  const departmentStats = departments.map(dept => {
    const cities = getCitiesByDepartment(dept.code);
    return {
      ...dept,
      cityCount: cities.length,
      // Prendre les 10 premières villes pour l'affichage
      sampleCities: cities.slice(0, 10).map(city => ({
        ...city,
        slug: city.slug || createCitySlug(city.name)
      }))
    };
  });

  const totalCities = allCityParams.length;
  const totalPages = 9 + servicesData.services.length + articlesData.length + departments.length + totalCities;

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Plan du Site
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Pages principales */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
                </svg>
                Pages Principales
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Nos Services
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Nos Articles
                  </Link>
                </li>
                <li>
                  <Link href="/galerie" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Galerie de Réalisations
                  </Link>
                </li>
                <li>
                  <Link href="/zones" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Zones d'Intervention
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services détaillés */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.814 3.051 10.77 7.608 13.566a.75.75 0 00.784 0C15.199 20.52 18.25 15.564 18.25 9.75a12.74 12.74 0 00-.635-4.235.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08zm4.877 5.166a.75.75 0 10-1.06-1.06l-3.032 3.032-1.282-1.282a.75.75 0 00-1.06 1.06l1.813 1.813a.75.75 0 001.06 0l3.56-3.563z" clipRule="evenodd"/>
                </svg>
                Services Détaillés ({servicesData.services.length})
              </h2>
              <div className="max-h-80 overflow-y-auto">
                <ul className="space-y-1 text-sm">
                  {servicesData.services.slice(0, 15).map((service) => (
                    <li key={service.slug}>
                      <Link href={`/${service.slug}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                        {service.title}
                      </Link>
                    </li>
                  ))}
                  {servicesData.services.length > 15 && (
                    <li className="text-gray-500 italic">
                      ... et {servicesData.services.length - 15} autres services
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Articles détaillés */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clipRule="evenodd"/>
                </svg>
                Articles de Blog ({articlesData.length})
              </h2>
              <ul className="space-y-2">
                {articlesData.map((article) => (
                  <li key={article.slug}>
                    <Link href={`/articles/${article.slug}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                      {article.titre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Départements avec compteur de villes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
                Départements ({departments.length})
              </h2>
              <ul className="space-y-3">
                {departmentStats.map((dept) => (
                  <li key={dept.code}>
                    <Link href={`/zones/${dept.slug}`} className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                      {dept.name} ({dept.code})
                    </Link>
                    <div className="text-xs text-gray-500 mt-1">
                      {dept.cityCount.toLocaleString()} villes
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exemples de villes par département */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:col-span-2 lg:col-span-3">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-1.381z" clipRule="evenodd"/>
                </svg>
                Villes par Département ({totalCities.toLocaleString()} villes au total)
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {departmentStats.map((dept) => (
                  <div key={dept.code} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center justify-between">
                      {dept.name}
                      <span className="text-sm text-gray-500">({dept.cityCount})</span>
                    </h3>
                    <div className="space-y-2">
                      {dept.sampleCities.map((city) => (
                        <Link
                          key={city.insee_code}
                          href={`/zones/${dept.slug}/${city.slug}`}
                          className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {city.name}
                        </Link>
                      ))}
                      {dept.cityCount > 10 && (
                        <Link
                          href={`/zones/${dept.slug}`}
                          className="block text-sm text-gray-500 italic hover:text-gray-700"
                        >
                          ... et {dept.cityCount - 10} autres villes
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pages légales */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd"/>
                </svg>
                Pages Légales
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/mentions-legales" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Mentions Légales
                  </Link>
                </li>
                <li>
                  <Link href="/politique-de-confidentialite" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Politique de Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/cgv" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Conditions Générales de Vente
                  </Link>
                </li>
                <li>
                  <Link href="/plan-du-site" className="text-gray-500">
                    Plan du Site (page actuelle)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sections de la page d'accueil */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"/>
                </svg>
                Sections de l'Accueil
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="/#hero" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Présentation
                  </a>
                </li>
                <li>
                  <a href="/#prestations" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Nos Prestations
                  </a>
                </li>
                <li>
                  <a href="/#savoir-faire" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Notre Savoir-faire
                  </a>
                </li>
                <li>
                  <a href="/#gallery" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Galerie de Réalisations
                  </a>
                </li>
                <li>
                  <a href="/#testimonials" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Avis Clients
                  </a>
                </li>
                <li>
                  <a href="/#intervention" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Zones d'Intervention
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Informations entreprise */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"/>
                </svg>
                Informations Entreprise
              </h2>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-medium">France Solaire</p>
                  <p>16 Allée des Alouettes</p>
                  <p>59250 HALLUIN</p>
                </div>
                <div>
                  <p><strong>Téléphone :</strong> 07 88 06 67 12</p>
                  <p><strong>Email :</strong> contact@france-solaire.fr</p>
                </div>
                <div>
                  <p><strong>SIRET :</strong> 934 592 973 00010</p>
                  <p><strong>Certifié RGE</strong></p>
                </div>
              </div>
            </div>

            {/* Statistiques du site */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm3.75-3a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0V9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd"/>
                </svg>
                Statistiques du Site
              </h2>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Pages principales :</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between">
                  <span>Services détaillés :</span>
                  <span className="font-medium">{servicesData.services.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Articles de blog :</span>
                  <span className="font-medium">{articlesData.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Départements :</span>
                  <span className="font-medium">{departments.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Villes :</span>
                  <span className="font-medium">{totalCities.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pages légales :</span>
                  <span className="font-medium">4</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-medium">Total des pages :</span>
                  <span className="font-bold text-green-600">{totalPages.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Note sur la mise à jour */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"/>
              </svg>
              <div>
                <h3 className="text-sm font-medium text-blue-800">Informations sur le Site</h3>
                <div className="text-sm text-blue-700 mt-1 space-y-1">
                  <p>
                    Ce plan du site est automatiquement généré et comprend {totalPages.toLocaleString()} pages 
                    couvrant {totalCities.toLocaleString()} villes des Hauts-de-France, {servicesData.services.length} services détaillés et {articlesData.length} articles de blog.
                  </p>
                  <p>
                    Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                  </p>
                  <p className="text-xs">
                    Sitemap XML disponible à : <a href="/sitemap.xml" className="underline hover:text-blue-800">/sitemap.xml</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 