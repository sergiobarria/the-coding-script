import Image from "next/image"

import Button from "@/components/UI/Button"

export default function Hero(): JSX.Element {
  return (
    <section className="flex items-center justify-center h-screen pt-20 bg-gradient-to-t from-gray-900 to-gray-700">
      <div className="container max-w-screen-xl p-6 mx-auto text-left text-white md:px-10 lg:grid lg:grid-cols-12 xl:px-0">
        <article className="lg:col-span-6 lg:col-start-1">
          <h1 className="pb-6 mt-4 transform bg-yellow-400 -skew-y-2">
            Hey, I'm Sergio
          </h1>
          <h2 className="pb-6 mt-4 transform bg-yellow-400 -skew-y-2">
            I'm a web and mobile developer
          </h2>
          <p className="pb-6 tracking-widest">
            I share tips and tricks about web and mobile development.
          </p>
          <p className="pb-6 tracking-widest">
            Whether you're starting to learn or are more advanced yor're welcome
            to share together our developer journey.
          </p>
          <div className="container flex justify-start w-full md:justify-start md:w-full">
            <Button text="Contact Me" url="/contact" />
            <Button text="Check Blog" url="/blog" transparent />
          </div>
        </article>
        <div className="hidden lg:flex lg:col-start-7 lg:col-end-13">
          <Image
            src="/images/hero-illustration.svg"
            width={1000}
            height={1000}
            // layout="fill"
            // objectFit="cover"
          />
        </div>
      </div>

      {/* <Image
        className="absolute bottom-0 left-0 h-screen/5"
        src="/images/waves.svg"
        layout="fill"
      /> */}
    </section>
  )
}
