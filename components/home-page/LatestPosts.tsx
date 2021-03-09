import React from "react"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

import Title from "@/components/UI/Title"
import Post from "./Post"
import Button from "@/components/UI/Button"

export default function LatestPosts({ posts }) {
  const featuredPosts = posts.slice(0, 3)
  // console.log(featuredPosts)

  return (
    <section className="py-6 md:my-10">
      <Title title="Latest Posts" />
      <div className="grid w-11/12 max-w-screen-xl gap-8 mx-auto my-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>

      <div className="flex items-center justify-center w-4/12 mx-auto my-0 mt-12 md:w-3/12">
        <Button url="/blog" text="SEE MORE &rarr;" />
      </div>
    </section>
  )
}
