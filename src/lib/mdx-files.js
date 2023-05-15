import fg from 'fast-glob'
import { join } from 'path'
import equal from 'fast-deep-equal'


/**
 * Retrieves a list of files based on the provided path and options.
 *
 * @param {string} path - The path to the directory to search for files.
 * @param {Object} mdxOptions - Options for configuring the file search.
 * @returns {Array} - An array of file objects containing filePath and slug properties.
 * @throws {Error} - Throws an error if pagesDir is missing from mdxOptions or if path is not a string.
 */


export async function getFiles(path, mdxOptions){

    // Check if pagesDir is missing from mdxOptions

    if(!mdxOptions || !mdxOptions.pagesDir){
        throw Error('pagesDir is missing from mdxOptions')
    }

    // Check if path is provided and is a string
    if (path&& typeof path !== 'string') {
        throw Error('path should be type string received ' + typeof path) 
    }

    // Determine the base directory for the file search

    const baseDir = path ? join(mdxOptions.pagesDir, path): mdxOptions.pagesDir
    
    // Use fast-glob to find files that match the specified glob pattern

    const paths= await fg.sync(
        // Always use forward-slashes in glob expressions

        join(baseDir, '**' `*${mdxOptions.fileExt}`).replace(/\\/g, '/')
    )
    // Map the found file paths to file objects with slugs

    return paths.map((filePath) => ({
        filePath,
        slug: filePath
        .replace(mdxOptions.fileExt, '')    // Remove the file extension from the filePath
        .split('/') // Split the remaining path by forward slashes
        .filter((s) => s!== 'index')    // Remove the 'index' segment from the slug
        .slice(1)   // Remove the first segment from the slug
    }));

}

/**
 * Retrieves a file based on the provided slug and options.
 *
 * @param {Array} slug - The slug representing the file path.
 * @param {Object} mdxOptions - Options for configuring the file search.
 * @returns {Object|null} - The file object matching the slug, or null if not found.
 */

export async function getFilesbySlug(slug , mdxOptions){
    let rootPath = null

    // Limit the search to the sub directory if the fie is inside a sub directory.
    if(Array.isArray(slug) && slug.length >1){
        rootPath = slug.slice(0, slug.length -1).join('/')
    }
     // Get the list of files based on the rootPath and mdxOptions

    const files = await getFiles(rootPath, mdxOptions)
    // Find the file with a slug matching the provided slug
    return files.find((page) => equal(page.slug, slug))
}

/**
 * Retrieves multiple files based on the provided slug and options.
 *
 * @param {Array} slug - The slug representing the file path.
 * @param {Object} mdxOptions - Options for configuring the file search.
 * @returns {Array} - An array of file objects excluding the collection's index page.
 * @throws {Error} - Throws an error if slug is not provided or is not an array.
 */

export async function getManyFilesBySlug(slug, mdxOptions){
      // Check if slug is provided and is an array
      if (!slug || !Array.isArray(slug)) {
        throw Error('slug should be type array reevived ' + typeof slug)
      }

    // Join the slug elements to form the rootPath
    let rootPath = slug.join('/')

    // Get the list of files based on the rootPath and mdxOptions

    const files = await getFiles(rootPath,mdxOptions)
    // Filter the files to exclude the collection's index page
    return files.filter(({slug}) => slug.length>1)
}