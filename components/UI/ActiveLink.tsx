import { useRouter } from "next/router"
import Link from "next/link"

type Props = {
  href: string
  linkName: string
  activeClassName?: string
} & typeof defaultProps

const defaultProps = {
  activeClassName: "text-green font-600",
}

export const NavLink = ({ href, linkName, activeClassName }: Props) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a className={router.pathname === href ? activeClassName : null}>
        {linkName}
      </a>
    </Link>
  )
}

NavLink.defaultProps = defaultProps
