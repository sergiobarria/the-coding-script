export default function Footer(): JSX.Element {
  return (
    <footer className="grid items-center tracking-widest text-center text-white bg-gray-900 h-36">
      <div className="max-w-3xl mx-auto">
        {/* <SocialLinks /> */}
        <h4>&copy; Copyright {new Date().getFullYear()}</h4>
        <h4>
          All rights reserved. Built with{" "}
          <span className="font-semibold text-yellow-400">
            <a href="https://www.nextjs.org">Next js</a>
          </span>{" "}
          and Sanity.io
        </h4>
      </div>
    </footer>
  )
}
