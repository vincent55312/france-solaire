import React from 'react';

const SavoirFaireSection = () => {
  const certifications = [
    {
      title: "RGE Photovoltaïque",
      description: "Reconnu Garant de l'Environnement pour l'installation de panneaux solaires",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"/>
        </svg>
      )
    },
    {
      title: "RGE Pompe à Chaleur", 
      description: "Certification pour l'installation de pompes à chaleur air/air et air/eau",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.25 8.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "RGE Isolation",
      description: "Expertise certifiée en isolation thermique intérieure et extérieure",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
        </svg>
      )
    },
    {
      title: "Qualifications Multiples",
      description: "Toiture, menuiseries, chauffage - Une équipe polyvalente et experte",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.570.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd"/>
        </svg>
      )
    }
  ];

  return (
    <section id="savoir-faire" className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-emerald-100" role="region" aria-labelledby="savoir-faire-title">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full shadow-lg mb-6">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25H16.5v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207A6.72 6.72 0 0018.666 5.25z" clipRule="evenodd"/>
            </svg>
          </div>
          
          <h2 id="savoir-faire-title" className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-green-800">
            Notre Savoir-Faire
          </h2>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-lg md:text-xl lg:text-2xl text-green-700 italic leading-relaxed mb-6 md:mb-8">
              "Nous confier votre projet c'est faire confiance à une équipe professionnelle et certifiée avec du savoir-faire et savoir-être"
            </blockquote>
            <p className="text-base md:text-lg text-green-600">
              Forte de ses certifications RGE et de son expertise reconnue, notre équipe vous accompagne dans tous vos projets de rénovation énergétique.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {certifications.map((cert, index) => (
            <article key={index} className="text-center bg-white/70 backdrop-blur-sm p-4 md:p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-green-200/50">
              <div className="text-green-600 mb-3 md:mb-4 flex justify-center" role="img" aria-label={cert.title}>
                {cert.icon}
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-green-800">
                {cert.title}
              </h3>
              <p className="text-green-600 text-sm md:text-sm leading-relaxed">
                {cert.description}
              </p>
            </article>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white shadow-2xl">
          <h3 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3 md:mb-4">
            Pourquoi choisir une entreprise certifiée RGE ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="flex flex-col items-center">
              <div className="mb-2 md:mb-3">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z"/>
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.118 2.178.502.395 1.112.647 1.714.756V15.75a.75.75 0 001.5 0v-.774a3.836 3.836 0 001.72-.755c.712-.566 1.112-1.35 1.112-2.178 0-.829-.4-1.612-1.118-2.178A3.836 3.836 0 0012.75 6.816V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Aides financières</h4>
              <p className="text-xs md:text-sm text-center opacity-90">
                Éligibilité aux aides publiques : MaPrimeRénov', CEE, TVA réduite
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 md:mb-3">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v6.75a.75.75 0 01-.232.545 50.266 50.266 0 01-4.078 2.661.75.75 0 01-.855-.346A49.807 49.807 0 011.5 15V9a.75.75 0 01.8-.75 51.295 51.295 0 009.4-5.445zM15.75 9.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Expertise garantie</h4>
              <p className="text-xs md:text-sm text-center opacity-90">
                Formation continue et mise à jour des compétences techniques
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 md:mb-3">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Qualité assurée</h4>
              <p className="text-xs md:text-sm text-center opacity-90">
                Respect des normes et garanties sur nos installations
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a 
            href="#contact" 
            className="bg-green-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:bg-green-700 transition duration-300 shadow-lg text-sm md:text-base"
            aria-label="Contacter notre équipe certifiée"
          >
            Faites confiance à notre expertise
          </a>
        </div>
      </div>
    </section>
  );
};

export default SavoirFaireSection; 