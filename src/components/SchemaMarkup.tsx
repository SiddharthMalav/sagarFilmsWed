import React from 'react';

export default function SchemaMarkup() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sagar Films",
    "image": "https://sagarfilms.in/images/fevicon.jpeg",
    "@id": "https://sagarfilms.in/#organization",
    "url": "https://sagarfilms.in",
    "telephone": "+917976881511",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "H NO. 114 Laxman Vihar II, Kunhadi",
      "addressLocality": "Kota",
      "addressRegion": "Rajasthan",
      "postalCode": "324008",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2138,
      "longitude": 75.8648
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "22:00"
    },
    "sameAs": [
      "https://www.instagram.com/sagarfilms.in",
      "https://youtube.com/@sagarfilmskota"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What wedding photography and videography services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sagar Films Kota offers premium wedding photography, cinematic wedding films, pre-wedding couple shoots, candid photography, and luxury portrait sessions. We specialize in capturing unfiltered emotions and grand celebrations globally."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book a wedding consultation with Sagar Films?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can request a custom quote and book a consultation directly through our website Booking form, or call/WhatsApp us at +91 79768 81511."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
