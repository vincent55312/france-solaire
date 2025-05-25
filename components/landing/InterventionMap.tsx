'use client';

import React, { useEffect, useRef } from 'react';
import { departmentGeoJSON, cities } from '../../app/MapData';

const InterventionMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const initMap = async () => {
      if (!mapContainerRef.current || mapRef.current) return;

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

        // Add departments
        L.geoJSON(departmentGeoJSON, {
          style: {
            fillColor: '#10b981',
            weight: 2,
            opacity: 1,
            color: '#059669',
            fillOpacity: 0.3
          }
        }).addTo(map);

        mapRef.current = map;

      } catch (error) {
        console.error('Erreur lors de l\'initialisation de la carte:', error);
      }
    };

    initMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Zone d'intervention
        </h3>
        <div 
          ref={mapContainerRef}
          className="w-full h-96 rounded-lg border border-gray-200"
          style={{ zIndex: 1 }}
        />
        
        {/* Légende */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-700 mb-2">Départements couverts :</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
              Nord (59)
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
              Pas-de-Calais (62)
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
              Somme (80)
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
              Seine-Maritime (76)
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-200">
            <h4 className="font-semibold text-gray-700 mb-2">Principales villes :</h4>
            <div className="text-sm text-gray-600">
              Lille, Arras, Amiens, Rouen, Calais, Dunkerque, Valenciennes, Douai
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterventionMap; 