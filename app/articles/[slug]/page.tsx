import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaArrowLeft, FaClock, FaTag, FaUser, FaFileAlt, FaBookmark } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShareButtons from './components/ShareButtons';
import articlesData from '@/data/articles.json';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Article {
  slug: string;
  titre: string;
  description: string;
  article: string;
  tags: string[];
  photo: string;
}

// Fonction pour générer les métadonnées SEO
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a: Article) => a.slug === slug);
  
  if (!article) {
    return {
      title: 'Article non trouvé - France Solaire',
    };
  }

  return {
    title: `${article.titre} | Guide France Solaire`,
    description: article.description,
    keywords: article.tags.join(', '),
    openGraph: {
      title: article.titre,
      description: article.description,
      url: `https://france-solaire.fr/articles/${article.slug}`,
      siteName: 'France Solaire',
      type: 'article',
      images: [
        {
          url: `/images/articles/${article.photo}`,
          width: 1200,
          height: 630,
          alt: article.titre,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.titre,
      description: article.description,
      images: [`/images/articles/${article.photo}`],
    },
    alternates: {
      canonical: `https://france-solaire.fr/articles/${article.slug}`,
    },
  };
}

// Composant pour les fonctionnalités
function ArticleContent({ article }: { article: Article }) {
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

  // Fonction pour convertir le markdown en HTML basique
  const renderMarkdown = (content: string) => {
    // Séparer le contenu en lignes pour un traitement plus sûr
    const lines = content.split('\n');
    const processedLines: string[] = [];
    let inTable = false;
    let tableHeaders: string[] = [];
    let tableRows: string[][] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Détection de tableau
      if (line.includes('|') && !inTable) {
        // Vérifier si la ligne suivante est un séparateur de tableau
        const nextLine = lines[i + 1];
        if (nextLine && nextLine.includes('-') && nextLine.includes('|')) {
          // Début de tableau
          inTable = true;
          tableHeaders = line.split('|').map(cell => cell.trim()).filter(cell => cell);
          i++; // Skip separator line
          continue;
        }
      }
      
      if (inTable && line.includes('|')) {
        // Ligne de tableau
        const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell);
        if (cells.length > 0) {
          tableRows.push(cells);
        }
      } else if (inTable) {
        // Fin de tableau
        if (tableHeaders.length > 0 && tableRows.length > 0) {
          let tableHtml = '<table class="w-full border-collapse border border-gray-300 mb-6 shadow-sm rounded-lg overflow-hidden">';
          
          // En-têtes
          tableHtml += '<thead><tr>';
          tableHeaders.forEach(header => {
            tableHtml += `<th class="bg-orange-50 border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">${header}</th>`;
          });
          tableHtml += '</tr></thead>';
          
          // Corps
          tableHtml += '<tbody>';
          tableRows.forEach((row, rowIndex) => {
            const evenClass = rowIndex % 2 === 0 ? '' : 'bg-gray-50';
            tableHtml += `<tr class="${evenClass}">`;
            row.forEach((cell, cellIndex) => {
              const cellClass = cellIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-700';
              tableHtml += `<td class="border border-gray-300 px-4 py-3 ${cellClass}">${cell}</td>`;
            });
            tableHtml += '</tr>';
          });
          tableHtml += '</tbody></table>';
          
          processedLines.push(tableHtml);
        }
        
        // Reset table state
        inTable = false;
        tableHeaders = [];
        tableRows = [];
        
        // Process current line normally
        processedLines.push(line);
      } else {
        processedLines.push(line);
      }
    }

    // Rejoindre et traiter le markdown restant
    let processedContent = processedLines.join('\n');
    
    // Traitement sécurisé du markdown sans regex problématiques
    const markdownReplacements = [
      // Bold et italic
      { pattern: /\*\*([^*]+)\*\*/g, replacement: '<strong>$1</strong>' },
      { pattern: /\*([^*]+)\*/g, replacement: '<em>$1</em>' },
      
      // Headings
      { pattern: /^# (.+)$/gm, replacement: '<h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">$1</h1>' },
      { pattern: /^## (.+)$/gm, replacement: '<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-8">$1</h2>' },
      { pattern: /^### (.+)$/gm, replacement: '<h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 mt-6">$1</h3>' },
      { pattern: /^#### (.+)$/gm, replacement: '<h4 class="text-lg md:text-xl font-semibold text-gray-900 mb-2 mt-4">$1</h4>' },
      
      // Lists
      { pattern: /^- (.+)$/gm, replacement: '<li class="mb-2">$1</li>' },
      { pattern: /^\d+\. (.+)$/gm, replacement: '<li class="mb-2">$1</li>' },
      
      // Paragraphs et autres
      { pattern: /\n\n/g, replacement: '</p><p class="text-gray-700 leading-relaxed mb-4">' },
      { pattern: /---/g, replacement: '<hr class="my-8 border-gray-300">' }
    ];

    // Appliquer les remplacements
    markdownReplacements.forEach(({ pattern, replacement }) => {
      processedContent = processedContent.replace(pattern, replacement);
    });

    // Traitement final des paragraphes
    processedContent = processedContent
      .replace(/^([^<].*$)/gm, '<p class="text-gray-700 leading-relaxed mb-4">$1</p>')
      .replace(/(<li class="mb-2">.*?<\/li>\s*)+/g, '<ul class="mb-6 pl-6 list-disc">$&</ul>');

    return processedContent;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-100 via-yellow-100 to-amber-200 text-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-gray-600 text-sm mb-6">
              <Link href="/" className="hover:text-orange-600 transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link href="/articles" className="hover:text-orange-600 transition-colors">
                Articles
              </Link>
              <span>/</span>
              <span className="text-orange-600 font-medium">{article.titre}</span>
            </nav>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(index)}`}
                >
                  <FaTag className="w-3 h-3 inline mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              {article.titre}
            </h1>
            
            <p className="text-base md:text-xl text-gray-700 mb-8 leading-relaxed">
              {article.description}
            </p>

            {/* Article meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <FaUser className="w-4 h-4 text-orange-500" />
                <span>Par France Solaire</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4 text-orange-500" />
                <span>{getReadingTime(article.article)} min de lecture</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBookmark className="w-4 h-4 text-orange-500" />
                <span>Guide expert</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                <FaFileAlt className="w-5 h-5 mr-3" />
                <span>Devis gratuit</span>
              </a>
              <a 
                href="tel:0788066712"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-orange-500 text-orange-600 font-bold rounded-xl hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <FaPhone className="w-5 h-5 mr-3" />
                <span>07 88 06 67 12</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
            <Image
              src={`/images/articles/${article.photo}`}
              alt={article.titre}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(article.article) }}
            />
          </div>

          {/* Share buttons */}
          <ShareButtons article={article} />
        </div>
      </section>
    </>
  );
}

// Composant pour les articles associés
function RelatedArticles({ currentArticle }: { currentArticle: Article }) {
  // Fonction pour obtenir des articles associés (même tags)
  const getRelatedArticles = (article: Article, count: number = 3) => {
    return articlesData
      .filter((a: Article) => a.slug !== article.slug)
      .filter((a: Article) => a.tags.some(tag => article.tags.includes(tag)))
      .slice(0, count);
  };

  const relatedArticles = getRelatedArticles(currentArticle);

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

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Articles associés
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez d'autres guides sur le même sujet pour approfondir vos connaissances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {relatedArticles.map((relatedArticle, index) => (
            <article key={relatedArticle.slug} className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={`/images/articles/${relatedArticle.photo}`}
                  alt={relatedArticle.titre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                  <FaClock className="w-3 h-3 inline mr-1" />
                  {getReadingTime(relatedArticle.article)} min
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {relatedArticle.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(tagIndex)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                  {relatedArticle.titre}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                  {relatedArticle.description}
                </p>

                <Link 
                  href={`/articles/${relatedArticle.slug}`}
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm"
                >
                  Lire l'article
                  <FaArrowLeft className="w-3 h-3 ml-2 rotate-180" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const ArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
  const { slug } = await params;
  
  // Trouver l'article correspondant au slug
  const article = articlesData.find((a: Article) => a.slug === slug);
  
  // Si l'article n'existe pas, retourner une 404
  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        <ArticleContent article={article} />
        <RelatedArticles currentArticle={article} />

        {/* Contact CTA Section */}
        <section id="contact" className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Prêt à concrétiser votre projet ?
            </h2>
            <p className="text-base md:text-lg text-green-100 mb-8 leading-relaxed">
              Nos experts France Solaire vous accompagnent pour transformer votre habitation en <strong>logement économe en énergie</strong>
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
                <FaUser className="w-5 h-5 mr-2" />
                <span className="font-semibold">Garanties France Solaire</span>
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
                href="/articles" 
                className="inline-flex items-center text-gray-600 hover:text-yellow-600 transition-colors"
              >
                <FaArrowLeft className="w-4 h-4 mr-2" />
                Retour aux articles
              </Link>
              
              <Link 
                href="/services" 
                className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage; 