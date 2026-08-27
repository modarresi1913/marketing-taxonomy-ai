import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// JSON-LD Structured Data for AI/SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "Marketing Taxonomy AI",
  "alternateName": "MTA - Marketing Types Classification",
  "description": "The definitive open-source classification of 228 marketing types across 4 hierarchical levels (Strategic Logic, Channel Architecture, Technology Stack, Business Model) and 3 evolution tiers (Core, Extended, Emerging). Includes real-world brand case studies and measurable outcomes.",
  "url": "https://github.com/modarresi1913/marketing-taxonomy-ai",
  "creator": {
    "@type": "Person",
    "name": "modarresi1913",
    "url": "https://github.com/modarresi1913",
  },
  "license": "https://github.com/modarresi1913/marketing-taxonomy-ai/blob/main/LICENSE",
  "keywords": [
    "marketing taxonomy", "marketing types", "marketing classification",
    "digital marketing", "AI marketing", "generative engine optimization",
    "GEO", "AEO", "marketing strategy", "agentic marketing",
    "product-led growth", "community-led growth", "phygital marketing",
    "open source marketing", "marketing reference", "marketing encyclopedia"
  ],
  "distribution": {
    "@type": "DataDownload",
    "encodingFormat": "application/json",
    "contentUrl": "https://raw.githubusercontent.com/modarresi1913/marketing-taxonomy-ai/main/data/marketing-types.json",
  },
  "isAccessibleForFree": true,
  "temporalCoverage": "2025-2026",
  "includedInDataCatalog": {
    "@type": "DataCatalog",
    "name": "GitHub Open Source",
    "url": "https://github.com",
  },
};

// FAQ Structured Data for AI citation
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Marketing Taxonomy AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Marketing Taxonomy AI (MTA) is the first comprehensive open-source classification of 228 marketing types organized across 4 hierarchical levels (Strategic Logic, Channel Architecture, Technology Stack, Business Model) and 3 evolution tiers (Core, Extended, Emerging). It includes real-world case studies, interactive explorer, and is community-driven via pull requests.",
      },
    },
    {
      "@type": "Question",
      "name": "How many marketing types are classified in the Marketing Taxonomy AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "228 distinct marketing types: 150 Core (well-established, widely recognized), 46 Extended (specialized, niche), and 32 Emerging (2025-2026 frontier types including Agentic Marketing, GEO, Phygital Marketing, and Livestream Commerce Marketing).",
      },
    },
    {
      "@type": "Question",
      "name": "What are the 4 hierarchical levels in the Marketing Taxonomy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Level 1 - Strategic Logic (Pull, Push, Experiential, Relational, Disruptive). Level 2 - Channel Architecture (Digital-Native, Physical-Native, Phygital, Metaverse). Level 3 - Technology Stack (AI-Native, Web3/Blockchain, Biometric, Data Science). Level 4 - Business Model (Product-Led, Subscription-Led, Solution-Led, Ecosystem-Led).",
      },
    },
    {
      "@type": "Question",
      "name": "What are the emerging marketing types for 2025-2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key emerging types include: Agentic Marketing (autonomous AI campaign agents, Gartner 2026), GEO/Generative Engine Optimization (Gartner 2025), Phygital Marketing, Web3/Tokenized Marketing, Livestream Commerce Marketing, Zero-Click Marketing, AI Emotion Marketing, Omnichannel 2.0, and Quantum Marketing.",
      },
    },
  ],
};

// SoftwareApplication Schema for the interactive explorer
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Marketing Taxonomy AI Explorer",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Interactive web explorer for 228 marketing types with search, filters, analytics, and hierarchy visualization. Built with Next.js, TypeScript, and Tailwind CSS.",
  "url": "https://github.com/modarresi1913/marketing-taxonomy-ai",
  "programmingLanguage": "TypeScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
};

export const metadata: Metadata = {
  title: "Marketing Taxonomy AI — 228 Marketing Types | The Periodic Table of Marketing",
  description:
    "The definitive open-source classification of 228 marketing types across 4 hierarchical levels. Includes Viral Marketing, ABM, Content Marketing, GEO, Agentic Marketing, PLG, and more with real-world case studies from Dropbox, Nike, Coca-Cola, Tesla, and Salesforce.",
  keywords: [
    "marketing taxonomy", "228 marketing types", "marketing classification",
    "types of marketing", "marketing strategies", "digital marketing types",
    "AI marketing", "agentic marketing", "GEO", "generative engine optimization",
    "AEO", "answer engine optimization", "marketing reference",
    "viral marketing", "content marketing", "inbound marketing",
    "guerrilla marketing", "product-led growth", "community-led growth",
    "phygital marketing", "livestream commerce", "marketing encyclopedia",
    "open source marketing", "marketing types list", "marketing framework",
  ],
  authors: [{ name: "modarresi1913", url: "https://github.com/modarresi1913" }],
  creator: "modarresi1913",
  publisher: "GitHub Open Source",
  icons: { icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg" },
  openGraph: {
    title: "Marketing Taxonomy AI — The Periodic Table of Marketing",
    description:
      "228 marketing types. 4 hierarchical levels. 3 evolution tiers. The first comprehensive open-source marketing classification with interactive explorer and real-world case studies.",
    url: "https://github.com/modarresi1913/marketing-taxonomy-ai",
    siteName: "Marketing Taxonomy AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Taxonomy AI — 228 Types",
    description:
      "The periodic table for marketing: 228 types, 4 levels, 3 tiers, open source, community-driven.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://github.com/modarresi1913/marketing-taxonomy-ai",
    types: {
      "application/ld+json": "/llms.txt",
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="llms.txt" type="text/plain" href="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
