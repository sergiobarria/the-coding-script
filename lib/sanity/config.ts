import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "ss0ub4d0",
  dataset: "production",
  useCdn: true,
})
