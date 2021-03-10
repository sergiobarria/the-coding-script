import React from "react"

import Hero from "@/components/home-page/Hero"
import Services from "@/components/home-page/Services"
import PostsPreview from "@/components/posts/PostsPreview"

import sanityClient from "../../lib/sanity/config"
import { getAllPosts } from "../../lib/sanity/queries"

export default function Home({ posts }) {
  // console.log(posts)

  return (
    <>
      <Hero />
      <Services />
      <PostsPreview posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await sanityClient.fetch(getAllPosts)

  return {
    props: {
      posts: allPosts,
    },
  }
}
