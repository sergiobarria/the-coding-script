const postFields = `
  _id,
  title,
  slug,
  author,
  mainImage {
    asset -> {
      _id,
      url
    }
  },
  categories[0] ->,
  publishedAt,
  excerpt,
  body,
  readTime
`

export const getAllPosts = `
*[_type == "post"] | order(date desc, _createdAt desc) {
  ${postFields}
}`
