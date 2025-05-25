import React from 'react';
import InterventionMap from './InterventionMap';

const InterventionSection = () => {
  return (
    <section id="intervention" className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          {/* Icône dédiée pour la section */}
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full shadow-lg mb-6">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677L8.161 2.58z" clipRule="evenodd"/>
              <path d="M6.75 7.04L5 7.94v9.592a3 3 0 003 3h8a3 3 0 003-3V7.94l-1.75-.9-4.5 2.25a.75.75 0 01-.5 0l-4.5-2.25z"/>
            </svg>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-green-800">
            Nos Zones d'Intervention
          </h2>
          <p className="text-base md:text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre zone d'intervention dans les Hauts-de-France. Nous intervenons dans 4 départements 
            pour vous accompagner dans vos projets de rénovation énergétique.
          </p>
        </header>

        {/* Carte interactive */}
        <div className="mb-12 md:mb-16">
          <InterventionMap />
        </div>

        {/* Section Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl text-center shadow-lg border border-green-200/50 hover:shadow-xl transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">4</div>
            <div className="text-xs md:text-sm text-green-700 font-medium">Départements</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl text-center shadow-lg border border-green-200/50 hover:shadow-xl transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">11</div>
            <div className="text-xs md:text-sm text-green-700 font-medium">Villes principales</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl text-center shadow-lg border border-green-200/50 hover:shadow-xl transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">24h</div>
            <div className="text-xs md:text-sm text-green-700 font-medium">Délai réponse</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl text-center shadow-lg border border-green-200/50 hover:shadow-xl transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">100%</div>
            <div className="text-xs md:text-sm text-green-700 font-medium">Déplacement gratuit</div>
          </div>
        </div>

        {/* Call to Action modernisé */}
        <div className="bg-gradient-to-r from-green-600 to-orange-500 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full mb-4 md:mb-6">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.678 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd"/>
              </svg>
            </div>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Votre commune n'apparaît pas sur la carte ?
            </h3>
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 leading-relaxed">
              Contactez-nous pour découvrir comment nous pouvons vous accompagner dans votre projet de rénovation énergétique, 
              même en dehors de nos zones principales d'intervention.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
                </svg>
                Nous contacter
              </a>
              <a 
                href="#prestations" 
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm md:text-base"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"/>
                </svg>
                Nos prestations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterventionSection; 