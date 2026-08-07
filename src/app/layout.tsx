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
  title: "Shreyash Atre | Software Engineer & Founder, Syantrex Technologies",
  description: "Shreyash Atre — Software Engineer, B.Sc. Computer Science student at SPPC Pune, and Founder of Syantrex Technologies. Portfolio featuring full-stack, AI, and ERP systems.",
  keywords: ["Shreyash Atre", "Software Engineer", "Full Stack Developer", "Syantrex Technologies", "SaaS Founder", "SPC Pune"],
  alternates: {
    canonical: "https://shreyash0216.github.io/Shreyash_Portfolio/",
  },
  openGraph: {
    title: "Shreyash Atre | Software Engineer",
    description: "Full-stack developer and founder building AI-driven software and ERP systems.",
    url: "https://shreyash0216.github.io/Shreyash_Portfolio/",
    siteName: "Shreyash Atre Portfolio",
    images: [
      {
        url: "https://shreyash0216.github.io/Shreyash_Portfolio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shreyash Atre - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyash Atre | Software Engineer",
    description: "Full-stack developer and founder building AI-driven software and ERP systems.",
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
    "jobTitle": "Software Engineer",
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Syantrex Technologies",
        "url": "https://www.syantrex.online"
      }
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Sir Parashurambhau College, Pune"
    },
    "sameAs": [
      "https://linkedin.com/in/shreyash-atre-901340317",
      "https://github.com/shreyash0216"
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
