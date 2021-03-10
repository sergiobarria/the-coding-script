import React from "react"

import Project from "./Project"

interface Props {
  projects: {}[]
}

export default function ProjectsPreview({ projects }: Props) {
  return (
    <div className="grid w-11/12 max-w-screen-xl grid-cols-12 gap-8 mx-auto">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  )
}
