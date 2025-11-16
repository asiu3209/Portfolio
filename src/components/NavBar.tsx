import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(17, 24, 39, 0)", "rgba(17, 24, 39, 0.95)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          AS
        </motion.h1>

        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Extracurricular", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white transition-colors group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            )
          )}
          <a
            href="https://github.com/asiu3209"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            GitHub →
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-900/95 backdrop-blur-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {["Home", "About", "Extracurricular", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            )
          )}
        </motion.div>
      )}
    </motion.nav>
  );
}
