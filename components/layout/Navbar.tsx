import Link from "next/link"
import { FaAlignRight } from "react-icons/fa"

import Logo from "./Logo"
import NavLinks from "@/components/layout/NavLinks"

export default function Navbar(): JSX.Element {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-center h-20 bg-transparent md:px-10">
      <div className="flex items-center justify-between w-5/6 max-w-screen-xl md:w-full">
        <Link href="/">
          <a className="cursor-pointer">
            <Logo />
          </a>
        </Link>
        <button
          type="button"
          className="p-1 text-3xl text-yellow-400 bg-white rounded focus:outline-none lg:hidden"
        >
          <FaAlignRight />
        </button>
        <NavLinks />
      </div>
    </nav>
  )
}
