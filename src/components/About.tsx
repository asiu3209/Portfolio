import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 pb-48 px-8">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-center text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I am a Computer Science student finishing my Bachelors and pursuing a
        Masters at Brooklyn College. I am a developer that works with React,
        Typescript, Javascript, and Java. I am constantly learning new things to
        further advance me knowledge in each programming language, eager to
        sharpen my skills as a developer. I love to collaborate on projects,
        solving challenging problems, and being a leader when possible. Right
        now, I'm looking for opportunities where I can grow as a developer and
        contribute to meaningful projects.
      </motion.p>
    </section>
  );
}
