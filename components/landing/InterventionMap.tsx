'use client';

import React, { useEffect, useRef } from 'react';
import { departmentGeoJSON, cities } from '../../app/MapData';

// Étendre l'interface HTMLDivElement pour inclure les propriétés Leaflet
interface LeafletContainer extends HTMLDivElement {
  _leaflet_id?: string;
}

const InterventionMap: React.FC = () => {
  const mapContainerRef = useRef<LeafletContainer>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const initMap = async () => {
      // Vérifications de sécurité améliorées
      if (!mapContainerRef.current) return;
      
      // Nettoyer toute carte existante avant d'en créer une nouvelle
      if (mapRef.current) {
        try {
          mapRef.current.remove();
          mapRef.current = null;
        } catch (error) {
          console.warn('Erreur lors du nettoyage de la carte:', error);
        }
      }

      // Vérifier si le conteneur a déjà une carte (double vérification)
      if (mapContainerRef.current._leaflet_id) {
        try {
          // Forcer la suppression de l'ID Leaflet
          delete mapContainerRef.current._leaflet_id;
          // Nettoyer le contenu HTML
          mapContainerRef.current.innerHTML = '';
        } catch (error) {
          console.warn('Erreur lors du nettoyage du conteneur:', error);
        }
      }

      try {
        // Import Leaflet dynamically
        const L = (await import('leaflet')).default;
        
        // Add CSS if not already added
        if (!document.querySelector('link[href*="leaflet.css"]')) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
          document.head.appendChild(link);
        }

        // Fix default markers
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });

        // Initialize map
        const map = L.map(mapContainerRef.current, {
          center: [50.1, 2.5],
          zoom: 7,
          zoomControl: false,
          scrollWheelZoom: false,
          doubleClickZoom: false,
          boxZoom: false,
          keyboard: false,
          dragging: false,
          touchZoom: false,
          attributionControl: false,
          maxZoom: 7,
          minZoom: 7
        });

        // Add tile layer with Carto light theme
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '© OpenStreetMap © CARTO',
          subdomains: 'abcd',
          maxZoom: 7,
          minZoom: 7
        }).addTo(map);

        // Couleurs personnalisées par département
        const departmentColors = {
          '59': { fillColor: '#fb923c', color: '#ea580c' }, // Orange
          '62': { fillColor: '#fbbf24', color: '#d97706' }, // Jaune
          '80': { fillColor: '#f59e0b', color: '#b45309' }, // Amber
          '76': { fillColor: '#ff6b35', color: '#dc2626' }  // Rouge-orange
        };

        // Add departments with custom colors
        L.geoJSON(departmentGeoJSON, {
          style: (feature) => {
            const departmentCode = feature?.properties?.code;
            const colors = departmentColors[departmentCode as keyof typeof departmentColors] || 
                          { fillColor: '#fb923c', color: '#ea580c' };
            
            return {
              fillColor: colors.fillColor,
              weight: 2,
              opacity: 1,
              color: colors.color,
              fillOpacity: 0.4
            };
          }
        }).addTo(map);

        mapRef.current = map;

      } catch (error) {
        console.error('Erreur lors de l\'initialisation de la carte:', error);
      }
    };

    // Petite temporisation pour s'assurer que le DOM est prêt
    const timer = setTimeout(initMap, 100);

    return () => {
      // Nettoyer le timer
      clearTimeout(timer);
      
      // Nettoyer la carte
      if (mapRef.current) {
        try {
          mapRef.current.remove();
          mapRef.current = null;
        } catch (error) {
          console.warn('Erreur lors du nettoyage final de la carte:', error);
        }
      }

      // Nettoyer le conteneur
      if (mapContainerRef.current) {
        try {
          if (mapContainerRef.current._leaflet_id) {
            delete mapContainerRef.current._leaflet_id;
          }
          mapContainerRef.current.innerHTML = '';
        } catch (error) {
          console.warn('Erreur lors du nettoyage final du conteneur:', error);
        }
      }
    };
  }, []); // Pas de dépendances pour éviter les re-renders

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-200">
      <div className="p-6">
        <h3 className="text-xl font-bold text-orange-900 mb-4">
          Zone d'intervention
        </h3>
        <div 
          ref={mapContainerRef}
          className="w-full h-96 rounded-lg border border-orange-200"
          style={{ zIndex: 1 }}
        />
        
        {/* Légende */}
        <div className="mt-4 p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border border-orange-200">
          <h4 className="font-semibold text-orange-900 mb-3">Départements couverts :</h4>
          <div className="grid grid-cols-2 gap-3 text-sm mb-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-orange-400 rounded-sm mr-3 border border-orange-500"></div>
              <span className="text-orange-800 font-medium">Nord (59)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-400 rounded-sm mr-3 border border-yellow-500"></div>
              <span className="text-yellow-800 font-medium">Pas-de-Calais (62)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-amber-500 rounded-sm mr-3 border border-amber-600"></div>
              <span className="text-amber-800 font-medium">Somme (80)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-400 rounded-sm mr-3 border border-red-500"></div>
              <span className="text-red-800 font-medium">Seine-Maritime (76)</span>
            </div>
          </div>
          
          <div className="pt-3 border-t border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-3">Installation panneaux solaires et rénovation énergétique dans toute la région :</h4>
            
            {/* Nord (59) */}
            <div className="mb-4">
              <h5 className="font-medium text-orange-800 mb-2 text-sm">Nord (59) - Métropole Lilloise et environs :</h5>
              <div className="text-sm text-orange-700 leading-relaxed">
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Lille</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Roubaix</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Tourcoing</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Villeneuve-d'Ascq</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Valenciennes</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Dunkerque</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Douai</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Wattrelos</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Marcq-en-Barœul</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Cambrai</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Maubeuge</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Lambersart</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Armentières</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Haubourdin</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Loos</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Croix</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Wasquehal</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Hem</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Mons-en-Barœul</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Halluin</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Sin-le-Noble</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Denain</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Grande-Synthe</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Coudekerque-Branche</span>
              </div>
            </div>

            {/* Pas-de-Calais (62) */}
            <div className="mb-4">
              <h5 className="font-medium text-yellow-700 mb-2 text-sm">Pas-de-Calais (62) - Côte d'Opale et Artois :</h5>
              <div className="text-sm text-yellow-700 leading-relaxed">
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Calais</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Boulogne-sur-Mer</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Arras</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Lens</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Liévin</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Hénin-Beaumont</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Bruay-la-Buissière</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Béthune</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Carvin</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Avion</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Saint-Omer</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Wimereux</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Outreau</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Berck</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Harnes</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Nœux-les-Mines</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Montigny-en-Gohelle</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Wingles</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Oignies</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Isbergues</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Étaples</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Le Touquet-Paris-Plage</span>
              </div>
            </div>

            {/* Somme (80) */}
            <div className="mb-4">
              <h5 className="font-medium text-amber-700 mb-2 text-sm">Somme (80) - Picardie maritime :</h5>
              <div className="text-sm text-amber-700 leading-relaxed">
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Amiens</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Abbeville</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Saint-Quentin</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Montdidier</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Péronne</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Albert</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Corbie</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Ham</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Doullens</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Rue</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Fort-Mahon-Plage</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Le Crotoy</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Longueau</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Rivery</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Salouël</span>
              </div>
            </div>

            {/* Seine-Maritime (76) */}
            <div className="mb-4">
              <h5 className="font-medium text-red-700 mb-2 text-sm">Seine-Maritime (76) - Normandie :</h5>
              <div className="text-sm text-red-700 leading-relaxed">
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Rouen</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Le Havre</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Dieppe</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Sotteville-lès-Rouen</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Saint-Étienne-du-Rouvray</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Mont-Saint-Aignan</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Barentin</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Maromme</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Montivilliers</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Gonfreville-l'Orcher</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Harfleur</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Fécamp</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Yvetot</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Caudebec-lès-Elbeuf</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Grand-Couronne</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Petit-Couronne</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Octeville-sur-Mer</span>
                <span className="inline-block bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1">Sainte-Adresse</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-xs text-green-800 text-center font-medium">
                🌞 <strong>Expertise certifiée RGE</strong> pour l'installation de panneaux solaires photovoltaïques, pompes à chaleur et isolation thermique dans toute la région Hauts-de-France
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterventionMap; 