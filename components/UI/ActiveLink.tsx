import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

// interface Props {
//   href: string
//   children: Element
// }

export default function ActiveLink({ href, children }) {
  const router = useRouter()

  let className = children.props.className || ""
  if (router.pathname === href) {
    className = `${className} my-gradient transform -skew-y-6`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

// import {useRouter} from 'next/router'
// import Link from 'next/link'
// import React, {Children} from 'react'

// const ActiveLink = ({children, activeClassName, ...props}) => {
//   const {asPath} = useRouter()
//   const child = Children.only(children)
//   const childClassName = child.props.className || ''

//   const className =
//     asPath === props.href || asPath === props.as ? `${childClassName} ${activeClassName}`.trim()
//     : childClassName

//   return (
//     <Link {...props}>
//       {React.cloneElement(child, {
//         className: className || null,
//       })}
//     </Link>
//   )
// }

// export default ActiveLink
// import { useRouter } from "next/router"
// import Link from "next/link"

// type Props = {
//   href: string
//   linkName: string
//   activeClassName?: string
// } & typeof defaultProps

// const defaultProps = {
//   activeClassName: "text-green font-600",
// }

// export const NavLink = ({ href, linkName, activeClassName }: Props) => {
//   const router = useRouter()

//   return (
//     <Link href={href}>
//       <a className={router.pathname === href ? activeClassName : null}>
//         {linkName}
//       </a>
//     </Link>
//   )
// }

// NavLink.defaultProps = defaultProps
