import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">France Solaire</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="France Solaire Logo" className="h-12 mb-4" />
          <p className="text-sm">Votre expert en solutions solaires et isolation.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[var(--color-yellow)]">Accueil</Link></li>
            <li><Link href="/#prestations" className="hover:text-[var(--color-yellow)]">Nos Prestations</Link></li>
            <li><Link href="/#intervention" className="hover:text-[var(--color-yellow)]">Zones d'intervention</Link></li>
            <li><Link href="/#contact" className="hover:text-[var(--color-yellow)]">Contact</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-[var(--color-yellow)]">Mentions Légales</Link></li>
            <li><Link href="/politique-de-confidentialite" className="hover:text-[var(--color-yellow)]">Politique de confidentialité</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
          <p className="text-sm">Adresse: 123 Rue de l'Exemple, 59000 Lille</p>
          <p className="text-sm">Téléphone: 01 23 45 67 89</p>
          <p className="text-sm">Email: contact@francesolaire.com</p>
        </div>
      </div>
      <div className="text-center mt-8 pt-4 border-t border-gray-700">
        <p className="text-sm">&copy; {new Date().getFullYear()} France Solaire. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer; 