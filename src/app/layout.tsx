import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shreyash0216.github.io/Shreyash_Portfolio/"),
  title: "Shreyash Atre | Full-Stack Developer (Node.js, NestJS, React, PostgreSQL)",
  description: "Final-year B.Sc. Computer Science student (CGPA 8.68) shipping production full-stack systems solo (Node.js/NestJS, React, PostgreSQL). Independent Project Lead at Syantrex. Available immediately in Pune.",
  keywords: [
    "Shreyash Atre",
    "Full-Stack Developer",
    "Software Engineer",
    "Node.js",
    "NestJS",
    "React",
    "PostgreSQL",
    "REST APIs",
    "Syantrex ERP",
    "Pune",
    "Sir Parashurambhau College"
  ],
  alternates: {
    canonical: "https://shreyash0216.github.io/Shreyash_Portfolio/",
  },
  openGraph: {
    title: "Shreyash Atre | Full-Stack Developer",
    description: "Final-year B.Sc. CS student (CGPA 8.68) shipping production full-stack systems solo. Node.js/NestJS, React, PostgreSQL, REST APIs.",
    url: "https://shreyash0216.github.io/Shreyash_Portfolio/",
    siteName: "Shreyash Atre Portfolio",
    images: [
      {
        url: "https://shreyash0216.github.io/Shreyash_Portfolio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shreyash Atre - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyash Atre | Full-Stack Developer",
    description: "Final-year B.Sc. CS student shipping production full-stack systems solo (Node.js/NestJS, React, PostgreSQL).",
    images: ["https://shreyash0216.github.io/Shreyash_Portfolio/og-image.png"],
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
    "jobTitle": "Full-Stack Developer",
    "description": "Full-Stack Developer specializing in Node.js, NestJS, React, PostgreSQL, and scalable REST APIs. Independent Project Lead at Syantrex based in Pune.",
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
        "name": "Syantrex",
        "url": "https://www.syantrex.online"
      }
    ],
    "knowsAbout": [
      "Node.js",
      "NestJS",
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "RESTful API Development",
      "DigitalOcean",
      "Socket.IO",
      "Role-Based Access Control (RBAC)",
      "Database Architecture"
    ],
    "sameAs": [
      "https://linkedin.com/in/shreyash-atre-901340317",
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
