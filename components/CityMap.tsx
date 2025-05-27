'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix pour les icônes par défaut de Leaflet
const DefaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface CityMapProps {
  cityName: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  departmentName: string;
}

export default function CityMap({ cityName, coordinates, departmentName }: CityMapProps) {
  useEffect(() => {
    // Appliquer l'icône par défaut
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  return (
    <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200 relative z-10">
      <MapContainer
        center={[coordinates.lat, coordinates.lon]}
        zoom={13}
        style={{ height: '100%', width: '100%', zIndex: 1 }}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        dragging={false}
        touchZoom={false}
        boxZoom={false}
        keyboard={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[coordinates.lat, coordinates.lon]}>
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">{cityName}</h3>
              <p className="text-sm text-gray-600">{departmentName}</p>
              <p className="text-xs text-green-600 mt-1">Zone d'intervention France Solaire</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
} 