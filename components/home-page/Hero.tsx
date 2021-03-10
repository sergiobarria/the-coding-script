import Image from "next/image"

import Button from "@/components/UI/Button"
import stackLinks from "../../data/stackLinks"

export default function Hero(): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-gray-900 to-gray-700">
      {/* <Image src="/images/whitegrit.png" layout="fill" objectFit="cover" /> */}
      <div className="container flex max-w-screen-xl p-6 mx-auto text-left text-white md:flex md:px-10 xl:px-0 ">
        <article className="">
          <h1 className="max-w-xl pb-6 mt-4 transform my-gradient -skew-y-2">
            Hey, I'm Sergio
          </h1>
          <h2 className="max-w-xl pb-6 mt-4 transform my-gradient -skew-y-2">
            I'm a web and mobile developer
          </h2>
          <p className="pb-6 tracking-widest">
            I share tips and tricks about web and mobile development.
          </p>
          <p className="pb-6 tracking-widest">
            Whether you're starting to learn or are more advanced yor're welcome
            to share together our developer journey.
          </p>
        </article>
        <div className="hidden h-32 md:block">
          <Image
            // className="w-full"
            src="/images/hero-illustration.svg"
            width={1000}
            height={1000}
            // layout="fill"
            // objectFit="contain"
          />
        </div>
      </div>

      <div className="flex items-center justify-start w-full max-w-screen-xl px-10 xl:px-0">
        <span className="mr-10">
          <Button text="Contact Me" url="/contact" />
        </span>
        <Button text="Check Blog" url="/blog" transparent />
      </div>

      <div className="absolute left-0 flex justify-center w-full bottom-4">
        {stackLinks.map((link) => (
          <div key={link.id} className="inline mr-4 md:mr-8">
            <Image
              className="bg-white rounded-full"
              src={link.icon}
              alt="language icon"
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
