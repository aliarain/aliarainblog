import ReactDOMServer from 'react-dom/server'
import { Feed } from 'feed'
import { mkdir, writeFile } from 'fs/promises'
import { getAllArticles } from './getAllArticles'
import { siteMetaData } from '../../config'

export async function generateRssFeed(rsspath, records) {
  const {siteUrl ,  defaultTitle, description ,siteName ,email, twitter, authorName} = siteMetaData

  const date = new Date()

  const  articles = await getAllArticles()

  const  author = {
    name: authorName,
    email: email,
    link: twitter && twitter.handle ? `https://twitter.com/${twitter.handle.replace('@', '')}`: siteUrl
  }

// Creating the feed
  const feed = new Feed({
    title: author.name,
    description: 'ali arain blog',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    updated: date,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  })

  for (let article of articles) {
    let url = `${siteUrl}/articles/${article.slug}`
    let html = ReactDOMServer.renderToStaticMarkup(
      <article.component isRssFeed />
    )

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    })
  }

  await mkdir('./public/rss', { recursive: true })
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
  ])
}
