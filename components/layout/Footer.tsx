import Image from "next/image"

import SocialLinks from "@/components/UI/SocialLinks"

export default function Footer(): JSX.Element {
  return (
    <footer className="relative tracking-widest text-center text-white bg-gray-900 h-36">
      {/* <div className="relative flex flex-col justify-end w-full h-36">
        <Image src="/images/whitegrit.png" layout="fill" objectFit="cover" />
      </div> */}
      <div className="absolute max-w-3xl mx-auto transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <SocialLinks />
        <h4 className="font-semibold md:text-lg">
          &copy; Copyright {new Date().getFullYear()}
        </h4>
        <h4 className="w-full font-semibold md:text-lg">
          All rights reserved. Built with{" "}
          <span className="font-semibold text-gradient my-gradient">
            <a href="https://www.nextjs.org" target="_blank">
              Next js
            </a>
          </span>{" "}
          and{" "}
          <span className="font-semibold text-gradient my-gradient">
            <a href="https://www.sanity.io" target="_blank">
              Sanity.io
            </a>
          </span>{" "}
        </h4>
      </div>
    </footer>
  )
}
