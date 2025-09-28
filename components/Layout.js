import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title, description, image, url }) {
  const siteName = process.env.SITE_NAME || 'Verxtal';
  const siteUrl = process.env.SITE_URL || 'https://Verxtal.com';
  const defaultDescription = process.env.SITE_DESCRIPTION || 'A modern blog platform for sharing insights and stories';
  
  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const pageDescription = description || defaultDescription;
  const pageImage = image || '/images/og-image.jpg';
  const pageUrl = url || siteUrl;

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content={siteName} />
        <link rel="canonical" href={pageUrl} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": siteName,
              "description": defaultDescription,
              "url": siteUrl,
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container main-content">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}