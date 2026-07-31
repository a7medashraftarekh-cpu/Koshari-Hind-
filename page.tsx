import ClientPage from "./ClientPage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
  : "https://example.com";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "كشري هند",
    image: `${siteUrl}/logo.png`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: ["+201210195153", "+201015061338", "+201206500071", "+201116816266"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "شارع الثورة أمام أسواق سيف",
      addressLocality: "مغاغة",
      addressRegion: "المنيا",
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5167,
      longitude: 30.8,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "02:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: [
      "Egyptian",
      "Middle Eastern",
      "Fast Food",
      "Koshary",
      "Pizza",
      "Grills",
      "Crepe",
      "Desserts",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1250",
    },
    menu: `${siteUrl}/#menu`,
    acceptsReservations: "False",
    currenciesAccepted: "EGP",
    paymentAccepted: "Cash, Visa",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="canonical" href={siteUrl} />
      <ClientPage />
    </>
  );
}
