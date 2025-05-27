import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { getDepartmentBySlug, getCitiesByDepartment, createCitySlug, departmentSlugs, departmentNames, departmentSlugToCode, type City } from '@/lib/cities';

interface DepartmentPageProps {
  params: Promise<{
    department: string;
  }>;
}

export async function generateMetadata({ params }: DepartmentPageProps): Promise<Metadata> {
  const { department } = await params;
  const departmentCode = departmentSlugToCode[department];
  const departmentName = departmentNames[departmentCode];
  
  if (!departmentCode || !departmentName) {
    return {
      title: 'Département non trouvé',
    };
  }

  return {
    title: `Rénovation Énergétique ${departmentName} (${departmentCode}) | France Solaire`,
    description: `Découvrez toutes les villes du ${departmentName} où France Solaire intervient pour vos projets de rénovation énergétique : panneaux solaires, isolation, chauffage. Certifié RGE.`,
    keywords: `rénovation énergétique ${departmentName}, panneaux solaires ${departmentName}, isolation ${departmentName}, chauffage ${departmentName}, RGE`,
    openGraph: {
      title: `Rénovation Énergétique ${departmentName} | France Solaire`,
      description: `Services de rénovation énergétique certifiés RGE dans le ${departmentName}`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return Object.values(departmentSlugs).map((slug) => ({
    department: slug,
  }));
}

export default async function DepartmentPage({ params }: DepartmentPageProps) {
  const { department } = await params;
  const departmentCode = departmentSlugToCode[department];
  
  if (!departmentCode) {
    notFound();
  }

  const departmentObj = getDepartmentBySlug(department);
  
  if (!departmentObj) {
    notFound();
  }

  // Obtenir toutes les villes du département
  let allCities: City[] = [];
  try {
    allCities = getCitiesByDepartment(departmentCode);
  } catch (error) {
    console.error('Error loading cities:', error);
    allCities = [];
  }
  
  // Trier les villes par ordre alphabétique
  const sortedCities = [...allCities].sort((a, b) => a.name.localeCompare(b.name));
  
  // Grouper les villes par première lettre
  const citiesByLetter = sortedCities.reduce((acc, city: City) => {
    const firstLetter = city.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(city);
    return acc;
  }, {} as { [key: string]: City[] });

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
              <span className="text-gray-900 font-medium">
                {departmentObj.name} ({departmentCode})
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                Rénovation Énergétique dans le {departmentObj.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                France Solaire intervient dans {allCities.length} villes du {departmentObj.name} pour vos projets de 
                panneaux solaires, isolation, chauffage et menuiseries. Solutions certifiées RGE.
              </p>
              <div className="flex items-center justify-center space-x-6 text-orange-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold">{allCities.length} villes</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.814 3.051 10.77 7.608 13.566a.75.75 0 00.784 0C15.199 20.52 18.25 15.564 18.25 9.75a12.74 12.74 0 00-.635-4.235.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08zm4.877 5.166a.75.75 0 10-1.06-1.06l-3.032 3.032-1.282-1.282a.75.75 0 00-1.06 1.06l1.813 1.813a.75.75 0 001.06 0l3.56-3.563z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold">Certifié RGE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des villes */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Toutes les villes du {departmentObj.name}
          </h2>

          {/* Index alphabétique */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation alphabétique</h3>
            <div className="flex flex-wrap gap-2">
              {Object.keys(citiesByLetter).sort().map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-100 hover:from-orange-200 hover:to-yellow-200 text-orange-800 font-semibold rounded-lg transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Villes groupées par lettre */}
          {Object.keys(citiesByLetter).sort().map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-orange-600 to-yellow-600 text-white rounded-full flex items-center justify-center mr-4">
                  {letter}
                </span>
                {citiesByLetter[letter].length} ville{citiesByLetter[letter].length > 1 ? 's' : ''}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {citiesByLetter[letter].map((city) => (
                  <Link
                    key={city.insee_code}
                    href={`/zones/${department}/${createCitySlug(city.name)}`}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 border border-gray-200 hover:border-orange-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{city.name}</h4>
                        <p className="text-sm text-gray-500">{city.postal_code}</p>
                      </div>
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="bg-gradient-to-br from-orange-600 to-yellow-600 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'un devis pour votre projet dans le {departmentObj.name} ?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Nos experts certifiés RGE vous accompagnent dans votre projet de rénovation énergétique
            </p>
            <a 
              href="tel:0788066712"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
              </svg>
              Appelez-nous : 07 88 06 67 12
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 