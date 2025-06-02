import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Fonction pour générer des descriptions personnalisées selon le nom de fichier
function getPhotoDescription(filename: string): string {
  const name = filename.replace(/\.[^/.]+$/, "").toLowerCase();
  
  if (name.includes('maison')) {
    return `Installation de panneaux solaires sur habitation - Rénovation énergétique ${name}`;
  } else if (name.includes('camion')) {
    return 'Véhicule technique France Solaire - Intervention sur site';
  } else if (name.includes('standing')) {
    return 'Équipe France Solaire - Professionnels certifiés RGE';
  } else {
    return `Projet de rénovation énergétique France Solaire - ${name}`;
  }
}

export async function GET() {
  try {
    const photosDirectory = path.join(process.cwd(), 'public', 'images', 'photos');
    
    // Vérifier si le dossier existe
    if (!fs.existsSync(photosDirectory)) {
      return NextResponse.json({ photos: [] });
    }

    // Lire tous les fichiers du dossier
    const files = fs.readdirSync(photosDirectory);
    
    // Filtrer seulement les images
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const photos = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .map((file, index) => ({
        id: index + 1,
        src: `/images/photos/${file}`,
        alt: getPhotoDescription(file),
        filename: file
      }));

    return NextResponse.json({ photos });
  } catch (error) {
    console.error('Erreur lors de la lecture du dossier photos:', error);
    return NextResponse.json({ photos: [] });
  }
} 