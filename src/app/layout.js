import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import './variables.css';
import './utilities.css';
import Header from './Header';
import BodyWrapper from './components/BodyWrapper';
import Footer from './Footer';
import Canonical from './components/Canonical';

export async function generateMetadata({ params, searchParams }) {
  return {
    title: "HEX20",
    description: "HEX20 is an innovative SmallSat company providing cost-effective platforms, customized hardware, and advanced sensor technologies for the CubeSat and SmallSat markets.",
    alternates: {
      canonical: "https://hex20.space",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        maxImagePreview: "large",
        maxSnippet: -1,
        maxVideoPreview: -1,
      },
    },
  };
}

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibmPlexSans.className} ${jetBrainsMono.className}`}>
      <head>
        <meta property="og:title" content="Hex20 | Bringing Space Closer" />
        <meta property="og:description" content="HEX20 is an innovative SmallSat company providing cost-effective platforms, customized hardware, and advanced sensor technologies for the CubeSat and SmallSat markets." />
        <meta property="og:url" content="https://hex20.space/" />
        <meta property="og:image" content="https://hex20.com/assets/favicon.png?v=1.1" />
        <meta property="og:image:alt" content="Hex20 | Bringing Space Closer" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HEX20 | Bringing Space Closer" />
        <meta name="twitter:description" content="HEX20 is an innovative SmallSat company providing cost-effective platforms, customized hardware, and advanced sensor technologies for the CubeSat and SmallSat markets." />
        <meta name="twitter:image" content="https://hex20.com/assets/favicon.png?v=1.1" />

        {/* Canonical & Robots */}
        <Canonical/>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Google Tag Manager - Head Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WXFD49J');`
          }}
        />

        {/* Organization Schema for HEX20 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HEX20",
              "description": "HEX20 is an innovative SmallSat company providing cost-effective platforms, customized hardware, and advanced sensor technologies for the CubeSat and SmallSat markets.",
              "url": "https://hex20.space/",
              "foundingDate": "2020",
              "logo": "https://hex20.com/assets/favicon.png?v=1.1",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+91-984-701-6820",
                "contactType": "customer service",
                "areaServed": "Global",
                "availableLanguage": "English"
              }],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Trivandrum",
                "addressRegion": "Kerala",
                "addressCountry": "India"
              },
              "industry": "Aerospace",
              "sameAs": [
                "https://www.linkedin.com/company/hex20/",
                "https://www.facebook.com/hex20.space/"
              ]
            })
          }}
        />
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXFD49J"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        />
        <BodyWrapper>
          <Header />
          {children}
          <Footer />
        </BodyWrapper>
      </body>
    </html>
  );
}