import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import ActiveLink from "@/components/UI/ActiveLink"

interface Props {
  title?: string
  slug?: { current: string }
  author?: object
  mainImage?: { asset: { url: string } }
  categories?: { description: string; title: string }
  publishedAt?: string
  excerpt?: string
  body?: {}[]
  readTime?: number
  latestPost?: boolean
}

export default function Post(props: Props) {
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
  const { latestPost } = props

  const formatedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <ActiveLink href={`/blog/${slug.current}`}>
      <a>
        <article className="relative h-full p-4 mx-auto overflow-hidden transition-all duration-300 transform shadow-md hover:scale-110 hover:shadow-xl">
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
          {latestPost && (
            <span className="absolute px-16 overflow-hidden font-semibold transform -rotate-45 -left-8 top-8 my-gradient">
              Latest
            </span>
          )}
          <div className="h-16">
            <h4 className="py-2 text-lg font-semibold leading-none">{title}</h4>
          </div>
          <hr />
          <h5 className="absolute px-2 mt-2 text-sm font-bold text-white bg-gray-400 rounded-full top-4 right-6">
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
    </ActiveLink>
  )
}
