import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://koshary-hind.vercel.app";

export const metadata: Metadata = {
  title: "كشري هند | مطعم الأكل الأصيل في مغاغة منذ 1992",
  description:
    "كشري هند مغاغة - مطعم الأكل الأصيل منذ 1992. نقدم كشري، بيتزا شرقي، مشويات، كريب، حواوشي، نجرسكو، وجبات سوري وحلويات شرقية. اطلب الآن من مغاغة.",
  keywords: [
    "كشري هند",
    "كشري هند مغاغة",
    "كشري في مغاغة",
    "مطعم كشري هند",
    "مطعم مغاغة",
    "كشري",
    "بيتزا شرقي",
    "مشويات",
    "كريب",
    "حواوشي",
    "نجرسكو",
    "وجبات سوري",
    "حلويات شرقية",
    "مغاغة",
    "المنيا",
    "أرز بلبن",
    "ام علي",
    "مهلبية",
  ],
  metadataBase: new URL(koshari-hind-production.up.railway.app),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "كشري هند | مطعم الأكل الأصيل في مغاغة منذ 1992",
    description:
      "كشري هند مغاغة - مطعم الأكل الأصيل منذ 1992. نقدم كشري، بيتزا شرقي، مشويات، كريب، حواوشي، نجرسكو، وجبات سوري.",
    url: siteUrl,
    siteName: "كشري هند",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 800,
        height: 800,
        alt: "شعار كشري هند - مطعم الأكل الأصيل في مغاغة",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "كشري هند | مطعم الأكل الأصيل في مغاغة منذ 1992",
    description:
      "كشري هند مغاغة - مطعم الأكل الأصيل منذ 1992. نقدم كشري، بيتزا شرقي، مشويات، كريب، حواوشي، نجرسكو، وجبات سوري.",
    images: [`${siteUrl}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  authors: [{ name: "A7MED ASHRAF" }],
  creator: "A7MED ASHRAF",
  publisher: "كشري هند",
  category: "مطاعم",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
