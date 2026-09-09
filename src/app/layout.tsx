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
    "url": "https://shreyash0216.github.io/Shreyash_Portfolio/",
    "jobTitle": "Full-Stack Developer",
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Syantrex",
        "url": "https://www.syantrex.online"
      }
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Sir Parashurambhau College, Pune"
    },
    "sameAs": [
      "https://linkedin.com/in/shreyash-atre-901340317",
      "https://github.com/shreyash0216",
      "https://x.com/atre_shreyash"
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
