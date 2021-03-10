import React from "react"
import Image from "next/image"
import Link from "next/link"

interface Props {
  title?: string
  description?: string
  link?: string
  mainImage?: { asset: { url: string } }
  date?: string
  projectType?: string
  tags?: string[]
}

export default function Project(props: Props) {
  const { title, description, link, mainImage, date, projectType, tags } = props
  console.log(mainImage)

  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <article className="grid grid-cols-12 col-span-12 overflow-hidden transition-all duration-300 ease-in-out transform rounded-md shadow-md lg:col-span-4 md:gap-4 hover:scale-110 hover:shadow-xl lg:gap-0">
      <div className="relative col-span-12 md:col-span-4 lg:col-span-12 h-52 md:h-full lg:h-52">
        {mainImage && (
          <Image
            src={mainImage.asset.url}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>

      <div className="col-span-12 p-4 pr-4 md:col-span-8 lg:col-span-12">
        <div className="h-16">
          <h3 className="font-semibold">{title}</h3>
        </div>
        <p className="pl-4 my-0 prose capitalize border-l-2 border-yellow-500">
          {projectType} <span className="text-xl text-yellow-500">&#8901;</span>{" "}
          {formatedDate}
        </p>
        {/* <p className="prose">{description}</p> */}
        <div className="grid grid-cols-12 gap-2 mt-6">
          {tags &&
            tags.map((tag, index) => (
              <div
                key={index}
                className="col-span-3 font-semibold text-center text-white bg-gray-400 rounded-full"
              >
                <p className="m-0 prose-sm text-white">#{tag}</p>
              </div>
            ))}
        </div>
        <div className="h-full py-4 text-right">
          <Link href={link}>
            <a
              className="font-bold border-b border-yellow-400 animate-pulse my-gradient text-gradient"
              target="_blank"
            >
              See Live Demo &rarr;
            </a>
          </Link>
        </div>
      </div>
    </article>
  )
}
