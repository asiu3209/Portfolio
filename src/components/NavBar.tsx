import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-end items-center px-8 py-4 backdrop-blur-md z-50">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-left">Aaron Siu's Portfolio</h1>
      </div>
      <div className="flex space-x-12 text-lg">
        <Link
          to="hero"
          smooth={true}
          duration={600}
          className="font-bold cursor-pointer hover:text-blue-500"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={600}
          className="font-bold cursor-pointer hover:text-blue-500"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={600}
          className="font-bold cursor-pointer hover:text-blue-500"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={600}
          className="font-bold cursor-pointer hover:text-blue-500"
        >
          Contact
        </Link>
        <a
          href="https://github.com/asiu3209"
          target="_blank"
          className="font-bold cursor-pointer hover:text-blue-500"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
