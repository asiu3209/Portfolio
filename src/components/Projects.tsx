import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8">
      <motion.h2
        className="pt-24 text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="h-80 bg-gray-900 border border-gray-700 p-6 rounded-2xl"
          >
            <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
            <p className="text-gray-400">
              A brief description of project {i} goes here.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
