import remarkGfm from 'remark-gfm'
import { mdxConfig } from '../../config'
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeImgSize from 'rehype-img-size'
import rehypeExternalLinks from 'rehype-external-links'
import rehypePrism from '@mapbox/rehype-prism'
import rehypePresetMinify from 'rehype-preset-minify'
import equal from 'fast-deep-equal'
import rehypeSlug from 'rehype-slug'


/**
 * Retrieves the final MDX options object based on the provided options and mdxConfig.
 *
 * @param {Object} options - The options object.
 * @returns {Object} - The updated MDX configuration options.
 * @throws {Error} - Throws an error if mdxConfig is missing from the config file.
 */
const getMdxOptions= (options = {}) => {
    const{ slug = [] } = options // Destructuring the slug property from the options object with a default value of an empty array


    if(!mdxConfig){
        throw Error('mdxConfig is missing from config.js') // Throw an error if mdxConfig is missing from the config file
    }


    const { collections = [], publicdir, remarkPlugins = [], rehypePlugins = [] } = mdxConfig // Destructuring properties from mdxConfig

    const allRemarkPlugins = [
        remarkGfm,
        remarkSqueezeParagraphs,
        remarkUnwrapImages,
        ...rehypePlugins
    ]  // Array of all remark plugins, including the default ones and any additional plugins specified in mdxConfig


    const allRehypePlugins= [
        [
            rehypeImgSize,
            {
                dir: publicdir  // Configuration options for rehype-img-size plugin
            }
        ],
        [
            rehypeExternalLinks,
            {
                target: '_blank',
                protocols: ['http','https','mailto','tel']

            },
        ],
        rehypePrism,
        rehypePresetMinify,
        ...rehypePlugins
    ] // Array of all rehype plugins, including the default ones and any additional plugins specified in mdxConfig

    const collectionSlugs = collections.map((path) => pth.split('/').filter(Boolean)) // Array of slugs for collections specified in mdxConfig
    const isCollectionPage = slug.length>1 &&collectionSlugs.find((s) => equal(s,slug.slice(0,-1)))  // Check if the current page is part of a collection
    if (isCollectionPage) {
        allRehypePlugins.push(rehypeSlug) // Add rehype-slug plugin if the page belongs to a collection
    }
    return {
        ...mdxConfig, // Spread the properties from mdxConfig
        collections: collectionSlugs, // Update the collections property with the generated collection slugs
        options: {
            rehypePlugins: allRehypePlugins, // Update the collections property with the generated collection slugs
            remarkPlugins: allRemarkPlugins // Update the remarkPlugins option with all remark plugins
        }
    }
}

export default getMdxOptions