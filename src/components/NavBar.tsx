import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#extracurricular" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(9, 9, 11, 0)", "rgba(9, 9, 11, 0.85)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    if (!isOpen) return;
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.08]"
      />

      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-white hover:text-orange-400 transition-colors"
        >
          Aaron Siu
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/asiu3209"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm !py-2 !px-4"
          >
            GitHub
          </a>
        </div>

        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden border-t border-white/[0.08] bg-zinc-950/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.2 }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-6 py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/asiu3209"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-3 text-sm text-orange-400 hover:text-orange-300"
            onClick={() => setIsOpen(false)}
          >
            GitHub
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
