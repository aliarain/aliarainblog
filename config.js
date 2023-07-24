


/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'https://localhost:3000',
    authorName: 'Ali Arain',
    siteName: 'Ali Arain',
    defaultTitle: 'Ali Arain Personal Site',
    titleTemplate: 'Ali Arain | %s',
    description: 'foudner raptr42 , building ai products to sovle problems.',
    email: 'aliarain@raptr42.com',
    locale: 'en_US',
    twitter: {
      handle: '@realaliarain',
      cardType: 'summary_large_image',
    },
  }
  

  export const mdxConfig = {
    publicdir: 'public',
    pagesdir: 'content',
    collection: ['./notes' ,'/projects'],
    remarkPlugins:[],
    rehypePlugins:[],
  }