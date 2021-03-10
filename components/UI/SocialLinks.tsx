import React from "react"
import Link from "next/link"
import { FaLinkedin, FaInstagram } from "react-icons/fa"
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"

import { socialLinks } from "../../data/socialLinks"

export default function SocialLinks() {
  return (
    <ul className="flex justify-around w-full pb-4 mx-auto my-0">
      {socialLinks.map((link, index) => {
        const { id } = link
        let icon
        if (index === 0) {
          icon = <FaInstagram />
        }
        if (index === 1) {
          icon = <AiFillGithub />
        }
        if (index === 2) {
          icon = <AiOutlineTwitter />
        }
        return (
          <li key={link.id}>
            <Link href={link.url}>
              <a
                className="text-3xl duration-300 ease-linear cursor-pointer hover:text-yellow-500 trasition"
                target="_blank"
              >
                {icon}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
