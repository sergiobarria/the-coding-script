import React from "react"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Sidebar from "@/components/layout/Sidebar"

interface LayoutProps {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleSidebar={toggleSidebar}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}
