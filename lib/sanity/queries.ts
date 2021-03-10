const postFields = `
  _id,
  title,
  slug,
  author -> {
    name,
    image {
      asset ->
    }
  },
  mainImage {
    asset -> {
      _id,
      url
    }
  },
  categories[0] ->,
  publishedAt,
  excerpt,
  summary,
  body,
  readTime
`

export const getAllPosts = `
  *[_type == "post"] | order(date desc, _createdAt desc) {
    ${postFields}
}`

export const getAboutPage = `
  *[_type == "about"] [0] {
  _id,
  body,
  title
}
`

export const postQuery = `
  *[_type == "post" && slug.current == $slug] [0] | order(date desc, _createdAt desc) {
    ${postFields}
  }
`

export const postSlugsQuery = `
  *[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields}
}
`

export const getAllProjects = `
  *[_type == "projects"] | order(date desc, _createdAt desc)
`
