'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { departmentGeoJSON, cities } from '../../app/MapData';

// Étendre l'interface HTMLDivElement pour inclure les propriétés Leaflet
interface LeafletContainer extends HTMLDivElement {
  _leaflet_id?: string;
}

// Mapping des départements vers leurs slugs
const departmentSlugs = {
  '59': 'nord',
  '62': 'pas-de-calais', 
  '80': 'somme',
  '76': 'seine-maritime'
};

// Fonction pour créer le slug d'une ville
const createCitySlug = (cityName: string): string => {
  return cityName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

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

        // Enlever le focus outline sur la carte
        if (mapContainerRef.current) {
          mapContainerRef.current.style.outline = 'none';
          mapContainerRef.current.style.border = 'none';
        }

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

        // Add departments with custom colors and click events
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
              fillOpacity: 0.4,
              cursor: 'pointer'
            };
          },
          onEachFeature: (feature, layer) => {
            const departmentCode = feature.properties?.code;
            const departmentSlug = departmentSlugs[departmentCode as keyof typeof departmentSlugs];
            
            if (departmentSlug) {
              // Ajouter un événement de clic pour naviguer vers la page du département
              layer.on('click', () => {
                window.location.href = `/zones/${departmentSlug}`;
              });

              // Ajouter des effets de survol (vérifier que c'est bien un Path layer)
              if ('setStyle' in layer) {
                layer.on('mouseover', (e) => {
                  (layer as any).setStyle({
                    fillOpacity: 0.6,
                    weight: 3
                  });
                });

                layer.on('mouseout', (e) => {
                  (layer as any).setStyle({
                    fillOpacity: 0.4,
                    weight: 2
                  });
                });
              }

              // Ajouter un tooltip
              layer.bindTooltip(
                `Cliquez pour voir toutes les villes du ${feature.properties?.name || 'département'} (${departmentCode})`,
                { 
                  permanent: false, 
                  direction: 'center',
                  className: 'custom-tooltip'
                }
              );
            }
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
            <Link 
              href="/zones/nord"
              className="flex items-center hover:bg-orange-100 p-2 rounded-lg transition-colors group"
            >
              <div className="w-4 h-4 bg-orange-400 rounded-sm mr-3 border border-orange-500"></div>
              <span className="text-orange-800 font-medium group-hover:text-orange-900">Nord (59)</span>
            </Link>
            <Link 
              href="/zones/pas-de-calais"
              className="flex items-center hover:bg-yellow-100 p-2 rounded-lg transition-colors group"
            >
              <div className="w-4 h-4 bg-yellow-400 rounded-sm mr-3 border border-yellow-500"></div>
              <span className="text-yellow-800 font-medium group-hover:text-yellow-900">Pas-de-Calais (62)</span>
            </Link>
            <Link 
              href="/zones/somme"
              className="flex items-center hover:bg-amber-100 p-2 rounded-lg transition-colors group"
            >
              <div className="w-4 h-4 bg-amber-500 rounded-sm mr-3 border border-amber-600"></div>
              <span className="text-amber-800 font-medium group-hover:text-amber-900">Somme (80)</span>
            </Link>
            <Link 
              href="/zones/seine-maritime"
              className="flex items-center hover:bg-red-100 p-2 rounded-lg transition-colors group"
            >
              <div className="w-4 h-4 bg-red-400 rounded-sm mr-3 border border-red-500"></div>
              <span className="text-red-800 font-medium group-hover:text-red-900">Seine-Maritime (76)</span>
            </Link>
          </div>
          
          <div className="pt-3 border-t border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-3">Installation panneaux solaires et rénovation énergétique dans toute la région :</h4>
            
            {/* Nord (59) */}
            <div className="mb-4">
              <h5 className="font-medium text-orange-800 mb-2 text-sm">Nord (59) - Métropole Lilloise et environs :</h5>
              <div className="text-sm text-orange-700 leading-relaxed">
                <Link href="/zones/nord/lille" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Lille</Link>
                <Link href="/zones/nord/roubaix" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Roubaix</Link>
                <Link href="/zones/nord/tourcoing" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Tourcoing</Link>
                <Link href="/zones/nord/villeneuve_d_ascq" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Villeneuve-d'Ascq</Link>
                <Link href="/zones/nord/valenciennes" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Valenciennes</Link>
                <Link href="/zones/nord/dunkerque" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Dunkerque</Link>
                <Link href="/zones/nord/douai" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Douai</Link>
                <Link href="/zones/nord/wattrelos" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Wattrelos</Link>
                <Link href="/zones/nord/marcq_en_baroeul" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Marcq-en-Barœul</Link>
                <Link href="/zones/nord/cambrai" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Cambrai</Link>
                <Link href="/zones/nord/maubeuge" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Maubeuge</Link>
                <Link href="/zones/nord/lambersart" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Lambersart</Link>
                <Link href="/zones/nord/armentieres" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Armentières</Link>
                <Link href="/zones/nord/haubourdin" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Haubourdin</Link>
                <Link href="/zones/nord/loos" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Loos</Link>
                <Link href="/zones/nord/croix" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Croix</Link>
                <Link href="/zones/nord/wasquehal" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Wasquehal</Link>
                <Link href="/zones/nord/hem" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Hem</Link>
                <Link href="/zones/nord/mons_en_baroeul" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Mons-en-Barœul</Link>
                <Link href="/zones/nord/halluin" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Halluin</Link>
                <Link href="/zones/nord/sin_le_noble" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Sin-le-Noble</Link>
                <Link href="/zones/nord/denain" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Denain</Link>
                <Link href="/zones/nord/grande_synthe" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Grande-Synthe</Link>
                <Link href="/zones/nord/coudekerque_branche" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Coudekerque-Branche</Link>
                <Link href="/zones/nord/hazebrouck" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Hazebrouck</Link>
              </div>
            </div>

            {/* Pas-de-Calais (62) */}
            <div className="mb-4">
              <h5 className="font-medium text-yellow-700 mb-2 text-sm">Pas-de-Calais (62) - Côte d'Opale et Artois :</h5>
              <div className="text-sm text-yellow-700 leading-relaxed">
                <Link href="/zones/pas-de-calais/calais" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Calais</Link>
                <Link href="/zones/pas-de-calais/boulogne_sur_mer" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Boulogne-sur-Mer</Link>
                <Link href="/zones/pas-de-calais/arras" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Arras</Link>
                <Link href="/zones/pas-de-calais/lens" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Lens</Link>
                <Link href="/zones/pas-de-calais/lievin" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Liévin</Link>
                <Link href="/zones/pas-de-calais/henin_beaumont" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Hénin-Beaumont</Link>
                <Link href="/zones/pas-de-calais/bruay_la_buissiere" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Bruay-la-Buissière</Link>
                <Link href="/zones/pas-de-calais/bethune" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Béthune</Link>
                <Link href="/zones/pas-de-calais/carvin" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Carvin</Link>
                <Link href="/zones/pas-de-calais/avion" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Avion</Link>
                <Link href="/zones/pas-de-calais/saint_omer" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Saint-Omer</Link>
                <Link href="/zones/pas-de-calais/wimereux" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Wimereux</Link>
                <Link href="/zones/pas-de-calais/outreau" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Outreau</Link>
                <Link href="/zones/pas-de-calais/berck" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Berck</Link>
                <Link href="/zones/pas-de-calais/harnes" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Harnes</Link>
                <Link href="/zones/pas-de-calais/noeux_les_mines" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Nœux-les-Mines</Link>
                <Link href="/zones/pas-de-calais/montigny_en_gohelle" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Montigny-en-Gohelle</Link>
                <Link href="/zones/pas-de-calais/wingles" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Wingles</Link>
                <Link href="/zones/pas-de-calais/oignies" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Oignies</Link>
                <Link href="/zones/pas-de-calais/isbergues" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Isbergues</Link>
                <Link href="/zones/pas-de-calais/etaples" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Étaples</Link>
                <Link href="/zones/pas-de-calais/le_touquet_paris_plage" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Le Touquet-Paris-Plage</Link>
              </div>
            </div>

            {/* Somme (80) */}
            <div className="mb-4">
              <h5 className="font-medium text-amber-700 mb-2 text-sm">Somme (80) - Picardie maritime :</h5>
              <div className="text-sm text-amber-700 leading-relaxed">
                <Link href="/zones/somme/amiens" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Amiens</Link>
                <Link href="/zones/somme/abbeville" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Abbeville</Link>
                <Link href="/zones/somme/saint_quentin" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Saint-Quentin</Link>
                <Link href="/zones/somme/montdidier" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Montdidier</Link>
                <Link href="/zones/somme/peronne" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Péronne</Link>
                <Link href="/zones/somme/albert" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Albert</Link>
                <Link href="/zones/somme/corbie" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Corbie</Link>
                <Link href="/zones/somme/ham" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Ham</Link>
                <Link href="/zones/somme/doullens" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Doullens</Link>
                <Link href="/zones/somme/rue" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Rue</Link>
                <Link href="/zones/somme/fort_mahon_plage" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Fort-Mahon-Plage</Link>
                <Link href="/zones/somme/le_crotoy" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Le Crotoy</Link>
                <Link href="/zones/somme/longueau" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Longueau</Link>
                <Link href="/zones/somme/rivery" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Rivery</Link>
                <Link href="/zones/somme/salouel" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Salouël</Link>
              </div>
            </div>

            {/* Seine-Maritime (76) */}
            <div className="mb-4">
              <h5 className="font-medium text-red-700 mb-2 text-sm">Seine-Maritime (76) - Normandie :</h5>
              <div className="text-sm text-red-700 leading-relaxed">
                <Link href="/zones/seine-maritime/rouen" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Rouen</Link>
                <Link href="/zones/seine-maritime/le_havre" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Le Havre</Link>
                <Link href="/zones/seine-maritime/dieppe" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Dieppe</Link>
                <Link href="/zones/seine-maritime/sotteville_les_rouen" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Sotteville-lès-Rouen</Link>
                <Link href="/zones/seine-maritime/saint_etienne_du_rouvray" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Saint-Étienne-du-Rouvray</Link>
                <Link href="/zones/seine-maritime/mont_saint_aignan" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Mont-Saint-Aignan</Link>
                <Link href="/zones/seine-maritime/barentin" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Barentin</Link>
                <Link href="/zones/seine-maritime/maromme" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Maromme</Link>
                <Link href="/zones/seine-maritime/montivilliers" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Montivilliers</Link>
                <Link href="/zones/seine-maritime/gonfreville_l_orcher" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Gonfreville-l'Orcher</Link>
                <Link href="/zones/seine-maritime/harfleur" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Harfleur</Link>
                <Link href="/zones/seine-maritime/fecamp" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Fécamp</Link>
                <Link href="/zones/seine-maritime/yvetot" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Yvetot</Link>
                <Link href="/zones/seine-maritime/caudebec_les_elbeuf" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Caudebec-lès-Elbeuf</Link>
                <Link href="/zones/seine-maritime/grand_couronne" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Grand-Couronne</Link>
                <Link href="/zones/seine-maritime/petit_couronne" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Petit-Couronne</Link>
                <Link href="/zones/seine-maritime/octeville_sur_mer" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Octeville-sur-Mer</Link>
                <Link href="/zones/seine-maritime/sainte_adresse" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-[10px] mr-1.5 mb-1 transition-colors">Sainte-Adresse</Link>
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
      
      {/* Style pour les tooltips Leaflet */}
      <style jsx global>{`
        .custom-tooltip {
          background: rgba(0, 0, 0, 0.8) !important;
          color: white !important;
          border: none !important;
          border-radius: 6px !important;
          padding: 8px 12px !important;
          font-size: 12px !important;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
        }
        .custom-tooltip:before {
          border-top-color: rgba(0, 0, 0, 0.8) !important;
        }
        
        /* Enlever l'outline bleu sur la carte - Version renforcée */
        .leaflet-container {
          outline: none !important;
          border: none !important;
        }
        .leaflet-container:focus {
          outline: none !important;
          border: none !important;
          box-shadow: none !important;
        }
        .leaflet-container * {
          outline: none !important;
          border: none !important;
        }
        .leaflet-container *:focus {
          outline: none !important;
          border: none !important;
          box-shadow: none !important;
        }
        .leaflet-control-container * {
          outline: none !important;
        }
        .leaflet-clickable {
          outline: none !important;
        }
        .leaflet-clickable:focus {
          outline: none !important;
          box-shadow: none !important;
        }
        .leaflet-interactive {
          outline: none !important;
        }
        .leaflet-interactive:focus {
          outline: none !important;
          box-shadow: none !important;
        }
        /* Supprimer tous les focus possibles */
        div[tabindex] {
          outline: none !important;
        }
        div[tabindex]:focus {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
};

export default InterventionMap; 