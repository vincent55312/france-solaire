import React from 'react';

const PrestationsSection = () => {
  const prestations = [
    {
      title: "Panneaux Solaires Photovoltaïques",
      description: "Installation complète de panneaux solaires pour réduire votre facture d'électricité et valoriser votre patrimoine. Étude personnalisée, pose professionnelle et suivi de production.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"/>
        </svg>
      ),
      features: ["Étude de faisabilité gratuite", "Installation certifiée RGE", "Garantie 20 ans", "Suivi de production"]
    },
    {
      title: "Isolation Thermique",
      description: "Amélioration de l'efficacité énergétique de votre habitat par l'isolation des combles, murs et sols. Réduction significative de vos dépenses de chauffage.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
        </svg>
      ),
      features: ["Isolation combles perdus", "Isolation par l'extérieur", "Isolation des murs", "Matériaux écologiques"]
    },
    {
      title: "Chauffage & Climatisation",
      description: "Installation et maintenance de systèmes de chauffage performants : pompes à chaleur, chaudières gaz condensation, radiateurs et climatisation réversible.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.25 8.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z" clipRule="evenodd"/>
        </svg>
      ),
      features: ["Pompes à chaleur air/eau", "Climatisation réversible", "Chaudières condensation", "Maintenance préventive"]
    },
    {
      title: "Couverture & Toiture",
      description: "Rénovation complète de toiture, réparation de fuites, démoussage et entretien. Protection durable de votre habitat contre les intempéries.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z"/>
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd"/>
        </svg>
      ),
      features: ["Réfection complète", "Réparation de fuites", "Démoussage professionnel", "Isolation sous-toiture"]
    },
    {
      title: "Menuiseries PVC/Aluminium",
      description: "Remplacement de fenêtres et portes pour améliorer l'isolation phonique et thermique. Large gamme de menuiseries sur-mesure et performantes.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd"/>
        </svg>
      ),
      features: ["Fenêtres triple vitrage", "Portes d'entrée sécurisées", "Volets roulants", "Sur-mesure"]
    },
    {
      title: "Expertise & Certification",
      description: "Audit énergétique complet, conseils personnalisés et accompagnement dans vos démarches d'aides financières. Expertise technique reconnue.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.84 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clipRule="evenodd"/>
          <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z"/>
        </svg>
      ),
      features: ["Audit énergétique", "Conseils personnalisés", "Aide aux démarches", "Devis détaillés"]
    }
  ];

  return (
    <section id="prestations" className="py-12 md:py-20 bg-gradient-to-br from-yellow-50 to-amber-100" role="region" aria-labelledby="prestations-title">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          {/* Icône dédiée pour la section */}
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-amber-500 rounded-full shadow-lg mb-6">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.641l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd"/>
            </svg>
          </div>
          
          <h2 id="prestations-title" className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-amber-800">
            Nos Prestations
          </h2>
          <p className="text-base md:text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de services pour la rénovation énergétique et l'amélioration de votre habitat dans les Hauts-de-France.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {prestations.map((prestation, index) => (
            <article key={index} className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/50 hover:border-amber-300/70">
              <div className="text-center mb-4 md:mb-6">
                <div className="text-amber-600 mb-3 md:mb-4 flex justify-center" role="img" aria-label={prestation.title}>
                  {prestation.icon}
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-amber-800 mb-2 md:mb-3">
                  {prestation.title}
                </h3>
              </div>
              
              <p className="text-amber-700 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                {prestation.description}
              </p>
              
              <ul className="space-y-1 md:space-y-2 mb-4 md:mb-6">
                {prestation.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs md:text-sm text-amber-600">
                    <span className="text-amber-500 mr-2 text-sm md:text-base">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <a 
                  href="#contact" 
                  className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md text-xs md:text-sm"
                  aria-label={`Demander un devis pour ${prestation.title}`}
                >
                  Demander un devis
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Pourquoi choisir nos services ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8">
              <div className="text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 md:w-8 md:h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-sm md:text-base mb-1">Intervention rapide</h4>
                <p className="text-xs md:text-sm opacity-90">Devis sous 48h</p>
              </div>
              <div className="text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 md:w-8 md:h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25H16.5v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207A6.72 6.72 0 0018.666 5.25z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-sm md:text-base mb-1">Qualité certifiée</h4>
                <p className="text-xs md:text-sm opacity-90">Entreprise RGE</p>
              </div>
              <div className="text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 md:w-8 md:h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z"/>
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.118 2.178.502.395 1.112.647 1.714.756V15.75a.75.75 0 001.5 0v-.774a3.836 3.836 0 001.72-.755c.712-.566 1.112-1.35 1.112-2.178 0-.829-.4-1.612-1.118-2.178A3.836 3.836 0 0012.75 6.816V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-sm md:text-base mb-1">Aides financières</h4>
                <p className="text-xs md:text-sm opacity-90">Accompagnement complet</p>
              </div>
              <div className="text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 md:w-8 md:h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-sm md:text-base mb-1">Garanties étendues</h4>
                <p className="text-xs md:text-sm opacity-90">Jusqu'à 20 ans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrestationsSection; 