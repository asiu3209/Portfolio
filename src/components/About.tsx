import { motion } from "framer-motion";
import { RESUME_URL } from "../constants";

export default function About() {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Java",
    "AWS",
    "Node.js",
    "Next.js",
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label">About</span>
          <h2 className="section-title mb-4">A bit about me</h2>
          <p className="section-subtitle">
            Computer Science student with a passion for building clean,
            purposeful software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">My Journey</h3>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I'm a Computer Science student completing my Bachelor's and
                pursuing a Master's at Brooklyn College. As a developer
                specializing in React, TypeScript, JavaScript, and Java, I'm
                constantly pushing myself to learn and grow.
              </p>
              <p>
                I thrive on collaboration, love solving challenging problems,
                and naturally step into leadership roles. Currently seeking
                opportunities where I can contribute to meaningful projects
                while continuing to develop my skills.
              </p>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
              >
                View my resume
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-8"
          >
            <h3 className="text-lg font-semibold mb-6 text-white">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
