import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

interface LayoutProps {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
