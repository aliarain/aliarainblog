import glob from 'fast-glob'
import * as path from 'path'

async function importProjects(projectsFilename) {
  let { meta, default: component } = await import(
    `../pages/projects/${projectsFilename}`
  )
  return {
    slug: projectsFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllProjects() {
  let projectsFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/projects'),
  })

  let projects = await Promise.all(projectsFilenames.map(importProjects))

  return projects.sort((a, z) => new Date(z.date) - new Date(a.date))
}
