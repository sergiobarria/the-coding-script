import Link from "next/link"

import navLinks from "../../data/navLinks"
import ActiveLink from "@/components/UI/ActiveLink"

export default function NavLinks(): JSX.Element {
  return (
    <ul className="hidden lg:flex">
      {navLinks.map((link) => (
        <li key={link.id}>
          <ActiveLink href={link.url}>
            <a className="px-4 mr-10 text-xl tracking-widest text-white rounded">
              {link.text}
            </a>
          </ActiveLink>
        </li>
      ))}
    </ul>
  )
}
