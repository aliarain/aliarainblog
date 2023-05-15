


/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3000',
    authorName: 'Ali Arain',
    siteName: 'Ali Arain',
    defaultTitle: 'Ali Arain Personal Site',
    titleTemplate: 'Ali Arain | %s',
    description: 'A short description goes here.',
    email: 'aliarain@raptr42.com',
    locale: 'en_US',
    twitter: {
      handle: '@realaliarain',
    },
  }
  