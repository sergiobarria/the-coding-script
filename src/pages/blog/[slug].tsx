import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import BlockContent from "@sanity/block-content-to-react"

import SEO from "@/components/seo/SEO"
import Button from "@/components/UI/Button"

import sanityClient from "../../../lib/sanity/config"
import { postSlugsQuery, postQuery } from "../../../lib/sanity/queries"
import { serializers } from "../../../lib/sanity/serializers"

export default function PostPage({ data }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <section className="flex flex-col items-center justify-center mt-20 min-h-screen-center">
        <h1>Loading...</h1>
      </section>
    )
  }

  const {
    title,
    slug,
    author,
    mainImage,
    categories,
    publishedAt,
    excerpt,
    summary,
    body,
    readTime,
  } = data.allPosts
  // console.log(body)

  const formatedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <>
      <SEO title="Blog" />
      <section className="container max-w-screen-md py-10 mx-auto my-20 min-h-screen-center">
        <article className="p-4 prose lg:prose-xl">
          <h1>{title}</h1>
          <div className="flex items-center">
            <p className="pl-4 border-l-2 border-yellow-500">
              {categories.title}
            </p>
            <span className="px-2 text-2xl text-yellow-500">&sdot;</span>
            <p>{readTime} min read</p>
          </div>

          <div className="flex justify-between my-2">
            <div className="flex">
              <span>
                <Image
                  className="rounded-full "
                  src={author.image.asset.url}
                  width={25}
                  height={25}
                />
              </span>
              <p className="ml-4">{author.name}</p>
            </div>
            <div>
              <p>{formatedDate}</p>
            </div>
          </div>

          <div className="relative h-48 md:h-72 lg:h-96">
            {mainImage && (
              <Image
                src={`${mainImage.asset.url}`}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>

          {summary && (
            <div className="pb-6 border-b border-dashed">
              <h3 className="text-gradient my-gradient">Quick Summary</h3>
              <p className="italic">{summary}</p>
            </div>
          )}

          <div className="py-6">
            <BlockContent
              blocks={body}
              projectId="ss0ub4d0"
              dataset="production"
              serializers={serializers}
            />
          </div>
          <hr />
        </article>

        <div className="flex items-center justify-center w-8/12 mx-auto mt-12 md:w-3/12">
          <Button text="More Posts" url="/blog/" />
        </div>
      </section>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)

  return {
    paths: paths.map((slug) => ({
      params: { slug },
    })),
    fallback: true,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const allPosts = await sanityClient.fetch(postQuery, { slug: params.slug })

  return {
    props: {
      data: {
        allPosts,
      },
    },
    revalidate: 600,
  }
}
