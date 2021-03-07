import Link from "next/link"

import navLinks from "../../data/navLinks"
// import {NavLink} from '@/components/UI/ActiveLink'

export default function NavLinks(): JSX.Element {
  return (
    <ul className="hidden lg:flex">
      {navLinks.map((link) => (
        <li key={link.id}>
          <Link href={link.url}>
            <a className="mr-10 text-xl tracking-widest text-white">
              {link.text}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
