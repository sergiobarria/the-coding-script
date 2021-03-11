import React from "react"
import { DefaultSeo } from "next-seo"
import SEO from "../../next-seo.config"

import { AppProps } from "next/app"
import Layout from "@/components/layout/Layout"
import "../styles/tailwind.scss"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
