import React from "react"

interface Props {
  title: string
  color?: string
}

export default function Title({ color, title }: Props): JSX.Element {
  return (
    <div className="mb-10 text-center capitalize">
      <h2
        className={`max-w-xs w-1/2 mx-auto text-4xl font-semibold transform my-gradient -skew-y-2 text-${
          color ? color : ""
        } font-normal`}
      >
        {title || "Default Title"}
      </h2>
    </div>
  )
}
