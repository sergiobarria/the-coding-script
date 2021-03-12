import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "ss0ub4d0",
  dataset: "production",
  useCdn: false, // false if you want to ensure fresh data
})

// process.env.NEXT_PUBLIC_SANITY_ID
