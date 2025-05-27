'use client';

import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Toujours activé
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    } else {
      try {
        const savedPreferences = JSON.parse(cookieConsent);
        // Vérifier que l'objet a la structure attendue
        if (savedPreferences && typeof savedPreferences === 'object' && 'necessary' in savedPreferences) {
          setPreferences(savedPreferences);
        } else {
          // Structure invalide, nettoyer et afficher le bandeau
          localStorage.removeItem('cookieConsent');
          setShowBanner(true);
        }
      } catch (error) {
        // JSON invalide, nettoyer et afficher le bandeau
        console.warn('Invalid cookie consent data, resetting:', error);
        localStorage.removeItem('cookieConsent');
        setShowBanner(true);
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(necessaryOnly);
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly));
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (category: string, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [category]: value
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowSettings(false)} />
      )}

      {/* Bandeau principal */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-700">
                      <strong>Nous utilisons des cookies</strong> pour améliorer votre expérience sur notre site. 
                      Certains cookies sont nécessaires au fonctionnement du site, d'autres nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Consultez notre <a href="/politique-de-confidentialite" className="text-blue-600 hover:underline">politique de confidentialité</a> pour plus d'informations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Paramétrer
                </button>
                <button
                  onClick={acceptNecessaryOnly}
                  className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Refuser
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                >
                  Accepter tout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Panneau de paramétrage */}
      {showSettings && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 max-h-[80vh] overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Paramètres des cookies</h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <p className="text-sm text-gray-600">
                Gérez vos préférences de cookies. Vous pouvez activer ou désactiver différents types de cookies ci-dessous.
              </p>

              {/* Cookies nécessaires */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">Cookies nécessaires</h3>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="sr-only"
                    />
                    <div className="w-11 h-6 bg-green-600 rounded-full shadow-inner">
                      <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-6 translate-y-1"></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Ces cookies sont indispensables au fonctionnement du site web et ne peuvent pas être désactivés. 
                  Ils permettent la navigation, la sécurité et l'accessibilité.
                </p>
              </div>

              {/* Cookies analytiques */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">Cookies analytiques</h3>
                  <label className="relative inline-flex cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-11 h-6 rounded-full shadow-inner transition-colors duration-200 ${
                      preferences.analytics ? 'bg-green-600' : 'bg-gray-300'
                    }`}>
                      <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 translate-y-1 ${
                        preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                      }`}></div>
                    </div>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site web en collectant des informations anonymes.
                </p>
              </div>

              {/* Cookies fonctionnels */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">Cookies fonctionnels</h3>
                  <label className="relative inline-flex cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) => handlePreferenceChange('functional', e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-11 h-6 rounded-full shadow-inner transition-colors duration-200 ${
                      preferences.functional ? 'bg-green-600' : 'bg-gray-300'
                    }`}>
                      <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 translate-y-1 ${
                        preferences.functional ? 'translate-x-6' : 'translate-x-1'
                      }`}></div>
                    </div>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  Ces cookies permettent d'améliorer la fonctionnalité et la personnalisation du site, comme la mémorisation de vos préférences.
                </p>
              </div>

              {/* Cookies marketing */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">Cookies marketing</h3>
                  <label className="relative inline-flex cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-11 h-6 rounded-full shadow-inner transition-colors duration-200 ${
                      preferences.marketing ? 'bg-green-600' : 'bg-gray-300'
                    }`}>
                      <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 translate-y-1 ${
                        preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                      }`}></div>
                    </div>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  Ces cookies sont utilisés pour vous proposer des publicités pertinentes et mesurer l'efficacité de nos campagnes marketing.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={acceptNecessaryOnly}
                className="px-6 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Refuser tout
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Accepter tout
              </button>
              <button
                onClick={savePreferences}
                className="px-6 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
              >
                Sauvegarder mes préférences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner; 