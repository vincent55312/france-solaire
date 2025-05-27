import citiesData from '@/public/french-cities.json';

export interface City {
  name: string;
  slug: string;
  postal_code: string;
  insee_code: string;
  coordinates: {
    lat: number;
    lon: number;
  };
}

export interface Department {
  code: string;
  name: string;
  slug: string;
  description: string;
  cityCount: number;
  mainCities: string[];
}

// Départements des Hauts-de-France
const HAUTS_DE_FRANCE_DEPARTMENTS = ['59', '62', '76', '80'];

// Mapping des slugs de départements vers les codes
export const departmentSlugToCode: { [key: string]: string } = {
  'nord': '59',
  'pas-de-calais': '62',
  'seine-maritime': '76',
  'somme': '80'
};

// Mapping inverse des codes vers les slugs
export const departmentSlugs: { [key: string]: string } = {
  '59': 'nord',
  '62': 'pas-de-calais',
  '76': 'seine-maritime',
  '80': 'somme'
};

// Mapping des noms complets
export const departmentNames: { [key: string]: string } = {
  '59': 'Nord',
  '62': 'Pas-de-Calais',
  '76': 'Seine-Maritime',
  '80': 'Somme'
};

// Fonction pour obtenir toutes les villes d'un département
export function getCitiesByDepartment(departmentCode: string): City[] {
  const departmentData = (citiesData as any)[departmentCode];
  if (!departmentData || !departmentData.cities) {
    return [];
  }
  return departmentData.cities;
}

// Fonction pour obtenir toutes les données des départements des Hauts-de-France
export function getHautsDeFranceDepartments(): Department[] {
  return [
    {
      code: '59',
      name: 'Nord',
      slug: 'nord',
      description: 'Le département du Nord, avec Lille comme préfecture, est le plus peuplé de la région Hauts-de-France.',
      cityCount: 0, // Will be calculated when needed
      mainCities: ['Lille', 'Valenciennes', 'Douai', 'Tourcoing', 'Roubaix']
    },
    {
      code: '62',
      name: 'Pas-de-Calais',
      slug: 'pas-de-calais',
      description: 'Le Pas-de-Calais, avec Arras comme préfecture, est situé au nord de la France, face à l\'Angleterre.',
      cityCount: 0, // Will be calculated when needed
      mainCities: ['Arras', 'Calais', 'Boulogne-sur-Mer', 'Lens', 'Liévin']
    },
    {
      code: '76',
      name: 'Seine-Maritime',
      slug: 'seine-maritime',
      description: 'La Seine-Maritime, avec Rouen comme préfecture, est située en Normandie et fait partie de notre zone d\'intervention.',
      cityCount: 0, // Will be calculated when needed
      mainCities: ['Rouen', 'Le Havre', 'Dieppe', 'Sotteville-lès-Rouvray', 'Saint-Étienne-du-Rouvray']
    },
    {
      code: '80',
      name: 'Somme',
      slug: 'somme',
      description: 'La Somme, avec Amiens comme préfecture, est un département de la région Hauts-de-France.',
      cityCount: 0, // Will be calculated when needed
      mainCities: ['Amiens', 'Abbeville', 'Montdidier', 'Péronne', 'Albert']
    }
  ];
}

// Fonction pour obtenir un département spécifique par son slug
export function getDepartmentBySlug(slug: string): Department | null {
  const departments = getHautsDeFranceDepartments();
  return departments.find(dept => dept.slug === slug) || null;
}

// Fonction pour créer un slug à partir d'un nom de ville
export function createCitySlug(cityName: string): string {
  return cityName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Fonction pour obtenir une ville par son slug et département
export function getCityBySlug(departmentSlug: string, citySlug: string): { department: Department; city: City } | null {
  const department = getDepartmentBySlug(departmentSlug);
  if (!department) return null;
  
  const departmentCode = department.code;
  const cities = getCitiesByDepartment(departmentCode);
  
  const city = cities.find(city => (city.slug || createCitySlug(city.name)) === citySlug);
  if (!city) return null;
  
  return { department, city };
}

// Fonction pour générer tous les paramètres statiques pour les pages de villes
export function generateCityStaticParams() {
  const params: { department: string; city: string }[] = [];
  
  // Pour chaque département des Hauts-de-France
  HAUTS_DE_FRANCE_DEPARTMENTS.forEach(departmentCode => {
    const departmentSlug = departmentSlugs[departmentCode];
    const cities = getCitiesByDepartment(departmentCode);
    
    // TOUTES les villes sans limitation pour la génération statique
    cities.forEach(city => {
      const citySlug = city.slug || createCitySlug(city.name);
      params.push({
        department: departmentSlug,
        city: citySlug
      });
    });
  });
  
  return params;
}

// Fonction pour générer TOUTES les villes pour le sitemap (sans limitation)
export function generateAllCityParams() {
  const params: { department: string; city: string }[] = [];
  
  // Pour chaque département des Hauts-de-France
  HAUTS_DE_FRANCE_DEPARTMENTS.forEach(departmentCode => {
    const departmentSlug = departmentSlugs[departmentCode];
    const cities = getCitiesByDepartment(departmentCode);
    
    // Toutes les villes sans limitation pour le sitemap
    cities.forEach(city => {
      const citySlug = city.slug || createCitySlug(city.name);
      params.push({
        department: departmentSlug,
        city: citySlug
      });
    });
  });
  
  return params;
} 