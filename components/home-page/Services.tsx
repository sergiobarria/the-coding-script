import React from "react"
import Image from "next/image"

import Title from "@/components/UI/Title"
import Service from "@/components/home-page/Service"

export default function Services() {
  return (
    <section className="relative py-6 md:py-20">
      <Image src="/images/blackgrit.png" layout="fill" objectFit="cover" />
      <Title title="My Services" />
      <Service />
    </section>
  )
}
