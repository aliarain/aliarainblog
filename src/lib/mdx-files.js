import fg from 'fast-glob'
import { join } from 'path'
import equal from 'fast-deep-equal'

// Creating This file from start inspired from ./getAllarticles.js

export async function getFiles(path, mdxOptions){
    if(!mdxOptions || !mdxOptions.pagesDir){
        throw Error('pagesDir is missing from mdxOptions')
    }

    if (path&& typeof path !== 'string') {
        throw Error('path should be type string received ' + typeof path) 
    }

    const baseDir = path ? join(mdxOptions.pagesDir, path): mdxOptions.pagesDir

    const paths= await fg.sync(
        join(baseDir, '**' `*${mdxOptions.fileExt}`).replace(/\\/g, '/')
    )

    return paths.map((filePath) => ({
        filePath,
        slug: filePath
        .replace(mdxOptions.fileExt, '')
        .split('/')
        .filter((s) => s!== 'index')
        .slice(1)
    }));

}


export async function getFilesbySlug(slug , mdxOptions){
    let rootPath = null

    // Limit the search to the sub directory if the fie is inside a sub directory.
    if(Array.isArray(slug) && slug.length >1){
        rootPath = slug.slice
    }
}