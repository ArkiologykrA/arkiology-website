export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://arkiology.com/#organization",
    "name": "Arkiology",
    "alternateName": "Arkiology Digital Infrastructure Agency",
    "description": "We build the digital infrastructure that grows businesses. Custom websites, digital marketing, automations, and 24/7 AI employees.",
    "url": "https://arkiology.com",
    "logo": "https://arkiology.com/favicon.svg",
    "image": "https://arkiology.com/og-image.svg",
    "email": "hello@arkiology.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.7617,
      "longitude": -80.1918
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Florida"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      // Add social media URLs when available
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arkiology",
    "url": "https://arkiology.com",
    "logo": "https://arkiology.com/favicon.svg",
    "description": "Digital infrastructure agency specializing in custom websites, marketing automation, and AI employees.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Arkiology Team"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@arkiology.com",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish"]
    },
    "knowsAbout": [
      "Web Development",
      "Digital Marketing",
      "Marketing Automation",
      "AI Chatbots",
      "Business Automation",
      "SEO",
      "Custom Websites"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Arkiology",
    "url": "https://arkiology.com",
    "description": "Digital infrastructure agency building custom websites, automations, and AI employees.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://arkiology.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Infrastructure Services",
    "provider": {
      "@type": "Organization",
      "name": "Arkiology",
      "url": "https://arkiology.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Infrastructure Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development",
            "description": "Custom designed and developed websites built to convert visitors into customers."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Presence & Marketing",
            "description": "SEO, social media, and paid advertising that drives real results."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Automations",
            "description": "Connect your tools, automate workflows, and save hours every week."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Employees",
            "description": "24/7 AI employees that answer calls, book appointments, and close leads."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
