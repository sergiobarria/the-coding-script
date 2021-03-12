import React from "react"

import Title from "@/components/UI/Title"
import ProjectsPreview from "@/components/projects/ProjectsPreview"

import sanityClient from "../../lib/sanity/config"
import { getAllProjects } from "../../lib/sanity/queries"

interface Props {
  projects: {}[]
}

export default function Projects({ projects }: Props) {
  // console.log(projects)

  return (
    <>
      <section className="py-10 mt-20 min-h-screen-center">
        <Title title="All Projects" />
        <ProjectsPreview projects={projects} />
      </section>
    </>
  )
}

export async function getStaticProps() {
  const allProjects = await sanityClient.fetch(getAllProjects)

  return {
    props: {
      projects: allProjects,
    },
    // revalidate: 600,
  }
}
