import React from 'react'
import Head from 'next/head'

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldIndexPage?: boolean;
}

export default function SEO ({
  title,
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true
}: SEOProps) {
  const pageTitle = `${title} ${shouldExcludeTitleSuffix ? '' : '| Gabriel Campos'}`
  const pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}` : undefined

  return (
    <Head>
      <title>{pageTitle}</title>

      { description && <meta name="description" content={description} /> }
      { pageImage && <meta name="image" content={pageImage} /> }
      { !shouldIndexPage && <meta name="robots" content="noindex,nofollow" /> }

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      {/* Facebook */}
      { pageImage && <meta property="og:image" content={pageImage} /> }

      {/* Twitter */}
      { pageImage && <meta property="twitter:image" content={pageImage} /> }
    </Head>
  )
}
