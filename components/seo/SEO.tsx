import React from "react"
import Head from "next/head"

interface Props {
  title: string
}

export default function SEO({ title }: Props) {
  return (
    <Head>
      <title>The Coding Script | {title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
