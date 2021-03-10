import React from "react"
import BlockContent from "@sanity/block-content-to-react"

import Title from "@/components/UI/Title"

import sanityClient from "../../lib/sanity/config"
import { getAboutPage } from "../../lib/sanity/queries"

export default function About({ about }) {
  return (
    <>
      <section className="container max-w-screen-md py-10 mx-auto my-20 min-h-screen-center">
        <Title title={about.title} />
        <article className="p-4 prose lg:prose-xl">
          <BlockContent blocks={about.body} />
        </article>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const aboutContent = await sanityClient.fetch(getAboutPage)

  return {
    props: {
      about: aboutContent,
    },
  }
}
