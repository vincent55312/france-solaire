const fs = require('fs');
const path = require('path');

// Import des données
const citiesData = require('../public/french-cities.json');
const servicesData = require('../data/services.json');
const articlesData = require('../data/articles.json');

const baseUrl = 'https://francesolaire.fr';

// Départements des Hauts-de-France
const HAUTS_DE_FRANCE_DEPARTMENTS = ['59', '62', '76', '80'];

// Mapping des codes vers les slugs
const departmentSlugs = {
  '59': 'nord',
  '62': 'pas-de-calais',
  '76': 'seine-maritime',
  '80': 'somme'
};

// Fonction pour créer un slug à partir d'un nom de ville
function createCitySlug(cityName) {
  return cityName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Fonction pour obtenir toutes les villes d'un département
function getCitiesByDepartment(departmentCode) {
  const departmentData = citiesData[departmentCode];
  if (!departmentData || !departmentData.cities) {
    return [];
  }
  return departmentData.cities;
}

// Génération du sitemap
function generateSitemap() {
  const currentDate = new Date().toISOString();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Pages statiques
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/zones', priority: '0.8', changefreq: 'weekly' },
    { url: '/galerie', priority: '0.7', changefreq: 'monthly' },
    { url: '/articles', priority: '0.8', changefreq: 'weekly' },
    { url: '/mentions-legales', priority: '0.3', changefreq: 'yearly' },
    { url: '/politique-de-confidentialite', priority: '0.3', changefreq: 'yearly' },
    { url: '/cgv', priority: '0.3', changefreq: 'yearly' },
    { url: '/plan-du-site', priority: '0.4', changefreq: 'monthly' },
  ];

  staticPages.forEach(page => {
    xml += `
<url>
<loc>${baseUrl}${page.url}</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>${page.changefreq}</changefreq>
<priority>${page.priority}</priority>
</url>`;
  });

  // Pages de services (slugs à la racine)
  servicesData.services.forEach(service => {
    xml += `
<url>
<loc>${baseUrl}/${service.slug}</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>`;
  });

  // Pages des articles
  articlesData.forEach(article => {
    xml += `
<url>
<loc>${baseUrl}/articles/${article.slug}</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>`;
  });

  // Pages des départements
  Object.values(departmentSlugs).forEach(departmentSlug => {
    xml += `
<url>
<loc>${baseUrl}/zones/${departmentSlug}</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>weekly</changefreq>
<priority>0.7</priority>
</url>`;
  });

  // Pages des villes - TOUTES les villes
  let totalCities = 0;
  HAUTS_DE_FRANCE_DEPARTMENTS.forEach(departmentCode => {
    const departmentSlug = departmentSlugs[departmentCode];
    const cities = getCitiesByDepartment(departmentCode);
    
    cities.forEach(city => {
      const citySlug = city.slug || createCitySlug(city.name);
      xml += `
<url>
<loc>${baseUrl}/zones/${departmentSlug}/${citySlug}</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.6</priority>
</url>`;
      totalCities++;
    });
  });

  xml += `
</urlset>`;

  // Écrire le fichier sitemap.xml dans le dossier public
  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');

  console.log(`✅ Sitemap généré avec succès !`);
  console.log(`📊 Statistiques :`);
  console.log(`   - Pages statiques : ${staticPages.length}`);
  console.log(`   - Services : ${servicesData.services.length}`);
  console.log(`   - Articles : ${articlesData.length}`);
  console.log(`   - Départements : ${Object.keys(departmentSlugs).length}`);
  console.log(`   - Villes : ${totalCities}`);
  console.log(`   - Total URLs : ${staticPages.length + servicesData.services.length + articlesData.length + Object.keys(departmentSlugs).length + totalCities}`);
  console.log(`📝 Fichier créé : ${outputPath}`);
}

// Exécution du script
generateSitemap(); 