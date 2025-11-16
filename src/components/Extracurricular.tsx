import { motion } from "framer-motion";

export default function Extracurricular() {
  const achievements = [
    {
      title: "Team Captain",
      description:
        "Led team through challenging seasons, fostering unity and driving performance improvements",
      year: "2023-Present",
    },
    {
      title: "Leadership Under Pressure",
      description:
        "Developed crucial decision-making skills and team coordination in high-stakes situations",
      year: "Ongoing",
    },
    {
      title: "Discipline & Dedication",
      description:
        "Balanced rigorous athletic training with academic excellence in Computer Science",
      year: "Daily",
    },
    {
      title: "Team Building",
      description:
        "Created inclusive environment where every team member felt valued and motivated",
      year: "2022-Present",
    },
  ];

  const skills = [
    "Leadership",
    "Strategic Thinking",
    "Communication",
    "Time Management",
    "Resilience",
    "Mentorship",
  ];

  return (
    <section
      id="extracurricular"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Athletic{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The lessons I've learned on the court have shaped me into a better
            developer and team player
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <span className="text-sm text-purple-400 font-semibold">
                  {item.year}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transferable Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Transferable Skills from Athletics
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-semibold hover:border-purple-500 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
