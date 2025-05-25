import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          {/* Icône dédiée pour la section */}
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full shadow-lg mb-6">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
            </svg>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-blue-800">
            Contactez-Nous
          </h2>
          <p className="text-base md:text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            Prêt à démarrer votre projet de rénovation énergétique ? Contactez notre équipe d'experts pour un devis personnalisé et gratuit.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Informations de contact */}
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-blue-200/50">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 md:mb-6">
              Nos Coordonnées
            </h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="text-blue-500 mt-1">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 text-sm md:text-base">Adresse</h4>
                  <p className="text-blue-600 text-sm md:text-base">
                    123 Rue de la République<br />
                    59000 Lille, France
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="text-blue-500 mt-1">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 text-sm md:text-base">Téléphone</h4>
                  <a href="tel:+33123456789" className="text-blue-600 hover:text-blue-800 transition-colors text-sm md:text-base">
                    01 23 45 67 89
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="text-blue-500 mt-1">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 text-sm md:text-base">Email</h4>
                  <a href="mailto:contact@france-solaire.fr" className="text-blue-600 hover:text-blue-800 transition-colors text-sm md:text-base">
                    contact@france-solaire.fr
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="text-blue-500 mt-1">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 text-sm md:text-base">Horaires</h4>
                  <p className="text-blue-600 text-sm md:text-base">
                    Lun - Ven : 8h00 - 18h00<br />
                    Sam : 9h00 - 12h00
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-2 text-sm md:text-base flex items-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"/>
                  <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"/>
                </svg>
                Intervention Rapide
              </h4>
              <p className="text-blue-700 text-xs md:text-sm">
                Devis gratuit sous 48h • Déplacement gratuit dans les Hauts-de-France
              </p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-blue-200/50">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 md:mb-6">
              Demande de Devis Gratuit
            </h3>
            
            <form className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm md:text-base font-medium text-blue-800 mb-1 md:mb-2">
                  Nom complet *
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  autoComplete="name" 
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base transition-colors" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm md:text-base font-medium text-blue-800 mb-1 md:mb-2">
                  Adresse email *
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  autoComplete="email" 
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base transition-colors" 
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm md:text-base font-medium text-blue-800 mb-1 md:mb-2">
                  Numéro de téléphone
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  autoComplete="tel" 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base transition-colors" 
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm md:text-base font-medium text-blue-800 mb-1 md:mb-2">
                  Type de projet
                </label>
                <select 
                  name="project" 
                  id="project"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base transition-colors"
                >
                  <option value="">Sélectionnez votre projet</option>
                  <option value="solaire">Panneaux solaires</option>
                  <option value="isolation">Isolation thermique</option>
                  <option value="chauffage">Chauffage & climatisation</option>
                  <option value="toiture">Couverture & toiture</option>
                  <option value="menuiserie">Menuiseries</option>
                  <option value="audit">Audit énergétique</option>
                  <option value="autre">Autre projet</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm md:text-base font-medium text-blue-800 mb-1 md:mb-2">
                  Décrivez votre projet *
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required
                  placeholder="Décrivez votre projet, vos besoins, la surface concernée..."
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-lg text-sm md:text-base flex items-center justify-center"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"/>
                  <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"/>
                </svg>
                Demander mon devis gratuit
              </button>
              
              <p className="text-xs md:text-sm text-blue-600 text-center">
                * Champs obligatoires • Réponse garantie sous 48h
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 