import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | France Solaire',
  description: 'Conditions générales de vente de France Solaire - Installation de panneaux solaires, chauffage et isolation thermique.',
}

export default function CGV() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9 2.221V7H4.221a2 2 0 01.365-.5L8.5 2.586A2 2 0 019 2.22zM11 2v5a2 2 0 01-2 2H4v11a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2h-7z" clipRule="evenodd"/>
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4">Conditions Générales de Vente</h1>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Conditions applicables à tous nos services de rénovation énergétique
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Présentation de l'entreprise */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m7 0v-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4m6 0V10a1 1 0 00-1-1H9a1 1 0 00-1 1v11" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">1. Présentation de l'entreprise</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Dénomination sociale</p>
                    <p className="text-gray-600">FRANCE SOLAIRE</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Forme juridique</p>
                    <p className="text-gray-600">SARL (Société à associé unique)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Capital social</p>
                    <p className="text-gray-600">10 000,00 €</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">SIRET</p>
                    <p className="text-gray-600">934 592 973 00013</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Siège social</p>
                    <p className="text-gray-600">16 allée des alouettes<br />59250 Halluin</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">RCS</p>
                    <p className="text-gray-600">934 592 973 R.C.S. Lille Métropole</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Gérant</p>
                    <p className="text-gray-600">Arthur ZEGHERS</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Contact</p>
                    <p className="text-gray-600">07 82 25 86 74<br />contact@france-solaire.fr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Domaine d'application */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">2. Domaine d'application</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Les présentes conditions générales de vente s'appliquent à toutes les prestations fournies par France Solaire :
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 12v1m1-6h1m-1 0h1m-1 0v1M9 21h6a2 2 0 002-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Panneaux solaires</h3>
                </div>
                <p className="text-gray-600 text-sm">Installation photovoltaïque</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Chauffage</h3>
                </div>
                <p className="text-gray-600 text-sm">Systèmes de chauffage</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v0a2 2 0 002 2h14M3 7l9 6 9-6" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Isolation</h3>
                </div>
                <p className="text-gray-600 text-sm">Isolation thermique</p>
              </div>
            </div>
          </div>

          {/* Devis et commandes */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">3. Devis et commandes</h2>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Établissement du devis</h3>
                <p className="text-gray-600">
                  Tout devis est établi gratuitement après visite technique. Il détaille les prestations, 
                  matériaux, délais et prix. Le devis est valable 30 jours à compter de sa date d'émission.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Acceptation de commande</h3>
                <p className="text-gray-600">
                  La commande est définitivement acceptée après signature du devis et versement de l'acompte. 
                  Toute modification ultérieure fera l'objet d'un avenant.
                </p>
              </div>
            </div>
          </div>

          {/* Prix et paiement */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">4. Prix et modalités de paiement</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Tarifs</h3>
                  <p className="text-gray-600 text-sm">
                    Les prix sont indiqués TTC et fermes. Ils incluent la main-d'œuvre, 
                    les matériaux et le déplacement dans un rayon de 50 km.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Modalités de paiement</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Acompte de 30% à la commande</li>
                    <li>• 40% en cours de chantier</li>
                    <li>• Solde à la réception des travaux</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Moyens de paiement</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Chèque</li>
                    <li>• Virement bancaire</li>
                    <li>• Espèces (jusqu'à 1 000€)</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h3 className="font-semibold text-red-900 mb-2">Retard de paiement</h3>
                  <p className="text-red-700 text-sm">
                    Pénalités de 3 fois le taux légal + indemnité forfaitaire de 40€ 
                    pour frais de recouvrement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Délais et garanties */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">5. Délais d'exécution</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Les délais sont communiqués à titre indicatif. Un retard ne peut donner lieu à indemnisation 
                sauf stipulation contraire.
              </p>
              <div className="space-y-2">
                <p className="text-sm"><strong>Causes de retard acceptables :</strong></p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Intempéries</li>
                  <li>• Force majeure</li>
                  <li>• Retard de livraison</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">7. Garanties</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-green-50 rounded p-3">
                  <p className="font-semibold text-gray-900 text-sm">Garantie décennale</p>
                  <p className="text-gray-600 text-xs">Dommages compromettant la solidité</p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="font-semibold text-gray-900 text-sm">Garantie biennale</p>
                  <p className="text-gray-600 text-xs">Équipements dissociables</p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="font-semibold text-gray-900 text-sm">Garantie de parfait achèvement</p>
                  <p className="text-gray-600 text-xs">1 an - Tous désordres signalés</p>
                </div>
              </div>
            </div>
          </div>

          {/* Assurances et droit de rétractation */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">8. Assurances</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Responsabilité civile professionnelle</p>
                  <p className="text-gray-600 text-xs">Couvre les dommages causés aux tiers</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Assurance décennale</p>
                  <p className="text-gray-600 text-xs">Garantit les gros œuvres pendant 10 ans</p>
                </div>
                <p className="text-gray-600 text-xs mt-3">
                  Les attestations d'assurance sont disponibles sur demande.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">9. Droit de rétractation</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="font-semibold text-blue-900 text-sm">14 jours pour se rétracter</p>
                  <p className="text-blue-700 text-xs">
                    À compter de la signature du contrat (Code de la consommation)
                  </p>
                </div>
                <p className="text-gray-600 text-xs">
                  La rétractation doit être notifiée par lettre recommandée avec accusé de réception.
                </p>
              </div>
            </div>
          </div>

          {/* Protection des données et litiges */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">11. Protection des données</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Les données personnelles collectées sont traitées conformément au RGPD. 
                  Consultez notre <a href="/politique-de-confidentialite" className="text-green-600 hover:underline">politique de confidentialité</a> 
                  pour plus d'informations.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">12. Règlement des litiges</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">
                    En cas de litige, nous privilégions la résolution amiable. À défaut, compétence 
                    du Tribunal de Commerce de Lille Métropole.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Droit applicable :</strong> Droit français
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Note de mise à jour */}
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-lg">
              <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-green-800">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
} 