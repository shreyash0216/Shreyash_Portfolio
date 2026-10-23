import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08080b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shreyash0216.github.io/Shreyash_Portfolio/"),
  title: "Shreyash Atre — Software Developer",
  description: "Software Developer based in Pune building reliable software products, scalable backend systems, full-stack applications, and AI-powered solutions. Co-Founder & Full Stack Engineer at Syantrex Technologies.",
  keywords: [
    "Shreyash Atre",
    "Software Developer",
    "Backend Engineer",
    "Full Stack Engineer",
    "Product Builder",
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "PostgreSQL",
    "FastAPI",
    "REST APIs",
    "Syantrex ERP",
    "Syantrex Technologies",
    "Pune",
    "Sir Parashurambhau College"
  ],
  authors: [{ name: "Shreyash Atre", url: "https://shreyash0216.github.io/Shreyash_Portfolio/" }],
  creator: "Shreyash Atre",
  alternates: {
    canonical: "https://shreyash0216.github.io/Shreyash_Portfolio/",
  },
  openGraph: {
    title: "Shreyash Atre — Software Developer",
    description: "I build reliable software products, scalable backend systems, full-stack applications, and AI-powered solutions.",
    url: "https://shreyash0216.github.io/Shreyash_Portfolio/",
    siteName: "Shreyash Atre",
    images: [
      {
        url: "https://shreyash0216.github.io/Shreyash_Portfolio/shreyash.jpg",
        width: 1200,
        height: 630,
        alt: "Shreyash Atre — Software Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyash Atre — Software Developer",
    description: "I build reliable software products, scalable backend systems, full-stack applications, and AI-powered solutions.",
    images: ["https://shreyash0216.github.io/Shreyash_Portfolio/shreyash.jpg"],
    creator: "@atre_shreyash",
  },
  verification: {
    google: "QIn8mk_qfu7k6Y6nnTK-GvS05PLK68xYRzgYa_TGV04",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shreyash Atre",
    "givenName": "Shreyash",
    "familyName": "Atre",
    "url": "https://shreyash0216.github.io/Shreyash_Portfolio/",
    "image": "https://shreyash0216.github.io/Shreyash_Portfolio/shreyash.jpg",
    "jobTitle": "Software Developer",
    "description": "Software Developer based in Pune building reliable software products, scalable backend systems, full-stack applications, and AI-powered solutions. Co-Founder & Full Stack Engineer at Syantrex Technologies.",
    "email": "mailto:shreyashatre16@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Sir Parashurambhau College, Pune",
      "url": "https://spcollegepune.ac.in/"
    },
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Syantrex Technologies",
        "url": "https://www.syantrex.online"
      }
    ],
    "knowsAbout": [
      "Software Development",
      "Backend Architecture",
      "Full-Stack Engineering",
      "Node.js",
      "NestJS",
      "TypeScript",
      "JavaScript",
      "Python",
      "FastAPI",
      "React",
      "Next.js",
      "PostgreSQL",
      "Sequelize",
      "Redis",
      "RESTful API Development",
      "Socket.IO",
      "Role-Based Access Control (RBAC)",
      "Docker",
      "Flutter",
      "Dart",
      "AWS"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/shreyash-atre-901340317/",
      "https://github.com/shreyash0216",
      "https://x.com/atre_shreyash",
      "https://www.syantrex.online"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
