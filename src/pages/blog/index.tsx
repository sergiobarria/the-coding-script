import React from "react"

import SEO from "@/components/seo/SEO"
import Title from "@/components/UI/Title"
import PostsFilter from "@/components/blog-page/PostsFilter"
import PostsPreview from "@/components/posts/PostsPreview"

import sanityClient from "../../../lib/sanity/config"
import { getAllPosts } from "../../../lib/sanity/queries"

interface Props {
  posts: {}[]
}

export default function Blog({ posts }: Props) {
  return (
    <>
      <SEO title="Blog" />
      <section className="py-10 my-20 min-h-screen-center">
        <Title title="Blog Posts" />
        {/* <PostsFilter /> */}
        <PostsPreview posts={posts} />
      </section>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await sanityClient.fetch(getAllPosts)

  return {
    props: {
      posts: allPosts,
    },
    revalite: 600,
  }
}
