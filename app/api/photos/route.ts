import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const photosDirectory = path.join(process.cwd(), 'public', 'photos');
    
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
        src: `/photos/${file}`,
        alt: `Rénovation énergétique - ${file.replace(/\.[^/.]+$/, "")}`, // Enlever l'extension du nom
        filename: file
      }));

    return NextResponse.json({ photos });
  } catch (error) {
    console.error('Erreur lors de la lecture du dossier photos:', error);
    return NextResponse.json({ photos: [] });
  }
} 