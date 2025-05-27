import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { use } from 'react';
import servicesData from '@/data/services.json';

interface Service {
  slug: string;
  title: string;
  tags: string[];
  description: string;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // Trouver le service correspondant au slug
  const service = servicesData.services.find((s: Service) => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service non trouvé - France Solaire',
      description: 'Le service demandé n\'existe pas.',
    };
  }

  const title = `${service.title} - France Solaire | Expert RGE Hauts-de-France`;
  const description = service.description;
  const keywords = service.tags.join(', ');
  const url = `https://www.france-solaire.fr/${slug}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'France Solaire' }],
    creator: 'France Solaire',
    publisher: 'France Solaire',
    openGraph: {
      title,
      description,
      url,
      siteName: 'France Solaire',
      type: 'website',
      locale: 'fr_FR',
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@FranceSolaire',
      images: ['/logo.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'votre-code-google-search-console',
    },
    category: 'construction',
    classification: 'rénovation énergétique',
    alternates: {
      canonical: url,
    },
  };
}

export async function generateStaticParams() {
  return servicesData.services.map((service: Service) => ({
    slug: service.slug,
  }));
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 