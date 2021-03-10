import Link from "next/link"
import Button from "@/components/UI/Button"

const notFound = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20 min-h-screen-center">
      <h1 className="text-8xl">404</h1>
      <h2 className="mb-20 text-center">
        Oops! The page your looking for doesn't exist...
      </h2>

      <Button text="BACK HOME" url="/" />
    </section>
  )
}

export default notFound
