import React from 'react';
import { FaEuroSign, FaUserGraduate, FaShieldAlt, FaAward } from 'react-icons/fa';

const SavoirFaireSection = () => {
  const certifications = [
    {
      title: "RGE Photovoltaïque",
      description: "Installation de panneaux solaires certifiée",
      icon: (
        <path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"/>
      )
    },
    {
      title: "RGE Pompe à Chaleur", 
      description: "Certification pompes à chaleur air/air et air/eau",
      icon: (
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.25 8.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z" clipRule="evenodd"/>
      )
    },
    {
      title: "RGE Isolation",
      description: "Expertise isolation thermique certifiée",
      icon: (
        <>
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
        </>
      )
    },
    {
      title: "Qualifications Multiples",
      description: "Toiture, menuiseries, chauffage certifiés",
      icon: (
        <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.85h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.570.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd"/>
      )
    }
  ];

  const rgeImages = [
    { src: "/rge/logo-qualiboisef.webp", alt: "Certification Qualibois EF" },
    { src: "/rge/logo-qualigaz.webp", alt: "Certification Qualigaz" },
    { src: "/rge/rge-qualisol-_1_.webp", alt: "Certification Qualisol RGE" },
    { src: "/rge/Logo-QUALIBAT-RGE-1-_1_.webp", alt: "Certification Qualibat RGE" },
    { src: "/rge/rge-qualifelec-1.webp", alt: "Certification Qualifelec RGE" },
    { src: "/rge/rge-ecoartisan.webp", alt: "Certification Éco Artisan RGE" },
    { src: "/rge/logo-QualiPAC-2025-RGE_sc.webp", alt: "Certification QualiPAC RGE" },
    { src: "/rge/rge_quali_pv_omeo-_1_.webp", alt: "Certification Quali PV Omeo RGE" },
    { src: "/rge/rge-ventilation.webp", alt: "Certification RGE Ventilation" }
  ];

  return (
    <section id="savoir-faire" className="relative py-8 md:py-16 bg-gradient-to-br from-slate-50 to-green-50" role="region" aria-labelledby="savoir-faire-title">
      <div className="container mx-auto px-4">
        
        {/* Header principal */}
        <header className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full shadow-lg mb-4 md:mb-6">
            <FaAward className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          
          <h2 id="savoir-faire-title" className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-green-800">
            Notre Savoir-Faire Certifié
          </h2>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-sm md:text-lg lg:text-xl text-green-700 italic leading-relaxed mb-4 md:mb-6">
              "Nous confier votre projet c'est faire confiance à une équipe professionnelle et certifiée"
            </blockquote>
            <p className="text-xs md:text-base text-green-600 leading-relaxed">
              Forte de ses certifications RGE et de son expertise reconnue, notre équipe vous accompagne dans tous vos projets de rénovation énergétique.
            </p>
          </div>
        </header>

        {/* Carrousel des certifications RGE intégré */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-green-300"></div>
            <div className="px-4">
              <span className="bg-white px-4 py-2 rounded-full text-sm md:text-base font-semibold text-green-800 border-2 border-green-200 shadow-sm">
                Nos Certifications Officielles
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-green-300"></div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white/60 via-white/80 to-white/60 backdrop-blur-sm p-4 md:p-6 border border-green-200/50 shadow-lg pause-animation">
            <div className="flex animate-scroll-slow">
              {/* Premier set d'images */}
              <div className="flex space-x-3 md:space-x-4 flex-shrink-0">
                {rgeImages.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl p-2 md:p-2.5 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 group cursor-pointer"
                  >
                    <img 
                      src={cert.src}
                      alt={cert.alt}
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
              
              {/* Deuxième set d'images */}
              <div className="flex space-x-3 md:space-x-4 ml-3 md:ml-4 flex-shrink-0">
                {rgeImages.map((cert, index) => (
                  <div 
                    key={`dup-${index}`}
                    className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl p-2 md:p-2.5 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 group cursor-pointer"
                  >
                    <img 
                      src={cert.src}
                      alt={cert.alt}
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Troisième set d'images pour continuité parfaite */}
              <div className="flex space-x-3 md:space-x-4 ml-3 md:ml-4 flex-shrink-0">
                {rgeImages.map((cert, index) => (
                  <div 
                    key={`dup2-${index}`}
                    className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl p-2 md:p-2.5 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 group cursor-pointer"
                  >
                    <img 
                      src={cert.src}
                      alt={cert.alt}
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient overlay amélioré */}
            <div className="absolute top-0 left-0 w-12 md:w-16 h-full bg-gradient-to-r from-white/90 via-white/50 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-12 md:w-16 h-full bg-gradient-to-l from-white/90 via-white/50 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Grille des compétences principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
          {certifications.map((cert, index) => (
            <article key={index} className="group bg-white/80 backdrop-blur-sm p-4 md:p-5 rounded-xl hover:shadow-xl transition-all duration-300 border border-green-200/50 hover:border-green-300/70 hover:-translate-y-1">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    {cert.icon}
                  </svg>
                </div>
                <h3 className="text-sm md:text-base font-bold mb-2 text-green-800 group-hover:text-green-700 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-green-600 text-xs md:text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Section avantages RGE redesignée - Version compacte */}
        <div className="bg-gradient-to-br from-green-600 via-green-500 to-green-600 rounded-xl p-4 md:p-5 text-white shadow-lg mb-6 md:mb-8">
          <div className="text-center mb-3 md:mb-4">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Pourquoi choisir une entreprise RGE ?
            </h3>
            <p className="text-green-100 text-xs md:text-sm">
              La certification RGE vous garantit qualité, économies et éligibilité aux aides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full mb-2">
                <FaEuroSign className="w-4 h-4" />
              </div>
              <h4 className="font-bold mb-1 text-sm">Aides Financières</h4>
              <p className="text-xs text-green-100 leading-relaxed">
                MaPrimeRénov', CEE, TVA réduite, Éco-PTZ
              </p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full mb-2">
                <FaUserGraduate className="w-4 h-4" />
              </div>
              <h4 className="font-bold mb-1 text-sm">Expertise Garantie</h4>
              <p className="text-xs text-green-100 leading-relaxed">
                Formation continue et compétences validées
              </p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full mb-2">
                <FaShieldAlt className="w-4 h-4" />
              </div>
              <h4 className="font-bold mb-1 text-sm">Qualité Assurée</h4>
              <p className="text-xs text-green-100 leading-relaxed">
                Respect des normes et garanties décennales
              </p>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-lg transform hover:scale-105"
            aria-label="Contacter notre équipe certifiée"
          >
            <FaAward className="w-5 h-5" />
            <span>Faites confiance à notre expertise</span>
          </a>
          
          <p className="text-center text-xs md:text-sm text-green-600 mt-4 italic">
            Toutes nos qualifications sont régulièrement renouvelées et à jour
          </p>
        </div>
      </div>

      {/* Divider Brush Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-6 md:h-8" 
          viewBox="0 0 1200 60" 
          preserveAspectRatio="none"
          fill="none"
        >
          <path 
            d="M0,30 C150,40 300,15 450,30 C600,45 750,15 900,25 C1050,35 1150,20 1200,30 L1200,60 L0,60 Z" 
            fill="currentColor" 
            className="text-green-500"
          />
          <path 
            d="M0,25 C200,35 400,10 600,25 C800,40 1000,15 1200,25 L1200,60 L0,60 Z" 
            fill="currentColor" 
            className="text-orange-400 opacity-70"
          />
        </svg>
      </div>
    </section>
  );
};

export default SavoirFaireSection;