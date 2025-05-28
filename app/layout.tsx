import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "France Solaire | Installation Panneaux Solaires & Isolation Thermique",
  description: "Expert en installation de panneaux solaires photovoltaïques et isolation thermique dans les Hauts-de-France. Devis gratuit sous 24h. Solutions énergétiques durables et économiques.",
  keywords: [
    "panneaux solaires",
    "installation solaire",
    "photovoltaïque",
    "isolation thermique",
    "pompe à chaleur",
    "chauffage",
    "menuiseries",
    "Hauts-de-France",
    "Nord",
    "Pas-de-Calais",
    "Somme",
    "Seine-Maritime",
    "Lille",
    "Amiens",
    "Rouen",
    "Calais",
    "RGE",
    "économies énergie",
    "autoconsommation",
    "aide financière"
  ],
  authors: [{ name: "France Solaire" }],
  creator: "France Solaire",
  publisher: "France Solaire",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://francesolaire.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "France Solaire | Panneaux Solaires & Isolation Hauts-de-France",
    description: "Installation de panneaux solaires et isolation thermique dans les Hauts-de-France. Équipe certifiée RGE. Devis gratuit.",
    url: 'https://francesolaire.com',
    siteName: 'France Solaire',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'France Solaire - Panneaux solaires et isolation',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "France Solaire | Panneaux Solaires Hauts-de-France",
    description: "Installation panneaux solaires et isolation thermique. Équipe RGE dans les Hauts-de-France.",
    images: ['/twitter-image.jpg'],
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
    google: 'verification_token_google',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#008000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "France Solaire",
              description: "Expert en installation de panneaux solaires photovoltaïques et isolation thermique",
              url: "https://francesolaire.com",
              telephone: "+33788066712",
              email: "contact@francesolaire.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lille",
                addressRegion: "Hauts-de-France",
                addressCountry: "FR"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 50.6292,
                longitude: 3.0573
              },
              openingHours: "Mo,Tu,We,Th,Fr 08:00-18:00",
              priceRange: "€€",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 50.6292,
                  longitude: 3.0573
                },
                geoRadius: "50000"
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services énergétiques",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Installation de panneaux solaires",
                      description: "Installation professionnelle de panneaux solaires photovoltaïques"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Isolation thermique",
                      description: "Isolation thermique pour améliorer l'efficacité énergétique"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
