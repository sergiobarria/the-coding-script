import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { AiOutlineClose } from "react-icons/ai"

import ActiveLink from "@/components/UI/ActiveLink"
import navLinks from "../../data/navLinks"
import SocialLinks from "@/components/UI/SocialLinks"

export default function Sidebar({ isOpen, setIsOpen, toggleSidebar }) {
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false)
    }
  }, [router.pathname])

  return (
    <aside
      className={`fixed top-0 left-0 z-50 w-full h-screen bg-gradient-to-t from-gray-900 to-gray-700 transform scale-0 transition-all duration-500 ease-in-out ${
        isOpen ? "transform scale-100" : ""
      }`}
    >
      <button
        className="absolute text-4xl text-yellow-500 right-8 top-6 focus:outline-none"
        onClick={toggleSidebar}
      >
        <AiOutlineClose />
      </button>

      <div className="w-full pt-6 h-screen-3/4">
        <ul className="flex flex-col items-center justify-center h-full px-10 mb-6">
          {navLinks.map((link) => (
            <li key={link.id} className="mb-8 cursor-pointer">
              <ActiveLink href={link.url}>
                <div className="w-32 text-center">
                  <a className="text-2xl text-white capitalize">{link.text}</a>
                </div>
              </ActiveLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="container w-3/4 px-3 mx-auto text-yellow-500">
        <SocialLinks />
      </div>
    </aside>
  )
}
