import { useRouter } from "next/router"

import navLinks from "../../data/navLinks"
import ActiveLink from "@/components/UI/ActiveLink"

export default function NavLinks(): JSX.Element {
  const router = useRouter()

  return (
    <ul className="hidden lg:flex">
      {navLinks.map((link) => (
        <li key={link.id}>
          <ActiveLink href={link.url}>
            <div
              className={`cursor-pointer px-4 mr-10 text-xl tracking-widest text-white  ${
                router.pathname !== link.url
                  ? "hover:text-yellow-400 hover:font-medium transform transition duration-500"
                  : ""
              }`}
            >
              <a>{link.text}</a>
            </div>
          </ActiveLink>
        </li>
      ))}
    </ul>
  )
}
