import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { FaAlignRight } from "react-icons/fa"

import Logo from "./Logo"
import NavLinks from "@/components/layout/NavLinks"

export default function Navbar({ toggleSidebar }): JSX.Element {
  const [scrolled, setScrolled] = useState(false)
  const [blackNavActive, setBlackNavActive] = useState(false)
  const router = useRouter()

  // handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY >= 80
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      //clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // change navbar background
  useEffect(() => {
    const activeWindow = router.pathname

    if (activeWindow !== "/") {
      setBlackNavActive(true)
    } else {
      setBlackNavActive(false)
    }
  })

  const styles = {
    blackNavBg:
      "bg-gradient-to-t from-gray-900 to-gray-700 border-b border-yellow-500",
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-center h-20 bg-transparent md:px-10 ${
        scrolled ? styles.blackNavBg : ""
      } ${blackNavActive ? styles.blackNavBg : ""}`}
    >
      <div className="flex items-center justify-between w-5/6 max-w-screen-xl md:w-full">
        <Link href="/">
          <a className="cursor-pointer">
            <Logo />
          </a>
        </Link>
        <button
          type="button"
          className="p-1 text-3xl text-yellow-400 bg-white rounded focus:outline-none lg:hidden"
          onClick={toggleSidebar}
        >
          <FaAlignRight />
        </button>
        <NavLinks />
      </div>
    </nav>
  )
}
