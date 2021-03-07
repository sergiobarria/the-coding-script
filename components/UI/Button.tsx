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
    "px-6 py-2 mr-10 tracking-widest font-semibold text-white bg-yellow-400 rounded-lg md:text-xl cursor-pointer animate-pulse",
  btnTransparent:
    "px-6 py-2 mr-10 tracking-widest font-semibold text-yellow-400 bg-transparend border border-yellow-400 rounded-lg md:text-xl cursor-pointer animate-pulse",
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
