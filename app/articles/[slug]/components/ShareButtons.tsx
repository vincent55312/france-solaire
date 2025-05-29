'use client';

import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaCopy, FaFacebook, FaWhatsapp } from 'react-icons/fa';

interface Article {
  slug: string;
  titre: string;
  description: string;
  article: string;
  tags: string[];
  photo: string;
}

interface ShareButtonsProps {
  article: Article;
}

export default function ShareButtons({ article }: ShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState(`https://france-solaire.fr/articles/${article.slug}`);
  const shareText = `${article.titre} - ${article.description}`;

  useEffect(() => {
    // Met à jour l'URL avec l'URL réelle côté client si nécessaire
    // Mais garde l'URL france-solaire.fr par défaut
    setCurrentUrl(`https://france-solaire.fr/articles/${article.slug}`);
  }, [article.slug]);

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${currentUrl}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(`Article France Solaire : ${article.titre}`);
    const body = encodeURIComponent(`Bonjour,\n\nJe vous partage cet article intéressant sur la rénovation énergétique :\n\n${article.titre}\n${article.description}\n\nLire l'article complet : ${currentUrl}\n\nCordialement`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      // Afficher une notification de succès
      const button = document.getElementById('copy-url-btn');
      if (button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Copié !';
        setTimeout(() => {
          button.innerHTML = originalText;
        }, 2000);
      }
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
      // Fallback pour les navigateurs qui ne supportent pas clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Partager cet article</h3>
      <div className="flex flex-wrap gap-4">
        <button 
          onClick={handleFacebookShare}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          <FaFacebook className="w-4 h-4" />
          Facebook
        </button>
        
        <button 
          onClick={handleWhatsAppShare}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          <FaWhatsapp className="w-4 h-4" />
          WhatsApp
        </button>
        
        <button 
          onClick={handleEmailShare}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          <FaEnvelope className="w-4 h-4" />
          Email
        </button>
        
        <button 
          onClick={handleCopyUrl}
          id="copy-url-btn"
          className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          <FaCopy className="w-4 h-4" />
          Copier le lien
        </button>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 mb-2">Lien de l'article :</p>
        <div className="flex items-center gap-2">
          <code className="flex-1 text-xs bg-white px-3 py-2 rounded border text-gray-700 select-all">
            {currentUrl}
          </code>
          <button 
            onClick={handleCopyUrl}
            className="p-2 text-gray-500 hover:text-orange-600 transition-colors"
            title="Copier le lien"
          >
            <FaCopy className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
} 