import React from "react"
import Image from "next/image"
import { FaCode, FaServer, FaAndroid } from "react-icons/fa"

import services from "../../data/services"

export default function Service() {
  return (
    <div className="w-5/6 max-w-screen-xl mx-auto mt-8 text-center md:grid md:grid-cols-2 md:gap-8 lg:gap-10 lg:grid-cols-3 md:auto-rows-auto">
      {services.map((service, index) => {
        const { id, title, text } = service
        let icon
        if (index === 0) {
          icon = <FaCode />
        }
        if (index === 1) {
          icon = <FaServer />
        }
        if (index === 2) {
          icon = <FaAndroid />
        }

        return (
          <article key={id} className="relative h-auto mt-10">
            <div className="absolute inset-0 transform rounded-md shadow-lg -rotate-6 my-gradient"></div>
            <div className="relative h-full px-2 py-4 bg-white rounded-md shadow-md lg:px-6">
              <div className="w-8 mx-auto mb-4 text-4xl text-yellow-500">
                {icon}
              </div>
              <h3 className="font-semibold">{title}</h3>
              <hr className="w-5/6 mx-auto" />
              <p className="text-base">{text}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
