import Link from "next/link"

interface Props {
  url: string
  text: string
  transparent?: boolean
}

const styles: {
  btn: string
  btnTransparent: string
} = {
  btn:
    "uppercase px-4 py-2 tracking-widest font-semibold text-white my-gradient rounded-lg md:text-xl cursor-pointer transform hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out",
  btnTransparent:
    "uppercase px-4 py-2 tracking-widest font-semibold text-gradient my-gradient border border-yellow-400 rounded-lg md:text-xl cursor-pointer transform hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out",
}

export default function Navbar({ url, text, transparent }: Props): JSX.Element {
  return (
    <Link href={url}>
      <a className={`${transparent ? styles.btnTransparent : styles.btn}`}>
        {text}
      </a>
    </Link>
  )
}
