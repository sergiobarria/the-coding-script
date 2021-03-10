import React from "react"

import Title from "@/components/UI/Title"
import Post from "./Post"
import Button from "@/components/UI/Button"

interface Posts {
  posts: {}[]
  showTitle?: boolean
  showBtn?: boolean
}

export default function PostsPreview({ posts, showTitle, showBtn }: Posts) {
  const latestPost = posts[0]
  const morePosts = posts.slice(1)
  // console.log(posts)

  return (
    <div className="py-6 md:my-10">
      {showTitle && <Title title="Latest Posts" />}
      <div className="grid w-11/12 max-w-screen-xl gap-8 mx-auto my-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {latestPost && <Post {...latestPost} latestPost />}
        {morePosts.length > 0 &&
          morePosts.map((post, index) => <Post key={index} {...post} />)}
      </div>

      {showBtn && (
        <div className="flex items-center justify-center w-8/12 mx-auto mt-12 md:w-3/12">
          <Button url="/blog" text="SEE MORE &rarr;" />
        </div>
      )}
    </div>
  )
}
