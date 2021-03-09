import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Post(props) {
  const {
    title,
    slug,
    author,
    mainImage,
    categories,
    publishedAt,
    excerpt,
    body,
    readTime,
  } = props
  // console.log(categories)
  // console.log(author)

  const formatedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <article className="relative h-full p-4 mx-auto shadow-md">
          <div className="relative h-48">
            {mainImage && (
              <Image
                src={`${mainImage.asset.url}`}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
          <div className="h-16">
            <h4 className="py-2 text-lg font-semibold leading-none">{title}</h4>
          </div>
          <hr />
          <h5 className="pl-2 mt-2 text-sm border-l-2 border-yellow-500">
            {categories.title}
          </h5>
          <p className="pb-4 text-base">{excerpt}</p>
          <div className="absolute flex items-center bottom-2">
            <h5>{formatedDate}</h5>
            <span className="px-2 text-xl text-yellow-500">&#8901;</span>
            <h5>{readTime} min Read</h5>
          </div>
        </article>
      </a>
    </Link>
  )
}
