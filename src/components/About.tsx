import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "Java", level: 85 },
    { name: "AWS", level: 75 },
    { name: "Node.js", level: 80 },
    { name: "Next.js", level: 75 },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-6 text-center">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a Computer Science student completing my Bachelor's and
                pursuing a Master's at Brooklyn College. As a developer
                specializing in React, TypeScript, JavaScript, and Java, I'm
                constantly pushing myself to learn and grow.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I thrive on collaboration, love solving challenging problems,
                and naturally step into leadership roles. Currently seeking
                opportunities where I can contribute to meaningful projects
                while continuing to develop my skills.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
