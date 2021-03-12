import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { DefaultSeo } from "next-seo"
import SEO from "../../next-seo.config"

import * as gtag from "../../lib/analytics/gtag"

import { AppProps } from "next/app"
import Layout from "@/components/layout/Layout"
import "../styles/tailwind.scss"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

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
