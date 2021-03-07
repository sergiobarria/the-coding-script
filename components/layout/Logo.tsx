import Image from "next/image"

export default function Logo(): JSX.Element {
  return (
    <div>
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={180}
        height={100}
        // layout="fill"
      />
    </div>
  )
}
