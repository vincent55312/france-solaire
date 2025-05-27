'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Import dynamique de CityMap sans SSR pour éviter l'erreur "window is not defined"
const CityMap = dynamic(() => import('./CityMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-80 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mb-2"></div>
        <p className="text-gray-600 text-sm">Chargement de la carte...</p>
      </div>
    </div>
  )
});

interface CityMapWrapperProps {
  cityName: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  departmentName: string;
}

export default function CityMapWrapper(props: CityMapWrapperProps) {
  return <CityMap {...props} />;
} 