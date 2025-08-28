import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen text-center px-6"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-800">Aaron Siu(He/Him)</span>
      </motion.h1>
      <motion.p
        className="mt-6 text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate student developer who loves building interactive and
        engaging web projects.
      </motion.p>
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button className="px-6 py-2 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
          View Projects
        </button>
        <button className="px-6 py-2 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Contact Me
        </button>
      </motion.div>
    </section>
  );
}
