import React from "react"

import Hero from "@/components/home-page/Hero"
import Services from "@/components/home-page/Services"
import LatestPosts from "@/components/home-page/LatestPosts"

import sanityClient from "../../sanity/config"
import { getAllPosts } from "../../sanity/queries"

export default function Home({ posts }) {
  // console.log(posts)

  return (
    <>
      <Hero />
      <Services />
      <LatestPosts posts={posts} />
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
