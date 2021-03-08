import { FaCode, FaServer, FaAndroid } from "react-icons/fa"

// const frontIcon: JSX.Element = <FaCode />
// const myFrontIcon: React.ComponentType

const services: {
  id: number
  title: string
  text: string
}[] = [
  {
    id: 1,
    title: "Front-End Development",
    // icon: <FaCode/>,
    text:
      "I like coding projects from scratch and in the process help you to create your dream website and help your bussiness grow.",
  },
  {
    id: 2,
    title: "Back-End Development",
    // icon: "/assets/server.svg",
    text:
      "As a back-end project I'll help you to develop the API that will serve your website or project. We will connected the front-end of your project to the back-end and a database",
  },
  {
    id: 3,
    title: "Mobile App Development",
    // icon: "/assets/mobile.svg",
    text:
      "I'll will help you develop the logic needed to put your application idea online and it will be available for both, iOS and Android systems.",
  },
]

export default services
