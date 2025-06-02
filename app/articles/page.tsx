'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaTag, FaArrowRight, FaClock, FaUser } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import articlesData from '@/data/articles.json';

interface Article {
  slug: string;
  titre: string;
  description: string;
  article: string;
  tags: string[];
  photo: string;
}

const ArticlesPage: React.FC = () => {
  const articles: Article[] = articlesData;

  const getTagColor = (index: number) => {
    const colors = [
      'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800',
      'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800',
      'bg-gradient-to-r from-green-100 to-green-200 text-green-800',
      'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800',
      'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800'
    ];
    return colors[index % colors.length];
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    return Math.ceil(words / wordsPerMinute);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-100 via-yellow-100 to-amber-200 text-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Nos articles
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Découvrez nos guides complets sur la rénovation énergétique : panneaux solaires, isolation, chauffage et menuiseries. 
                Des conseils d'experts pour optimiser votre habitat.
              </p>

              <div className="flex items-center justify-center gap-6 text-sm md:text-base text-gray-600">
                <div className="flex items-center gap-2">
                  <FaUser className="w-4 h-4 text-orange-500" />
                  <span>Guides d'experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaTag className="w-4 h-4 text-orange-500" />
                  <span>{articles.length} articles</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {articles.map((article, index) => (
                <article key={article.slug} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={`/images/articles/${article.photo}`}
                      alt={article.titre}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
                    {/* Reading time badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                      <FaClock className="w-3 h-3 inline mr-1" />
                      {getReadingTime(article.article)} min
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tagIndex)}`}
                        >
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 2 && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                          +{article.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                      {article.titre}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {article.description}
                    </p>

                    {/* Read more link */}
                    <Link 
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group-hover:gap-3 transition-all duration-200"
                    >
                      Lire l'article
                      <FaArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin de conseils personnalisés ?
            </h2>
            <p className="text-lg md:text-xl text-green-100 mb-8 leading-relaxed">
              Nos experts en rénovation énergétique sont à votre disposition pour vous accompagner dans vos projets
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0788066712"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-green-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                <span className="mr-3">📞</span>
                <div className="text-left">
                  <div className="text-sm text-gray-500">Appelez-nous</div>
                  <div>07 88 06 67 12</div>
                </div>
              </a>
              
              <a 
                href="mailto:contact@france-solaire.fr"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-200"
              >
                <span className="mr-3">✉️</span>
                <div className="text-left">
                  <div className="text-sm text-green-100">Email</div>
                  <div>Demander un devis</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlesPage; 