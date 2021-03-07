import { FaHome, FaBookOpen, FaBloggerB } from "react-icons/fa"
import { IoIosContact } from "react-icons/io"

const navLinks: { id: number; text: string; url: string }[] = [
  {
    id: 1,
    text: "Home",
    // icon: <FaHome />,
    url: "/",
  },
  {
    id: 2,
    text: "About",
    // icon: <FaBookOpen />,
    url: "/about",
  },
  {
    id: 3,
    text: "Blog",
    // icon: <FaBloggerB />,
    url: "/blog",
  },
  {
    id: 4,
    text: "Projects",
    // icon: <GrHome/>,
    url: "/projects",
  },
  // {
  //   id: 5,
  //   text: 'resources',
  //   icon: <GrHome/>,
  //   url: '/resources',
  // },
  {
    id: 6,
    text: "Contact",
    // icon: <IoIosContact />,
    url: "/contact",
  },
]

export default navLinks
